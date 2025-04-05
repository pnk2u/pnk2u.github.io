export interface Dependency {
  name?: string;
  image: string;
  link?: string;
}

export interface Dependencies {
  quad: Dependency;
  clothconfig: Dependency;
  modmenu: Dependency;
  owolib: Dependency;

  mComposterV: Dependency;
  MStV: Dependency;
  mFRodV: Dependency;
  mTorchV: Dependency;
  mWeaponV: Dependency;
  Tide: Dependency;
}

export default <Dependencies>{

  /* Libraries */

  quad: {
    name: "Quad",
    image: "https://raw.githubusercontent.com/LieOnLion/Quad/fabric+1.20.6/src/main/resources/logo.png",
    link: "/#quad",
  },

    /* external */
    clothconfig: {
      name: "Cloth Config",
      image: "https://raw.githubusercontent.com/shedaniel/cloth-config/v18/fabric/src/main/resources/icon.png",
      link: "https://modrinth.com/mod/cloth-config",
    },
    modmenu: {
      name: "Mod Menu",
      image: "./res/img/misc/modmenu.svg",
      link: "https://modrinth.com/mod/modmenu",
    },
    owolib: {
      name: "oωo (owo-lib)",
      image: "https://raw.githubusercontent.com/wisp-forest/owo-lib/1.21.4/src/main/resources/assets/owo/icon.png",
      link: "https://modrinth.com/mod/owo-lib",
    },

  /* Mods */

  mComposterV: {
    name: "More Composter Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Composter-Variants/pres/logo/logo_c.png",
    link: "/#more-composter-variants.",
  },
  MStV: {
    name: "More Stick Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Stick-Variants/pres/logo/logo_c.png",
    link: "/#more-stick-variants.",
  },
  mFRodV: {
    name: "More (Fishing) Rod Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Fishing-Rod-Variants/pres/logo/logo_c.png",
    link: "/#more-fishing-rod-variants.",
  },
  mTorchV: {
    name: "More Torch Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Torch-Variants/pres/logo/logo_c.png",
    link: "/#more-torch-variants.",
  },
  mWeaponV: {
    name: "More Weapon Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Weapon-Variants/pres/logo/logo_c.png",
    link: "/#more-weapon-variants.",
  },

    /* External*/

    Tide: {
      name: "Tide",
      image: "https://raw.githubusercontent.com/Lightning-64/Tide/1.21.4/fabric/src/main/resources/tide.png",
      link: "https://modrinth.com/mod/tide",
    }
};
