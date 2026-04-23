/**
 * Base class for all file importers/exporters.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/fileio_dz
 */
declare class DzFileIO extends DzBase {

    /* Properties */

    /**
     * Holds whether the options for the importer/exporter has been shown.
     * @since 4.9.3.23
     */
    optionsShown: boolean; // Boolean

    /* Methods */

    /**
     * Gets the default options for an I/O operation.
     * @param options DzFileIOSettings - The settings object that the selected options will be added to.
     */
    getDefaultOptions(options: DzFileIOSettings): void;

    /**
     * Gets the options for an I/O operation.
     * @param options DzFileIOSettings - The settings object that the selected options will be added to.
     * @param useInterface boolean - If true and the importer/exporter implements the getOptionsFrame() virtual member function, the options interface for the importer/exporter will be displayed to the user. If false, the default (or last-used) options will be added to or updated in options.
     * @param filename string - The path of a file to be used by the options; usage varies.
     * @returns boolean if options has been updated, otherwise false.
     */
    getOptions(options: DzFileIOSettings, useInterface: boolean, filename: string): boolean; // Boolean

    /**
     * @returns boolean true if this importer/exporter should display an options dialog by default, otherwise false.
     */
    showOptions(): boolean; // Boolean
}
