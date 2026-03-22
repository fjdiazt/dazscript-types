declare class DzImageFileLayer extends QObject {
    static className(): string;
    filename: string;	//
    label: string;	//
    name: string;	//
    objectName: string;	//
    visible: boolean;	// true
    addManipulator(p0: DzImageManip): any;
    blendModeChanged(p0: DzImageBlend): void;
    className(): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    filenameChanged(p0: string): void;
    freeImageData(): any;
    getBlendMode(): any;
    getDescription(): any;
    getImageData(): any;
    getManipulator(p0: number): any;
    getMask(): any;
    getNumManipulators(): any;
    getSize(): any;
    imageDataChanged(): void;
    inherits(): any;
    insertManipulator(p0: number, p1: DzImageManip): any;
    labelChanged(p0: string): void;
    manipulatorListChanged(): void;
    maskChanged(p0: DzImageMask): void;
    removeManipulator(p0: number): any;
    removeManipulator(p0: DzImageManip): any;
    setBlendMode(p0: DzImageBlend): any;
    setMask(p0: DzImageMask): any;
    toTextureLayer(p0: DzTextureLayer, p1: QSize): any;
    visibilityChanged(p0: boolean): void;
}