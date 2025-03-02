/*jshint -W069 */
        let isTableCompact = false;
        let isTableAuto = true;
        let isDiscontinuedVersionSet = false;
        var now = Date.now();
            function setDiscontinuedVersion(slug, mc_version, mod_version, version_id){
                if (slug === "stop") {isDiscontinuedVersionSet = true;}
                if (!isDiscontinuedVersionSet) {
                    const mv_id = "mod_version_" + slug + "_" + mc_version;
                    const mv_dw = "dw_" + slug + "_" + mc_version;
                    dw_link = "https://modrinth.com/mod/" + slug + "/version/" + version_id;
                    sessionStorage[`${mv_id}`] = `${mod_version}`;
                    sessionStorage[`${mv_dw}`] = `${dw_link}`;
                    document.getElementById(mv_id).innerHTML = mod_version;
                    document.getElementById(mv_dw).setAttribute("href", dw_link);
                }
            }
            async function getversion(slug, mc_version) {
                const mv_id = "mod_version_" + slug + "_" + mc_version;
                const mv_dw = "dw_" + slug + "_" + mc_version;
                now = Date.now();
                const sessionTTL = 317237;
                var dw_link = "";
                var mod_version = "";
                let headers = new Headers({
                    "User-Agent": "pnk2u/pnk2u.github.io (contact@pnku.de)"
                });
                try {
                    if (!sessionStorage[`${mv_id}`] || !sessionStorage[`${mv_dw}`] || (now > sessionStorage['sessionTime'])) {
                            let api_url =
                                "https://api.modrinth.com/v2/project/" +
                                slug +
                                "/version?game_versions=%5B%22" +
                                mc_version +
                                "%22%5D&loaders=%5B%22fabric%22%5D";
                            const api_response = await fetch(api_url, {
                                "Content-Type": "application/json",
                                method: "GET",
                                headers: headers
                            });
                            let api_json = await api_response.json();
                            if (!api_json[0].loaders.includes("fabric")) {console.log("non-fabric-response");}
                            const version_id = api_json[0].id;
                            const mod_version_l = api_json[0].version_number.split('+');
                            const mod_version_l2 = mod_version_l[0].split('-1');
                            mod_version = mod_version_l2[0];
                            console.log(slug + "/" + mod_version + "/" + version_id);
                            dw_link = "https://modrinth.com/mod/" + slug + "/version/" + version_id;
                        sessionStorage[`${mv_id}`] = `${mod_version}`;
                        sessionStorage[`${mv_dw}`] = `${dw_link}`;
                        console.log("Saved fetched data to sessionStorage.");
                        if (((now + 1) > sessionStorage['sessionTime']) || !sessionStorage['sessionTime']){
                        sessionStorage['sessionTime'] = now + sessionTTL;
                        console.log("New sessionTime saved.");
                        }
                    } else {
                        let loc_id = sessionStorage[`${mv_dw}`].split("/");
                        console.log("Read (sessionStorage): " + slug + "/" + sessionStorage[`${mv_id}`] + "/" + loc_id[6]);
                        mod_version = sessionStorage[`${mv_id}`];
                        dw_link = sessionStorage[`${mv_dw}`];
                    }
                    document.getElementById(mv_id).innerHTML = mod_version;
                    document.getElementById(mv_dw).setAttribute("href", dw_link);
                } catch (error) {
                    console.error(error.message);
                }
            }
            function scaleTableOnWidth(tableId, widthThreshold, scaleFactor) {
                const table = document.getElementById(tableId);
                const top = document.getElementById("findme");
                const bottom = document.getElementById("footer");
                
                const compactS = document.getElementById("compactSwitch");
                const bigS = document.getElementById("bigSwitch");
                const autoS = document.getElementById("autoSwitch");

                function applyScale() {
                    if ((window.innerWidth < 831) && (isTableAuto || isTableCompact)) {
                        top.style.display = 'none';
                    } else {
                        top.style.display = 'block';
                    }
                    if (((window.innerWidth < widthThreshold) & isTableAuto) || isTableCompact) {
                        table.style.transform = `scale(${scaleFactor})`;
                        table.style.marginTop = '0';
                        bottom.style.marginTop = '16%';
                    } else {
                        table.style.transform = 'scale(1.5)';
                        table.style.marginTop = '496px';
                        bottom.style.marginTop = '40%';
                    }
                }
                
                applyScale();
                
                window.addEventListener("resize", applyScale);

                compactS.addEventListener("click", () => {isTableCompact = true; isTableAuto = false; applyScale();  compactS.setAttribute("style", 'color: #fdee');bigS.setAttribute("style", 'color: #fdea');autoS.setAttribute("style", 'color: #fdea');});
                bigS.addEventListener("click", () => {isTableCompact = false; isTableAuto = false; applyScale();     compactS.setAttribute("style", 'color: #fdea');bigS.setAttribute("style", 'color: #fdee');autoS.setAttribute("style", 'color: #fdea');});
                autoS.addEventListener("click", () => {isTableAuto = true; isTableCompact = false; applyScale();     compactS.setAttribute("style", 'color: #fdea');bigS.setAttribute("style", 'color: #fdea');autoS.setAttribute("style", 'color: #fdee');});
            }
            function toggleDarkMode() {
                const root = document.documentElement;
                const toggleButton = document.getElementById("dark-mode_toggle_button")

                if (!(root.style.getPropertyValue('--background-color') === '#340819')) {
                    // Switch to dark mode
                    root.style.setProperty ('--background-color', '#340819');
                    root.style.setProperty ('--background-color-highlighted', '#480f25');
                    root.style.setProperty ('--background-color-vcontrast', '#6d0730');
                    root.style.setProperty ('--border-b', '#f069')
                    root.style.setProperty ('--primary-color', '#f06');
                    root.style.setProperty ('--primary-color-del', '#340819');
                    root.style.setProperty ('--primary-muted-1', '#f37');
                    root.style.setProperty ('--primary-muted-2', '#f58');
                    root.style.setProperty ('--primary-muted-2-a', '#7b4354ab');
                    toggleButton.innerHTML = "Light Mode";
                    toggleButton.style.setProperty('background-color', '#f06');
                    toggleButton.style.setProperty('color', '#fff');
                } else {
                    // Switch to light mode
                    root.style.setProperty ('--background-color', '#f06');
                    root.style.setProperty ('--background-color-highlighted', '#f37');
                    root.style.setProperty ('--background-color-vcontrast', '#903a');
                    root.style.setProperty ('--border-b', '#ff83c1')
                    root.style.setProperty ('--primary-color', '#fff');
                    root.style.setProperty ('--primary-color-del', '#fff');
                    root.style.setProperty ('--primary-muted-1', '#fff7fb');
                    root.style.setProperty ('--primary-muted-2', '#fde');
                    root.style.setProperty ('--primary-muted-2-a', '#fdea');
                    toggleButton.innerHTML = "Dark Mode";
                    toggleButton.style.setProperty('background-color', '#480f25');
                    toggleButton.style.setProperty('color', '#f06');
                }
            }

            getversion("Bake-Your-Bread", "1.20.1");
            setDiscontinuedVersion("Bake-Your-Bread", "1.20.4", "1.1.2","W4k8u9yw");
            setDiscontinuedVersion("Bake-Your-Bread", "1.20.6", "1.1.2","vQR7x8PR");
            getversion("Bake-Your-Bread", "1.21");
            setDiscontinuedVersion("Bake-Your-Bread", "1.21.3", "1.1.2", "ctaqDBvD");
            getversion("Bake-Your-Bread", "1.21.4");
            getversion("hungrycows", "1.20.1");
            setDiscontinuedVersion("hungrycows", "1.20.4", "1.4.2", "PnIMeAGW");
            setDiscontinuedVersion("hungrycows", "1.20.6", "1.4.2", "4MmwdVVt");
            getversion("hungrycows", "1.21");
            setDiscontinuedVersion("hungrycows", "1.21.3", "1.4.2", "BMp08FNl");
            getversion("hungrycows", "1.21.4");
            getversion("More-Barrel-Variants", "1.20.1");
            setDiscontinuedVersion("More-Barrel-Variants", "1.20.4", "1.7.4", "XVy5Oj2B");
            setDiscontinuedVersion("More-Barrel-Variants", "1.20.6", "1.7.4", "uYK2dORj");
            getversion("More-Barrel-Variants", "1.21");
            setDiscontinuedVersion("More-Barrel-Variants", "1.21.3", "1.7.6", "1QROWAs1");
            getversion("More-Barrel-Variants", "1.21.4");
            getversion("More-Bed-Variants", "1.20.1");
            setDiscontinuedVersion("More-Bed-Variants", "1.20.4", "1.5.2", "7Y1mkGz1");
            setDiscontinuedVersion("More-Bed-Variants", "1.20.6", "1.5.2", "T3DKTayv");
            getversion("More-Bed-Variants", "1.21");
            setDiscontinuedVersion("More-Bed-Variants", "1.21.3", "1.5.2", "NmFcQj9Q");
            getversion("More-Bed-Variants", "1.21.4");
            getversion("More-Beehive-Variants", "1.20.1");
            setDiscontinuedVersion("More-Beehive-Variants", "1.20.4", "1.1.1", "cGPJyFlA");
            setDiscontinuedVersion("More-Beehive-Variants", "1.20.6", "1.1.1", "ngu96yx0");
            getversion("More-Beehive-Variants", "1.21");
            setDiscontinuedVersion("More-Beehive-Variants", "1.21.3", "1.1.1", "qRV7omho");
            getversion("More-Beehive-Variants", "1.21.4");
            getversion("More-Bookshelf-Variants-lieonlion", "1.20.4");
            getversion("More-Bookshelf-Variants-lieonlion", "1.20.6");
            getversion("More-Bookshelf-Variants-lieonlion", "1.21");
            getversion("More-Bookshelf-Variants-lieonlion", "1.21.4");
            getversion("More-Cartography-Tables", "1.20.1");
            setDiscontinuedVersion("More-Cartography-Tables", "1.20.4", "1.7.1", "A4MFt2yu");
            setDiscontinuedVersion("More-Cartography-Tables", "1.20.6", "1.7.1", "ym7tXTlY");
            getversion("More-Cartography-Tables", "1.21");
            setDiscontinuedVersion("More-Cartography-Tables", "1.21.3", "1.7.1", "bzMsLrVj");
            getversion("More-Cartography-Tables", "1.21.4");
            getversion("More-Chest-Variants-lieonlion", "1.20.1");
            getversion("More-Chest-Variants-lieonlion", "1.20.4");
            getversion("More-Chest-Variants-lieonlion", "1.20.6");
            getversion("More-Chest-Variants-lieonlion", "1.21");
            getversion("More-Chest-Variants-lieonlion", "1.21.4");
            getversion("More-Crafter-Variants", "1.21");
            getversion("More-Crafting-Tables-lieonlion", "1.20.4");
            getversion("More-Crafting-Tables-lieonlion", "1.20.6");
            getversion("More-Crafting-Tables-lieonlion", "1.21");
            getversion("More-Crafting-Tables-lieonlion", "1.21.4");
            getversion("More-Chiseled-Bookshelf-Variants", "1.20.1");
            setDiscontinuedVersion("More-Chiseled-Bookshelf-Variants", "1.20.4", "1.6.1", "vmRC2eBm");
            setDiscontinuedVersion("More-Chiseled-Bookshelf-Variants", "1.20.6", "1.6.1", "x36NpgHP");
            getversion("More-Chiseled-Bookshelf-Variants", "1.21");
            getversion("More-Chiseled-Bookshelf-Variants", "1.21.1");
            setDiscontinuedVersion("More-Chiseled-Bookshelf-Variants", "1.21.3", "1.6.4", "4krJD07N");
            getversion("More-Chiseled-Bookshelf-Variants", "1.21.4");
            getversion("More-Composter-Variants", "1.20.1");
            setDiscontinuedVersion("More-Composter-Variants", "1.20.4", "1.7.3", "T4RqFOpu");
            setDiscontinuedVersion("More-Composter-Variants", "1.20.6", "1.7.3", "fnwg4EaX");
            getversion("More-Composter-Variants", "1.21");
            setDiscontinuedVersion("More-Composter-Variants", "1.21.3", "1.7.4", "Cd7CCU6y");
            getversion("More-Composter-Variants", "1.21.4");
            getversion("More-Feeding-Trough-Variants", "1.20.1");
            setDiscontinuedVersion("More-Feeding-Trough-Variants", "1.20.4", "1.0.4", "PNZErh3o");
            setDiscontinuedVersion("More-Feeding-Trough-Variants", "1.20.6", "1.0.4", "sJxSV4JV");
            getversion("More-Feeding-Trough-Variants", "1.21");
            setDiscontinuedVersion("More-Feeding-Trough-Variants", "1.21.3", "1.0.4", "hfr8wI5r");
            getversion("More-Feeding-Trough-Variants", "1.21.4");
            getversion("More-Fletching-Tables", "1.20.1");
            setDiscontinuedVersion("More-Fletching-Tables", "1.20.4", "1.7.1", "mxgWSzjb");
            setDiscontinuedVersion("More-Fletching-Tables", "1.20.6", "1.7.1", "LZQ2mqTx");
            getversion("More-Fletching-Tables", "1.21");
            setDiscontinuedVersion("More-Fletching-Tables", "1.21.3", "1.7.1", "cLGXOWCS");
            getversion("More-Fletching-Tables", "1.21.4");
            getversion("More-Furnace-Variants-lieonlion", "1.20.4");
            getversion("More-Furnace-Variants-lieonlion", "1.20.6");
            getversion("More-Furnace-Variants-lieonlion", "1.21");
            getversion("More-Grindstone-Variants", "1.20.1");
            setDiscontinuedVersion("More-Grindstone-Variants", "1.20.4", "1.1.2", "5oxSm900");
            setDiscontinuedVersion("More-Grindstone-Variants", "1.20.6", "1.1.2", "H26FdfaZ");
            getversion("More-Grindstone-Variants", "1.21");
            setDiscontinuedVersion("More-Grindstone-Variants", "1.21.3", "1.1.2", "XqSWmusn");
            getversion("More-Grindstone-Variants", "1.21.4");
            getversion("More-Jukebox-Noteblock-Variants", "1.20.1");
            setDiscontinuedVersion("More-Jukebox-Noteblock-Variants", "1.20.4", "1.ß.2", "FEbuRZ6f");
            setDiscontinuedVersion("More-Jukebox-Noteblock-Variants", "1.20.6", "1.ß.2", "wqGU4oQb");
            getversion("More-Jukebox-Noteblock-Variants", "1.21");
            setDiscontinuedVersion("More-Jukebox-Noteblock-Variants", "1.21.3", "1.ß.3", "Q1JBEoHS");
            getversion("More-Jukebox-Noteblock-Variants", "1.21.4");
            getversion("More-Lectern-Variants", "1.20.1");
            setDiscontinuedVersion("More-Lectern-Variants", "1.20.4", "1.8.2", "8g3otxr0");
            setDiscontinuedVersion("More-Lectern-Variants", "1.20.6", "1.8.2", "IU0yiLrM");
            getversion("More-Lectern-Variants", "1.21");
            setDiscontinuedVersion("More-Lectern-Variants", "1.21.3", "1.8.2", "7lKwyVyF");
            getversion("More-Lectern-Variants", "1.21.4");
            getversion("More-Lectern-Variants", "1.21.1");
            getversion("More-Loom-Variants", "1.20.1");
            setDiscontinuedVersion("More-Loom-Variants", "1.20.4", "1.1.1", "6CCe1QXs");
            setDiscontinuedVersion("More-Loom-Variants", "1.20.6", "1.1.1", "5aK77gqM");
            getversion("More-Loom-Variants", "1.21");
            setDiscontinuedVersion("More-Loom-Variants", "1.21.3", "1.1.1", "r2WPfpPI");
            getversion("More-Loom-Variants", "1.21.4");
            getversion("More-Nemos-Woodcutter-Variants", "1.20.1");
            setDiscontinuedVersion("More-Nemos-Woodcutter-Variants", "1.20.4", "1.1.2", "XV9QF8l6");
            setDiscontinuedVersion("More-Nemos-Woodcutter-Variants", "1.20.6", "1.1.2", "LmJAxqvV");
            getversion("More-Nemos-Woodcutter-Variants", "1.21");
            setDiscontinuedVersion("More-Nemos-Woodcutter-Variants", "1.21.3", "1.1.1", "Ma9INqME");
            getversion("More-Nemos-Woodcutter-Variants", "1.21.4");
            getversion("More-Shield-Variants", "1.20.1");
            setDiscontinuedVersion("More-Shield-Variants", "1.20.4", "1.3.3", "Ok74bdde");
            setDiscontinuedVersion("More-Shield-Variants", "1.20.6", "1.3.3", "Je4DFeiU");
            getversion("More-Shield-Variants", "1.21");
            setDiscontinuedVersion("More-Shield-Variants", "1.21.3", "1.3.3", "KpGLY2OK");
            getversion("More-Shield-Variants", "1.21.4");
            getversion("More-Smithing-Tables", "1.20.1");
            setDiscontinuedVersion("More-Smithing-Tables", "1.20.4", "1.2.0", "fb3yOPkx");
            setDiscontinuedVersion("More-Smithing-Tables", "1.20.6", "1.2.0", "R2TiPRnm");
            getversion("More-Smithing-Tables", "1.21");
            setDiscontinuedVersion("More-Smithing-Tables", "1.21.3", "1.2.0", "DpLWueVs");
            getversion("More-Smithing-Tables", "1.21.4");
            getversion("More-Smoker-Variants", "1.20.1");
            setDiscontinuedVersion("More-Smoker-Variants", "1.20.4", "1.3.1", "Q1iaoxeg");
            setDiscontinuedVersion("More-Smoker-Variants", "1.20.6", "1.3.1", "clCkWhZW");
            getversion("More-Smoker-Variants", "1.21");
            setDiscontinuedVersion("More-Smoker-Variants", "1.21.3", "1.3.1", "G0DyBK8u");
            getversion("More-Smoker-Variants", "1.21.4");
            getversion("More-Extra-Shield-Variants", "1.21");
            getversion("More-Tide-Anglers-Variants", "1.20.1");
            getversion("More-Tide-Anglers-Variants", "1.21");
            getversion("More-Stick-Variants", "1.20.1");
            setDiscontinuedVersion("More-Stick-Variants", "1.20.4", "1.3.1", "NtOWjUKK");
            setDiscontinuedVersion("More-Stick-Variants", "1.20.6", "1.3.1", "ObnrTyA");
            getversion("More-Stick-Variants", "1.21");
            setDiscontinuedVersion("More-Stick-Variants", "1.21.3", "1.3.1", "YoBGf01I");
            getversion("More-Stick-Variants", "1.21.4");
            getversion("More-Armor-Stand-Variants", "1.20.1");
            setDiscontinuedVersion("More-Armor-Stand-Variants", "1.20.4", "1.2.1", "ds53hxCd");
            setDiscontinuedVersion("More-Armor-Stand-Variants", "1.20.6", "1.2.1", "ik3R3c3E");
            getversion("More-Armor-Stand-Variants", "1.21");
            setDiscontinuedVersion("More-Armor-Stand-Variants", "1.21.3", "1.2.1", "D9neaoZ");
            getversion("More-Armor-Stand-Variants", "1.21.4");
            getversion("More-Frame-Variants", "1.20.1");
            setDiscontinuedVersion("More-Frame-Variants", "1.20.4", "1.1.1", "BE8qihYk");
            setDiscontinuedVersion("More-Frame-Variants", "1.20.6", "1.1.1", "16IL9Yo2");
            getversion("More-Frame-Variants", "1.21");
            setDiscontinuedVersion("More-Frame-Variants", "1.21.3", "1.1.1", "gcp2DzVq");
            getversion("More-Frame-Variants", "1.21.4");
            getversion("Nemos-More-Ladder-Variants", "1.20.1");
            setDiscontinuedVersion("Nemos-More-Ladder-Variants", "1.20.4", "1.0.3", "pAeJuMxU");
            setDiscontinuedVersion("Nemos-More-Ladder-Variants", "1.20.6", "1.0.3", "2rztvPK5");
            getversion("Nemos-More-Ladder-Variants", "1.21");
            setDiscontinuedVersion("Nemos-More-Ladder-Variants", "1.21.3", "1.0.3", "N8d8vCy8");
            getversion("Nemos-More-Ladder-Variants", "1.21.4");
            getversion("More-Fishing-Rod-Variants", "1.20.1");
            setDiscontinuedVersion("More-Fishing-Rod-Variants", "1.20.4", "1.0.2", "XjlUyMHL");
            setDiscontinuedVersion("More-Fishing-Rod-Variants", "1.20.6", "1.0.0", "wbPnPKXj");
            getversion("More-Fishing-Rod-Variants", "1.21");
            setDiscontinuedVersion("More-Fishing-Rod-Variants", "1.21.3", "1.1.0", "LzaUhg4p");
            getversion("More-Fishing-Rod-Variants", "1.21.4");
            getversion("More-Rail-Variants", "1.20.1");
            getversion("More-Rail-Variants", "1.21");
            getversion("More-Rail-Variants", "1.21.4");
            getversion("More-Tool-Variants", "1.20.1");
            setDiscontinuedVersion("More-Tool-Variants", "1.20.4", "1.0.3", "BaCMU0iQ");
            setDiscontinuedVersion("More-Tool-Variants", "1.20.6", "1.0.3", "T3ESfvbl");
            getversion("More-Tool-Variants", "1.21");
            setDiscontinuedVersion("More-Tool-Variants", "1.21.3", "1.1.ß", "uqPx3aGB");
            getversion("More-Tool-Variants", "1.21.4");
            getversion("More-Torch-Variants", "1.20.1");
            setDiscontinuedVersion("More-Torch-Variants", "1.20.4", "1.1.1", "gk95eJ8v");
            setDiscontinuedVersion("More-Torch-Variants", "1.20.6", "1.1.1", "XvBmzRSn");
            getversion("More-Torch-Variants", "1.21");
            setDiscontinuedVersion("More-Torch-Variants", "1.21.3", "1.1.1", "YeFfU2YW");
            getversion("More-Torch-Variants", "1.21.4");
            getversion("More-Weapon-Variants", "1.20.1");
            setDiscontinuedVersion("More-Weapon-Variants", "1.20.4", "1.1.2", "tTvOHIAF");
            setDiscontinuedVersion("More-Weapon-Variants", "1.20.6", "1.1.2", "ASEdOzju");
            getversion("More-Weapon-Variants", "1.21");
            setDiscontinuedVersion("More-Weapon-Variants", "1.21.3", "1.2.0", "paH03wKE");
            getversion("More-Weapon-Variants", "1.21.4");
            getversion("Nemos-Campfires", "1.20.1");
            getversion("Nemos-Campfires", "1.20.4");
            getversion("Nemos-Campfires", "1.20.6");
            getversion("Nemos-Campfires", "1.21");
            getversion("Nemos-Campfires", "1.21.3");
            getversion("Nemos-Campfires", "1.21.4");
            getversion("Quad", "1.20.4");
            getversion("Quad", "1.20.6");
            getversion("Quad", "1.21");
            getversion("Quad", "1.21.4");
            getversion("More-Compatibility-Variants-BoP", "1.20.4");
            getversion("More-Compatibility-Variants-BoP", "1.20.6");
            getversion("More-Compatibility-Variants-BoP", "1.21");
            getversion("More-Compatibility-Variants-BoP", "1.21.3");
            getversion("More-Compatibility-Variants-OTBWG", "1.20.1");
            getversion("More-Compatibility-Variants-OTBWG", "1.21.1");
            getversion("More-Compatibility-Variants-lets-do", "1.20.1");
            getversion("More-Compatibility-Variants-NS", "1.20.4");
            getversion("More-Compatibility-Variants-NS", "1.20.6");
            getversion("More-Compatibility-Variants-NS", "1.21");
            setDiscontinuedVersion("stop","","","")
            scaleTableOnWidth("mod-table", 1525, 1.0);
            console.log("TTL: " + (sessionStorage['sessionTime'] - now)/1000 + "s");