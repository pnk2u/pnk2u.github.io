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