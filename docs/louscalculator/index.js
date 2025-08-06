
function initColorRW() {
    let color1field = document.getElementById("color1slctr_rgb");
    let color1RWHex = document.getElementById("color1RWHex");
    let color1_r_hsl = document.getElementById("color1_r_hsl");
    let color2field = document.getElementById("color2slctr_rgb");
    let color2RWHex = document.getElementById("color2RWHex");
    let color2_r_hsl = document.getElementById("color2_r_hsl");
    let color3field = document.getElementById("color3slctr_rgb");
    let color3RWHex = document.getElementById("color3RWHex");
    let color3_r_hsl = document.getElementById("color3_r_hsl");
    let colorN1field = document.getElementById("colorN1slctr_rgb");
    let colorN1RWHex = document.getElementById("colorN1RWHex");
    let colorN1_r_hsl = document.getElementById("colorN1_r_hsl");
    let colorN2field = document.getElementById("colorN2slctr_rgb");
    let colorN2RWHex = document.getElementById("colorN2RWHex");
    let colorN2_r_hsl = document.getElementById("colorN2_r_hsl");
    let colorN3field = document.getElementById("colorN3slctr_rgb");
    let colorN3RWHex = document.getElementById("colorN3RWHex");
    let colorN3_r_hsl = document.getElementById("colorN3_r_hsl");
    let color1field_nxt = document.getElementById("color1slctr_rgb_nxt");
    let color1RWHex_nxt = document.getElementById("color1RWHex_nxt");
    let color1_r_hsl_nxt = document.getElementById("color1_r_hsl_nxt");
    let color3field_nxt = document.getElementById("color3slctr_rgb_nxt");
    let color3RWHex_nxt = document.getElementById("color3RWHex_nxt");
    let color3_r_hsl_nxt = document.getElementById("color3_r_hsl_nxt");
    let colorN1field_nxt = document.getElementById("colorN1slctr_rgb_nxt");
    let colorN1RWHex_nxt = document.getElementById("colorN1RWHex_nxt");
    let colorN1_r_hsl_nxt = document.getElementById("colorN1_r_hsl_nxt");
    let colorN3field_nxt = document.getElementById("colorN3slctr_rgb_nxt");
    let colorN3RWHex_nxt = document.getElementById("colorN3RWHex_nxt");
    let colorN3_r_hsl_nxt = document.getElementById("colorN3_r_hsl_nxt");
    let betweenFactorSlider = document.getElementById("between_factor_slider")
    let betweenFactorReader = document.getElementById("betweenFactorSlider-reader")
    let nextFactorSlider = document.getElementById("next_factor_slider")
    let nextFactorReader = document.getElementById("nextFactorSlider-reader")
    let reset_between_slider = document.getElementById('reset-button-b');
    let reset_next_slider = document.getElementById('reset-button-n');
    let color1 = new Color();
    let color2 = new Color();
    let color3 = new Color();
    let colorN1 = new Color();
    let colorN2 = new Color();
    let colorN3 = new Color();
    let color1_nxt = new Color();
    let color3_nxt = new Color();
    let colorN1_nxt = new Color();
    let colorN3_nxt = new Color();
    function updateBetweenColors() {
        betweenFactorReader.innerHTML = (betweenFactorSlider.value/10).toString();
        // OC 1
        color1RWHex.value = color1field.value.toString();
        color1.hex = color1field.value;
        color1.precision = 2;
        color1_r_hsl.value = color1.hslString;
        // OC 2
        color2RWHex.value = color2field.value.toString();
        color2.hex = color2field.value;
        color2.precision = 2;
        color2_r_hsl.value = color2.hslString;
        // OC 3 (Between)
        color3RWHex.value = color3field.value.toString();
        color3.hex = color3field.value;
        color3.precision = 2;
        color3_r_hsl.value = color3.hslString;
        // NC 1
        colorN1RWHex.value = colorN1field.value.toString();
        colorN1.hex = colorN1field.value;
        colorN1.precision = 2;
        colorN1_r_hsl.value = colorN1.hslString;
        // NC 2
        colorN2RWHex.value = colorN2field.value.toString();
        colorN2.hex = colorN2field.value;
        colorN2.precision = 2;
        colorN2_r_hsl.value = colorN2.hslString;
        // NC 3 (Between)
        let C_N3_H_1 = ((colorN1.hsl[0] + color3.hsl[0] - color1.hsl[0]));
        if ((180-C_N3_H_1)<=0) {C_N3_H_1 = C_N3_H_1 - 360;}
        let C_N3_H_2 = ((colorN2.hsl[0] + color3.hsl[0] - color2.hsl[0]));
        if ((180-C_N3_H_2)<=0) {C_N3_H_2 = C_N3_H_2 - 360;}
        let C_N3_H = (C_N3_H_1 + C_N3_H_2)/2;
        if (!isFinite(C_N3_H)) {C_N3_H = 0;}
        if (Math.sign(C_N3_H)===-1) {C_N3_H = 360 + C_N3_H;}
        C_N3_H = C_N3_H.toFixed(2);
        let x = colorN1.hsl[1];
        let y = color1.hsl[1];
        let z = color3.hsl[1];
        let q1;
        if (x>y) {q1=y/x;}else{q1=x/y}
        let C_N3_S_1 = (x+((x * (z / y) - x) * (Math.pow(q1, (1 + (x/betweenFactorSlider.value))))));
        x = colorN2.hsl[1];
        y = color2.hsl[1];
        z = color3.hsl[1];
        if (x>y) {q1=y/x;}else{q1=x/y}
        let C_N3_S_2 = (x+((x * (z / y) - x) * (Math.pow(q1, (1 + (x/betweenFactorSlider.value))))));
        let C_N3_S = (C_N3_S_1 + C_N3_S_2)/2;
        if (!isFinite(C_N3_S)) {C_N3_S = 0;}
        C_N3_S = C_N3_S.toFixed(2);
        x = colorN1.hsl[2];
        y = color1.hsl[2];
        z = color3.hsl[2];
        if (x>y) {q1=y/x;}else{q1=x/y}
        let C_N3_L_1 = (x+((x * (z / y) - x) * (Math.pow(q1, (1 + (x/betweenFactorSlider.value))))));
        x = colorN2.hsl[2];
        y = color2.hsl[2];
        z = color3.hsl[2];
        if (x>y) {q1=y/x;}else{q1=x/y}
        let C_N3_L_2 = (x+((x * (z / y) - x) * (Math.pow(q1, (1 + (x/betweenFactorSlider.value))))));
        let C_N3_L = (C_N3_L_1 + C_N3_L_2)/2;
        if (!isFinite(C_N3_L)) {C_N3_L = 0;}
        C_N3_L = C_N3_L.toFixed(2);
        colorN3.hsl = [C_N3_H, C_N3_S, C_N3_L];
        colorN3field.value = colorN3.hexString;
        colorN3RWHex.value = colorN3field.value.toString();
        colorN3.precision = 2;
        colorN3RWHex.value = colorN3.hexString;
        colorN3_r_hsl.value = "HSL(" + C_N3_H + ", " + C_N3_S + ", " + C_N3_L + ")";
    }
    function updateNextColors() {
        nextFactorReader.innerHTML = (nextFactorSlider.value/10).toString();
        // OC 1
        color1RWHex_nxt.value = color1field_nxt.value.toString();
        color1_nxt.hex = color1field_nxt.value;
        color1_nxt.precision = 2;
        color1_r_hsl_nxt.value = color1_nxt.hslString;
        // OC 3 (Next)
        color3RWHex_nxt.value = color3field_nxt.value.toString();
        color3_nxt.hex = color3field_nxt.value;
        color3_nxt.precision = 2;
        color3_r_hsl_nxt.value = color3_nxt.hslString;
        // NC 1
        colorN1RWHex_nxt.value = colorN1field_nxt.value.toString();
        colorN1_nxt.hex = colorN1field_nxt.value;
        colorN1_nxt.precision = 2;
        colorN1_r_hsl_nxt.value = colorN1_nxt.hslString;
        // NC 3 (Next)
        let C_N3_H_1 = ((colorN1_nxt.hsl[0] + color3_nxt.hsl[0] - color1_nxt.hsl[0]));
        if ((180-C_N3_H_1)<=0) {C_N3_H_1 = C_N3_H_1 - 360;}
        let C_N3_H = (C_N3_H_1)/1;
        if (!isFinite(C_N3_H)) {C_N3_H = 0;}
        if (Math.sign(C_N3_H)===-1) {C_N3_H = 360 + C_N3_H;}
        C_N3_H = C_N3_H.toFixed(2);
        let x = colorN1_nxt.hsl[1];
        let y = color1_nxt.hsl[1];
        let z = color3_nxt.hsl[1];
        let q1;
        if (x>y) {q1=y/x;}else{q1=x/y}
        let C_N3_S_1 = (x+((x * (z / y) - x) * (Math.pow(q1, (1 + (x/(nextFactorSlider.value/10)))))));
        let C_N3_S = (C_N3_S_1)/1;
        if (!isFinite(C_N3_S)) {C_N3_S = 0;}
        C_N3_S = C_N3_S.toFixed(2);
        x = colorN1_nxt.hsl[2];
        y = color1_nxt.hsl[2];
        z = color3_nxt.hsl[2];
        if (x>y) {q1=y/x;}else{q1=x/y}
        let C_N3_L_1 = (x+((x * (z / y) - x) * (Math.pow(q1, (1 + (x/(nextFactorSlider.value/10)))))));
        let C_N3_L = (C_N3_L_1)/1;
        if (!isFinite(C_N3_L)) {C_N3_L = 0;}
        C_N3_L = C_N3_L.toFixed(2);
        colorN3_nxt.hsl = [C_N3_H, C_N3_S, C_N3_L];
        colorN3field_nxt.value = colorN3_nxt.hexString;
        colorN3RWHex_nxt.value = colorN3field_nxt.value.toString();
        colorN3_nxt.precision = 2;
        colorN3RWHex_nxt.value = colorN3_nxt.hexString;
        colorN3_r_hsl_nxt.value = "HSL(" + C_N3_H + ", " + C_N3_S + ", " + C_N3_L + ")";
    }
    updateBetweenColors();
    updateNextColors();

    function resetBetweenSlider() {
        betweenFactorSlider.value = 1000;
        updateBetweenColors();
    }
    function resetNextSlider() {
        nextFactorSlider.value = 1000;
        updateNextColors();
    }
    resetBetweenSlider();
    resetNextSlider();
    reset_between_slider.addEventListener('click', resetBetweenSlider);
    reset_next_slider.addEventListener('click', resetNextSlider);


    betweenFactorSlider.addEventListener('input', updateBetweenColors);
    nextFactorSlider.addEventListener('input', updateNextColors);

    color1field.addEventListener('input', updateBetweenColors);
    color1RWHex.addEventListener('change', updateBetweenColors);
    color1RWHex.addEventListener('input', updateColor1);

    color2field.addEventListener('input', updateBetweenColors);
    color2RWHex.addEventListener('change', updateBetweenColors);
    color2RWHex.addEventListener('input', updateColor2);

    color3field.addEventListener('input', updateBetweenColors);
    color3RWHex.addEventListener('change', updateBetweenColors);
    color3RWHex.addEventListener('input', updateColor3);

    colorN1field.addEventListener('input', updateBetweenColors);
    colorN1RWHex.addEventListener('change', updateBetweenColors);
    colorN1RWHex.addEventListener('input', updateNewColor1);

    colorN2field.addEventListener('input', updateBetweenColors);
    colorN2RWHex.addEventListener('change', updateBetweenColors);
    colorN2RWHex.addEventListener('input', updateNewColor2);

    colorN3field.addEventListener('change', updateBetweenColors);
    colorN3_r_hsl.addEventListener('change', updateNewColor3);

    color1field_nxt.addEventListener('input', updateNextColors);
    color1RWHex_nxt.addEventListener('change', updateNextColors);
    color1RWHex_nxt.addEventListener('input', updateColor1_N);

    color3field_nxt.addEventListener('input', updateNextColors);
    color3RWHex_nxt.addEventListener('change', updateNextColors);
    color3RWHex_nxt.addEventListener('input', updateColor3_N);

    colorN1field_nxt.addEventListener('input', updateNextColors);
    colorN1RWHex_nxt.addEventListener('change', updateNextColors);
    colorN1RWHex_nxt.addEventListener('input', updateNewColor1_N);

    colorN3field_nxt.addEventListener('change', updateNextColors);
    colorN3_r_hsl_nxt.addEventListener('change', updateNewColor3_N);

    function updateColor1() {
        color1field.value = color1RWHex.value;
        color1.hex = color1field.value;
        color1_r_hsl.value = color1.hslString;
    }
    function updateColor2() {
        color2field.value = color2RWHex.value;
        color2.hex = color2field.value;
        color2_r_hsl.value = color2.hslString;
    }
    function updateColor3() {
        color3field.value = color3RWHex.value;
        color3.hex = color3field.value;
        color3_r_hsl.value = color3.hslString;
    }
    function updateNewColor1() {
        colorN1field.value = colorN1RWHex.value;
        colorN1.hex = colorN1field.value;
        colorN1_r_hsl.value = colorN1.hslString;
    }
    function updateNewColor2() {
        colorN2field.value = colorN2RWHex.value;
        colorN2.hex = colorN2field.value;
        colorN2_r_hsl.value = colorN2.hslString;
    }
    function updateNewColor3() {
        colorN3RWHex.value = colorN3.hexString;
        colorN3_r_hsl.value = colorN3.hslString;
    }
    function updateColor1_N() {
        color1field_nxt.value = color1RWHex_nxt.value;
        color1_nxt.hex = color1field_nxt.value;
        color1_r_hsl_nxt.value = color1_nxt.hslString;
    }
    function updateColor3_N() {
        color3field_nxt.value = color3RWHex_nxt.value;
        color3_nxt.hex = color3field_nxt.value;
        color3_r_hsl_nxt.value = color3_nxt.hslString;
    }
    function updateNewColor1_N() {
        colorN1field_nxt.value = colorN1RWHex_nxt.value;
        colorN1_nxt.hex = colorN1field_nxt.value;
        colorN1_r_hsl_nxt.value = colorN1_nxt.hslString;
    }
    function updateNewColor3_N() {
        colorN3RWHex_nxt.value = colorN3_nxt.hexString;
        colorN3_r_hsl_nxt.value = colorN3_nxt.hslString;
    }
}
initColorRW();


