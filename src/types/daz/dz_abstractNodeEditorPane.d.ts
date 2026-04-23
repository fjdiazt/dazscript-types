/**
 * An intermediate pane class to provide common functionality to several panes.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/abstractnodeeditorpane_dz
 */
declare class DzAbstractNodeEditorPane extends DzPane {

    /* Methods */

    /**
     * @returns boolean true if each selected node is displayed separately in the navigation list, otherwise false.
     */
    displaySeparate(): boolean; // Boolean

    /**
     * @returns any The Presets page widget for this pane. Undocumented DAZ type: contenttab_dz.
     */
    getContentTab(): any; // contenttab_dz; undocumented type

    /**
     * @returns DzGuidePage The guide page displayed for the editor page when no property group or property is selected.
     */
    getEditorGuidePage(): DzGuidePage;

    /**
     * @returns DzInfoDivider The information divider for this pane.
     */
    getInfoDivider(): DzInfoDivider;

    /**
     * @returns any The Editor page widget for this pane. Undocumented DAZ type: propertysidenavhierarchy_dz.
     */
    getNodeEditor(): any; // propertysidenavhierarchy_dz; undocumented type

    /**
     * @returns DzGuidePage The guide page displayed for the presets page when no category is selected.
     */
    getPresetGuidePage(): DzGuidePage;

    /**
     * Sets the current page to the index specified by which; 0 based.
     * @param which number
     */
    setCurrentTab(which: number): void;

    /**
     * Sets whether or not hidden properties are displayed in the pane.
     * @param onOff boolean - If true, hidden properties will be visible in the parameters list, otherwise hidden properties will not be displayed in the parameters list.
     */
    showHidden(onOff: boolean): void;

    /**
     * @returns boolean true if hidden properties are shown in the parameters list, false if hidden parameters are not being displayed in the parameters list.
     */
    showingHidden(): boolean; // Boolean

    /**
     * Toggle between whether each selected node is displayed separately in the navigation list or not.
     */
    toggleDisplaySeparate(): void;

    /**
     * Toggle between whether hidden properties are shown in the list or not.
     */
    toggleShowHidden(): void;

    /* Signals */

    /**
     * Emitted when the user hovers the cursor over an asset on the Presets page
     * @param asset DzAsset
     * @since 4.6.4.112
     */
    assetHoverChanged: ISignal<DzAsset>;

    /**
     * Emitted when the current page changes
     * @param which number
     */
    currentTabChanged: ISignal<number>;

    /**
     * Emitted when the option to show hidden properties changes
     * @param onOff boolean
     */
    showingHiddenChanged: ISignal<boolean>;
}
