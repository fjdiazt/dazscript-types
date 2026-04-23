/**
 * Represents a Document Object Model (DOM) “Element”.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/domelement_dz
 */
declare class DzDomElement extends DzDomNode {

    /* Properties */

    /**
     * Holds the tag name of this element.
     */
    tagName: string; // String

    /* Methods */

    /**
     * @param name string - The name of the attribute to retrieve the value of.
     * @param defValue string - The default value if the specified attribute does not already exist.
     * @returns string The value of the attribute with the specified name (if any), otherwise the value specified by defValue.
     */
    attribute(name: string, defValue?: string): string; // String

    /**
     * @param name string - The name of the attribute on this element to retrieve a node for.
     * @returns DzDomNode The node that represents the name attribute (if any), otherwise a DzDomBasicNode.
     */
    attributeNode(name: string): DzDomNode;

    /**
     * @param nsURI string - The namespace of the attribute to retrieve the value of.
     * @param localName string - The name of the attribute to retrieve the value of.
     * @returns DzDomNode The node that represents the attribute (if any) in the specified namespace, with the specified name, otherwise a DzDomBasicNode.
     */
    attributeNodeNS(nsURI: string, localName: string): DzDomNode;

    /**
     * @param nsURI string - The namespace of the attribute to retrieve the value of.
     * @param localName string - The name of the attribute to retrieve the value of.
     * @param defValue string - The default value if the specified attribute does not already exist.
     * @returns string The value of the attribute (if any) in the specified namespace, with the specified name, otherwise the value specified by defValue.
     */
    attributeNS(nsURI: string, localName: string, defValue?: string): string; // String

    /**
     * @returns Object An Object where the attributes of this node are represented as its properties (keys) and their values correspond to the attribute values.
     * @since 4.11.0.279
     */
    attributes(): Object;

    /**
     * @param tagName string - The name of descendant elements to retrieve.
     * @returns any[] A list of descendant elements named tagName (if any), in the order they were encountered.
     * @since 4.11.0.279
     */
    elementsByTagName(tagName: string): any[]; // Array

    /**
     * @param nsURI string - The namespace of descendant elements to retrieve.
     * @param localName string - The name of descendant elements to retrieve.
     * @returns any[] A list of descendant elements (if any), in the specified namespace, with the specified name, in the order they were encountered.
     * @since 4.11.0.279
     */
    elementsByTagNameNS(nsURI: string, localName: string): any[]; // Array

    /**
     * @param name string - The name of the attribute to check.
     * @returns boolean true if the element has an attribute with the specified name, otherwise false.
     */
    hasAttribute(name: string): boolean; // Boolean

    /**
     * @param nsURI string - The namespace of the attribute to check.
     * @param localName string - The name of the attribute to check.
     * @returns boolean true if the element has an attribute, in the specified namespace, with the specified name, otherwise false.
     */
    hasAttributeNS(nsURI: string, localName: string): boolean; // Boolean

    /**
     * Removes an attribute from this element.
     * @param name string - The name of the attribute to remove.
     */
    removeAttribute(name: string): void;

    /**
     * Removes an attribute from this element.
     * @param attr DzDomAttr - The node for the attribute to remove.
     * @returns DzDomNode The attribute that was removed (if any), otherwise a DzDomBasicNode.
     */
    removeAttributeNode(attr: DzDomAttr): DzDomNode;

    /**
     * Removes an attribute, in the specified namespace, from this element.
     * @param nsURI string - The namespace of the attribute to remove.
     * @param localName string - The name of the attribute to remove.
     */
    removeAttributeNS(nsURI: string, localName: string): void;

    /**
     * Sets (or adds) an attribute with the specified name/value on this element.
     * @param name string - The name of the attribute to set.
     * @param value string - The value to set the attribute to.
     */
    setAttribute(name: string, value: string): void;

    /**
     * Sets (or adds) an attribute to this element using a DzDomAttr node.
     * @param attr DzDomAttr - The node to set/add the attribute with.
     * @returns DzDomNode The node for the attribute that was replaced by attr. If no attribute was replaced, a DzDomBasicNode is returned.
     */
    setAttributeNode(attr: DzDomAttr): DzDomNode;

    /**
     * Sets (or adds) an attribute to this element using a DzDomAttr node.
     * @param attr DzDomAttr - The node to set/add the attribute with.
     * @returns DzDomNode The node for the attribute that was replaced (if any) by attr, otherwise a DzDomBasicNode.
     */
    setAttributeNodeNS(attr: DzDomAttr): DzDomNode;

    /**
     * Sets (or adds) an attribute with the specified name/value, in the specified namespace, on this element.
     * @param nsURI string - The namespace of the attribute to set.
     * @param qName string - The qualified name of the attribute to set.
     * @param value string - The value to set the attribute to.
     */
    setAttributeNS(nsURI: string, qName: string, value: string): void;
}
