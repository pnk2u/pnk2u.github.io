export interface Dependency {
  name?: string;
  image: string;
  link?: string;
}

export interface Dependencies {
  quad: Dependency;
}

export default <Dependencies>{
  quad: {
    name: "Quad",
    image:
      "https://raw.githubusercontent.com/LieOnLion/Quad/refs/heads/fabric+1.20.6/src/main/resources/logo.png",
    link: "/#quad",
  },
};
