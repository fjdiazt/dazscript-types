/**
 * Represents Document Object Model (DOM) “Text”.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/domtext_dz
 */
declare class DzDomText extends DzDomCharacterData {

    /* Methods */

    /**
     * Splits this text node into two text nodes. This node keeps the first part of the split and the remaining characters are inserted into the document tree as another DzDomText object, after this object.
     * @param offset number - The position within this node's text to split at.
     * @returns DzDomNode The newly created DzDomText object with the characters in the latter part of the split (if any), otherwise a DzDomBasicNode.
     */
    splitText(offset: number): DzDomNode;
}