let paletteCount = 1; // Default palette count
const paletteCountInput = document.getElementById("palette-count");
function setPaletteCount(count) {
    paletteCount = count;
}

paletteCountInput.addEventListener('input', () => {
    setPaletteCount(paletteCountInput.value);
    buildColorSelectors();
});
paletteCountInput.addEventListener('change', () => {
    setPaletteCount(paletteCountInput.value);
    buildColorSelectors();
});


function oklab_updateColorA(paletteIndex) {
    let oklabColorA_field = document.getElementById("oklabColor" + (paletteIndex + 1) + "ARgbSelector");
    let oklabColorARWHex = document.getElementById("oklabColor" + (paletteIndex + 1) + "ARWHex");
    oklabColorA_field.value = oklabColorARWHex.value;
}
function oklab_updateColorB(paletteIndex) {
    let oklabColorB_field = document.getElementById("oklabColor" + (paletteIndex+ 1) + "BRgbSelector");
    let oklabColorBRWHex = document.getElementById("oklabColor" + (paletteIndex+ 1) + "BRWHex");
    oklabColorB_field.value = oklabColorBRWHex.value;
}

function colorABSelector(paletteIndex) {
    let oklabColorA_field = document.getElementById("oklabColor" + (paletteIndex + 1) + "ARgbSelector");
    let oklabColorARWHex = document.getElementById("oklabColor" + (paletteIndex + 1) + "ARWHex");
    let oklabColorARgbP = document.getElementById("oklabColor" + (paletteIndex + 1) + "ARgbP");
    let oklabColorARgbRectR = document.getElementById("oklabColor" + (paletteIndex + 1) + "ARgbRectR");
    let oklabColorARgbRectG = document.getElementById("oklabColor" + (paletteIndex + 1) + "ARgbRectG");
    let oklabColorARgbRectB = document.getElementById("oklabColor" + (paletteIndex + 1) + "ARgbRectB");
    let oklabColorB_field = document.getElementById("oklabColor" + (paletteIndex + 1) + "BRgbSelector");
    let oklabColorBRWHex = document.getElementById("oklabColor" + (paletteIndex + 1) + "BRWHex");
    let oklabColorBRgbP = document.getElementById("oklabColor" + (paletteIndex + 1) + "BRgbP");
    let oklabColorBRgbRectR = document.getElementById("oklabColor" + (paletteIndex + 1) + "BRgbRectR");
    let oklabColorBRgbRectG = document.getElementById("oklabColor" + (paletteIndex + 1) + "BRgbRectG");
    let oklabColorBRgbRectB = document.getElementById("oklabColor" + (paletteIndex + 1) + "BRgbRectB");
    let oklabColorA = new Color();
    let oklabColorB = new Color();
    // Color A
    oklabColorARWHex.value = oklabColorA_field.value.toString();
    oklabColorA.hex = oklabColorA_field.value;
    oklabColorA.precision = 2;
    oklabColorARgbP.value = ((oklabColorA.rgb[0] / 255) * 100).toFixed(1) + "%, " + ((oklabColorA.rgb[1] / 255) * 100).toFixed(1) + "%, " + ((oklabColorA.rgb[2] / 255) * 100).toFixed(1) + "%";
    const a_r = Number((oklabColorA.rgb[0] / 255 * 100).toFixed(1));
    const a_g = Number((oklabColorA.rgb[1] / 255 * 100).toFixed(1));
    const a_b = Number((oklabColorA.rgb[2] / 255 * 100).toFixed(1));
    const a_rgb = a_r + a_g + a_b;
    const a_w = Math.pow(a_rgb*3.17 + 237, 0.731) ; // Full width for the rectangles
    const a_x = (a_rgb === 0) ? 1 : 0;
    oklabColorARgbRectR.style.width = ((a_r + a_x) / a_rgb) * a_w + "px";
    oklabColorARgbRectR.style.height = "5px";
    oklabColorARgbRectG.style.marginLeft = ((a_r + a_x) / a_rgb) * a_w + "px";
    oklabColorARgbRectG.style.width = ((a_g + a_x) / a_rgb) * a_w + "px";
    oklabColorARgbRectG.style.height = "5px";
    oklabColorARgbRectB.style.marginLeft = (((a_r + a_x) + a_g) / a_rgb) * a_w + "px";
    oklabColorARgbRectB.style.width = ((a_b + a_x) / a_rgb) * a_w + "px";
    oklabColorARgbRectB.style.height = "5px";

    // Color B
    oklabColorBRWHex.value = oklabColorB_field.value.toString();
    oklabColorB.hex = oklabColorB_field.value;
    oklabColorB.precision = 2;
    oklabColorBRgbP.value = ((oklabColorB.rgb[0] / 255) * 100).toFixed(1) + "%, " + ((oklabColorB.rgb[1] / 255) * 100).toFixed(1) + "%, " + ((oklabColorB.rgb[2] / 255) * 100).toFixed(1) + "%";
    const b_r = Number(((oklabColorB.rgb[0] / 255) * 100).toFixed(1)) ;
    const b_g = Number(((oklabColorB.rgb[1] / 255) * 100).toFixed(1));
    const b_b = Number(((oklabColorB.rgb[2] / 255) * 100).toFixed(1));
    const b_rgb = b_r + b_g + b_b;
    const b_x = (b_rgb === 0) ? 1 : 0;
    const b_w = Math.pow(b_rgb*3.17 + 237, 0.731); // Full width for the rectangles
    oklabColorBRgbRectR.style.width = ((b_r + b_x) / b_rgb) * b_w + "px";
    oklabColorBRgbRectR.style.height = "5px";
    oklabColorBRgbRectG.style.marginLeft = ((b_r + b_x) / b_rgb) * b_w + "px";
    oklabColorBRgbRectG.style.width = ((b_g + b_x) / b_rgb) * b_w + "px";
    oklabColorBRgbRectG.style.height = "5px";
    oklabColorBRgbRectB.style.marginLeft = (((b_r + b_x + b_g)) / b_rgb) * b_w + "px";
    oklabColorBRgbRectB.style.width = ((b_b + b_x) / b_rgb) * b_w + "px";
    oklabColorBRgbRectB.style.height = "5px";
}

