export interface Author {
  name?: string;
  image: string;
  link?: string;
}

export interface Authors {
  pnku: Author;
  lieonlion: Author;
  hypothetikal: Author;
  cynthia: Author;
  hunnycakehorse: Author;
}

export default <Authors>{
  pnku: {
    name: "Pnku",
    image:
      "https://cdn.modrinth.com/user/6XFnWjnN/2597b43521c3286c675842bed43d380543561052.jpeg",
  },
  lieonlion: {
    name: "LieOnLion",
    image:
      "https://cdn.modrinth.com/data/NJoexEIT/c9ca276e8f5c68a920923eade9e689ada7a70c70_96.webp",
  },
  hypothetikal: {
    name: "hypothetiKal",
    image:
      "https://cdn.modrinth.com/user/fN0tsZb7/91d3e161a1e06ff9a542361ce36756dd46567abc.webp",
  },
  cynthia: { image: "https://avatars.githubusercontent.com/u/9999055?v=4" },
  hunnycakehorse: {
    image:
      "https://cdn.modrinth.com/data/9dKB5yo4/535069d515c8897f1d5c753481b4df15d0cba059.gif",
  },
};
