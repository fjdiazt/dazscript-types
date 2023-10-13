declare class DzPathComboBox extends DzWidget {
    /**
     *
     * @param parent The widget parent for the path combobox.
     * @param userMarkableView Whether or not to use a view with check boxes.
     */
    constructor(parent: DzWidget, userMarkableView?: boolean);

    clearSelection(): any;
    currentType(): any;
    currentTypeContainer(): any; // TODO: DzTypeAssetContainer
    getRoot(): any;
    getSelectionPath(): string[];
    setEmptyText(p0: string): void;
    setSelection(idPath: Array<string>): void;
    setTopLevelType(idPath: Array<string>): any;
    setTypes(p0: Array<any>): any;

    // Signals
    pathSelectionChanged: ISignalT<string>; //pathSelectionChanged(p0: string): any;
}