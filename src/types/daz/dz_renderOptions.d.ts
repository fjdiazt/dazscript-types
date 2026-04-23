/**
 * This class manages the inclusion/exclusion of render options.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/renderoptions_dz
 */
declare class DzRenderOptions extends QObject {

    /* Properties */

    /**
     * Holds the currently set aspect ratio (w / h). (Read Only)
     */
    aspect: number; // Number

    /**
     * Holds the currently set aspect ratio height. (Read Only)
     */
    aspectHeight: number; // Number

    /**
     * Holds the currently set aspect ratio width. (Read Only)
     */
    aspectWidth: number; // Number

    /**
     * Holds whether or not to render polygons as double sided.
     */
    doubleSided: boolean; // Boolean

    /**
     * Holds the scene time of the last frame to render.
     */
    endTime: DzTime;

    /**
     * Holds the gain value.
     */
    gain: number; // Number

    /**
     * Holds the gamma value.
     */
    gamma: number; // Number

    /**
     * Holds whether or not gamma correction is enabled.
     */
    gammaCorrection: number; // GammaCorrection

    /**
     * Holds the size of the image to render.
     */
    imageSize: Size;

    /**
     * Holds whether or not to constrain the pixel dimensions of the render to the aspect ratio.
     */
    isAspectConstrained: boolean; // Boolean

    /**
     * Holds whether or not to render only the current frame.
     */
    isCurrentFrameRender: boolean; // Boolean

    /**
     * Holds the filename of the last image rendered. (Read Only)
     */
    lastRenderImgFilename: string; // String

    /**
     * Holds the filename of the last movie rendered. (Read Only)
     */
    lastRenderMovFilename: string; // String

    /**
     * Holds the base filename of the image series rendered. (Read Only)
     */
    lastRenderSerFilename: string; // String

    /**
     * Holds the time offset for blurring.
     */
    motionBlurOffset: number; // Number

    /**
     * Holds the amount of time between frames to blur across (0.0 - 1.0).
     */
    motionBlurPct: number; // Number

    /**
     * Holds the number of samples for motion blur.
     */
    motionBlurSamples: number; // Number

    /**
     * Holds the number of passes for rendering in OpenGL.
     */
    openGLPasses: number; // Number

    /**
     * Holds the pixel filter to use.
     */
    pixelFilter: number; // PixelFilter

    /**
     * Holds the raytrace depth.
     */
    rayTraceDepth: number; // Number

    /**
     * Holds the filename to save individual images to.
     */
    renderImgFilename: string; // String

    /**
     * Holds the target for rendering individual images.
     */
    renderImgToId: number; // RenderImgTarget

    /**
     * Holds the filename to save movies to.
     */
    renderMovFilename: string; // String

    /**
     * Holds the target for rendering animations.
     */
    renderMovToId: number; // RenderMovTarget

    /**
     * Holds the base filename to use when saving image series.
     */
    renderSerFilename: string; // String

    /**
     * Holds the style of the render.
     */
    renderStyle: number; // RenderStyle

    /**
     * Holds the type of the render.
     */
    renderType: number; // RenderType

    /**
     * Holds whether or not to use the aspect and size of the current viewport for the render.
     */
    renderViewport: boolean; // Boolean

    /**
     * Holds the shading rate.
     */
    shadingRate: number; // Number

    /**
     * Holds the number of samples when rendering shadows.
     */
    shadowSamples: number; // Number

    /**
     * Holds whether or not to show a preview.
     */
    showPreview: boolean; // Boolean

    /**
     * Holds the scene time of the first frame to render.
     */
    startTime: DzTime;

    /**
     * Holds whether or not to use shaders when rendering in OpenGL.
     */
    useGLSL: boolean; // Boolean

    /**
     * Holds whether or not to use motion blur.
     */
    useMotionBlur: boolean; // Boolean

    /**
     * Holds the width of the pixel filter in x.
     */
    xFilterWidth: number; // Number

