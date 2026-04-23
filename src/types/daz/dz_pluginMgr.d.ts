/**
 * Manager responsible for plugins.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/pluginmgr_dz
 */
declare class DzPluginMgr extends QObject {

    /* Methods */

    /**
     * Shows the “About Installed Plugins” dialog.
     */
    doAboutPluginsDlg(): void;

    /**
     * @param pluginName string - The name of the desired plugin.
     * @returns DzPlugin The plug-in of the given type (if any), otherwise NULL.
     */
    findPlugin(pluginName: string): DzPlugin;

    /**
     * @returns number The number of plug-ins currently loaded by DAZ Studio.
     */
    getNumPlugins(): number; // Number

    /**
     * @param which number - The index of the plug-in to get.
     * @returns DzPlugin The plug-in at the given index in the list (if valid), otherwise NULL.
     */
    getPlugin(which: number): DzPlugin;

    /**
     * Prompts the user that a restart is required.
     * @since 4.22.1.215
     */
    promptRestartRequired(): void;

    /**
     * @returns boolean true if the configuration file was saved, otherwise false.
     * @since 4.11.0.35
     */
    saveConfiguration(): boolean; // Boolean

    /**
     * Sets whether or not the plug-in should load when the application starts.
     * @param plugin DzPlugin - The plugin to set whether or not to load on startup.
     * @param onOff boolean - If true, the plugin should load on startup. If false, the plugin should not load on startup.
     * @since 4.11.0.35
     */
    setPluginLoadOnStartup(plugin: DzPlugin, onOff: boolean): void;

    /* Signals */

    /**
     * @param plugin DzPlugin
     */
    pluginAdded: ISignal<DzPlugin>;
}
