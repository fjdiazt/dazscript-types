declare class DzTextureLayer extends QObject {
    static BlendAdd: number;	// 1
    static BlendAlpha: number;	// 0
    static BlendMultiply: number;	// 3
    static BlendSubtract: number;	// 2
    static Rot180: number;	// 180
    static Rot270: number;	// 270
    static Rot90: number;	// 90
    static RotNone: number;	// 0

    blendMode: number;	// 0
    color: QObject;	// [object object]
    enabled: boolean;	// true
    flippedHorizontal: boolean;	// false
    flippedVertical: boolean;	// false
    imageFile: string;	//
    invert: boolean;	// false

    offset: QPoint;	// [object object]
    opacity: number;	// 1
    rotation: number;	// 0
    xOffset: number;	// 0
    xScale: number;	// 1
    yOffset: number;	// 0
    yScale: number;	// 1

    aboutToChangeMask(p0: DzTextureMask, p1: DzTextureMask): any;
    blendModeChanged(p0: number): void;
    clearMask(): any;
    colorChanged(p0: QColor): void;
    copyFrom(p0: DzTextureComponent): any;
    createMask(p0: string): any;
    dataChanged(): void;
    enabledChanged(p0: boolean): void;
    flip(p0: boolean, p1: boolean): any;
    flippedHorizontalChanged(p0: boolean): void;
    flippedVerticalChanged(p0: boolean): void;
    getMask(): any;
    imageChanged(p0: string): void;
    invertedChanged(p0: boolean): void;
    labelChanged(p0: string): void;
    loadImageData(p0: QImage): any;
    maskChanged(p0: DzTextureMask, p1: DzTextureMask): void;
    needsImageRefresh(): void;
    needsRefresh(): void;
    offsetChanged(p0: QPoint): void;
    opacityChanged(p0: number): void;
    rotationChanged(p0: number): void;
    scaleChanged(p0: number, p1: number): void;
    setMask(p0: DzTextureMask): any;
}