function initColorSelectors() {
    for (let i = 0; i < paletteCount; i++) {
        let oklabColorA_field = document.getElementById("oklabColor" + (i + 1) + "ARgbSelector");
        let oklabColorARWHex = document.getElementById("oklabColor" + (i + 1) + "ARWHex");
        let oklabColorB_field = document.getElementById("oklabColor" + (i + 1) + "BRgbSelector");
        let oklabColorBRWHex = document.getElementById("oklabColor" + (i + 1) + "BRWHex");

        oklabColorA_field.addEventListener('input', () => colorABSelector(i));
        oklabColorARWHex.addEventListener('change', () => colorABSelector(i));
        oklabColorARWHex.addEventListener('input', () => oklab_updateColorA(i));

        oklabColorB_field.addEventListener('input', () => colorABSelector(i));
        oklabColorBRWHex.addEventListener('change', () => colorABSelector(i));
        oklabColorBRWHex.addEventListener('input', () => oklab_updateColorB(i));
        colorABSelector(i);
        oklab_updateColorA(i);
        oklab_updateColorB(i);
    }
}

function savePalettesToStorage() {
    const inputs = document.querySelectorAll("#color-form input:not(#generate_button):not(#palette-count)");
    const existingData = JSON.parse(sessionStorage.getItem("paletteData") || "{}");
    const newData = {};

    inputs.forEach(input => {
        newData[input.id] = input.value;
    });

    // Merge existing data with new data
    const mergedData = { ...existingData, ...newData };
    sessionStorage.setItem("paletteData", JSON.stringify(mergedData));
}

