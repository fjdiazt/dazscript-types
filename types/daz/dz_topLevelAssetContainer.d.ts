declare class DzTopLevelAssetContainer extends DzAbstractAssetContainer {

    // Enums
    static csNone: number;
    static csBusy: number;
    static csFinished: number;
    static csCanceled: number;
    static csError: number;

    /* Properties */
    id: string;
    icon: QObject;
    tooltip: string;
    canCopyContainers: boolean;
    canInsertSubContainer: boolean;
    canDeleteContainer: boolean;
    canRenameContainer: boolean;
    canModifyAssets: boolean;
    useCount: number;

    /* Methods */
}