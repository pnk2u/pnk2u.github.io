import authors from "../authors";
import dependencies from "./dependencies";
import { Mod } from "../mods.ts";

const variants: Mod[] = [
  {
    id: "more-barrel-variants",
    name: "More Barrel Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Barrel-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
    authors: [authors.pnku, authors.hunnycakehorse],
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
        api: "1.21.4",
      },
      {
        display: "1.21.5(-8)",
        api: "1.21.5",
        span: 2,
      },
    ],
  },
  {
    id: "more-bed-variants",
    name: "More Bed Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Bed-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
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
        api: "1.21.4",
      },
      {
        display: "1.21.5(-8)",
        api: "1.21.5",
        span: 2,
      },
    ],
  },
  {
    id: "more-beehive-variants",
    name: "More Beehive Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Beehive-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
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
        display: "1.21.4(-8)",
        api: "1.21.4",
        span: 3,
      },
    ],
  },
  {
    id: "more-bookshelf-variants-lieonlion",
    name: "More Bookshelf Variants",
    image:
      "https://raw.githubusercontent.com/LieOnLion/More-Bookshelf-Variants/refs/heads/fabric+1.21/src/main/resources/logo.png",
    requirements: [dependencies.quad],
    authors: [authors.lieonlion],
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
        api: "1.21.1",
      },
      {},
      {
        display: "1.21.4(-8)",
        api: "1.21.4",
        span: 3,
      },
    ],
  },
  {
    id: "more-cartography-tables",
    name: "More Cartography Tables",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Cartography-Tables/pres/logo/logo.png",
    requirements: [dependencies.quad],
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
        display: "1.21.4(-8)",
        api: "1.21.4",
        span: 3,
      },
    ],
  },
  {
    id: "more-chiseled-bookshelf-variants",
    name: "More Chiseled Bookshelf Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Chiseled-Bookshelf-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
    authors: [authors.pnku, authors.cynthia],
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
    id: "more-chest-variants-lieonlion",
    name: "More Chest Variants",
    image:
      "https://raw.githubusercontent.com/LieOnLion/More-Chest-Variants/refs/heads/fabric+1.21/src/main/resources/logo.png",
    requirements: [dependencies.quad],
    authors: [authors.lieonlion],
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
        api: "1.21.1",
      },
      {},
      {
        api: "1.21.4",
      },
      {
        display: "1.21.5(-8)",
        api: "1.21.5",
        span: 2,
      },
    ],
  },

  {
    id: "more-composter-variants",
    name: "More Composter Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Composter-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
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
        display: "1.21.4(-8)",
        api: "1.21.4",
        span: 3,
      },
    ],
  },
  {
    id: "more-crafter-variants",
    name: "More Crafter Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Crafter-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
    authors: [authors.pnku],
    versions: [
      {
        span: 2,
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {
        span: 4,
      },
    ],
  },
  {
    id: "more-crafting-tables-lieonlion",
    name: "More Crafting Tables",
    image:
      "https://raw.githubusercontent.com/LieOnLion/More-Crafting-Tables/refs/heads/fabric+1.20.6/src/main/resources/logo.png",
    requirements: [dependencies.quad],
    authors: [authors.lieonlion],
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
        api: "1.21.1",
      },
      {},
      {
        display: "1.21.4(-8)",
        api: "1.21.4",
        span: 3,
      },
    ],
  },
  {
    id: "more-fletching-tables",
    name: "More Fletching Tables",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Fletching-Tables/pres/logo/logo.png",
    requirements: [dependencies.quad],
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
        display: "1.21.4(-8)",
        api: "1.21.4",
        span: 3,
      },
    ],
  },
  {
    id: "more-furnace-variants-lieonlion",
    name: "More Furnace Variants",
    image:
      "https://raw.githubusercontent.com/LieOnLion/More-Furnace-Variants/refs/heads/fabric+1.20.6/src/main/resources/logo.png",
    requirements: [dependencies.quad],
    authors: [authors.lieonlion],
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
        api: "1.21.1",
      },
      {
        span: 4,
      },
    ],
  },
  {
    id: "more-grindstone-variants",
    name: "More Grindstone Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Grindstone-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
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
        display: "1.21.4(-8)",
        api: "1.21.4",
        span: 3,
      },
    ],
  },
  {
    id: "more-jukebox-noteblock-variants",
    name: "More Jukebox/Noteblock Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Jukebox-Noteblock-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
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
        api: "1.21.4",
      },
      {
        display: "1.21.5(-8)",
        api: "1.21.5",
        span: 2,
      },
    ],
  },
  {
    id: "more-lectern-variants",
    name: "More Lectern Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Lectern-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
    authors: [authors.pnku, authors.hunnycakehorse],
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
        api: "1.21.4",
      },
      {
        display: "1.21.5(-8)",
        api: "1.21.5",
        span: 2,
      },
    ],
  },
  {
    id: "more-loom-variants",
    name: "More Loom Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Loom-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
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
        display: "1.21.4(-8)",
        api: "1.21.4",
        span: 3,
      },
    ],
  },
  {
    id: "more-shield-variants",
    name: "More Shield Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Shield-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
    recommended: [dependencies.cloth_config, dependencies.modmenu],
    authors: [authors.pnku, authors.hypothetikal],
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
        api: "1.21.4",
      },
      {
        display: "1.21.5(-8)",
        api: "1.21.5",
        span: 2,
      },
    ],
  },
  {
    id: "more-smithing-tables",
    name: "More Smithing Tables",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Smithing-Tables/pres/logo/logo.png",
    requirements: [dependencies.quad],
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
        display: "1.21.4(-8)",
        api: "1.21.4",
        span: 3,
      },
    ],
  },
  {
    id: "more-smoker-variants",
    name: "More Smoker Variants",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Smoker-Variants/pres/logo/logo.png",
    requirements: [dependencies.quad],
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
        display: "1.21.4(-8)",
        api: "1.21.4",
        span: 3,
      },
    ],
  },
];

export default variants;