function loadPalettesFromStorage() {
    const data = JSON.parse(sessionStorage.getItem("paletteData") || "{}");
    const inputs = document.querySelectorAll("#color-form input:not(#generate_button):not(#palette-count)");

    // Temporarily disable event listeners to prevent recursion
    inputs.forEach(input => {
        input.removeEventListener("input", savePalettesToStorage);
    });

    Object.keys(data).forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.value = data[id];
            input.dispatchEvent(new Event("input", { bubbles: true }));
        }
    });

    // Reattach event listeners after loading
    inputs.forEach(input => {
        input.addEventListener("input", savePalettesToStorage);
    });
}

// Attach event listeners to save data on input change
function attachInputListeners() {
    const inputs = document.querySelectorAll("#color-form input");
    inputs.forEach(input => {
        input.addEventListener("input", savePalettesToStorage);
    });
}

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.shiftKey && event.key === "R") {
        sessionStorage.clear();
    }
});

function buildColorSelectors() {
    setPaletteCount(paletteCountInput.value);

    // Clear existing dynamically created selectors
    const colorForm = document.getElementById("color-form");
    // Remove all existing color lines and color count lines
    const existingSelectors = document.querySelectorAll(".color-line-oklab, .color-count-line, .group-divider, .color-divider, .count-divider");
    existingSelectors.forEach(selector => selector.remove());

    // Add selectors dynamically based on the updated palette count
    for (let i = 0; i < paletteCount; i++) {
        const colorLineA = document.createElement("div");
        colorLineA.className = "color-line-oklab";

        const labelA = document.createElement("span");
        labelA.innerHTML = `Color <code>A</code> ${i + 1}:&nbsp;&nbsp;`;

        const inputA = document.createElement("input");
        inputA.id = `oklabColor${i + 1}ARgbSelector`;
        inputA.className = "slctr_rgb slctr_rgb_a";
        inputA.type = "color";

        const hexInputA = document.createElement("input");
        hexInputA.id = `oklabColor${i + 1}ARWHex`;
        hexInputA.className = "rw_hex";
        hexInputA.type = "text";

        // Envelope the span elements in another span to ensure proper layout
        const rectLineA = document.createElement("span");
        rectLineA.className = "oklabColorRgbRectsA";

        const rectRA = document.createElement("span");
        rectRA.id = `oklabColor${i + 1}ARgbRectR`;
        rectRA.className = "oklabColorRgbRectR";

        const rectBA = document.createElement("span");
        rectBA.id = `oklabColor${i + 1}ARgbRectB`;
        rectBA.className = "oklabColorRgbRectB";

        const rectGA = document.createElement("span");
        rectGA.id = `oklabColor${i + 1}ARgbRectG`;
        rectGA.className = "oklabColorRgbRectG";

        // Append the SVG rectangles to the rectLineA
        rectLineA.appendChild(rectRA);
        rectLineA.appendChild(rectGA);
        rectLineA.appendChild(rectBA);

        const rgbPA = document.createElement("input");
        rgbPA.id = `oklabColor${i + 1}ARgbP`;
        rgbPA.className = "r_rgbP";
        rgbPA.type = "text";
        rgbPA.readOnly = true;

        const colorLineB = document.createElement("div");
        colorLineB.className = "color-line-oklab";

        const labelB = document.createElement("span");
        labelB.innerHTML = `Color <code>B</code> ${i + 1}:&nbsp;&nbsp;`;

        const inputB = document.createElement("input");
        inputB.id = `oklabColor${i + 1}BRgbSelector`;
        inputB.className = "slctr_rgb slctr_rgb_b";
        inputB.type = "color";

        const hexInputB = document.createElement("input");
        hexInputB.id = `oklabColor${i + 1}BRWHex`;
        hexInputB.className = "rw_hex";
        hexInputB.type = "text";

        // Envelope the span elements in another span to ensure proper layout
        const rectLineB = document.createElement("span");
        rectLineB.className = "oklabColorRgbRectsB";

        const rectRB = document.createElement("span");
        rectRB.id = `oklabColor${i + 1}BRgbRectR`;
        rectRB.className = "oklabColorRgbRectR";

        const rectBB = document.createElement("span");
        rectBB.id = `oklabColor${i + 1}BRgbRectB`;
        rectBB.className = "oklabColorRgbRectB";

        const rectGB = document.createElement("span");
        rectGB.id = `oklabColor${i + 1}BRgbRectG`;
        rectGB.className = "oklabColorRgbRectG";

        // Append the SVG rectangles to the rectLineB
        rectLineB.appendChild(rectRB);
        rectLineB.appendChild(rectGB);
        rectLineB.appendChild(rectBB);

        const rgbPB = document.createElement("input");
        rgbPB.id = `oklabColor${i + 1}BRgbP`;
        rgbPB.className = "r_rgbP";
        rgbPB.type = "text";
        rgbPB.readOnly = true;

        // Create color count input
        const colorCountLine = document.createElement("div");
        colorCountLine.className = "color-count-line";

        const colorCountLabel = document.createElement("label");
        colorCountLabel.setAttribute("for", `color-count_${i + 1}`);
        colorCountLabel.innerText = `Color count for Palette ${i + 1}: `;

        const colorCountInput = document.createElement("input");
        colorCountInput.id = `color-count_${i + 1}`;
        colorCountInput.name = `color-count_${i + 1}`;
        colorCountInput.type = "number";
        colorCountInput.style.width = "3em";
        colorCountInput.min = "3";
        colorCountInput.max = "317";
        colorCountInput.value = "8";

        colorCountLine.appendChild(colorCountLabel);
        colorCountLine.appendChild(colorCountInput);

        const divider_color = document.createElement("div");
        divider_color.className = "color-divider";
        const divider_count = document.createElement("div");
        divider_count.className = "count-divider";
        const divider_group = document.createElement("div");
        divider_group.className = "group-divider";

        // Append elements for Color A
        colorLineA.appendChild(labelA);
        colorLineA.appendChild(inputA);
        colorLineA.appendChild(hexInputA);
        colorLineA.appendChild(rectLineA);
        colorLineA.appendChild(rgbPA);

        // Append elements for Color B
        colorLineB.appendChild(labelB);
        colorLineB.appendChild(inputB);
        colorLineB.appendChild(hexInputB);
        colorLineB.appendChild(rectLineB);
        colorLineB.appendChild(rgbPB);

        const tail = document.getElementById("generate_button");

        // Insert into the form before the generate button
        colorForm.insertBefore(colorLineA, tail);
        colorForm.insertBefore(divider_color, tail);
        colorForm.insertBefore(colorLineB, tail);
        colorForm.insertBefore(divider_count, tail);
        colorForm.insertBefore(colorCountLine, tail);
        colorForm.insertBefore(divider_group, tail);
    }
    initColorSelectors();
    attachInputListeners(); // Reattach listeners after rebuilding
    loadPalettesFromStorage(); // Load saved data
}
buildColorSelectors();

