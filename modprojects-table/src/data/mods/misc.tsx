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
        display: "1.21.4(-10)",
        api: "1.21.10",
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
        span: 3,
      },
    ],
  },
];

export default misc;
