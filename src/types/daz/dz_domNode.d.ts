/**
 * Base type for all nodes in a Document Object Model (DOM) tree.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/domnode_dz
 */
declare class DzDomNode extends QObject {

    /* Properties */

    /**
     * Holds the local name of this node, if the node uses namespaces; only DzDomElement or DzDomAttr nodes can have namespaces; a namespace must have be specified at creation time - it is not possible to add a namespace post-creation.. (Read Only)
     */
    localName: string; // String

    /**
     * Holds the namespace URI of this node. (Read Only)
     */
    namespaceURI: string; // String

    /**
     * Holds the name of this node - the meaning of which depends on nodeType : (Read Only)
     */
    nodeName: string; // String

    /**
     * Holds the type of this node. (Read Only)
     */
    nodeType: number; // NodeType

    /**
     * Holds the value of this node - the meaning of which depends on nodeType :
     */
    nodeValue: string; // String

    /**
     * Holds the namespace prefix of this node; only DzDomElement or DzDomAttr nodes can have namespaces; a namespace prefix must have be specified at creation time - it is not possible to add a namespace post-creation.
     */
    prefix: string; // String

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of NodeType.
     */
    static ElementNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static AttributeNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static TextNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static CDATASectionNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static EntityReferenceNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static EntityNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static ProcessingInstructionNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static CommentNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static DocumentNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static DocumentTypeNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static DocumentFragmentNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static NotationNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static BaseNode: number;

    /**
     * DAZ enum member of NodeType.
     */
    static CharacterDataNode: number;

    /* Methods */

    /**
     * Appends a node in the DOM to the end of this node's child list.
     * @param child DzDomNode - The node in the DOM to append.
     */
    appendChild(child: DzDomNode): void;

    /**
     * @returns any[] A list of the direct node children of this node (if any).
     * @since 4.11.0.279
     */
    childNodes(): any[]; // Array

    /**
     * Converts the node into a DzDomBasicNode. Its type and contents are cleared.
     * @returns boolean
     */
    clear(): boolean; // Boolean

    /**
     * @param deep boolean - If true (default), the return value will be a recursive copy this node and all of its children.
     * @returns DzDomNode A new node in the DOM that is a (deep) copy of this node.
     */
    cloneNode(deep?: boolean): DzDomNode;

    /**
     * @returns number The column number in the DOM document where the node was parsed.
     * @since 4.11.0.279
     */
    columnNumber(): number; // Number

    /**
     * @returns DzDomNode This node's first child node (if any), otherwise a DzDomBasicNode.
     */
    firstChild(): DzDomNode;

    /**
     * @param tagName string - The name of the child node to retrieve.
     * @returns DzDomNode If tagName is non-empty, the first child DzDomElement of this node with a matching name (if any), otherwise the first child DzDomElement (if any), otherwise a DzDomBasicNode. If tagName is empty, the first child DzDomElement (if any), otherwise a DzDomBasicNode.
     * @since 4.11.0.279
     */
    firstChildElement(tagName?: string): DzDomNode;

    /**
     * @returns boolean true if the node has attributes, otherwise false.
     */
    hasAttributes(): boolean; // Boolean

    /**
     * @returns boolean true if this node has children, otherwise false.
     */
    hasChildNodes(): boolean; // Boolean

    /**
     * Inserts a node in the DOM into this node's child list after another node.
     * @param newChild DzDomNode - The node in the DOM to insert.
     * @param refChild DzDomNode - The node in the DOM to insert after.
     */
    insertAfter(newChild: DzDomNode, refChild: DzDomNode): void;

    /**
     * Inserts a node in the DOM into this node's child list in front of another node.
     * @param newChild DzDomNode - The node in the DOM to insert.
     * @param refChild DzDomNode - The node in the DOM to insert before.
     */
    insertBefore(newChild: DzDomNode, refChild: DzDomNode): void;

    /**
     * @returns boolean true if this node is an attribute, otherwise false.
     */
    isAttr(): boolean; // Boolean

    /**
     * @returns boolean true if this node is a CDATA section, otherwise false.
     */
    isCDATASection(): boolean; // Boolean

    /**
     * @returns boolean true if this node is a character data, otherwise false.
     */
    isCharacterData(): boolean; // Boolean

    /**
     * @returns boolean true if this node is a comment, otherwise false.
     */
    isComment(): boolean; // Boolean

    /**
     * @returns boolean true if this node is a document, otherwise false.
     */
    isDocument(): boolean; // Boolean

