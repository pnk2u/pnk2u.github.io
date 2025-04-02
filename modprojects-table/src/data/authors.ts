export interface Author {
  name?: string;
  image: string;
  link?: string;
}

export interface Authors {
  pnku: Author;
  lieonlion: Author;
  hypothetikal: Author;
  nemonotfound: Author;
  cynthia: Author;
  hunnycakehorse: Author;
}

export default <Authors>{
  pnku: {
    name: "Pnku",
    image:
      "https://cdn.modrinth.com/user/6XFnWjnN/2597b43521c3286c675842bed43d380543561052.jpeg",
    link: "https://modrinth.com/user/pnku",
  },
  lieonlion: {
    name: "LieOnLion",
    image:
      "https://cdn.modrinth.com/data/NJoexEIT/c9ca276e8f5c68a920923eade9e689ada7a70c70_96.webp",
    link: "https://modrinth.com/user/lieonlion",
  },
  hypothetikal: {
    name: "hypothetiKal",
    image:
      "https://cdn.modrinth.com/user/fN0tsZb7/91d3e161a1e06ff9a542361ce36756dd46567abc.webp",
    link: "https://modrinth.com/user/hypothetiKal",
  },
  nemonotfound: {
    name: "NemoNotFound",
    image:
      "https://cdn.modrinth.com/user/djWlhnKQ/f6f099fc7bed17982a5ec6edcf1a0297a3052981.png",
    link: "https://modrinth.com/user/nemonotfound",
  },
  cynthia: {
    name: "Cynthia",
    image: "https://avatars.githubusercontent.com/u/9999055?v=4",
    link: "https://modrinth.com/user/cyyynthia",
  },
  hunnycakehorse: {
    name: "hunnycakehorse",
    image:
      "https://cdn.modrinth.com/data/9dKB5yo4/535069d515c8897f1d5c753481b4df15d0cba059.gif",
    link: "https://modrinth.com/user/hunnycakehorse",
  },
};
