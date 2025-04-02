import './App.css'

const modProjectsData = [
    {
        id: "Bake-Your-Bread",
        name: "Bake Your Bread",
        image: "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/Bake-Your-Bread/pres/logo/logo_c.png",
        type: "",
        versions: [
            {
                display: "1.20.1 - 1.20.4",
                api: "1.20.4",
                span: 2
            },
            {
                display: "1.21",
                api: "1.21",
                span: 1
            },
            {
                display: "1.21.1",
                api: "1.21.1",
                span: 1
            }
        ]
    },
    {
        id: "hungrycows",
        name: "Hungry Cows",
        image: "",
        type: "",
        versions: [
            {
                display: "1.20.1",
                api: "1.20.1",
                span: 1
            },
            {
                display: "1.20.4",
                api: "1.20.4",
                span: 1
            },
            {
                display: "1.21(.1)",
                api: "1.21.1",
                span: 2
            }
        ]
    },
    {
        id: "More-Barrel-Variants",
        name: "More Barrel Variants",
        image: "",
        type: "mModV",
        versions: [
            {
                display: "1.20.1",
                api: "1.20.1",
                span: 1
            },
            {
                display: "",
                api: "",
                span: 1
            },
            {
                display: "1.21(.1)",
                api: "1.21.1",
                span: 2
            }
        ]
    },
    {
        id: "More-Chest-Variants",
        name: "More Chest Variants",
        image: "https://raw.githubusercontent.com/LieOnLion/More-Chest-Variants/fabric+1.21/src/main/resources/logo.png",
        type: "mModV",
        versions: [
            {
                display: "1.20.1 - 1.20.4",
                api: "1.20.4",
                span: 2
            },
            {
                display: "1.21",
                api: "1.21",
                span: 1
            },
            {
                display: "1.21.1",
                api: "1.21.1",
                span: 1
            }
        ]
    },
    {
        id: "morenemoswoodcuttervariants",
        name: "More Nemo's Woodcutter Variants",
        image: "https://raw.githubusercontent.com/pnk2u/More-NemosWoodcutter-Variants/refs/heads/1.21/src/main/resources/assets/morenemoswoodcuttervariants/icon.png",
        type: "Nemo",
        versions: [
            {
                display: "1.20.1",
                api: "1.20.1",
                span: 1
            },
            {
                display: "1.20.4",
                api: "1.20.4",
                span: 1
            },
            {
                display: "1.21",
                api: "1.21",
                span: 1
            },
            {
                display: "1.21.1",
                api: "1.21.1",
                span: 1
            }
        ]
    }
];

function modIconImageUri(mod: { image: string, id: string }) { return mod.image != "" ? mod.image : "https://raw.githubusercontent.com/pnk2u/resources/main/ModProjects/" + mod.id + "/pres/logo/logo.png"; }
function getBgColor(mod: {type: string}) { return mod.type != "" ? mod.type == "mModV" ? "#140a37" : mod.type == "Nemo" ? "#e0ad5e" : "" : "" }

function App() {
  return (
      <>
        {modProjectsData.map((mod) => (
          <div id={mod.id} class="table-row light-mode">
            <span class="table-cell mod-icon-cell light-mode" style={"background-color: " + getBgColor(mod)}>
                <img src={modIconImageUri(mod)} alt={mod.name} class="mod-icon-img"/>
            </span>
            <span class="table-cell mod-name-cell light-mode">
                <span>{mod.name}</span>
            </span>
            {mod.versions.map((version) => (
              <span class={`table-cell light-mode version-cell${version.span}`}>
                  <span>{version.display}</span>
              </span>
            ))}
          </div>
        ))}
      </>
  )
}

export default App
