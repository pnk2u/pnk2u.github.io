import { Author } from "./authors";
import addons from "./mods/addons";
import library from "./mods/library";
import variants from "./mods/variants";

interface Category {
  name: string;
  mods: Mod[];
}

export interface Mod {
  id: string;
  name: string;
  image: string;
  authors: Author[];
  versions: Version[];
}

interface Version {
  display?: string;
  api?: string;
  span?: number;
}

export default <Category[]>[
  {
    name: "More Mod Variants",
    mods: variants,
  },
  {
    name: "Add-ons",
    mods: addons,
  },
  {
    name: "Library",
    mods: library,
  },
];
