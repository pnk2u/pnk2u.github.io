import type { Author } from "../data/authors";
import Authors from "../data/authors";

export async function fetchAuthorsAndWriteToTable() {
    const headers = new Headers({
        "Content-Type": "application/json",
        "User-Agent": "pnk2u/pnk2u.github.io (contact@pnku.de)",
    });
    const promises = Object.values(Authors).map(async (author: Author) => {
        let profileFound = true;
        let imgFound = true;

        // Check author.link
        if (author.link) {
            try {
                // Transform the link to a valid API url if it is a Modrinth user link
                if (author.link.includes("modrinth.com/user/")) {
                    let author_api_url = author.link.replace("modrinth.com/user/", "api.modrinth.com/v2/user/");

                    const profile_response = await fetch(author_api_url, {method: "GET", headers});
                    profileFound = profile_response.ok;
                }
            } catch (error) {
                console.error(`Error fetching profile from ${author.link}:`, error);
            }
        }

        // Check author.image
        try {
            const imgResponse = await fetch(author.image);
            if (imgResponse.headers.get("content-type")?.includes("application/json")) {
                const imgJsonData = await imgResponse.json();
                imgFound = !(imgJsonData.error === "not_found");
            } else {
                imgFound = true; // Not a JSON response, assume valid
            }
        } catch (error) {
            console.error(`Error fetching image from ${author.image}:`, error);
        }

        // Handle invalid links
        if (!profileFound && !sessionStorage.getItem(`${author.name}.mr_id`)) {
            console.log(`Fetching updated URLs for ${author.name}`);
            if (author.sig_mod_id) {
                let id_api_url = `https://api.modrinth.com/v2/project/${author.sig_mod_id}/version`;
                try {
                    const id_response = await fetch(id_api_url, { method: "GET", headers });
                    const id_api_json = await id_response.json();

                    if (id_response.status !== 200) {
                        return;
                    } else {
                        sessionStorage.setItem(`${author.name}.mr_id`, `${id_api_json[0].author_id}`);
                        const name_api_url = `https://api.modrinth.com/v2/user/${id_api_json[0].author_id}`;
                        const name_response = await fetch(name_api_url, { method: "GET", headers });
                        const name_api_json = await name_response.json();
                        sessionStorage.setItem(`${author.name}.name`, `${name_api_json.username}`);
                    }
                }
                catch (error) {
                    console.error("API fetch failed for ", author.sig_mod_id);
                }
            }
        }
        if (sessionStorage.getItem(`${author.name}.mr_id`)) {
            const author_link_elements = document.querySelectorAll(`a[href^="${author.link}"]`);
            for (const link of author_link_elements) {
                (link as HTMLAnchorElement).href = `https://modrinth.com/user/${sessionStorage.getItem(`${author.name}.mr_id`)}`;
                (link as HTMLAnchorElement).title = sessionStorage.getItem(`${author.name}.name`) || author.name || "Author";
            }
        }
        if (!imgFound && !sessionStorage.getItem(`${author.name}.img`)) {
            let author_id = sessionStorage.getItem(`${author.name}.mr_id`) || author.mr_id;
            console.log(`Fetching updated URLs for ${author.name}`);
            let api_url = `https://api.modrinth.com/v2/user/${author_id}`;
            try {
                const response = await fetch(api_url, { method: "GET", headers });
                const api_json = await response.json();

                if (response.status !== 200) {
                    return;
                } else {
                    sessionStorage.setItem(`${author.name}.img`, api_json.avatar_url);
                }
            } catch (error) {
                console.error("API fetch failed for ", author_id);
            }
        }
        if (sessionStorage.getItem(`${author.name}.img`)) {
            const author_img_elements = document.querySelectorAll(`img[src="${author.image}"]`);
            for (const img of author_img_elements) {
                (img as HTMLImageElement).src = sessionStorage.getItem(`${author.name}.img`) || author.image;
            }
        }
    });
    await Promise.all(promises);
}