export interface Author {
  name?: string;
  image: string;
  link?: string;
}

export interface Authors {
  pnku: Author;
  lieonlion: Author;
  cynthia: Author;
}

export default <Authors>{
  pnku: {
    image:
      "https://cdn.modrinth.com/user/6XFnWjnN/2597b43521c3286c675842bed43d380543561052.jpeg",
  },
  lieonlion: {
    image:
      "https://cdn.modrinth.com/data/NJoexEIT/c9ca276e8f5c68a920923eade9e689ada7a70c70_96.webp",
  },
  cynthia: { image: "https://avatars.githubusercontent.com/u/9999055?v=4" },
};
