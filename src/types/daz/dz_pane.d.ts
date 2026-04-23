/**
 * A base class for all non-modal sets of related widgets that persist in the interface.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/pane_dz
 */
declare class DzPane extends QWidget {

    /* Methods */

    /**
     * Sub classes must reimplement this function to generate a default options menu if they have one. This function is called when the pane is loaded for the first time or the interface is reset. Otherwise, the option menus are loaded from the user's interface settings file.
     * @param menu DzActionMenu - The menu to add to.
     */
    buildOptionsMenu(menu: DzActionMenu): void;

    /**
     * @returns string The label of this pane.
     */
    getLabel(): string; // String

    /**
     * @returns DzActionMenu The DzActionMenu for the pane.
     */
    getOptionsMenu(): DzActionMenu;

    /**
     * Sub classes must reimplement this function to provide the interface manager with the ability to update the user's settings file when the pane's default menu has changed. This function should return a value of 1 or greater if the pane provides a menu. Each time the default menu changes, this number should be incremented.
     * @returns number
     */
    getOptionsMenuVersion(): number; // Number

    /**
     * @returns DzPaneGroup The DzPaneGroup parent that this pane belongs to.
     */
    getPaneGroup(): DzPaneGroup;

    /**
     * Hides this pane in the interface.
     */
    hidePane(): void;

    /**
     * Moves this pane from its current pane group into the given pane group.
     * @param group DzPaneGroup - The group to move this pane to.
     */
    moveToGroup(group: DzPaneGroup): void;

    /**
     * Called to refresh internal pane data when scene contents, etc have changed.
     */
    refresh(): void;

    /**
     * Sub classes must reimplement this function to restore their saved settings.
     * @param settings DzPaneSettings - The settings to restore.
     */
    restoreSettings(settings: DzPaneSettings): void;

    /**
     * Sub classes must reimplement this function to save their current settings.
     * @param settings DzPaneSettings - The settings that will be saved.
     */
    saveSettings(settings: DzPaneSettings): void;

    /**
     * Sets the label for this pane.
     * @param label string - The new label for this pane.
     */
    setLabel(label: string): void;

    /**
     * Shows this pane in the interface.
     */
    showPane(): void;

    /**
     * Creates an undocked DzPaneGroup and moves this pane into it.
     * @param pos Point - The position for the undocked pane group (if any).
     * @param size Size - The size for the undocked pane group (if any). This will be expanded to at least the minimum size of the pane.
     * @since 4.10.0.47
     */
    undock(pos?: Point, size?: Size): void;

    /**
     * Undocks the DzPaneGroup that this pane resides in.
     * @param pos Point - The position for the undocked pane group (if any).
     * @param size Size - The size for the undocked pane group (if any). This will be expanded to at least the minimum size of the pane.
     * @since 4.10.0.47
     */
    undockGroup(pos?: Point, size?: Size): void;

    /**
     * Deprecated
     */
    makeGroupUndockable(): void;

    /**
     * Deprecated
     * @param minSize Size
     */
    makeUndockable(minSize?: Size): void;

    /**
     * Deprecated
     */
    makeGroupDockable(): void;

    /* Signals */

    /**
     * Emitted when the pane's label has changed.
     * @param newLabel string - The new label for the pane.
     */
    labelChanged: ISignal<string>;

    /**
     * Emitted when the options menu for the pane has changed.
     */
    menuChanged: ISignal<void>;

    /**
     * Emitted when the the group the pane is in has changed.
     * @param oldGroup DzPaneGroup - The group that the pane was in.
     * @param newGroup DzPaneGroup - The group that the pane was moved to.
     */
    paneGroupChanged: ISignal<DzPaneGroup, DzPaneGroup>;

    /**
     * Emitted when the visibility of the pane's tab bar is changed. When the tab bar is hidden, it's options menu is not visible. If desired, pane instances can listen to this signal to know when the menu is hidden in order to provide an alternate method of accessing the menu options.
     * @param hidden boolean - If true, the tab bar is hidden.
     */
    tabBarHiddenChanged: ISignal<boolean>;

    /**
     * Emitted when the pane is shown or hidden.
     * @param onOff boolean - If true, the pane is visible.
     */
    visibilityChanged: ISignal<boolean>;
}