    /**
     * @returns boolean true if this node is a document fragment, otherwise false.
     */
    isDocumentFragment(): boolean; // Boolean

    /**
     * @returns boolean true if this node is a document type, otherwise false.
     */
    isDocumentType(): boolean; // Boolean

    /**
     * @returns boolean true if this node is an element, otherwise false.
     */
    isElement(): boolean; // Boolean

    /**
     * @returns boolean true if this node is an entity, otherwise false.
     */
    isEntity(): boolean; // Boolean

    /**
     * @returns boolean true if this node is an entity reference, otherwise false.
     */
    isEntityReference(): boolean; // Boolean

    /**
     * @returns boolean true if this node is a notation, otherwise false.
     */
    isNotation(): boolean; // Boolean

    /**
     * @returns boolean true if this node is invalid (Null), otherwise false.
     */
    isNull(): boolean; // Boolean

    /**
     * @returns boolean true if this node is a processing instruction, otherwise false.
     */
    isProcessingInstruction(): boolean; // Boolean

    /**
     * @param feature string - The feature to check.
     * @param version string - The version to check.
     * @returns boolean true if the DOM implementation supports the specified feature in the specified version, otherwise false.
     */
    isSupported(feature: string, version: string): boolean; // Boolean

    /**
     * @returns boolean true if this node is text, otherwise false.
     */
    isText(): boolean; // Boolean

    /**
     * @returns DzDomNode This node's last child node (if any), otherwise a DzDomBasicNode.
     */
    lastChild(): DzDomNode;

    /**
     * @param tagName string - The name of the child node to retrieve.
     * @returns DzDomNode If tagName is non-empty, the last child DzDomElement of this node with a matching name (if any), otherwise the last child DzDomElement (if any), otherwise a DzDomBasicNode. If tagName is empty, the last child DzDomElement (if any), otherwise a DzDomBasicNode.
     * @since 4.11.0.279
     */
    lastChildElement(tagName?: string): DzDomNode;

    /**
     * @returns number The line number in the DOM document where the node was parsed.
     * @since 4.11.0.279
     */
    lineNumber(): number; // Number

    /**
     * @param name string - The name of the child node to retrieve.
     * @returns DzDomNode The first direct child node with a matching name (if any), otherwise a DzDomBasicNode.
     */
    namedItem(name: string): DzDomNode;

    /**
     * @returns DzDomNode This node's next sibling node (if any), otherwise a DzDomBasicNode.
     */
    nextSibling(): DzDomNode;

    /**
     * @param tagName string - The name of the sibling node to retrieve.
     * @returns DzDomNode If tagName is non-empty, the next sibling DzDomElement of this node with a matching name (if any), otherwise any next sibling DzDomElement (if any), otherwise a DzDomBasicNode. If tagName is empty, the next sibling DzDomElement (if any), otherwise a DzDomBasicNode.
     * @since 4.11.0.279
     */
    nextSiblingElement(tagName?: string): DzDomNode;

    /**
     * Converts all of this node's children into standard form (e.g. adjacent text nodes will be merged).
     */
    normalize(): void;

    /**
     * @returns DzDomNode The document that this node belongs to.
     */
    ownerDocument(): DzDomNode;

    /**
     * @returns DzDomNode This node's parent node (if any), otherwise a DzDomBasicNode.
     */
    parentNode(): DzDomNode;

    /**
     * @returns DzDomNode This node's previous sibling node (if any), otherwise a DzDomBasicNode.
     */
    previousSibling(): DzDomNode;

    /**
     * @param tagName string - The name of the sibling node to retrieve.
     * @returns DzDomNode If tagName is non-empty, the previous sibling DzDomElement of this node with a matching name (if any), otherwise any previous sibling DzDomElement (if any), otherwise a DzDomBasicNode. If tagName is empty, the previous sibling DzDomElement (if any), otherwise a DzDomBasicNode.
     * @since 4.11.0.279
     */
    previousSiblingElement(tagName?: string): DzDomNode;

    /**
     * Removes a node in the DOM from this node's child list.
     * @param oldChild DzDomNode - The node in the DOM to replace.
     */
    removeChild(oldChild: DzDomNode): void;

    /**
     * Inserts a node in the DOM into this node's child list in place of another node.
     * @param newChild DzDomNode - The node in the DOM to insert.
     * @param oldChild DzDomNode - The node in the DOM to replace.
     */
    replaceChild(newChild: DzDomNode, oldChild: DzDomNode): void;
}
