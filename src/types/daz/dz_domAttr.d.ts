/**
 * Represents a Document Object Model (DOM) “Attribute”.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/domattr_dz
 */
declare class DzDomAttr extends DzDomNode {

    /* Properties */

    /**
     * The name of the attribute. (Read Only)
     */
    name: string; // String

    /**
     * The value of the attribute.
     */
    value: string; // String

    /* Methods */

    /**
     * @returns DzDomNode The element that this attribute belongs to.
     */
    ownerElement(): DzDomNode;

    /**
     * @returns boolean true if the attribute has a value, otherwise false.
     */
    specified(): boolean; // Boolean
}
