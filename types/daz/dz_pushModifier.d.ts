declare class DzPushModifier extends DzModifier {

    /** Properties */

    /** Methods */
    assetModified(): void;
    assetWasSaved(): void;
    createProperties(): void;
    getAssetType(): any;
    getValueChannel(): DzFloatProperty;
    toQObject(): QObject;
}