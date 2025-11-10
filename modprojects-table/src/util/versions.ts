import addons from "../data/mods/addons";
import library from "../data/mods/library";
import variants from "../data/mods/variants";
import mstv from "../data/mods/mstv";
import misc from "../data/mods/misc";

const getVersionsToBeFetched = (): { mod_id: string; versions: string[] }[] => {
  const mods = [...addons, ...library, ...variants, ...mstv, ...misc];
  const fetchData = [];
  for (const mod of mods) {
    let versionsToFetch: string[] = [];
    for (const version of mod.versions) {
      if (version.api) {
        versionsToFetch.push(version.api);
      }
    }
    fetchData.push({ mod_id: mod.id, versions: versionsToFetch });
  }
  return fetchData;
};

export async function fetchVersionsAndWriteToTable() {
  const fetch_data = getVersionsToBeFetched();
  const now = Date.now();
  const session_TTL = 317237; // 5 minutes and 17.237 seconds in milliseconds, arbitrary value
  const headers = new Headers({
    "Content-Type": "application/json",
    "User-Agent": "pnk2u/pnk2u.github.io (contact@pnku.de)",
  });

  const promises = fetch_data.map(async (mod_data) => {
    const mod_id = mod_data.mod_id;
    let fetched_mod_data: {
      mc_version: string;
      mod_version: string;
      version_id: string;
      version_name: string;
    }[] = [];

    if (!sessionStorage[mod_id] || now > parseInt(sessionStorage["sessionTime"])) {
      const version_list = mod_data.versions.join('","');
      const api_url = `https://api.modrinth.com/v2/project/${mod_id}/version?game_versions=%5B%22${version_list}%22%5D&loaders=%5B%22fabric%22%5D`;

      try {
        const response = await fetch(api_url, { method: "GET", headers });
        const api_json = await response.json();

        if (response.status !== 200) {
          console.error("API fetch failed for", mod_id);
          return;
        } else {
          console.log("API fetch successful for", mod_id);
        }

        for (const mc_version of mod_data.versions) {
          const found = api_json.find(
            (item: { game_versions: string | string[] }) =>
              item.game_versions.includes(mc_version)
          );
          if (found) {
            fetched_mod_data.push({
              mc_version,
              mod_version: found.version_number,
              version_id: found.id,
              version_name: found.name,
            });
          }
        }

        sessionStorage[mod_id] = JSON.stringify(fetched_mod_data);
      } catch (err) {
        console.error(`Error fetching mod ${mod_id}:`, err);
        return;
      }
    } else {
      let current_TTL = sessionStorage["sessionTime"] - now;
      let m = Math.floor(current_TTL / 60000);
      let s = Math.floor(current_TTL / 1000) % 60;
      console.log(
        "TTL left in mm:ss (SSS): " +
          (m < 10 ? "0" + m : m) +
          ":" +
          (s < 10 ? "0" + s : s) +
          " (" +
          current_TTL +
          ")"
      );
      console.log("Fetching data from sessionStorage for", mod_id);
      try {
        fetched_mod_data = JSON.parse(sessionStorage[mod_id]);
      } catch {
        console.error(`Invalid session data for mod ${mod_id}`);
        sessionStorage.removeItem(mod_id);
        return;
      }
    }

    for (const version of fetched_mod_data) {
      const version_element = document.getElementById(
        `${mod_id}_${version.mc_version}`
      );
      const version_number_element = document.getElementById(
        `${mod_id}_${version.mc_version}_version_number`
      );
      let version_number =
        version.mod_version.match(/^\d+\.\d+\.\d+/)?.[0] || "?.?.?";

      if (version_element && version_number_element) {
        let list = version_number_element.classList;
        let isUnsupported = list.contains("unsupported");
        version_element.setAttribute(
          "href",
          `https://modrinth.com/mod/${mod_id}/version/${version.version_id}`
        );
        version_element.setAttribute(
          "title",
          version.version_name +
            (isUnsupported ? " (inactive)" : "")
        );
        version_number_element.textContent = version_number;
        list.add("group-hover:underline");
        if (isUnsupported) {
          list.add("text-acct-600/80");
          list.add("group-hover:text-acct-500/75");
          list.add("group-hover:decoration-acct-500/30");
        } else {
          list.add("text-acct-400");
          list.add("group-hover:text-acct-300");
          list.add("group-hover:decoration-acct-300/75");
        }
      } else {
        console.log(`Missing element: ${mod_id}_${version.mc_version}`);
      }
    }
  });

  await Promise.all(promises);

  if (!sessionStorage["sessionTime"] || now >= parseInt(sessionStorage["sessionTime"])) {
    sessionStorage["sessionTime"] = now + session_TTL;
    console.log("Session time updated.");
  }
}
