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

/**
 * Represents a mod with its metadata, including its ID, name, image, authors, and versions.
 * @property {string} id - Unique identifier for the mod.
 * @property {string} [gh_repo] - Optional GitHub repository in the format "owner/repo", if different repo-name from mod-id or if owner is different from first author.
 * @property {string} name - Name of the mod.
 * @property {string} image - URL to the image representing the mod.
 * @property {Dependency[]} [requirements] - Optional array of dependencies required by the mod.
 * @property {Dependency[]} [recommended] - Optional array of recommended dependencies for the mod.
 * @property {Author[]} authors - Array of authors associated with the mod.
 * @property {Version[]} versions - Array of versions available for the mod.
 */
export interface Mod {
  id: string;
  gh_repo?: string;
  name: string;
  image: string;
  requirements?: Dependency[];
  recommended?: Dependency[];
  authors: Author[];
  versions: Version[];
}

/**
  * Represents a version of a mod, including its compatibility with different Minecraft versions and any special properties within the table.
  * @property {Array<string>} [combines] - Array indicating if this version combines with another version in the table. The first element can be "top" or "bottom" to indicate the position of the combined cell.
  * @property {string} [api] - String representing the API version associated with this mod version.
  * @property {number} [span] - Number indicating how many columns this version spans in the table.
  * @property {boolean} [unsupported] - Boolean indicating if this game version is unsupported.
  * @property {boolean} [discontinued] - String indicating (by not being empty/undefined) if this version is the last supported version for this mod. Its content is used as tooltip.
  * @property {string} [rangeMin] - String representing the minimum Minecraft version compatible with this mod version. Used for version display name.
  * @property {string} [rangeMax] - String representing the maximum Minecraft version compatible with this mod version. Used for version display name.
  * @property {boolean} [multiApi] - Boolean indicating if this cell represents multiple separate versions.
  */
export interface Version {
  combines?: Array<string>;
  api?: string;
  span?: number;
  unsupported?: boolean;
  discontinued?: string;
  rangeMin?: string;
  rangeMax?: string;
  multiApi?: boolean;
}

export const getVersionColumnCount = (mod: Mod): number =>
  mod.versions.reduce(
    (columns, version) =>
      version?.combines?.[0] === "bottom" ? columns : columns + (version?.span ?? 1),
    0,
  );

const categories: Category[] = [
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

export default categories;
