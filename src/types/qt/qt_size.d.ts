declare class QSize extends QObject {
    constructor();
    constructor(size: QSize);
    constructor(w: number, h: number);

    width: number;
    height: number;

    boundedTo(size: QSize): QSize;
    expandedTo(size: QSize): QSize;

    isEmpty(): boolean;
    isNull(): boolean;
    isValid(): boolean;

    /**
     * Scales the size to the specified size while respecting the aspect ratio.
     * @param size The size to scale to
     * @param aspectRatioMode The aspect ratio mode to use
     * 0 = Scale freely, do not preserve aspect ratio.
     * 1 = Scaled to a rectangle as large as possible inside size , preserving aspect ratio.
     * 2 = Scaled to a rectangle as small as possible outside size , preserving aspect ratio.
     */
    scale(size: QSize, aspectRatioMode: number): void;
    /**
     * Scales the size to the specified width and height while respecting the aspect ratio.
     * @param width The width to scale to
     * @param height The height to scale to
     * @param aspectRatioMode The aspect ratio mode to use
     * 0 = Scale freely, do not preserve aspect ratio.
     * 1 = Scaled to a rectangle as large as possible inside size , preserving aspect ratio.
     * 2 = Scaled to a rectangle as small as possible outside size , preserving aspect ratio.
     */
    scale(width: number, height: number, aspectRatioMode: number): void;

    translate(): void;
    transpose(): void;
}