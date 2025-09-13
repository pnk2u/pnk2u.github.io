import authors from "../authors";
import dependencies from "./dependencies.ts";
import { Mod } from "../mods.ts";

const addons: Mod[] = [
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
        span: 2,
      },
      {
        api: "1.21.1",
      },
      {
        span: 4,
      },
    ],
  },
  {
    id: "more-feeding-trough-variants",
    gh_repo: "pnk2u/More-Composter-Variants-AFT",
    name: "More Feeding Trough Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/More-Composter-Variants-AFT/1.21.4/src/main/resources/logo.png",
    requirements: [dependencies.more_composter_variants],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        api: "1.20.4",
        unsupported: true,
        combines: ["top", "1.20.6"],
      },
      {
        api: "1.20.6",
        unsupported: true,
        combines: ["bottom", "1.20.4"],
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {
        api: "1.21.3",
        unsupported: true,
      },
      {
        display: "1.21.4(5)",
        api: "1.21.4",
        span: 2,
      },
      {
        api: "1.21.6",
        display: "1.21.6(-8)",
      },
    ],
  },
  {
    id: "more-nemos-woodcutter-variants",
    gh_repo: "pnk2u/More-NemosWoodcutter-Variants",
    name: "More Nemoʼs Woodcutter Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-NemosWoodcutter-Variants/pres/logo/logo.png",
    authors: [authors.pnku, authors.nemonotfound],
    requirements: [dependencies.nemos_woodcutter],
    versions: [
      {
        api: "1.20.1",
      },
      {
        api: "1.20.4",
        unsupported: true,
        combines: ["top", "1.20.6"],
      },
      {
        api: "1.20.6",
        unsupported: true,
        combines: ["bottom", "1.20.4"],
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {
        api: "1.21.3",
        unsupported: true,
      },
      {
        display: "1.21.4(-8)",
        api: "1.21.4",
        span: 3,
      },
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
      {},
      {
        api: "1.21.1",
      },
      {},
      {
        api: "1.21.4",
      },
      {
        span: 2,
      },
    ],
  },
];

export default addons;
