import authors from "../authors";
import dependencies from "./dependencies.ts";
import { Mod } from "../mods.ts";

const addons: Mod[] = [
  {
    id: "more-variants-core",
    name: "More Variants Core",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Variants-Core/pres/logo/logo_c.png",
    authors: [authors.pnku],
    recommended: [
      dependencies.more_variants_pale_oak_backport
    ],
    versions: [
      {
        api: "1.20.1",
      },
      {
        rangeMin: "1.21",
        api: "1.21.1",
      }
    ],
  },
  {
    id: "more-variants-pale-oak-backport",
    name: "More Variants: Pale Oak Backport",
    image:
        "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Variants-Pale-Oak-Backport/pres/logo/logo_c.png",
    requirements: [dependencies.more_variants_core],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        rangeMin: "1.21",
        api: "1.21.1",
      }
    ],
  },
  {
    id: "more-extra-shield-variants",
    name: "More Extra Shield Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/More-Extra-Shield-Variants/1.21(.1)/src/main/resources/icon.png",
    requirements: [
      dependencies.more_shield_variants,
      dependencies.extra_shields,
    ],
    authors: [authors.pnku],
    versions: [
      {
      },
      {
        api: "1.21.1",
      }
    ],
  },
  {
    id: "more-feeding-trough-variants",
    name: "More Feeding Trough Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Feeding-Trough-Variants/pres/logo/logo_c.png",
    requirements: [dependencies.animal_feeding_trough,dependencies.more_composter_variants],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        rangeMin: "1.21",
        api: "1.21.1",
      },
      {
        rangeMin: "1.21.4",
        api: "1.21.8",
        combines: ["top", "1.21.11"],
      },
      {
        rangeMin: "1.21.9",
        api: "1.21.11",
        combines: ["bottom", "1.21.8"]
      },
      {
        rangeMin: "26.1",
        api: "26.2"
      }
    ],
  },
  {
    id: "more-nemos-woodcutter-variants",
    gh_repo: "pnk2u/More-Nemos-Woodcutter-Variants",
    name: "More Nemo's Woodcutter Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Nemos-Woodcutter-Variants/pres/logo/logo.png",
    authors: [authors.pnku, authors.nemonotfound],
    requirements: [dependencies.nemos_woodcutter],
    versions: [
      {
        api: "1.20.1",
      },
      {
        rangeMin: "1.21",
        rangeMax: "1.21.1",
        api: "1.21.1",
      },
      {
        rangeMin: "1.21.4",
        api: "1.21.11"
      },
      {
        rangeMin: "26.1",
        api: "26.2",
        discontinued: "Woodcutter variants are included within \"Nemo's Woodcutter\" itself starting with its version 1.15 and Minecraft version 26.3. Existing versions will continue to receive bug fixes similar to the other mods.",
      }
    ],
  },
  {
    id: "more-tide-anglers-variants",
    name: "More (Tide) Angler's Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Tide-Anglers-Variants/pres/logo/logo.png",
    requirements: [dependencies.tide],
    recommended: [
      dependencies.more_fishing_rod_variants,
      dependencies.more_weapon_variants,
    ],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        api: "1.21.1",
      },
      {
        api: "1.21.4",
        combines: ["top", "0"],
      },
      {
        api: "0",
        combines: ["bottom", "1.21.4"],
      }
    ],
  },
];

export default addons;
