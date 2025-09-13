import { Author } from "./authors";
import addons from "./mods/addons";
import { Dependency } from "./mods/dependencies";
import library from "./mods/library";
import variants from "./mods/variants";
import mstv from "./mods/mstv";
import misc from "./mods/misc";

interface Category {
  name: string;
  mods: Mod[];
}

export interface Mod {
  id: string;
  gh_repo?: string; // GitHub repository in the format "owner/repo", if different repo-name from mod-id or if owner is different from first author
  name: string;
  image: string;
  requirements?: Dependency[];
  recommended?: Dependency[];
  authors: Author[];
  versions: Version[];
}

interface Version {
  combines?: Array<string>;
  display?: string;
  api?: string;
  span?: number;
  unsupported?: boolean;
}

export default <Category[]>[
  {
    name: "More Mod Variants",
    mods: variants,
  },
  {
    name: "More Stick Variants",
    mods: mstv
  },
  {
    name: "Add-ons",
    mods: addons,
  },
  { name: "Miscellaneous",
    mods: misc,
  },
  {
    name: "Library",
    mods: library,
  }
];
