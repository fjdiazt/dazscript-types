/**
 * Represents a Document Object Model (DOM) “Document Type”.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/domdocumenttype_dz
 */
declare class DzDomDocumentType extends DzDomNode {

    /* Properties */

    /**
     * Holds the internal subset of the document type. (Read Only)
     */
    internalSubset: string; // String

    /**
     * Holds the name of this node; as specified in the !DOCTYPE tag. (Read Only)
     */
    name: string; // String

    /**
     * Holds the public identifier of the external Document Type Definition (DTD) subset. (Read Only)
     */
    publicId: string; // String

    /**
     * Holds the system identifier of the external Document Type Definition (DTD) subset. (Read Only)
     */
    systemId: string; // String
}