    /**
     * Holds the number of samples per pixel in x.
     */
    xPixelSamples: number; // Number

    /**
     * Holds the width of the pixel filter in y.
     */
    yFilterWidth: number; // Number

    /**
     * Holds the number of samples per pixel in y.
     */
    yPixelSamples: number; // Number

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of GammaCorrection.
     */
    static GCOff: number;

    /**
     * DAZ enum member of GammaCorrection.
     */
    static GCOn: number;

    /**
     * DAZ enum member of PixelFilter.
     */
    static Box: number;

    /**
     * DAZ enum member of PixelFilter.
     */
    static Triangle: number;

    /**
     * DAZ enum member of PixelFilter.
     */
    static CatmullRom: number;

    /**
     * DAZ enum member of PixelFilter.
     */
    static Gaussian: number;

    /**
     * DAZ enum member of PixelFilter.
     */
    static Sinc: number;

    /**
     * DAZ enum member of RenderImgTarget.
     */
    static ActiveView: number;

    /**
     * DAZ enum member of RenderImgTarget.
     */
    static NewWindow: number;

    /**
     * DAZ enum member of RenderImgTarget.
     */
    static DirectToFile: number;

    /**
     * DAZ enum member of RenderMovTarget.
     */
    static MovieFile: number;

    /**
     * DAZ enum member of RenderMovTarget.
     */
    static ImageSeries: number;

    /**
     * DAZ enum member of RenderStyle.
     */
    static Normal: number;

    /**
     * DAZ enum member of RenderStyle.
     */
    static Cartoon: number;

    /**
     * DAZ enum member of RenderType.
     */
    static ScreenShot: number;

    /**
     * DAZ enum member of RenderType.
     */
    static HardwareAssisted: number;

    /**
     * DAZ enum member of RenderType.
     */
    static Software: number;

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Writes render options via the settings manager.
     */
    applyChanges(): void;

    /**
     * Copies the settings from another render options object.
     * @param opt DzRenderOptions
     * @since 4.9.3.57
     */
    copyFrom(opt: DzRenderOptions): void;

    /**
     * @param color DzFloatColor - The color to gamma correct.
     * @returns DzFloatColor If gamma correction is enabled, a linearized version of color. If gamma correction is off, color is returned unchanged.
     */
    gammaCorrectColor(color: DzFloatColor): DzFloatColor;

    /**
     * Sets values for render options found in the stored settings.
     */
    resetOptions(): void;

    /**
     * Restores the applications default settings and replaces the stored values.
     */
    restoreDefaultSettings(): void;

    /**
     * Set current aspect width for this render. Represented as widthRatio : heightRatio.
     * @param widthRatio number
     * @param heightRatio number
     */
    setAspectRatio(widthRatio: number, heightRatio: number): void;

    /**
     * Sets all options to the default values, but does not affect values of stored/remembered settings. Also, no “changed” signals are emitted when calling this method.
     */
    setToDefaults(): void;

    /* Signals */

    /**
     * Emitted when the aspect for the render has changed, or the viewport render status has changed.
     * @param w number
     * @param h number
     */
    aspectChanged: ISignal<number, number>;

    /**
     * Emitted when the constrain aspect ratio setting has changed.
     * @param onOff boolean
     */
    aspectConstrainChanged: ISignal<boolean>;

    /**
     * Emitted when the default options have been restored.
     */
    defaultsRestored: ISignal<void>;

    /**
     * Emitted when the double sided setting has changed.
     * @param onOff boolean
     */
    doubleSidedChanged: ISignal<boolean>;

    /**
     * Emitted when the end time has changed.
     * @param time DzTime
     */
    endTimeChanged: ISignal<DzTime>;

    /**
     * Emitted when the gain value has changed.
     * @param gain number
     */
    gainChanged: ISignal<number>;

    /**
     * Emitted when the gamma value has changed.
     * @param gamma number
     */
    gammaChanged: ISignal<number>;

    /**
     * Emitted when gamma correction state has changed.
     * @param gc number
     */
    gammaCorrectionChanged: ISignal<number>;

