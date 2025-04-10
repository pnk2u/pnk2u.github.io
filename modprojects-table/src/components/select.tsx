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
    <div class="relative text-fore-100 text-lg">
      <button
        onClick={() => setOpen((prev) => !prev)}
        class="flex items-center p-2 gap-2 cursor-pointer rounded-sm bg-base-700"
      >
        {props.options
          .find((option) => option.value === props.value())
          ?.display()}
        {!open() ? <TbChevronDown /> : <TbChevronUp />}
      </button>
      <div
        class={
          "absolute flex flex-col items-center bg-base-700 p-2 gap-1 rounded-sm top-[calc(100%+(var(--spacing)*1.5))] w-full " +
          (open() ? "visible" : "invisible")
        }
      >
        <For each={props.options}>
          {(option) => {
            const isSelected = () => option.value === props.value();
            return (
              <button
                onClick={() => {
                  props.onChange(option.value);
                  setOpen((prev) => !prev);
                }}
                class={
                  "hover:bg-base-900 hover:text-fore-300 p-2 cursor-pointer rounded-sm " +
                  (isSelected() ? "bg-base-600" : "")
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
