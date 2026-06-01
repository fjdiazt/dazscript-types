declare const image: Image;

const dazImage: DzImage = image;
const qtImage: QImage = image;
const width: number = image.width;
const height: number = dazImage.height;

// @ts-expect-error DAZ image type checks must not load browser DOM globals.
type BrowserImageElement = HTMLImageElement;

void qtImage;
void width;
void height;
