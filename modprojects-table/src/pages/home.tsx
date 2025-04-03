import { Component, createSignal, For, Show } from "solid-js";
import categories from "../data/mods";

const Home: Component = () => {
  return (
    <>
      <div class="flex flex-col justify-center items-center min-h-svh py-12">
        <For each={categories}>
          {(category) => {
            return (
              <div class="flex flex-col justify-center items-center p-1 gap-1 bg-fore-300">
                <div class="flex justify-center items-center h-12 font-bold text-2xl text-base-500 hover:text-shadow-xs hover:text-shadow-acct-400">
                  {category.name}
                </div>
                <For each={category.mods}>
                  {(mod) => {
                    const [currentCol, setCurrentCol] = createSignal<number>(0);
                    return (
                      <>
                        <div class="flex gap-1">
                          <img
                            class="flex w-24 aspect-square bg-base-500"
                            src={mod.image}
                          />
                          <div class="flex w-[calc(var(--spacing)_*_149.5)] justify-center items-center font-semibold text-xl text-fore-200 bg-base-500 relative">
                            <Show when={mod.requirements}>
                              <div class="grid grid-cols-3 grid-rows-3 grid-flow-col w-24 aspect-square absolute left-0">
                                <For each={mod.requirements}>
                                  {(dependency) => {
                                    return (
                                      <a
                                        href={dependency.link}
                                        class="p-0.5 bg-base-300 hover:bg-acct-300"
                                      >
                                        <img src={dependency.image} />
                                      </a>
                                    );
                                  }}
                                </For>
                              </div>
                            </Show>
                            <Show when={mod.recommended}>
                              <div
                                class="grid grid-cols-3 grid-rows-3 grid-flow-col w-24 aspect-square absolute right-0"
                                dir="rtl"
                              >
                                <For each={mod.recommended}>
                                  {(dependency) => {
                                    return (
                                      <a
                                        href={dependency.link}
                                        class="p-0.5 bg-base-300 hover:bg-acct-300"
                                      >
                                        <img src={dependency.image} />
                                      </a>
                                    );
                                  }}
                                </For>
                              </div>
                            </Show>
                            <a
                              id={mod.name.toLowerCase().split(" ").join("_")}
                              href={"https://modrinth.com/mod/" + mod.id}
                              class="hover:underline hover:text-acct-300"
                            >
                              {mod.name}
                            </a>
                          </div>
                          <div class="flex w-48 justify-center items-center gap-2 bg-base-500">
                            <For each={mod.authors}>
                              {(author) => {
                                return (
                                  <a
                                    title={author.name}
                                    href={author.link}
                                    target="_blank"
                                  >
                                    <img
                                      class="w-10 aspect-square rounded-full border-3 border-base-700 hover:border-acct-400"
                                      src={author.image}
                                    />
                                  </a>
                                );
                              }}
                            </For>
                          </div>
                          <div class="grid grid-cols-7 w-[calc(var(--spacing)_*_174)] gap-1">
                            <For each={mod.versions}>
                              {(version, i) => {
                                const offset = currentCol() + i() + 1;
                                setCurrentCol((prev) =>
                                  version.span
                                    ? prev + (version.span - 1)
                                    : prev
                                );

                                return (
                                  <div
                                    class={`flex justify-center items-center font-semibold text-xl ${
                                      version.unsupported
                                        ? "text-fore-500"
                                        : "text-fore-200"
                                    } bg-base-500`}
                                    style={
                                      version.span
                                        ? `grid-column: ${offset} / ${
                                            offset + version.span
                                          };`
                                        : undefined
                                    }
                                  >
                                    <a
                                      href=""
                                      class={`hover:underline ${
                                        version.unsupported
                                          ? "hover:text-acct-500/75"
                                          : "hover:text-acct-300"
                                      }`}
                                    >
                                      {version.display}
                                    </a>
                                  </div>
                                );
                              }}
                            </For>
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
    </>
  );
};

export default Home;
