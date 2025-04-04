export interface Dependency {
  name?: string;
  image: string;
  link?: string;
}

export interface Dependencies {
  quad: Dependency;
  mComposterV: Dependency;
}

export default <Dependencies>{
  quad: {
    name: "Quad",
    image:
      "https://raw.githubusercontent.com/LieOnLion/Quad/refs/heads/fabric+1.20.6/src/main/resources/logo.png",
    link: "/#quad",
  },
  mComposterV: {
    name: "More Composter Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Composter-Variants/pres/logo/logo_c.png",
    link: "/#More-Composter-Variants",
  }
};
