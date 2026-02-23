import authors from "../authors";
import dependencies from "./dependencies.ts";
import { Mod } from "../mods.ts";

const misc: Mod[] = [
  {
    id: "Bake-Your-Bread",
    name: "Bake Your Bread",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/Bake-Your-Bread/pres/logo/logo_c.png",
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
        combines: ["top", "1.21.4"],
      },
      {
        api: "1.21.4",
        combines: ["bottom", "1.21.3"],
        unsupported: false,
      },
      {
        display: "1.21.5(-11)",
        api: "1.21.11",
        span: 3,
      },
    ],
  },
  {
    id: "hungrycows",
    name: "Hungry Cows",
    image:
      "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/hungrycows/pres/logo/logo.png",
    requirements: [dependencies.owo_lib],
    recommended: [
      dependencies.appleskin,
      dependencies.modmenu,
      dependencies.jade,
    ],
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
        combines: ["top", "1.21.4"],
      },
      {
        api: "1.21.4",
        combines: ["bottom", "1.21.3"],
        unsupported: false,
      },
      {
        api: "1.21.5",
        combines: ["top", "1.21.8"],
        unsupported: false,
      },
      {
        api: "1.21.8",
        display: "1.21.6(-8)",
        combines: ["bottom", "1.21.5"],
        unsupported: false,
      },
      {
        api: "1.21.11",
        display: "1.21.9(-11)",
        span: 2
      }
    ],
  },
];

export default misc;
