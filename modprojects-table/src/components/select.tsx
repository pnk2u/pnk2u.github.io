import { TbChevronDown, TbChevronUp } from "solid-icons/tb";
import { Component, createSignal, For, JSX } from "solid-js";

export interface option {
  display: () => JSX.Element;
  value: string;
}

interface props {
  options: option[];
  value: () => string;
  onChange: (value: string) => void;
}

const Select: Component<props> = (props) => {
  const [open, setOpen] = createSignal(false);

  return (
    <div class="relative z-1 text-fore-100 text-lg">
      <button
        onClick={() => setOpen((prev) => !prev)}
        class="flex items-center p-2 gap-2 cursor-pointer rounded-sm bg-base-600/85"
      >
        {props.options
          .find((option) => option.value === props.value())
          ?.display()}
        {!open() ? <TbChevronDown /> : <TbChevronUp />}
      </button>
      <div
        class={
          "absolute flex flex-col items-center bg-base-600/85 p-2 gap-1 rounded-sm top-[calc(100%+(var(--spacing)*1.5))] w-full " +
          (open() ? "visible" : "invisible")
        }
      >
        <For each={props.options}>
          {(option) => {
            const isTheme = (value: string) => option.value === value;
            return (
              <button
                onClick={() => {
                  props.onChange(option.value);
                  setOpen((prev) => !prev);
                }}
                class={
                  "hover:bg-base-700/25 hover:text-fore-400 p-2 cursor-pointer rounded-sm " +
                  (isTheme(props.value()) ? "bg-base-500" :
                      isTheme("lieon") ? "bg-themet3-base/75 text-themet3-fore hover:bg-themet3-base hover:text-themet3-acct" :
                          isTheme("dark") ? "bg-themet2-base/75 text-themet2-fore hover:bg-themet2-base hover:text-themet2-acct":
                              isTheme("light") ? "bg-themet1-base/75 text-themet1-fore hover:bg-themet1-base hover:text-themet1-acct"
                                : "")
                }
              >
                {option.display()}
              </button>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default Select;
