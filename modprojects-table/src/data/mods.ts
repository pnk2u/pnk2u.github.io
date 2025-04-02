import { Author } from "./authors";
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
];