    /**
     * Emitted when the image size has changed.
     * @param size Size
     */
    imageSizeChanged: ISignal<Size>;

    /**
     * Emitted when the motion blur offset has changed.
     * @param offset number
     */
    motionBlurOffsetChanged: ISignal<number>;

    /**
     * Emitted when the motion blur percentage has changed.
     * @param pct number
     */
    motionBlurPctChanged: ISignal<number>;

    /**
     * Emitted when the motion blur samples has changed.
     * @param samples number
     */
    motionBlurSamplesChanged: ISignal<number>;

    /**
     * Emitted when the number of OpenGL passes has changed.
     * @param passes number
     */
    openGLPassesChanged: ISignal<number>;

    /**
     * Emitted when the pixel filter has changed.
     * @param filter number
     */
    pixelFilterChanged: ISignal<number>;

    /**
     * Emitted when the ray trace depth has changed.
     * @param depth number
     */
    rayTraceDepthChanged: ISignal<number>;

    /**
     * Emitted when the render current frame setting has changed.
     * @param onOff boolean
     */
    renderCurrentFrameChanged: ISignal<boolean>;

    /**
     * Emitted when the image filename for the render has changed.
     * @param filename string
     */
    renderImgFilenameChanged: ISignal<string>;

    /**
     * Emitted when the image target type for the render has changed.
     * @param id number
     */
    renderImgTargetChanged: ISignal<number>;

    /**
     * Emitted when the movie filename for the render has changed.
     * @param filename string
     */
    renderMovFilenameChanged: ISignal<string>;

    /**
     * Emitted when the movie target type for the render has changed.
     * @param id number
     */
    renderMovTargetChanged: ISignal<number>;

    /**
     * Emitted when the image series filename for the render has changed.
     * @param filename string
     */
    renderSerFilenameChanged: ISignal<string>;

    /**
     * Emitted when the render type has changed.
     * @param style number
     */
    renderStyleChanged: ISignal<number>;

    /**
     * Emitted when the render type has changed.
     * @param type number
     */
    renderTypeChanged: ISignal<number>;

    /**
     * Emitted when the render to viewport setting has changed.
     * @param onOff boolean
     */
    renderViewportChanged: ISignal<boolean>;

    /**
     * Emitted when any of the settings has changed.
     */
    settingsChanged: ISignal<void>;

    /**
     * Emitted when the shading rate has changed.
     * @param rate number
     */
    shadingRateChanged: ISignal<number>;

    /**
     * Emitted when the number of shadow samples has changed.
     * @param samples number
     */
    shadowSamplesChanged: ISignal<number>;

    /**
     * Emitted when the show preview setting has changed.
     * @param onoff boolean
     */
    showPreviewChanged: ISignal<boolean>;

    /**
     * Emitted when the start time has changed.
     * @param time DzTime
     */
    startTimeChanged: ISignal<DzTime>;

    /**
     * Emitted when the use GLSL setting has changed.
     * @param onOff boolean
     */
    useGLSLChanged: ISignal<boolean>;

    /**
     * Emitted when the motion blur setting has changed.
     * @param onOff boolean
     */
    useMotionBlurChanged: ISignal<boolean>;

    /**
     * Emitted when the X-axis filter width has changed.
     * @param width number
     */
    xFilterWidthChanged: ISignal<number>;

    /**
     * Emitted when the number of X-axis pixel samples has changed.
     * @param samples number
     */
    xPixelSamplesChanged: ISignal<number>;

    /**
     * Emitted when the Y-axis filter width has changed.
     * @param width number
     */
    yFilterWidthChanged: ISignal<number>;

    /**
     * Emitted when the number of Y-axis pixel samples has changed.
     * @param samples number
     */
    yPixelSamplesChanged: ISignal<number>;

    /* Undocumented Augment Members */

    /** @undocumented */
    getStartTime: QObject;

    /** @undocumented */
    getEndTime: DzTime;
}
