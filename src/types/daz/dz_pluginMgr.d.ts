declare class DzPluginMgr extends QObject {

    /* Properties */

    /* Methods */
    pluginAdded(): any; // TODO ;
    doAboutPluginsDlg(): void;
    getNumPlugins(): number;
    findPlugin(pluginName: QString): DzPlugin;
    getPlugin(which: number): DzPlugin;
}