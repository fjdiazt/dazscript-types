declare class DzPresetHelper {
    static Ignore: number; // 0
    static Replace: number; // 1

    objectName: string; //
    clearFoundImages(): any;
    setShouldAskForImages(flag: boolean): any;
    getShouldAskForImages(): boolean;
    setTargetElement(element: DzElement): any;
    getTargetElement(): DzElement;
    collectMaterials(node: DzNode, flag: boolean, selected: boolean, root: boolean): any;
    getCollectedMaterials(): DzMaterial[];
    getCollectedMaterialShapes(): DzShape[];
    clearCollectedMaterials(): any;
    checkAnimationRange(value: number): any;
    getImage(s: string, f: number, i: number): any;
    getImage(s: string, f: number): any;
    getImage(s: string): any;
    getMapSetting(): number;
    //setMapSetting(MapSetting): any;
    //setMorphProperty(s: string, QVariantList): any;
    setColorProperty(name: string, list: QVariant[], value?: string): any;
    //setColorProperty(s: string, QVariantList): any;
    setNumericProperty(name: string, list: QVariant[], value?: string): any;
    //setNumericProperty(s: string, QVariantList): any;
    setNumericPropertyWithAttributes(name: string, flag: boolean, d: number, d2: number, list: QVariant[], value?: string): any;
    //setNumericPropertyWithAttributes(s: string, bool, double, double, QVariantList): any;
    setPropertyWithString(property: string, value: string): any;
    //setTransformProperty(s: string, QVariantList): any;
    //setTransformPropertyWithAttributes(s: string, bool, double, double, QVariantList, string): any;
    //setTransformPropertyWithAttributes(s: string, bool, double, double, QVariantList): any;
    getStartTime(): DzTime;
    setStartTime(time: DzTime): any;
    getDoMorphs(): boolean;
    setDoMorphs(flag: boolean): any;
    getXRot(): boolean;
    getYRot(): boolean;
    getZRot(): boolean;
    getXPos(): boolean;
    getYPos(): boolean;
    getZPos(): boolean;
    getGScl(): boolean;
    getXScl(): boolean;
    getYScl(): boolean;
    getZScl(): boolean;
    getLimits(): boolean;
    getTransforms(): boolean;
    setXRot(flag: boolean): any;
    setYRot(flag: boolean): any;
    setZRot(flag: boolean): any;
    setXPos(flag: boolean): any;
    setYPos(flag: boolean): any;
    setZPos(flag: boolean): any;
    setGScl(flag: boolean): any;
    setXScl(flag: boolean): any;
    setYScl(flag: boolean): any;
    setZScl(flag: boolean): any;
    setLimits(flag: boolean): any;
    setTransforms(flag: boolean): any;
    name: string; //
    className(): any;
}