/**
 * Represents a Document Object Model (DOM) “Entity”.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/domentity_dz
 */
declare class DzDomEntity extends DzDomNode {

    /* Properties */

    /**
     * Holds the name of the notation for the entity. (Read Only)
     */
    notationName: string; // String

    /**
     * Holds the public identifier of the entity. (Read Only)
     */
    publicId: string; // String

    /**
     * Holds the system identifier of the entity. (Read Only)
     */
    systemId: string; // String
}
