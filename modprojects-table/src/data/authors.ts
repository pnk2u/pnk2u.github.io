export interface Author {
  name?: string;
  image?: string;
  link?: string;
  mr_id?: string; // Modrinth user ID
  sig_mod_id?: string; // Modrinth signature mod ID
  gh_name?: string; // GitHub username, if different from 'name' and if first author (owner) of any mod
}

export interface Authors {
  pnku: Author;
  lieonlion: Author;
  hypothetikal: Author;
  nemonotfound: Author;
  cynthia: Author;
  hunnycakehorse: Author;
}

export default <Authors> {
  pnku: {
    name: "pnku",
    gh_name: "pnk2u",
    link: "https://modrinth.com/user/pnku",
    mr_id: "6XFnWjnN",
    sig_mod_id: "ZVv4e6pP",
  },
  lieonlion: {
    name: "LieOnLion",
    link: "https://modrinth.com/user/lieonlion",
    mr_id: "NJoexEIT",
    sig_mod_id: "7jzrCiK0",
  },
  hypothetikal: {
    name: "hypothetiKal",
    link: "https://modrinth.com/user/hypothetiKal",
    mr_id: "fN0tsZb7"
  },
  nemonotfound: {
    name: "NemoNotFound",
    gh_name: "NemoOnGH",
    link: "https://modrinth.com/user/DevNemo",
    mr_id: "djWlhnKQ",
    sig_mod_id: "mr1LTtgz",
  },
  cynthia: {
    name: "Cynthia",
    image: "https://avatars.githubusercontent.com/u/9999055?v=4",
    link: "https://modrinth.com/user/cyyynthia",
    mr_id: "dpdTP9UA"
  },
  hunnycakehorse: {
    name: "hunnycakehorse",
    link: "https://modrinth.com/user/hunnycakehorse",
    mr_id: "9dKB5yo4",
  },
};
