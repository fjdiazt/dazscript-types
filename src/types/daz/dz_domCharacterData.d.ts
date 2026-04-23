/**
 * Represents Document Object Model (DOM) “Character Data”.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/domcharacterdata_dz
 */
declare class DzDomCharacterData extends DzDomNode {

    /* Properties */

    /**
     * Holds the text data for this node.
     */
    data: string; // String

    /**
     * Holds the length of the data for this node. (Read Only)
     */
    length: number; // Number

    /* Methods */

    /**
     * Appends data to the end of the current character data for this node.
     * @param arg string - The character data to append.
     */
    appendData(arg: string): void;

    /**
     * Removes a specified range of character data from this node.
     * @param offset number - The position within the data to start deleting from.
     * @param count number - The number of characters from offset to delete.
     */
    deleteData(offset: number, count: number): void;

    /**
     * Inserts data into this node at a specified position.
     * @param offset number - The position within the data to start inserting arg at.
     * @param arg string - The character data to insert.
     */
    insertData(offset: number, arg: string): void;

    /**
     * Replaces a specified range of character data in this node.
     * @param offset number - The position within the data to start replacing from.
     * @param count number - The number of characters from offset to replace.
     * @param arg string - The character data to insert.
     */
    replaceData(offset: number, count: number, arg: string): void;

    /**
     * @param offset number - The position within the data to start the substring from.
     * @param count number - The number of characters from offset to include in the substring.
     * @returns string The specified substring of the this node's data (if any), otherwise an empty string.
     */
    substringData(offset: number, count: number): string; // String
}
