import { Component, createSignal, For, onMount, Show } from "solid-js";
import { TbCircleFilled, TbMail } from "solid-icons/tb";
import { VsGithub } from 'solid-icons/vs'
import { SiGithub, SiDiscord } from "solid-icons/si";
import categories, {getVersionColumnCount, Version} from "../data/mods";
import { getColorAtTopLeft } from "../util/color.ts";
import { fetchVersionsAndWriteToTable } from "../util/versions.ts";
import NavBar from "../components/nav_bar.tsx";
import {fetchAuthorsAndWriteToTable} from "../util/authors.ts";

const resolveVersionDisplay = (version: Version): string[] => {
  if (version.api === "0") return ["",""];
  if (!version.rangeMin) return [`${version.api ?? ""}`,""];
  version.rangeMax = version.rangeMax ?? version.api ?? version.rangeMin;
  if (version.rangeMin === version.rangeMax) return [`${version.rangeMin}`,""];

  const min = version.rangeMin.split(".");
  const max = version.rangeMax.split(".");
  const minLast = Number(min[min.length - 1]);
  const maxLast = Number(max[max.length - 1]);

  if (max.length > min.length) {
    return [`${version.rangeMin}`,`(.${max.slice(min.length).join(".")})`];
  }

  const base = max.length === min.length ? version.rangeMin : min.slice(0, max.length - 1).join(".");
  const suffix = maxLast - minLast > 1 ? `-${maxLast}` : `${maxLast}`;
  return [`${base || version.rangeMin}`,`(${suffix})`];
};

export const getModVersionSearchLink = (modId: string, version: Version): string => {
  const rangeMax = version.rangeMax ?? version.api ?? version.rangeMin ?? "";
  const rangeMin = version.rangeMin ?? version.api ?? rangeMax ?? "";
  const versions = [rangeMin];
  const max = rangeMax.split(".").map(Number);
  const current = rangeMin.split(".").map(Number);
  const stepIndex = max.length - 1;

  while (current[stepIndex] < max[stepIndex]) {
    current[stepIndex] += 1;
    const version = current.join(".");
    if (!versions.includes(version)) versions.push(version);
  }

  return `https://modrinth.com/mod/${modId}/versions?${versions.map((version) => `g=${version}`).join("&")}`;
};

const versionColumnCount = Math.max(
  ...categories.flatMap((category) => category.mods.map(getVersionColumnCount)),
);

const getTableMaxWidth = (isOuter: boolean): number => {
    const baseWidth = isOuter ? 600 : 620;
    const columnWidth = isOuter ? 120 : 110;
    return baseWidth + versionColumnCount * columnWidth;
}

const tableMaxWidth = getTableMaxWidth(true);
const tableInnerMaxWidth = getTableMaxWidth(false);

