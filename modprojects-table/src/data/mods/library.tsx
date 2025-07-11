import authors from "../authors";
import { Mod } from "../mods.ts";

const library: Mod[] = [
  {
    id: "7jzrCiK0",
    name: "Quad",
    image:
      "https://raw.githubusercontent.com/LieOnLion/Quad/refs/heads/fabric+1.20.6/src/main/resources/logo.png",
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
        api: "1.21.5",
      },
      {},
    ],
  },
];

export default library;
