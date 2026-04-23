/**
 * Class representing a 8-byte (64-bit) version number.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/version_dz
 */
declare class DzVersion extends Object {

    /* Constructors */

    /**
     * @param version string | number
     */
    constructor(version: string | number);

    /**
     * @param version string | DzVersion
     */
    constructor(version: string | DzVersion);

    /**
     * @param version number | DzVersion
     */
    constructor(version: number | DzVersion);

    constructor();

    /**
     * @param version string
     */
    constructor(version: string);

    /**
     * @param major number
     * @param minor number
     * @param revision number
     * @param build number
     */
    constructor(major: number, minor: number, revision: number, build: number);

    /**
     * @param version number
     */
    constructor(version: number);

    /**
     * @param version DzVersion
     */
    constructor(version: DzVersion);

    /* Static Methods */

    /**
     * Parses a version string into a version number.
     * @param versionStr string - A string representation of the version number in the form “major.minor.revision.build”
     * @returns DzVersion The version number that was created from the string.
     */
    static fromString(versionStr: string): DzVersion;

    /* Methods */

    /**
     * @param version DzVersion - The version to compare.
     * @returns boolean true if the version numbers are the same, otherwise false.
     */
    equal(version: DzVersion): boolean; // Boolean

    /**
     * @returns number The Build number.
     */
    getBuildNumber(): number; // Number

    /**
     * @returns string A string containing all four version numbers separated with a dot, e.g. “4.0.0.0”
     */
    getLongVersionString(): string; // String

    /**
     * @returns number The Major version number.
     */
    getMajorVersion(): number; // Number

    /**
     * @returns number The Minor version number.
     */
    getMinorVersion(): number; // Number

    /**
     * @returns number The Revision number.
     */
    getRevisionNumber(): number; // Number

    /**
     * @returns number The 64-bit packed representation of the version number.
     */
    getVersionNumber(): number; // Number

    /**
     * @returns number A 32-bit packed representation of the version number.
     */
    getVersionNumber32(): number; // Number

    /**
     * @returns string A string containing the Major and Minor version numbers separated with a dot, e.g. “4.0”
     */
    getVersionString(): string; // String

    /**
     * @param version DzVersion - The version to compare.
     * @returns boolean true if the version number is greater than (newer than) this version number, otherwise false.
     */
    greaterThan(version: DzVersion): boolean; // Boolean

    /**
     * @param version DzVersion - The version to compare.
     * @returns boolean true if the version number is greater than or equal (newer than or the same as) this version number, otherwise false.
     */
    greaterThanOrEqual(version: DzVersion): boolean; // Boolean

    /**
     * @returns boolean true if the version number has been initialized, otherwise false.
     */
    isValid(): boolean; // Boolean

    /**
     * @param version DzVersion - The version to compare.
     * @returns boolean true if the version number is less than (older than) this version number, otherwise false.
     */
    lessThan(version: DzVersion): boolean; // Boolean

    /**
     * @param version DzVersion - The version to compare.
     * @returns boolean true if the version number is less than or equal (older than or the same as) this version number, otherwise false.
     */
    lessThanOrEqual(version: DzVersion): boolean; // Boolean

    /**
     * @param version DzVersion - The version to compare.
     * @returns boolean true if the version numbers are different, otherwise false.
     */
    notEqual(version: DzVersion): boolean; // Boolean

    /**
     * Sets the 64-bit version number from an old 32-bit version number.
     * @param version number - The version number as a packed 64-bit value.
     */
    setVersionNumber(version: number): void;

    /**
     * Sets the version number from the 4 16-bit components.
     * @param major number - The major version number.
     * @param minor number - The minor version number.
     * @param revision number - The revision number.
     * @param build number - The build number.
     */
    setVersionNumber(major: number, minor: number, revision: number, build: number): void;

    /**
     * @returns string A string representation of this version in the form “major.minor.revision.build”.
     */
    toString(): string; // String
}