const getHexFromRGB = (rgb) => `#${Number(rgb[0]).toString(16).padStart(2, "0")}${Number(rgb[1]).toString(16).padStart(2, "0")}${Number(rgb[2]).toString(16).padStart(2, "0")}`;

const handleResult = (palettes) => {
    const palettesElement = document.getElementById("palettes");
    palettesElement.innerHTML = "";
    palettes.forEach((palette, paletteIndex) => {
        const paletteElement = document.createElement("div");
        palettesElement.appendChild(paletteElement);
        const paletteLabelElement = document.createElement("span");
        paletteLabelElement.innerText = `Palette ${paletteIndex + 1}:`
        paletteLabelElement.style.lineHeight = "1";
        paletteLabelElement.style.display = "block";
        paletteLabelElement.style.marginBottom = ".125em";
        paletteElement.appendChild(paletteLabelElement);
        const paletteColorsElement = document.createElement("div");
        paletteColorsElement.style.display = "flex";
        paletteColorsElement.style.flexWrap = "wrap";
        paletteColorsElement.style.marginBottom = ".25em";
        paletteElement.appendChild(paletteColorsElement);
        for (const color of palette) {
            const hex = getHexFromRGB(color);
            const paletteColorElement = document.createElement("div");
            paletteColorElement.addEventListener("click", () => {
                const detailsColor = document.getElementById("details-color");
                const detailsHex = document.getElementById("details-hex");
                const detailsRGB = document.getElementById("details-rgb");
                detailsColor.style.backgroundColor = hex;
                detailsHex.innerText = `Hex: ${hex}`;
                detailsRGB.innerText = `RGB: (${color[0]}, ${color[1]}, ${color[2]})`;
            });
            paletteColorElement.style.backgroundColor = hex;
            paletteColorElement.style.width = "2em";
            paletteColorElement.style.height = "2em";
            paletteColorsElement.appendChild(paletteColorElement);
        }
    });
}

