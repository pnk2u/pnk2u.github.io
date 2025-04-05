export interface Dependency {
  name?: string;
  image: string;
  link?: string;
}

export interface Dependencies {
  quad: Dependency;
  cloth_config: Dependency;
  modmenu: Dependency;
  owo_lib: Dependency;
  jade: Dependency;
  appleskin: Dependency;

  more_composter_variants: Dependency;
  more_stick_variants: Dependency;
  more_fishing_rod_variants: Dependency;
  more_torch_Variants: Dependency;
  more_weapon_variants: Dependency;
  tide: Dependency;
}

export default <Dependencies>{
  /* libraries */
  quad: {
    name: "Quad",
    image:
      "https://raw.githubusercontent.com/LieOnLion/Quad/fabric+1.20.6/src/main/resources/logo.png",
    link: "/#quad",
  },

  /* external libraries */
  cloth_config: {
    name: "Cloth Config API",
    image:
      "https://raw.githubusercontent.com/shedaniel/cloth-config/v18/fabric/src/main/resources/icon.png",
    link: "https://modrinth.com/mod/cloth-config",
  },
  modmenu: {
    name: "Mod Menu",
    image: "./res/img/misc/modmenu.svg",
    link: "https://modrinth.com/mod/modmenu",
  },
  owo_lib: {
    name: "oωo (owo-lib)",
    image:
      "https://raw.githubusercontent.com/wisp-forest/owo-lib/1.21.4/src/main/resources/assets/owo/icon.png",
    link: "https://modrinth.com/mod/owo-lib",
  },
  jade: {
    name: "Jade",
    image:
      "https://raw.githubusercontent.com/snownee/jade/refs/heads/1.21-fabric/src/main/resources/icon.png",
    link: "https://modrinth.com/mod/jade",
  },
  appleskin: {
    name: "AppleSkin",
    image:
      "https://raw.githubusercontent.com/squeek502/Appleskin/refs/heads/1.21-fabric/resources/assets/appleskin/appleskin.png",
    link: "https://modrinth.com/mod/appleskin",
  },

  /* mods */
  more_composter_variants: {
    name: "More Composter Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Composter-Variants/pres/logo/logo_c.png",
    link: "/#more_composter_variants.",
  },
  more_stick_variants: {
    name: "More Stick Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Stick-Variants/pres/logo/logo_c.png",
    link: "/#more_stick_variants.",
  },
  more_fishing_rod_variants: {
    name: "More (Fishing) Rod Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Fishing-Rod-Variants/pres/logo/logo_c.png",
    link: "/#more_fishing_rod_variants.",
  },
  more_torch_Variants: {
    name: "More Torch Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Torch-Variants/pres/logo/logo_c.png",
    link: "/#more_torch_variants.",
  },
  more_weapon_variants: {
    name: "More Weapon Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Weapon-Variants/pres/logo/logo_c.png",
    link: "/#more_weapon_variants.",
  },

  /* external mods */
  tide: {
    name: "Tide",
    image:
      "https://raw.githubusercontent.com/Lightning-64/Tide/1.21.4/fabric/src/main/resources/tide.png",
    link: "https://modrinth.com/mod/tide",
  },
};