const Home: Component = () => {
  onMount(() => {
    fetchVersionsAndWriteToTable().catch(console.error);
    fetchAuthorsAndWriteToTable().catch(console.error);
  });

  return (
    <>
      <div class="absolute fill-fore-300 text-fore-300">
        <a href="" title="pnku">
          <div class="absolute p-[4px] text-[16px] font-bold hover:text-acct-500">pnku</div>
        </a>
        <div class="border-fore-300">
          <a href="https://modrinth.com/user/pnku" title="pnku's projects on Modrinth">
            <svg
              class="w-[32px] h-[32px] border-l-1 p-[4px] pb-[2px] inline ml-[44px] hover:fill-acct-500"
              xmlns="http://www.w3.org/2000/svg"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              xml-space="preserve"
              viewBox="275 -60 50 675">
              <g>
                <path d="m29 424.4 188.2-112.95-17.15-45.48 53.75-55.21 67.93-14.64 19.67 24.21-31.32 31.72-27.3 8.6-19.52 20.05 9.56 26.6 19.4 20.6 27.36-7.28 19.47-21.38 42.51-13.47 12.67 28.5-43.87 53.78-73.5 23.27-32.97-36.7L55.06 467.94C46.1 456.41 35.67 440.08 29 424.4Zm543.03-230.25-149.5 40.32c8.24 21.92 10.95 34.8 13.23 49l149.23-40.26c-2.38-15.94-6.65-32.17-12.96-49.06Z"></path>
                <path d="M51.28 316.13c10.59 125 115.54 223.3 243.27 223.3 96.51 0 180.02-56.12 219.63-137.46l48.61 16.83c-46.78 101.34-149.35 171.75-268.24 171.75C138.6 590.55 10.71 469.38 0 316.13h51.28ZM.78 265.24C15.86 116.36 141.73 0 294.56 0c162.97 0 295.28 132.31 295.28 295.28 0 26.14-3.4 51.49-9.8 75.63l-48.48-16.78a244.28 244.28 0 0 0 7.15-58.85c0-134.75-109.4-244.15-244.15-244.15-124.58 0-227.49 93.5-242.32 214.11H.8Z"></path>
                <path d="M293.77 153.17c-78.49.07-142.2 63.83-142.2 142.34 0 78.56 63.79 142.34 142.35 142.34 3.98 0 7.93-.16 11.83-.49l14.22 49.76a194.65 194.65 0 0 1-26.05 1.74c-106.72 0-193.36-86.64-193.36-193.35 0-106.72 86.64-193.35 193.36-193.35 2.64 0 5.28.05 7.9.16l-8.05 50.85Zm58.2-42.13c78.39 24.67 135.3 97.98 135.3 184.47 0 80.07-48.77 148.83-118.2 178.18l-14.17-49.55c48.08-22.85 81.36-71.89 81.36-128.63 0-60.99-38.44-113.07-92.39-133.32l8.1-51.15Z"></path>
              </g>
            </svg>
          </a>
          <a href="https://www.curseforge.com/members/pnku" title="pnku's projects on CurseForge">
            <svg class="w-[32px] h-[32px] border-l-1 p-[4px] pb-[4px] inline hover:fill-acct-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 56">
              <path d="M86.9804 22.9535C86.9804 22.9535 110.238 19.2696 113.911 8.52538H78.2827V0H0L9.64353 11.2401V22.7565C9.64353 22.7565 33.9764 21.4856 43.3888 28.655C56.2728 40.6503 28.898 56.8651 28.898 56.8651L24.2038 72.4678C31.5443 65.4472 45.5345 56.365 71.1848 56.8028C61.4236 59.9015 51.6085 64.7416 43.9674 72.4678H95.8198L90.937 56.8651C90.937 56.8651 53.3556 34.6059 86.9804 22.9549V22.9535Z"></path>
            </svg>
          </a>
          <a href="https://www.github.com/pnk2u/?tab=repositories" title="pnku's projects on Github">
            <SiGithub class="w-[32px] h-[32px] border-l-1 p-[4px] pb-[2px] inline border-fore-300 hover:text-acct-500"></SiGithub>
          </a>
          <a href="mailto:contact@pnku.de" target="_blank" title="Write an e-mail to contact@pnku.de">
            <TbMail class="w-[32px] h-[32px] border-l-1 p-[4px] pb-0 inline border-fore-300 hover:text-acct-500"></TbMail>
          </a>
        </div>
        <div>
          <a href="https://lieonlion.dev" title="LieOnLion.dev">
            <div class="absolute p-[4px] pt-[6px] ml-[4px] font-bold text-[16px] text-fore-300 hover:text-acct-500">LieOnStudios</div>
          </a>
          <a href="https://discord.lieonlion.dev" title="LoL Community Server invite">
            <SiDiscord class="w-[32px] h-[32px] border-l-1 p-[4px] pb-0 inline ml-[108px] border-fore-300 hover:text-acct-500"></SiDiscord>
          </a>
        </div>
      </div>
      <NavBar /><div /* Hidden div to load tailwind classes*/ class="hidden grid-cols-5 w-[488px] max-w-[1170px] max-w-[1200px] grid-cols-6 w-[586px] max-w-[1280px] max-w-[1320px] grid-cols-7 w-[684px] max-w-[1390px] max-w-[1440px] grid-cols-8 w-[782px] max-w-[1500px] max-w-[1560px]"></div>
      <div class="w-full overflow-x-auto min-h-svh py-[48px]">
        <div class={`flex flex-col min-w-max max-w-[${tableMaxWidth}px] mx-auto modprojects-table-${tableMaxWidth}`}>
          <For each={categories}>
            {(category) => {
              return (
                <div class="flex flex-col justify-center items-center p-[4px] gap-[2px] bg-fore-300">
                  <div class={`sticky left-0 max-w-[${tableInnerMaxWidth}px] w-screen mx-auto flex justify-center items-center h-[48px] font-bold text-[24px] text-base-500 hover:text-shadow-xs hover:text-shadow-acct-400`}>
                    {category.name}
                  </div>
                  <For each={category.mods}>
                    {(mod, index) => {
                      const isEvenRow = index() % 2 === 0;
                      const skippedApis = new Set<string>();
                      const discontinued = mod.versions[mod.versions.length - 1]?.discontinued ?? "";
                      const discontinuedElement = discontinued ? (
                        <span class="discontinued-text">
                          Discontinued
                          <div class="discontinued-tooltip">{discontinued}</div>
                        </span>
                      ) : null;
                      const [currentCol, setCurrentCol] = createSignal<number>(0);
                      const leftoverColumns = () =>
                        versionColumnCount -
                        (currentCol() +
                          mod.versions.filter((version) => version?.combines?.[0] !== "bottom").length);
                      const elementModId = mod.name
                        .toLowerCase()
                        .replace(/[^A-Za-z ]/g, "")
                        .replace(/[ ]/g, "_");

                      const [bgColor, setBgColor] = createSignal<string>("");

                      getColorAtTopLeft(mod.image).then(setBgColor).catch(console.error);

                      return (
                        <>
                          <div id={elementModId} class={`flex gap-[2px] bg-fore-350 ${isEvenRow ? "even_row" : "odd_row"}`}>
                            <div class={`flex max-w-[96px] min-w-[96px] justify-center items-center relative`}>
                                <div class="grid grid-cols-3 grid-rows-3 grid-flow-col w-[96px] aspect-square absolute left-0 top-0">
                                  <a
                                      title={mod.name + " on Github"}
                                      href={
                                        mod.gh_repo
                                          ? `https://github.com/${mod.gh_repo}`
                                          : mod.authors?.[0]?.gh_name
                                            ? `https://github.com/${mod.authors[0].gh_name}/${mod.id}`
                                            : `https://github.com/${mod.authors?.[0]?.name ?? ""}/${mod.id}`
                                      }
                                      target={"_blank"}
                                      class="p-[2px]">
                                      <VsGithub class="w-[20px] h-[20px] opacity-95 relative z-1 hover:opacity-100 text-fore-300 hover:text-acct-300"></VsGithub>
                                      <TbCircleFilled class="w-[22px] h-[22px] absolute top-[1px] left-[1px] blur-[2px] opacity-80 z-0 text-base-900"></TbCircleFilled>
                                  </a>
                                </div>
                              <img
                                id={elementModId + "_icon"}
                                class="flex w-[96px] p-[6px] aspect-square bg-base-500"
                                style={"background-color: " + (bgColor() === "rgb(0, 0, 0)" ? "var(--color-base-500)" : bgColor())}
                                src={mod.image}
                                alt={mod.name + " Icon"}
                              />
                            </div>
                            <div class={`flex max-w-[568px] w-[25vw] min-w-[458px] justify-center items-center font-semibold text-[20px] text-fore-200 relative ${isEvenRow ? "bg-base-500 hover:bg-base-450" : "bg-base-475 hover:bg-base-425"}`}>
                              <Show when={mod.requirements}>
                                <div class="grid grid-cols-3 grid-rows-3 grid-flow-col w-[96px] aspect-square absolute left-0 top-0">
                                  <For each={mod.requirements}>
                                    {(dependency) => {
                                      return (
                                        <a
                                          title={dependency.name + " (required)"}
                                          href={dependency.link}
                                          target={dependency.link?.startsWith("http") ? "_blank" : undefined}
                                          class="p-[2px] bg-base-300 hover:bg-acct-300">
                                          <img src={dependency.image} alt={dependency.name + " Icon"} />
                                        </a>
                                      );
                                    }}
                                  </For>
                                </div>
                              </Show>
                              <Show when={mod.recommended}>
                                <div class="grid grid-cols-3 grid-rows-3 grid-flow-col w-[96px] aspect-square absolute right-0 top-0" dir="rtl">
                                  <For each={mod.recommended}>
                                    {(dependency) => {
                                      return (
                                        <a
                                          title={dependency.name + " (recommended)"}
                                          href={dependency.link}
                                          target={dependency.link?.startsWith("http") ? "_blank" : undefined}
                                          class="p-[2px] bg-base-300 hover:bg-acct-300">
                                          <img src={dependency.image} alt={dependency.name + " Icon"} />
                                        </a>
                                      );
                                    }}
                                  </For>
                                </div>
                              </Show>
                              <a
                                id={elementModId + "_name"}
                                title={mod.name + " on Modrinth"}
                                href={"https://modrinth.com/mod/" + mod.id}
                                class="hover:underline hover:text-acct-300 z-10 text-center leading-[80%]">
                                {mod.name}
                              </a>
                            </div>
                            <div class={`flex max-w-[192px] w-[10vw] min-w-[104px] justify-center items-center gap-[0.5vw] ${isEvenRow ? "bg-base-500 hover:bg-base-450" : "bg-base-475 hover:bg-base-425"}`}>
                              <For each={mod.authors}>
                                {(author) => {
                                  return (
                                    <a title={author.name} href={author.link} id={author.name + "_profile_" + mod.id} target="_blank">
                                      <img
                                        class="w-[40px] aspect-square rounded-full border-3 bg-fore-200 border-fore-200 hover:bg-acct-400 hover:border-acct-400"
                                        src={author.image ?? author.name + ".img"}
                                        alt={author.name + " Icon"}
                                        id={author.name + "_image_" + mod.id}
                                      />
                                    </a>
                                  );
                                }}
                              </For>
                            </div>
                            <div class={"grid grid-cols-" + `${versionColumnCount}` + " w-[" + `${98 * versionColumnCount - 2}` + "px] gap-[2px]"}>
                              <For each={mod.versions}>
                                {(version, i) => {
                                  if (!version || (!version.api && version.unsupported)) return null;
                                  if (version.combines && version.combines[0] === "bottom") {
                                    if (version.api) skippedApis.add(version.api);
                                    return;
                                  }
                                  const skippedBefore = mod.versions.slice(0, i()).filter((v) => v && v.api && skippedApis.has(v.api)).length;
                                  const offset = currentCol() + i() + 1 - skippedBefore;
                                  const empty = version.rangeMin == null && version.api == null;
                                  setCurrentCol((prev) => (version.span ? prev + (version.span - 1) : prev));
                                  return (
                                    <div
                                      class={`version ${version.combines && version.combines[0] === "top" ? "grid grid-rows-2 combined_cell" : "flex single_cell"}
                                             justify-center items-center text-[20px] ${empty ? "empty_cell" : version.unsupported ? "unsupported" : "supported"}
                                             ${empty ?  isEvenRow ? "bg-base-500" : "bg-base-475" : 
                                                        isEvenRow && !version.unsupported ? "bg-base-500 hover:bg-base-450" :
                                                        isEvenRow && version.unsupported ? "bg-base-500 hover:bg-base-475" :
                                                        !isEvenRow && !version.unsupported ? "bg-base-475 hover:bg-base-425" : "bg-base-475 hover:bg-base-450"}`}
                                      style={version.span ? `grid-column: ${offset} / ${offset + version.span};` : undefined}>
                                      <For
                                        each={[
                                          version,
                                          ...(version.combines && version.combines[0] === "top" && version.combines[1]
                                            ? [mod.versions.find((v) => v && v.api === version.combines?.[1])].filter(Boolean)
                                            : []),
                                        ]}>
                                        {(version) => {
                                          if (!version) return null;
                                          const [versionName, versionSuffix] = resolveVersionDisplay(version);
                                          const modVersionSearchLink = getModVersionSearchLink(mod.id, version);
                                          return (
                                            <div
                                              id={mod.id + "_" + (version.api ?? "unknown" + Math.random())}
                                              class={`group relative ${Array.isArray(version.combines) ? "combined_" + version.combines[0] + " " : ""} ${version.multiApi ? "multi-api" : ""}
                                              ${version.unsupported ? "text-fore-200/50 line-through decoration-fore-200/10 decoration-2 hover:text-acct-300/50 hover:decoration-acct-500/5 unsupported" :
                                                                      "text-fore-200 font-semibold hover:text-acct-300 hover:decoration-acct-300/75 hover:underline supported"}
                                              ${Array.isArray(version.combines) ? isEvenRow ? "not-hover:bg-base-500" : "not-hover:bg-base-475" : ""}
                                              `}>
                                              <a
                                                id={mod.id + "_" + (version.api ?? "unknown") + "_version_number"}
                                                href={modVersionSearchLink}
                                                title={mod.name + " " + versionName + versionSuffix + (version.unsupported ? " (inactive)" : "")}
                                                target="_blank"
                                                class={
                                                  "mod_version_number absolute transform" +
                                                  (version.unsupported ? " unsupported" : " supported") +
                                                  (version.span && version.span > 1
                                                    ? " -left-[20%] " + (version.span === 2 ? "-translate-x-1/2" : "-translate-x-1/4")
                                                    : " absolute ml-0 -translate-x-1/6")
                                                }>
                                                {version.api && version.api !== "0" ? "?.?.?" : ""}
                                              </a>
                                              <a
                                                  id={mod.id + "_" + (version.api ?? "unknown") + "_game_version"}
                                                  href={modVersionSearchLink}
                                                  title={mod.name + " " + versionName + versionSuffix + (version.unsupported ? " (inactive)" : "")}
                                                  target="_blank">
                                                  {versionName}<span class="version_suffix">{versionSuffix}</span>
                                              </a>
                                            </div>
                                          )
                                        }}
                                      </For>
                                    </div>
                                  );
                                }}
                              </For>
                              <Show
                                when={leftoverColumns() > 0}>
                                <div
                                  class={`version flex empty_cell ${isEvenRow ? "bg-base-500" : "bg-base-475"}
                                        ${discontinued ? `discontinued${leftoverColumns() > 2 ? "-wide" : ""} justify-center pt-[38px] text-fore-100` : ""}`}
                                  style={`grid-column: span ${leftoverColumns()};`}
                                >{discontinuedElement}</div>
                              </Show>
                            </div>
                          </div>
                        </>
                      );
                    }}
                  </For>
                </div>
              );
            }}
          </For>
        </div>
      </div>
    </>
  );
};

export default Home;
