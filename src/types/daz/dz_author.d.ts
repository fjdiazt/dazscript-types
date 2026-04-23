/**
 * Encapsulates authorship information.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/author_dz
 */
declare class DzAuthor extends Object {

    /* Properties */

    /**
     * Deprecated
     */
    email: string; // String

    /**
     * The author's name. (Read Only)
     */
    name: string; // String

    /**
     * The author's url. (Read Only)
     */
    url: string; // String

    /**
     * true if name contains valid information, otherwise false. (Read Only)
     */
    valid: string; // String

    /* Constructors */

    /**
     * @param author string | DzAuthor
     */
    constructor(author: string | DzAuthor);

    constructor();

    /**
     * @param author string
     */
    constructor(author: string);

    /**
     * @param author DzAuthor
     */
    constructor(author: DzAuthor);

    /**
     * @param name string
     * @param email string
     * @param url string
     */
    constructor(name: string, email: string, url?: string);

    /* Undocumented Augment Members */

    /** @undocumented */
    toString(): any; // TODO ;
}
