/**
 * Tab bar that provides Tips, MetaData, and Info tabs…
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/infotabs_dz
 */
declare class DzInfoTabs extends QWidget {

    /* Methods */

    /**
     * @returns number The index of the current tab
     */
    currentTab(): number; // Number

    /**
     * @returns string The default path to the script to execute in order to create the UI in the Tips page, sans extension.
     * @since 4.10.0.44
     */
    getTipDefaultScriptPath(): string; // String

    /**
     * @returns string The path to the script to execute in order to create the UI in the Tips page, sans extension.
     * @since 4.10.0.44
     */
    getTipScriptPath(): string; // String

    /**
     * Hides the widget responsible for displaying tab contents
     */
    hideStack(): void;

    /**
     * @returns boolean true if the widget responsible for displaying tab contents is hidden, false otherwise
     */
    isStackHidden(): boolean; // Boolean

    /**
     * Loads the contents of the Tips page by calling the current script. A special script context is provided to this script which exposes a global “getWidget()” function that returns a DzWidget wrapper. This DzWidget can be used by the script to create, populate, and connect the UI components inside the widget.
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an appropriate error code.
     * @since 4.10.0.44
     */
    reloadTip(): DzError;

    /**
     * Sets the current tab to which
     * @param which number - The tab to make current
     */
    setCurrentTab(which: number): void;

    /**
     * Sets the file info for the given asset
     * @param asset DzAsset - The asset file from which file info will be populated
     */
    setFileInfo(asset: DzAsset): void;

    /**
     * Sets file and meta data info for the given asset
     * @param asset DzAsset - The asset file from which file and metadata info will be populated
     */
    setInfo(asset: DzAsset): void;

    /**
     * Sets metadata info for the given asset
     * @param asset DzAsset - The asset file from which file info will be populated
     */
    setMetaInfo(asset: DzAsset): void;

    /**
     * Sets info for the given node
     * @param node DzNode - The node from which info will be populated
     */
    setNodeInfo(node: DzNode): void;

    /**
     * Sets file info from the given asset container
     * @param product DzProductAssetContainer - The product from which product info will be populated
     */
    setProductInfo(product: DzProductAssetContainer): void;

    /**
     * Loads the contents of the Tips page by calling the script at scriptPath. A special script context is provided to this script which exposes a global “getWidget()” function that returns a DzWidget wrapper. This DzWidget can be used by the script to create, populate, and connect the UI components inside the widget.
     * @param path string
     * @returns DzError DZ_NO_ERROR if no error is encountered, otherwise an appropriate error code.
     */
    setTipUIScript(path: string): DzError;

    /**
     * Specifies whether the file tab is shown or not
     * @param onOff boolean - If true, the file tab will be shown, otherwise it will be hidden
     */
    showFileTab(onOff: boolean): void;

    /**
     * Specifies whether the metadata tab is shown or not
     * @param onOff boolean - If true, the metadata tab will be shown, otherwise it will be hidden
     */
    showMetaTab(onOff: boolean): void;

    /**
     * Specifies whether the node tab is shown or not
     * @param onOff boolean - If true, the node tab will be shown, otherwise it will be hidden
     */
    showNodeTab(onOff: boolean): void;

    /**
     * Specifies whether the render tab is shown or not
     * @param onOff boolean - If true, the render tab will be shown, otherwise it will be hidden
     */
    showRenderTab(onOff: boolean): void;

    /**
     * Shows the widget responsible for displaying the contents of the tabs
     */
    showStack(): void;

    /**
     * Specifies whether the store tab is shown or not
     * @param onOff boolean - If true, the store tab will be shown, otherwise it will be hidden
     * @since 4.8.1.79
     */
    showStoreTab(onOff: boolean): void;

    /* Signals */

    /**
     * Emitted when a keyword is clicked and the CTRL modifier key is pressed.
     * @param keyword string - The link text for the keyword clicked.
     */
    keywordAddUniqueClicked: ISignal<string>;

    /**
     * Emitted when a keyword is clicked.
     * @param keyword string - The link text for the keyword clicked.
     */
    keywordSetClicked: ISignal<string>;

    /**
     * Emitted when the apply button on the render tab is clicked.
     */
    renderApplyClicked: ISignal<void>;
}