document.getElementById("color-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const result = [];
    for (let i = 0; i < paletteCount; i++) {
        const colorCount = document.getElementById(`color-count_${i + 1}`).value;
        const colorA_rgb = document.getElementById(`oklabColor${i + 1}ARgbSelector`).value;
        const colorB_rgb = document.getElementById(`oklabColor${i + 1}BRgbSelector`).value;

        // Convert hex to RGB array
        const colorA = colorA_rgb.match(/\w\w/g).map(x => parseInt(x, 16));
        const colorB = colorB_rgb.match(/\w\w/g).map(x => parseInt(x, 16));

        // Generate palette
        result.push(interpolateOklabHSL(colorA, colorB, colorCount - 1));
    }
    handleResult(result);
    document.getElementById("click-instructions").style.display = "block";
});

function oklab_to_linear_srgb(L, a, b) {
    let l_ = L + 0.3963377774 * a + 0.2158037573 * b;
    let m_ = L - 0.1055613458 * a - 0.0638541728 * b;
    let s_ = L - 0.0894841775 * a - 1.2914855480 * b;

    let l = l_ * l_ * l_;
    let m = m_ * m_ * m_;
    let s = s_ * s_ * s_;

    return [
        (+4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
        (-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
        (-0.0041960863 * l - 0.7034186147 * m + 1.7076147010 * s),
    ];
}

// --- Constants for sRGB → OKLab conversion
const M1 = [
    [0.4122214708, 0.5363325363, 0.0514459929],
    [0.2119034982, 0.6806995451, 0.1073969566],
    [0.0883024619, 0.2817188376, 0.6299787005],
];
const M2 = [
    [0.2104542553, 0.7936177850, -0.0040720468],
    [1.9779984951, -2.4285922050, 0.4505937099],
    [0.0259040371, 0.7827717662, -0.8086757660],
];

function linearRgbToOklab([r, g, b]) {
    const l = M1[0][0] * r + M1[0][1] * g + M1[0][2] * b;
    const m = M1[1][0] * r + M1[1][1] * g + M1[1][2] * b;
    const s = M1[2][0] * r + M1[2][1] * g + M1[2][2] * b;

    const l_ = Math.cbrt(l);
    const m_ = Math.cbrt(m);
    const s_ = Math.cbrt(s);

    return [
        M2[0][0] * l_ + M2[0][1] * m_ + M2[0][2] * s_,
        M2[1][0] * l_ + M2[1][1] * m_ + M2[1][2] * s_,
        M2[2][0] * l_ + M2[2][1] * m_ + M2[2][2] * s_,
    ];
}

function interpolateOklabHSL(hex1, hex2, steps) {
    const rgb1 = typeof hex1 === 'string' ? hex1.match(/\w\w/g).map(x => parseInt(x, 16)) : hex1;
    const rgb2 = typeof hex2 === 'string' ? hex2.match(/\w\w/g).map(x => parseInt(x, 16)) : hex2;

    const lab1 = linearRgbToOklab([rgb1[0] / 255, rgb1[1] / 255, rgb1[2] / 255]);
    const lab2 = linearRgbToOklab([rgb2[0] / 255, rgb2[1] / 255, rgb2[2] / 255]);

    const result = [];
    for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const L = lab1[0] + (lab2[0] - lab1[0]) * t;
        const a = lab1[1] + (lab2[1] - lab1[1]) * t;
        const b = lab1[2] + (lab2[2] - lab1[2]) * t;

        const rgb = oklab_to_linear_srgb(L, a, b); // <- you provide this
        result.push(rgb.map(v => Math.round(Math.max(0, Math.min(1, v)) * 255)));
    }

    return result;
}