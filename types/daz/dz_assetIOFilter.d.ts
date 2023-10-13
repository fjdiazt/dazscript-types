declare class DzAssetIOFilter {
    getDefaultOptions(options: DzFileIOSettings): void;

    /**
     * Gets the options for an I/O operation.
     * @param options The settings object that the selected options will be added to.
     * @param useInterface If true and the importer/exporter implements the getOptionsFrame() virtual member function, the options interface for the importer/exporter will be displayed to the user. If false, the default (or last-used) options will be added to or updated in options.
     * @param filename The path of a file to be used by the options; usage varies.
     * @return if options has been updated, otherwise false.
     */
    getOptions(options: DzFileIOSettings, useInterface: boolean, filename: string): boolean;

    deleteLater(): void;
}