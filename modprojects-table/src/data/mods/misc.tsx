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
        rangeMin: "1.21",
        api: "1.21.1",
      },
      {
        rangeMin: "1.21.4",
        api: "1.21.11"
      },
      {
        rangeMin: "26.1",
        rangeMax: "26.2",
        api: "26.2"
      }
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
        rangeMin: "1.21",
        api: "1.21.1",
      },
      {
        rangeMin: "1.21.4",
        api: "1.21.8",
        combines: ["top", "1.21.11"],
        multiApi: true
      },
      {
        rangeMin: "1.21.9",
        api: "1.21.11",
        combines: ["bottom", "1.21.8"]
      }
    ],
  },
];

export default misc;
