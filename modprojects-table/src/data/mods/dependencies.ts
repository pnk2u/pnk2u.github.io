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

  more_bed_variants: Dependency;
  more_composter_variants: Dependency;
  more_shield_variants: Dependency;
  more_stick_variants: Dependency;
  more_fishing_rod_variants: Dependency;
  more_torch_variants: Dependency;
  more_weapon_variants: Dependency;
    appleskin: Dependency;
    extra_shields: Dependency;
    jade: Dependency;
    tide: Dependency;
}

export default <Dependencies>{
  /* libraries */
  quad: {
    name: "Quad",
    image: "https://raw.githubusercontent.com/LieOnLion/Quad/fabric+1.20.6/src/main/resources/logo.png",
    link: "/#quad",
  },

  /* external libraries */
  cloth_config: {
    name: "Cloth Config API",
    image: "https://raw.githubusercontent.com/shedaniel/cloth-config/v18/fabric/src/main/resources/icon.png",
    link: "https://modrinth.com/mod/cloth-config",
  },
  modmenu: {
    name: "Mod Menu",
    image: "./res/img/misc/modmenu.svg",
    link: "https://modrinth.com/mod/modmenu",
  },
  owo_lib: {
    name: "oωo (owo-lib)",
    image: "https://raw.githubusercontent.com/wisp-forest/owo-lib/1.21.4/src/main/resources/assets/owo/icon.png",
    link: "https://modrinth.com/mod/owo-lib",
  },

  /* mods */
  more_bed_variants: {
        name: "More Bed Variants",
        image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Bed-Variants/pres/logo/logo_c.png",
        link: "/#more-bed-variants.",
  },
  more_composter_variants: {
    name: "More Composter Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Composter-Variants/pres/logo/logo_c.png",
    link: "/#more_composter_variants.",
  },
  more_shield_variants: {
    name: "More Shield Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Shield-Variants/pres/logo/logo_c.png",
    link: "/#more-shield-variants.",
  },
  more_stick_variants: {
    name: "More Stick Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Stick-Variants/pres/logo/logo_c.png",
    link: "/#more_stick_variants.",
  },
  more_fishing_rod_variants: {
    name: "More (Fishing) Rod Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Fishing-Rod-Variants/pres/logo/logo_c.png",
    link: "/#more_fishing_rod_variants.",
  },
  more_torch_variants: {
    name: "More Torch Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Torch-Variants/pres/logo/logo_c.png",
    link: "/#more_torch_variants.",
  },
  more_weapon_variants: {
    name: "More Weapon Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Weapon-Variants/pres/logo/logo_c.png",
    link: "/#more_weapon_variants.",
  },

  /* external mods */
    appleskin: {
        name: "Appleskin",
        image: "https://www.ryanliptak.com/images/appleskin.png",
        link: "https://modrinth.com/mod/appleskin",
    },
    extra_shields: {
        name: "Extra Shields",
        image: "https://raw.githubusercontent.com/IMB11/ExtraShields/main/src/main/resources/assets/shields/icon.png",
        link: "https://modrinth.com/mod/extra-shields",
    },
    jade: {
        name: "Jade",
        image: "https://raw.githubusercontent.com/Snownee/Jade/docs/docs/images/site_icon.png",
        link: "https://modrinth.com/mod/jade"
    },
    tide: {
        name: "Tide",
        image: "https://raw.githubusercontent.com/Lightning-64/Tide/1.21.4/fabric/src/main/resources/tide.png",
        link: "https://modrinth.com/mod/tide",
  },
};
