declare class DzUri {
    /**
     * @returns true if this URI is empty, otherwise false.
     */
    isEmpty(): boolean;
    /**
     * @returns true if this URI is null, otherwise false. A DzUri may be empty without being Null, but a Null uri is always empty.
     */
    isNull(): boolean;
    /**
     * Attempts to convert the URI to the path of a local file.
     * @param preferredPath The path to attempt resolving against before other local drive paths are checked.
     * @return A string representation of the URI converted to a local file path.
     */
    toLocalFilename(preferredPath?: string): QString;
}