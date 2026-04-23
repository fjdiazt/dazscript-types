/**
 * Represents a Uniform Resource Indicator as used for Scene Asset I/O.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/uri_dz
 */
declare class DzUri extends Object {

    /* Properties */

    /**
     * Holds the file path portion of the URI, if any.
     */
    filePath: string; // String

    /**
     * Holds the file version of this URI, as a 64 bit unsigned integer. If not read from a file, this will be invalid.
     */
    fileVersion: DzVersion;

    /**
     * Holds the identifier portion of this URI's fragment, if any.
     */
    id: string; // String

    /**
     * Holds whether or not this URI was points to a cloud asset.
     */
    isCloudFileUri: boolean; // Boolean

    /**
     * Holds the modifier path portion of the URI, if any.
     */
    modifierPath: any[]; // Array

    /**
     * Holds the node path portion of this URI, if any.
     */
    nodePath: any[]; // Array

    /**
     * Holds the property portion of the URI, if any.
     */
    propertyPath: any[]; // Array

    /**
     * Holds the scheme type for this URI. Default is SchemeType::ID.
     */
    schemeType: number; // SchemeType

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of PartFlag.
     */
    static NoPart: number;

    /**
     * DAZ enum member of PartFlag.
     */
    static Scheme: number;

    /**
     * DAZ enum member of PartFlag.
     */
    static NodePath: number;

    /**
     * DAZ enum member of PartFlag.
     */
    static ModifierPath: number;

    /**
     * DAZ enum member of PartFlag.
     */
    static PropertyPath: number;

    /**
     * DAZ enum member of PartFlag.
     */
    static IDPart: number;

    /**
     * DAZ enum member of PartFlag.
     */
    static FilePath: number;

    /**
     * DAZ enum member of PartFlag.
     */
    static AllParts: number;

    /**
     * DAZ enum member of SchemeType.
     */
    static NoScheme: number;

    /**
     * DAZ enum member of SchemeType.
     */
    static ID: number;

    /**
     * DAZ enum member of SchemeType.
     */
    static Name: number;

    /* Constructors */

    /**
     * @param uri DzUri | string
     */
    constructor(uri: DzUri | string);

    constructor();

    /**
     * @param uri DzUri
     */
    constructor(uri: DzUri);

    /**
     * @param uri string
     */
    constructor(uri: string);

    /* Static Methods */

    /**
     * Escapes any reserved characters in the in the given string.
     * @param str string - The string to replace reserved characters in.
     * @param exclude ByteArray - The list of characters to not be escaped from the resultant string
     * @param closer ByteArray
     * @returns string URI escape sequences.
     */
    static escape(str: string, exclude: ByteArray, closer: ByteArray): string; // String

    /**
     * Converts the string list into an escaped path string.
     * @param list any[] - The string list to replace reserved characters in.
     * @param exclude ByteArray - The list of characters to not be escaped from the resultant string
     * @param include ByteArray - The list of characters to be escaped from the resultant string
     * @returns string URI path escape sequences.
     */
    static escapedPath(list: any[], exclude: ByteArray, include: ByteArray): string; // String

    /**
     * Creates a new URI using the path of a local file.
     * @param filePath string - A local file path.
     * @returns DzUri
     */
    static fromLocalFilename(filePath: string): DzUri;

    /**
     * Converts any escape sequences in the given string back to the corresponding character.
     * @param str string - The string to convert escape sequences in.
     * @returns string The given string with any escape sequences replaced with the appropriate character.
     */
    static unescape(str: string): string; // String

    /**
     * Converts the string into a string list of unescaped path pieces.
     * @param path string - The path to convert escape sequences in.
     * @returns any[]
     */
    static unescapePath(path: string): any[]; // Array

    /* Methods */

    /**
     * Clears the current values of this URI.
     */
    clear(): void;

    /**
     * Clears internal cache of the last place toLocalFilename/toLocalFilenameByPreferredPath returned.
     */
    clearFoundLocalFilename(): void;

    /**
     * Detaches this URI from any shared data. Makes the underlying data in this URI unique from all other URIs.
     */
    detach(): void;

    /**
     * @returns boolean true if this URI is empty, otherwise false.
     */
    isEmpty(): boolean; // Boolean

    /**
     * @returns boolean true if this URI is null, otherwise false. A DzUri may be empty without being Null, but a Null uri is always empty.
     * @since 4.9.2.12
     */
    isNull(): boolean; // Boolean

    /**
     * Sets the value of this URI from a string representation of the full URI.
     * @param uri string - The string containing the full URI.
     */
    setUri(uri: string): void;

    /**
     * Attempts to convert the URI to the path of a local file.
     * @param preferredPath string - The path to attempt resolving against before other local drive paths are checked.
     * @returns string A string representation of the URI converted to a local file path.
     */
    toLocalFilename(preferredPath: string): string; // String

    /**
     * Attempts to convert the URI to the path of a local file.
     * @returns string A string representation of the path of the URI converted to a local file path.
     */
    toLocalFilename(): string; // String

    /**
     * Attempts to convert the URI to the path of a local file.
     * @param preferredPath string - The path to attempt resolving against before other local drive paths are checked.
     * @returns string A string representation of the URI converted to a file path. If the file represented by the URI exists, the string will be an absolute file path. If the file represented by the URI does not exist, the string will be a relative path.
     * @since 4.9.1.26
     */
    toPath(preferredPath?: string): string; // String

    /**
     * @returns string A string representation of the full URI.
     */
    toString(): string; // String

    /**
     * @param flags PartFlags
     * @returns string A string representation of the URI containing the parts specified by flags.
     */
    toString(flags: PartFlags): string; // String
}
