/**
 * Represents a Document Object Model (DOM) “Document”.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/domdocument_dz
 */
declare class DzDomDocument extends DzDomNode {

    /* Constructors */

    constructor();

    /**
     * @param nsURI string
     * @param qName string
     * @param publicId string
     * @param systemId string
     */
    constructor(nsURI: string, qName: string, publicId: string, systemId: string);

    /* Methods */

    /**
     * @param name string - The name of the “Attribute” to create.
     * @returns DzDomAttr A new “Attribute” node that is a member of this document.
     */
    createAttribute(name: string): DzDomAttr;

    /**
     * @param nsURI string - The namespace of the “Attribute” to create.
     * @param qName string - The qualified name of the “Attribute” to create.
     * @returns DzDomAttr A new “Attribute” node, in the specified namespace, that is a member of this document.
     */
    createAttributeNS(nsURI: string, qName: string): DzDomAttr;

    /**
     * @param value string - The string value to store in the document.
     * @returns DzDomCDATASection A new “Character Data Section” node that is a member of this document.
     */
    createCDATASection(value: string): DzDomCDATASection;

    /**
     * @param value string - The text of the comment.
     * @returns DzDomComment A new “Comment” node that is a member of this document.
     */
    createComment(value: string): DzDomComment;

    /**
     * @returns DzDomDocumentFragment A new “Document Fragment” node that is a member of this document.
     */
    createDocumentFragment(): DzDomDocumentFragment;

    /**
     * @param tagName string - The name of the “Element” node to create.
     * @returns DzDomElement A new “Element” node that is a member of this document.
     */
    createElement(tagName: string): DzDomElement;

    /**
     * @param nsURI string - The namespace of the “Element” to create.
     * @param qName string - The qualified name of the “Element” to create.
     * @returns DzDomElement A new “Element” node, in the specified namespace, that is a member of this document.
     */
    createElementNS(nsURI: string, qName: string): DzDomElement;

    /**
     * @param name string - The name of the “Entity Reference” to create.
     * @returns DzDomEntityReference A new “Entity Reference” node that is a member of this document.
     */
    createEntityReference(name: string): DzDomEntityReference;

    /**
     * @param target string - The target of the processing instruction.
     * @param data string - The data to be processed.
     * @returns DzDomProcessingInstruction A new “Processing Instruction” node that is a member of this document.
     */
    createProcessingInstruction(target: string, data: string): DzDomProcessingInstruction;

    /**
     * @param value string - The text to store in the node.
     * @returns DzDomText A new “Text” node that is a member of this document.
     */
    createTextNode(value: string): DzDomText;

    /**
     * @returns DzDomDocumentType A DzDomDocumentType for this document.
     */
    doctype(): DzDomDocumentType;

    /**
     * @returns DzDomElement The root DzDomElement for this document.
     * @since 4.20.0.10
     */
    documentElement(): DzDomElement;

    /**
     * @param id string
     * @returns DzDomNode The element whose ID is equal to elementId (if any), otherwise a null element.
     */
    elementById(id: string): DzDomNode;

    /**
     * @param node DzDomNode - The node to import.
     * @param deep boolean - If true, node and all of its children are imported recursively. If false, only node is imported.
     * @returns DzDomNode A new node that is a member of this document that is a (deep) copy of the specified node.
     */
    importNode(node: DzDomNode, deep: boolean): DzDomNode;

    /**
     * Sets the contents of the document by parsing the file at the specified path.
     * @param filename string - The (absolute) path of the file to load.
     * @returns boolean true if the file was successfully parsed, otherwise false.
     */
    loadContent(filename: string): boolean; // Boolean

    /**
     * Saves the contents of the document to the specified file.
     * @param filename string - The (absolute) path of the file to save.
     * @returns boolean true if the file was successfully saved, otherwise false.
     */
    saveContent(filename: string): boolean; // Boolean

    /**
     * Sets the contents of this document from the specified string.
     * @param text string - The XML document, in string form, to set the contents of this document to; assumed to be a Unicode string, no encoding detection is performed.
     * @returns boolean true if the string was successfully parsed, otherwise false.
     */
    setContent(text: string): boolean; // Boolean

    /**
     * @param indent number - The amount of space to indent sub-elements.
     * @returns ByteArray The contents of this document in its textual representation as a byte array, encoded as UTF-8.
     * @since 4.11.0.155
     */
    toByteArray(indent?: number): ByteArray;

    /**
     * @param indent number - The amount of space to indent sub-elements. (since 4.11.0.155)
     * @returns string The contents of the document in its textual representation.
     */
    toString(indent?: number): string; // String
}
