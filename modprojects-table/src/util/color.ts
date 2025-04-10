export const getColorAtTopLeft = (imageSrc: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imageSrc;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.drawImage(img, 0, 0);
                const pixel = ctx.getImageData(0, 0, 1, 1).data;
                const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
                resolve(color);
            } else {
                reject('Could not get canvas context');
            }
        };

        img.onerror = () => {
            reject('Image failed to load');
        };
    });
};

export function activateThemeToggleButton() {
    /* dark/pink theme toggle */
    const toggleButton1 = document.getElementById("theme-toggle-1");
    const toggleButton2 = document.getElementById("theme-toggle-2");
    if (toggleButton1 && toggleButton2) {
        toggleButton1.addEventListener("click", () => {
            const body = document.body;
            const currentTheme = body.getAttribute("data-theme");

            if (currentTheme === "dark") {
                body.setAttribute("data-theme", "light");
                toggleButton1.innerHTML = "Dark Mode";
                toggleButton2.innerHTML = "LieOnMode";
            } else {
                body.setAttribute("data-theme", "dark");
                toggleButton1.innerHTML = "Pink Mode";
                toggleButton2.innerHTML = "LieOnMode";
            }
        })


    /* lieon theme toggle */

        toggleButton2.addEventListener("click", () => {
            const body = document.body;
            const currentTheme = body.getAttribute("data-theme");

            if (currentTheme !== "lieon") {
                body.setAttribute("data-theme", "lieon");
                toggleButton1.innerHTML = "Dark Mode";
                toggleButton2.innerHTML = "Pink Mode";
            } else {
                body.setAttribute("data-theme", "light");
                toggleButton1.innerHTML = "Dark Mode";
                toggleButton2.innerHTML = "LieOnMode";
            }
        })
    }
}