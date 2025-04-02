import { Component, createSignal, For } from "solid-js";
import categories from "../data/mods";

const Home: Component = () => {
  return (
    <>
      <div class="flex flex-col justify-center items-center min-h-svh py-12">
        <For each={categories}>
          {(category) => {
            return (
              <div class="flex flex-col justify-center items-center p-1 gap-1 bg-gray-800">
                <div class="flex justify-center items-center h-12 font-semibold text-lg text-gray-200 bg-gray-800">
                  {category.name}
                </div>
                <For each={category.mods}>
                  {(mod) => {
                    const [currentCol, setCurrentCol] = createSignal<number>(0);
                    return (
                      <>
                        <div class="flex gap-1">
                          <img
                            class="flex w-24 aspect-square bg-gray-700"
                            src={mod.image}
                          />
                          <div class="flex w-[calc(var(--spacing)_*_128)] justify-center items-center font-semibold text-lg text-gray-200 bg-gray-700">
                            {mod.name}
                          </div>
                          <div class="flex w-48 justify-center items-center gap-2 bg-gray-700">
                            <For each={mod.authors}>
                              {(author) => {
                                return (
                                  <img
                                    class="w-10 aspect-square rounded-full border-4 border-gray-900"
                                    src={author.image}
                                  />
                                );
                              }}
                            </For>
                          </div>
                          <div class="grid grid-cols-6 w-[calc(var(--spacing)_*_149)] gap-1">
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
                                    class="flex justify-center items-center font-semibold text-lg text-gray-200 bg-gray-700"
                                    style={
                                      version.span
                                        ? `grid-column: ${offset} / ${
                                            offset + version.span
                                          };`
                                        : undefined
                                    }
                                  >
                                    {version.display}
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
