/**
 * DAZScript combobox widget with a custom popup designed for choosing a path.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/pathcombobox_dz
 */
declare class DzPathComboBox extends DzWidget {

    /* Constructors */

    /**
     * @param parent DzWidget
     * @param useMarkableView boolean
     */
    constructor(parent: DzWidget, useMarkableView?: boolean);

    /* Methods */

    /**
     * Clear selection
     */
    clearSelection(): void;

    /**
     * @returns DzTypeAssetContainer current type
     */
    currentType(): DzTypeAssetContainer;

    /**
     * @returns string current type
     */
    currentType(): string; // String

    /**
     * @returns DzTypeAssetContainer
     */
    getRoot(): DzTypeAssetContainer;

    /**
     * @returns any[] returns selected paths.
     */
    getSelectionPath(): any[]; // Array

    /**
     * Sets empty text
     * @param text string
     */
    setEmptyText(text: string): void;

    /**
     * sets the current selection
     * @param idPath any[]
     */
    setSelection(idPath: any[]): void;

    /**
     * @param idPath any[]
     */
    setTopLevelType(idPath: any[]): void;

    /**
     * Sets paths for the combobox.
     * @param list any[]
     */
    setTypes(list: any[]): void;

    /* Signals */

    /**
     * @param path string
     */
    pathSelectionChanged: ISignal<string>;

    viewAboutToShow: ISignal<void>;

    /* Undocumented Augment Members */

    /** @undocumented */
    currentTypeContainer(): any; // TODO: DzTypeAssetContainer
}
