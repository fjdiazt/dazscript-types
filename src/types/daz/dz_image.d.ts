/**
 * Script wrapper for QImage.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/image
 */
declare class DzImage extends QObject {

    /* Properties */

    /**
     * Holds whether or not the image has an alpha channel.
     */
    alphaBuffer: boolean; // Boolean

    /**
     * Holds the color depth of the image. (Read-Only)
     */
    depth: number; // Number

    /**
     * Holds the X resolution of the image.
     */
    dotsPerMeterX: number; // Number

    /**
     * Holds the Y resolution of the image.
     */
    dotsPerMeterY: number; // Number

    /**
     * Holds the format of the image.
     * @since 4.9.4.4
     */
    format: number; // Format

    /**
     * Holds the height of the image. (Read-Only)
     */
    height: number; // Number

    /**
     * Holds the number of colors in the image.
     */
    numColors: number; // Number

    /**
     * Holds the number of pixels to offset the image when positioning it.
     */
    offset: Point;

    /**
     * Holds the number of pixels to offset the image when positioning it.
     */
    size: Size;

    /**
     * Holds the width of the image. (Read-Only)
     */
    width: number; // Number

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of Format.
     */
    static Format_Invalid: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_Mono: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_MonoLSB: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_Indexed8: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_RGB32: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_ARGB32: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_ARGB32_Premultiplied: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_RGB16: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_ARGB8565_Premultiplied: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_RGB666: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_ARGB6666_Premultiplied: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_RGB555: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_ARGB8555_Premultiplied: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_RGB888: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_RGB444: number;

    /**
     * DAZ enum member of Format.
     */
    static Format_ARGB4444_Premultiplied: number;

    /* Constructors */

    constructor();

    /**
     * @param width number
     * @param height number
     * @param format number
     */
    constructor(width: number, height: number, format: number);

    /**
     * @param image DzImage
     */
    constructor(image: DzImage);

    /**
     * @param filename string
     */
    constructor(filename: string);

    /* Methods */

