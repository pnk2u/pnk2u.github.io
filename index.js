/*jshint -W069 */
        let isTableCompact = false;
        let isTableAuto = true;
        var now = Date.now();
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
                const bottom = document.getElementById("footer");
                
                const compactS = document.getElementById("compactSwitch");
                const bigS = document.getElementById("bigSwitch");
                const autoS = document.getElementById("autoSwitch");

                function applyScale() {
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

            getversion("Bake-Your-Bread", "1.20.1");
            getversion("Bake-Your-Bread", "1.20.4");
            getversion("Bake-Your-Bread", "1.20.6");
            getversion("Bake-Your-Bread", "1.21");
            getversion("Bake-Your-Bread", "1.21.3");
            getversion("hungrycows", "1.20.1");
            getversion("hungrycows", "1.20.4");
            getversion("hungrycows", "1.20.6");
            getversion("hungrycows", "1.21");
            getversion("hungrycows", "1.21.3");
            getversion("More-Barrel-Variants", "1.20.1");
            getversion("More-Barrel-Variants", "1.20.4");
            getversion("More-Barrel-Variants", "1.20.6");
            getversion("More-Barrel-Variants", "1.21");
            getversion("More-Barrel-Variants", "1.21.3");
            getversion("More-Bed-Variants", "1.20.1");
            getversion("More-Bed-Variants", "1.20.4");
            getversion("More-Bed-Variants", "1.20.6");
            getversion("More-Bed-Variants", "1.21");
            getversion("More-Bed-Variants", "1.21.3");
            getversion("More-Beehive-Variants", "1.20.1");
            getversion("More-Beehive-Variants", "1.20.4");
            getversion("More-Beehive-Variants", "1.20.6");
            getversion("More-Beehive-Variants", "1.21");
            getversion("More-Beehive-Variants", "1.21.3");
            getversion("More-Bookshelf-Variants-lieonlion", "1.20.4");
            getversion("More-Bookshelf-Variants-lieonlion", "1.20.6");
            getversion("More-Bookshelf-Variants-lieonlion", "1.21");
            getversion("More-Cartography-Tables", "1.20.1");
            getversion("More-Cartography-Tables", "1.20.4");
            getversion("More-Cartography-Tables", "1.20.6");
            getversion("More-Cartography-Tables", "1.21");
            getversion("More-Cartography-Tables", "1.21.3");
            getversion("More-Chest-Variants-lieonlion", "1.20.1");
            getversion("More-Chest-Variants-lieonlion", "1.20.4");
            getversion("More-Chest-Variants-lieonlion", "1.20.6");
            getversion("More-Chest-Variants-lieonlion", "1.21");
            getversion("More-Crafter-Variants", "1.21");
            getversion("More-Crafting-Tables-lieonlion", "1.20.4");
            getversion("More-Crafting-Tables-lieonlion", "1.20.6");
            getversion("More-Crafting-Tables-lieonlion", "1.21");
            getversion("More-Chiseled-Bookshelf-Variants", "1.20.1");
            getversion("More-Chiseled-Bookshelf-Variants", "1.20.4");
            getversion("More-Chiseled-Bookshelf-Variants", "1.20.6");
            getversion("More-Chiseled-Bookshelf-Variants", "1.21");
            getversion("More-Chiseled-Bookshelf-Variants", "1.21.3");
            getversion("More-Chiseled-Bookshelf-Variants", "1.21.1");
            getversion("More-Composter-Variants", "1.20.1");
            getversion("More-Composter-Variants", "1.20.4");
            getversion("More-Composter-Variants", "1.20.6");
            getversion("More-Composter-Variants", "1.21");
            getversion("More-Composter-Variants", "1.21.3");
            getversion("More-Feeding-Trough-Variants", "1.20.1");
            getversion("More-Feeding-Trough-Variants", "1.20.4");
            getversion("More-Feeding-Trough-Variants", "1.20.6");
            getversion("More-Feeding-Trough-Variants", "1.21");
            getversion("More-Feeding-Trough-Variants", "1.21.3");
            getversion("More-Jukebox-Noteblock-Variants", "1.20.1");
            getversion("More-Jukebox-Noteblock-Variants", "1.20.4");
            getversion("More-Jukebox-Noteblock-Variants", "1.20.6");
            getversion("More-Jukebox-Noteblock-Variants", "1.21");
            getversion("More-Jukebox-Noteblock-Variants", "1.21.3");
            getversion("More-Fletching-Tables", "1.20.1");
            getversion("More-Fletching-Tables", "1.20.4");
            getversion("More-Fletching-Tables", "1.20.6");
            getversion("More-Fletching-Tables", "1.21");
            getversion("More-Fletching-Tables", "1.21.3");
            getversion("More-Furnace-Variants-lieonlion", "1.20.4");
            getversion("More-Furnace-Variants-lieonlion", "1.20.6");
            getversion("More-Furnace-Variants-lieonlion", "1.21");
            getversion("More-Grindstone-Variants", "1.20.1");
            getversion("More-Grindstone-Variants", "1.20.4");
            getversion("More-Grindstone-Variants", "1.20.6");
            getversion("More-Grindstone-Variants", "1.21");
            getversion("More-Grindstone-Variants", "1.21.3");
            getversion("More-Lectern-Variants", "1.20.1");
            getversion("More-Lectern-Variants", "1.20.4");
            getversion("More-Lectern-Variants", "1.20.6");
            getversion("More-Lectern-Variants", "1.21");
            getversion("More-Lectern-Variants", "1.21.3");
            getversion("More-Lectern-Variants", "1.21.1");
            getversion("More-Loom-Variants", "1.20.1");
            getversion("More-Loom-Variants", "1.20.4");
            getversion("More-Loom-Variants", "1.20.6");
            getversion("More-Loom-Variants", "1.21");
            getversion("More-Loom-Variants", "1.21.3");
            getversion("More-Nemos-Woodcutter-Variants", "1.20.1");
            getversion("More-Nemos-Woodcutter-Variants", "1.20.4");
            getversion("More-Nemos-Woodcutter-Variants", "1.20.6");
            getversion("More-Nemos-Woodcutter-Variants", "1.21");
            getversion("More-Nemos-Woodcutter-Variants", "1.21.3");
            getversion("More-Shield-Variants", "1.20.1");
            getversion("More-Shield-Variants", "1.20.4");
            getversion("More-Shield-Variants", "1.20.6");
            getversion("More-Shield-Variants", "1.21");
            getversion("More-Shield-Variants", "1.21.3");
            getversion("More-Smithing-Tables", "1.20.1");
            getversion("More-Smithing-Tables", "1.20.4");
            getversion("More-Smithing-Tables", "1.20.6");
            getversion("More-Smithing-Tables", "1.21");
            getversion("More-Smithing-Tables", "1.21.3");
            getversion("More-Smoker-Variants", "1.20.1");
            getversion("More-Smoker-Variants", "1.20.4");
            getversion("More-Smoker-Variants", "1.20.6");
            getversion("More-Smoker-Variants", "1.21");
            getversion("More-Smoker-Variants", "1.21.3");
            getversion("More-Stick-Variants", "1.20.1");
            getversion("More-Stick-Variants", "1.20.4");
            getversion("More-Stick-Variants", "1.20.6");
            getversion("More-Stick-Variants", "1.21");
            getversion("More-Stick-Variants", "1.21.3");
            getversion("More-Armor-Stand-Variants", "1.20.1");
            getversion("More-Armor-Stand-Variants", "1.20.4");
            getversion("More-Armor-Stand-Variants", "1.20.6");
            getversion("More-Armor-Stand-Variants", "1.21");
            getversion("More-Armor-Stand-Variants", "1.21.3");
            getversion("More-Frame-Variants", "1.20.1");
            getversion("More-Frame-Variants", "1.20.4");
            getversion("More-Frame-Variants", "1.20.6");
            getversion("More-Frame-Variants", "1.21");
            getversion("More-Frame-Variants", "1.21.3");
            getversion("Nemos-More-Ladder-Variants", "1.20.1");
            getversion("Nemos-More-Ladder-Variants", "1.20.4");
            getversion("Nemos-More-Ladder-Variants", "1.20.6");
            getversion("Nemos-More-Ladder-Variants", "1.21");
            getversion("Nemos-More-Ladder-Variants", "1.21.3");
            getversion("More-Fishing-Rod-Variants", "1.20.1");
            getversion("More-Fishing-Rod-Variants", "1.20.4");
            getversion("More-Fishing-Rod-Variants", "1.20.6");
            getversion("More-Fishing-Rod-Variants", "1.21");
            getversion("More-Fishing-Rod-Variants", "1.21.3");
            getversion("More-Tool-Variants", "1.20.1");
            getversion("More-Tool-Variants", "1.20.4");
            getversion("More-Tool-Variants", "1.20.6");
            getversion("More-Tool-Variants", "1.21");
            getversion("More-Tool-Variants", "1.21.3");
            getversion("More-Torch-Variants", "1.20.1");
            getversion("More-Torch-Variants", "1.20.4");
            getversion("More-Torch-Variants", "1.20.6");
            getversion("More-Torch-Variants", "1.21");
            getversion("More-Torch-Variants", "1.21.3");
            getversion("More-Weapon-Variants", "1.20.1");
            getversion("More-Weapon-Variants", "1.20.4");
            getversion("More-Weapon-Variants", "1.20.6");
            getversion("More-Weapon-Variants", "1.21");
            getversion("More-Weapon-Variants", "1.21.3");
            getversion("Nemos-Campfires", "1.20.1");
            getversion("Nemos-Campfires", "1.20.4");
            getversion("Nemos-Campfires", "1.20.6");
            getversion("Nemos-Campfires", "1.21");
            getversion("Nemos-Campfires", "1.21.3");
            getversion("Quad", "1.20.4");
            getversion("Quad", "1.20.6");
            getversion("Quad", "1.21");
            getversion("More-Compatibility-Variants-BoP", "1.20.4");
            getversion("More-Compatibility-Variants-BoP", "1.20.6");
            getversion("More-Compatibility-Variants-BoP", "1.21");
            getversion("More-Compatibility-Variants-NS", "1.20.4");
            getversion("More-Compatibility-Variants-NS", "1.20.6");
            getversion("More-Compatibility-Variants-NS", "1.21");
            getversion("More-Compatibility-Variants-lets-do", "1.20.1");
            scaleTableOnWidth("mod-table", 1200, 1.0);
            console.log("TTL: " + (sessionStorage['sessionTime'] - now)/1000 + "s");