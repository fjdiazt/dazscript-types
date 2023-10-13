declare class DzRenderOptions extends QObject {
    static ActiveView: number;	// 0
    static Box: number;	// 0
    static Cartoon: number;	// 1
    static CatmullRom: number;	// 2
    static DirectToFile: number;	// 2
    static GCOff: number;	// 0
    static GCOn: number;	// 1
    static Gaussian: number;	// 3
    static HardwareAssisted: number;	// 1
    static ImageSeries: number;	// 1
    static MovieFile: number;	// 0
    static NewWindow: number;	// 1
    static Normal: number;	// 0
    static ScreenShot: number;	// 0
    static Sinc: number;	// 4
    static Software: number;	// 2
    static Triangle: number;	// 1

    /* Properties */
    renderImgToId: number;
    renderMovToId: number;
    renderImgFilename: string;
    renderMovFilename: string;
    renderSerFilename: string;
    lastRenderImgFilename: string;
    lastRenderMovFilename: string;
    lastRenderSerFilename: string;
    renderViewport: boolean;
    isAspectConstrained: boolean;
    aspect: number;
    aspectWidth: number;
    aspectHeight: number;
    imageSize: QObject;
    renderType: number;
    renderStyle: number;
    rayTraceDepth: number;
    openGLPasses: number;
    useGLSL: boolean;
    isCurrentFrameRender: boolean;
    getStartTime: QObject;
    startTime: DzTime;
    getEndTime: DzTime;
    endTime: DzTime;
    useMotionBlur: boolean;
    motionBlurPct: number;
    motionBlurSamples: number;
    motionBlurOffset: number;
    xPixelSamples: number;
    yPixelSamples: number;
    shadowSamples: number;
    shadingRate: number;
    doubleSided: boolean;
    gain: number;
    gamma: number;
    pixelFilter: number;
    xFilterWidth: number;
    yFilterWidth: number;
    showPreview: boolean;
    gammaCorrection: number;
    ScreenShot: number;
    HardwareAssisted: number;
    Software: number;
    ActiveView: number;
    NewWindow: number;
    DirectToFile: number;
    MovieFile: number;
    ImageSeries: number;
    Normal: number;
    Cartoon: number;
    Box: number;
    Triangle: number;
    CatmullRom: number;
    Gaussian: number;
    Sinc: number;
    GCOff: number;
    GCOn: number;

    /* Methods */
    aspectChanged(val: number): void;
    aspectChanged(w: number, h: number): void;
    aspectChanged(val: number): void;
    aspectChanged(w: number, h: number): void;
    renderImgTargetChanged(id: number): void;
    renderMovTargetChanged(id: number): void;
    renderImgFilenameChanged(filename: QString): void;
    renderMovFilenameChanged(filename: QString): void;
    renderSerFilenameChanged(filename: QString): void;
    renderViewportChanged(onOff: boolean): void;
    aspectConstrainChanged(onOff: boolean): void;
    imageSizeChanged(size: QSize): void;
    renderTypeChanged(type: number): void;
    renderStyleChanged(style: number): void;
    rayTraceDepthChanged(depth: number): void;
    openGLPassesChanged(passes: number): void;
    useGLSLChanged(onOff: boolean): void;
    renderCurrentFrameChanged(onOff: boolean): void;
    startTimeChanged(time: DzTime): void;
    endTimeChanged(time: DzTime): void;
    useMotionBlurChanged(onOff: boolean): void;
    motionBlurPctChanged(pct: number): void;
    motionBlurOffsetChanged(offset: number): void;
    motionBlurSamplesChanged(samples: number): void;
    xPixelSamplesChanged(samples: number): void;
    yPixelSamplesChanged(samples: number): void;
    shadowSamplesChanged(samples: number): void;
    shadingRateChanged(rate: number): void;
    doubleSidedChanged(onOff: boolean): void;
    gainChanged(gain: number): void;
    gammaChanged(gamma: number): void;
    pixelFilterChanged(filter: number): void;
    gammaCorrectionChanged(): any; // TODO ;
    xFilterWidthChanged(width: number): void;
    yFilterWidthChanged(width: number): void;
    showPreviewChanged(onoff: boolean): void;
    settingsChanged(): void;
    defaultsRestored(): void;
    setAspectRatio(widthRatio: number, heightRatio: number): void;
    applyChanges(): void;
    resetOptions(): void;
    restoreDefaultSettings(): void;
    setToDefaults(): void;
    gammaCorrectColor(): any; // TODO ;
    copyFrom(options: DzRenderOptions): void;
}