    /**
     * Gets a color value from the color table for the image only valid for.
     * @param index number - The index of the color to look up in the table.
     * @returns Color The RGB value of the color at the given index.
     */
    color(index: number): Color;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage A copy of this image, where the pixels of this image are blended on top of other and the alpha of this image is reduced by the alpha of other.
     * @since 4.10.0.120
     */
    compositeAtop(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the other color is darkened to reflect the color of this image. White in this image leaves the other color unchanged.
     * @since 4.10.0.120
     */
    compositeColorBurn(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the other color is brightened to reflect the color of this image. Black in this image leaves the other color unchanged.
     * @since 4.10.0.120
     */
    compositeColorDodge(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the darker color of this image and other is selected.
     * @since 4.10.0.120
     */
    compositeDarken(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the darker of this image and other is subtracted from the lighter. White in this image inverts the color in other, whereas black leaves the color of other unchanged.
     * @since 4.10.0.120
     */
    compositeDifference(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the darker of this image and other is subtracted from the lighter. White in this image inverts the color in other, whereas black leaves the color of other unchanged.
     * @since 4.10.0.120
     */
    compositeExclusion(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the color of this image and other are multiplied or screened depending on the color of this image. A light color in this image will lighten the other color, whereas a dark color in this image will darken the other color.
     * @since 4.10.0.120
     */
    compositeHardLight(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage A copy of this image, where the alpha of this image is reduced by the alpha of other.
     * @since 4.10.0.120
     */
    compositeIn(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the lighter color of this image and other is selected.
     * @since 4.10.0.120
     */
    compositeLighten(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the color of this image and other are multiplied together.
     * @since 4.10.0.120
     */
    compositeMultiply(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage A copy of this image, where the alpha of this image is reduced by the inverse of the alpha of other.
     * @since 4.10.0.120
     */
    compositeOut(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage A copy of this image, where the alpha of this image is used to blend it on top of other.
     * @since 4.10.0.120
     */
    compositeOver(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the color of this image and other are multiplied or screened depending on other color. The other color is mixed with this color to reflect the lightness or darkness of other.
     * @since 4.10.0.120
     */
    compositeOverlay(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the alpha/color of this image and other are added together.
     * @since 4.10.0.120
     */
    compositePlus(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the inverse color of this image and other are multiplied together.
     * @since 4.10.0.120
     */
    compositeScreen(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage An image where the color of this image and other are darkened or lightened depending on the color of this image.
     * @since 4.10.0.120
     */
    compositeSoftLight(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * @param other DzImage - The image to composite this image with.
     * @param x number - The offset, in the horizontal direction, from the top left corner of other.
     * @param y number - The offset, in the vertical direction, from the top left corner of other.
     * @returns DzImage A copy of this image, where the alpha is reduced by the inverse of the alpha of other, is merged with other, and whose alpha is reduced by the inverse of this image alpha.
     * @since 4.10.0.120
     */
    compositeXor(other: DzImage, x?: number, y?: number): DzImage;

    /**
     * Creates a copy of the image with the given color depth.
     * @param depth number - The color depth to convert the image to.
     * @returns DzImage The image converted to the new color depth.
     */
    convertDepth(depth: number): DzImage;

    /**
     * Creates a copy of a portion of the image.
     * @param x number - The x position of the area to copy.
     * @param y number - The y position of the area to copy.
     * @param w number - The width of the area to copy.
     * @param h number - The height of the area to copy.
     * @returns DzImage A new copy of the specified area of the image.
     */
    copy(x: number, y: number, w: number, h: number): DzImage;

    /**
     * Creates a copy of a portion of the image.
     * @param rect Rect - The area to copy.
     * @returns DzImage A new copy of the specified area of the image.
     */
    copy(rect: Rect): DzImage;

    /**
     * Creates a copy of the image.
     * @returns DzImage A new copy of the image.
     */
    copy(): DzImage;

    /**
     * Clears the image data and creates a new image with the given settings.
     * @param w number - The new width for the image.
     * @param h number - The new height for the image.
     * @param depth number - The new color depth for the image.
     * @param numColors number - The number of colors for the new image.
     */
    create(w: number, h: number, depth: number, numColors?: number): void;

    /**
     * Clears the image data and creates a new image with the given settings.
     * @param size Size - The new size for the image.
     * @param depth number - The new color depth for the image.
     * @param numColors number - The number of colors for the new image.
     */
    create(size: Size, depth: number, numColors?: number): void;

    /**
     * @param x number - The offset, in the horizontal direction, from the top left corner of the image to start drawing the (left of the) text.
     * @param y number - The offset, in the vertical direction, from the top left corner of the image to start drawing the (top of the) text.
     * @param text string - The text to draw.
     * @param font Font - The font to use when drawing the text.
     * @param color Color - The color to use when drawing the text.
     * @param flags number - A bitwise OR of the following flags:
    
     DzWidget::AlignLeft
    
     DzWidget::AlignRight
    
     DzWidget::AlignHCenter
    
     DzWidget::AlignJustify
    
     DzWidget::AlignTop
    
     DzWidget::AlignBottom
    
     DzWidget::AlignVCenter
    
     DzWidget::AlignCenter
    
     DzWidget::TextSingleLine
    
     DzWidget::TextExpandTabs
    
     DzWidget::TextShowMnemonic
    
     DzWidget::TextWordWrap
     * @returns Rect A bounding rectangle that encloses the drawn text.
     * @since 4.10.0.121
     */
    drawText(x: number, y: number, text: string, font: Font, color: Color, flags?: number): Rect;

    /**
     * Fills the image with color.
     * @param color Color - The color to set the pixels of the image.
     */
    fill(color: Color): void;

    /**
     * @param maskColor Color - The color to mask from this image.
     * @param invert boolean - If true, the mask is inverted.
     * @param tolerance number - The allowable amount of variation from the value of maskColor to consider as maskColor.
     * @returns DzImage An image mask for the specified color.
     * @since 4.10.0.120
     */
    getColorMask(maskColor: Color, invert?: boolean, tolerance?: number): DzImage;

    /**
     * Inverts all pixels in the image.
     * @param invertAlpha boolean - If the image has a 32 bit depth, and this is true, the alpha channel will also be inverted, otherwise the alpha channel is unaffected.
     */
    invertPixels(invertAlpha?: boolean): void;

    /**
     * Gets whether or not the image is Null.
     * @returns boolean true if the image is Null (empty), otherwise .
     */
    isNull(): boolean; // Boolean

    /**
     * Loads data for the image from a file.
     * @param filename string - The name of the file to load into the image.
     * @param format string - The image format of the bytes in the file pointed to by filename.If this is an empty string (default), an image format will be chosen from fileName extension. Supported image formats are BMP, GIF, JPG, JPEG, PNG, PBM, PGM, PPM, XBM, XPM and SVG. (since 4.11.0.155)
     * @returns boolean true if the data was loaded, otherwise false. (since 4.11.0.155)
     */
    load(filename: string, format?: string): boolean; // Boolean

    /**
     * Loads data into the image from a byte array using the specified format.
     * @param data ByteArray - The binary data to load into the image.
     * @param format string - The image format of the bytes in data. Supported image formats are BMP, GIF, JPG, JPEG, PNG, PBM, PGM, PPM, XBM, XPM and SVG.
     * @returns boolean true if the data was loaded, otherwise false.
     * @since 4.10.0.88
     */
    loadFromData(data: ByteArray, format?: string): boolean; // Boolean

    /**
     * Creates a copy of this image that has been mirrored vertically.
     * @returns DzImage The mirrored copy of the image.
     */
    mirror(): DzImage;

    /**
     * Creates a copy of this image that has been mirrored.
     * @param horizontal boolean - If true, the image will be mirrored horizontally.
     * @param vertical boolean - If true, the image will be mirrored vertically.
     * @returns DzImage The mirrored copy of the image.
     */
    mirror(horizontal: boolean, vertical: boolean): DzImage;

    /**
     * Gets the color value of an individual pixel.
     * @param x number - The x position of the pixel.
     * @param y number - The y position of the pixel.
     * @returns Color The value of the pixel at the given location.
     */
    pixel(x: number, y: number): Color;

    /**
     * Saves the image to a file.
     * @param filename string - The name of the file to save the image to.
     */
    save(filename: string): void;

    /**
     * Creates a new image that is a scaled version of this image.
     * @param size Size - The size of the new image.
     * @returns DzImage The new scaled image.
     */
    scale(size: Size): DzImage;

    /**
     * Creates a new image that is a scaled version of this image.
     * @param width number - The width of the new image.
     * @param height number - The height of the new image.
     * @returns DzImage The new scaled image.
     */
    scale(width: number, height: number): DzImage;

    /**
     * @param img DzImage - The image to set the alpha of this image from.
     * @returns boolean false if img is null, otherwise true.
     * @since 4.10.0.120
     */
    setAlphaFromImage(img: DzImage): boolean; // Boolean

    /**
     * Sets the color value of a color in the color table.
     * @param index number - The index of the color in the color table to change.
     * @param color Color - The new value for the color.
     */
    setColor(index: number, color: Color): void;

    /**
     * Sets the color value of the given pixel.
     * @param x number - The x position of the pixel to change.
     * @param y number - The y position of the pixel to change.
     * @param color Color - The new value for the pixel.
     */
    setPixel(x: number, y: number, color: Color): void;

    /**
     * Sets the image text to text and associates it with key.
     * @param key string - The name of the key to associate the embedded text with.
     * @param text string - The text to embedd and associate with the key.
     * @since 4.9.3.78
     */
    setText(key: string, text: string): void;

    /**
     * Creates a new image that is a scaled version of this image.
     * @param width number - The width of the new image.
     * @param height number - The height of the new image.
     * @returns DzImage The new scaled image.
     */
    smoothScale(width: number, height: number): DzImage;

    /**
     * Creates a new image that is a scaled version of this image.
     * @param size Size - The size of the new image.
     * @returns DzImage The new scaled image.
     */
    smoothScale(size: Size): DzImage;

    /**
     * Creates a copy of the image in which the Red and Blue values have been swapped.
     * @returns DzImage A BGR version of the image.
     */
    swapRGB(): DzImage;

    /**
     * @param key string - The name of the key to get the associated text of.
     * @since 4.9.3.78
     */
    text(key?: string): void;

    /**
     * @returns any[] The text keys for this image.
     * @since 4.9.3.78
     */
    textKeys(): any[]; // Array
}
