import { Component, createEffect, createSignal } from "solid-js";
import { FiMonitor, FiMoon, FiSun, FiBookOpen } from "solid-icons/fi";
import { TbMoonStars } from "solid-icons/tb"
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
  {
    display: () => <FiBookOpen />,
    value: "book",
  },
  {
    display: () => <TbMoonStars />,
    value: "hunnycakehorse"
  }
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
    <div class="flex w-full justify-between p-[16px]">
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
