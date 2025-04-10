import authors from "../authors";
import dependencies from "./dependencies.ts";

export default [
  {
    id: "more-stick-variants",
    name: "More Stick Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Stick-Variants/pres/logo/logo.png",
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        api: "1.20.4",
        unsupported: true,
      },
      {
        api: "1.20.6",
        unsupported: true,
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {
        api: "1.21.3",
        unsupported: true,
      },
      {
        api: "1.21.4",
      },
      {
        api: "1.21.5",
      },
    ],
  },
  {
    id: "more-armor-stand-variants",
    name: "More Armor Stand Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Armor-Stand-Variants/pres/logo/logo_c.png",
    requirements: [dependencies.more_stick_variants],
    recommended: [dependencies.quad],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        api: "1.20.4",
        unsupported: true,
      },
      {
        api: "1.20.6",
        unsupported: true,
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {
        api: "1.21.3",
        unsupported: true,
      },
      {
        api: "1.21.4",
      },
      {
        api: "1.21.5",
      },
    ],
  },
  {
    id: "more-frame-variants",
    name: "More (Item/Painting) Frame Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Frame-Variants/pres/logo/logo.png",
    requirements: [dependencies.more_stick_variants],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        api: "1.20.4",
        unsupported: true,
      },
      {
        api: "1.20.6",
        unsupported: true,
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {
        api: "1.21.3",
        unsupported: true,
      },
      {
        api: "1.21.4",
      },
      {
        api: "1.21.5",
      },
    ],
  },
  {
    id: "nemos-more-ladder-variants",
    name: "Nemo's More Ladder Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/Nemos-More-Ladder-Variants/pres/logo/logo_c.png",
    requirements: [dependencies.more_stick_variants],
    recommended: [dependencies.quad],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        api: "1.20.4",
        unsupported: true,
      },
      {
        api: "1.20.6",
        unsupported: true,
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {
        api: "1.21.3",
        unsupported: true,
      },
      {
        display: "1.21.4(5)",
        api: "1.21.4",
        span: 2,
      },
    ],
  },
  {
    id: "more-rail-variants",
    name: "More Rail Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Rail-Variants/pres/logo/logo.png",
    requirements: [dependencies.more_stick_variants],
    recommended: [dependencies.quad, dependencies.more_torch_variants],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        span: 2,
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {},
      {
        display: "1.21.4(5)",
        api: "1.21.4",
        span: 2,
      },
    ],
  },
  {
    id: "more-fishing-rod-variants",
    name: "More (Fishing) Rod Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Fishing-Rod-Variants/pres/logo/logo.png",
    requirements: [dependencies.more_stick_variants],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        api: "1.20.4",
        unsupported: true,
      },
      {
        api: "1.20.6",
        unsupported: true,
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {
        api: "1.21.3",
        unsupported: true,
      },
      {
        display: "1.21.4(5)",
        api: "1.21.4",
        span: 2,
      },
    ],
  },
  {
    id: "more-tool-variants",
    name: "More Tool Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Tool-Variants/pres/logo/logo.png",
    requirements: [dependencies.more_stick_variants],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        api: "1.20.4",
        unsupported: true,
      },
      {
        api: "1.20.6",
        unsupported: true,
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {
        api: "1.21.3",
        unsupported: true,
      },
      {
        api: "1.21.4",
      },
      {
        api: "1.21.5",
      },
    ],
  },
  {
    id: "more-torch-variants",
    name: "More Torch Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Torch-Variants/pres/logo/logo.png",
    requirements: [dependencies.more_stick_variants],
    recommended: [dependencies.quad],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        api: "1.20.4",
        unsupported: true,
      },
      {
        api: "1.20.6",
        unsupported: true,
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {
        api: "1.21.3",
        unsupported: true,
      },
      {
        display: "1.21.4(5)",
        api: "1.21.4",
        span: 2,
      },
    ],
  },
  {
    id: "more-weapon-variants",
    name: "More Weapon Variants",
    image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/More-Weapon-Variants/pres/logo/logo.png",
    requirements: [dependencies.more_stick_variants],
    recommended: [dependencies.quad],
    authors: [authors.pnku],
    versions: [
      {
        api: "1.20.1",
      },
      {
        api: "1.20.4",
        unsupported: true,
      },
      {
        api: "1.20.6",
        unsupported: true,
      },
      {
        display: "1.21(.1)",
        api: "1.21.1",
      },
      {
        api: "1.21.3",
        unsupported: true,
      },
      {
        api: "1.21.4",
      },
      {
        api: "1.21.5",
      },
    ],
  },
];
