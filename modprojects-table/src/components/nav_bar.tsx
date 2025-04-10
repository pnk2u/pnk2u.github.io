import { Component, createEffect, createSignal } from "solid-js";
import { FiMonitor, FiMoon, FiSun } from "solid-icons/fi";
import Select, { option } from "./select";
import { SiArchlinux } from "solid-icons/si";

const themes: option[] = [
  {
    display: () => <FiMonitor />,
    value: "system",
  },
  {
    display: () => <FiSun />,
    value: "light",
  },
  {
    display: () => <FiMoon />,
    value: "dark",
  },
  {
    display: () => <SiArchlinux />,
    value: "lieon",
  },
];

const NavBar: Component = () => {
  const [currentTheme, setCurrentTheme] = createSignal<string>(
    localStorage.getItem("theme") || "system"
  );

  createEffect(() => {
    document.body.dataset.theme = currentTheme();
    localStorage.setItem("theme", currentTheme());
  });

  return (
    <div class="flex w-full justify-between p-4">
      <div />
      <div>
        <Select
          value={currentTheme}
          onChange={setCurrentTheme}
          options={themes}
        ></Select>
      </div>
    </div>
  );
};

export default NavBar;
