declare class DzSceneHelper extends QObject {
    objectName: string; //
    setUniqueName(node: DzNode, name: string): any;
    getUniqueMorphName(node: DzNode, name: string): any;
    collectNodes(flag1: boolean, flag2: boolean, flag3: boolean): any;
    findPropertyInGroup(name: string, group: DzPropertyGroup, flag1: boolean, flag2: boolean, flag3?: boolean): any;
    findControlProperty(name: string, node: DzNode, flag1: boolean, flag2?: boolean): any;
    createMorph(node: DzNode, name: string, list: QVariant[], flag: boolean): any;
    createLink(node: DzNode, s1: string, node2: DzNode, s2: string, n: number, d1: number, d2: number): any;
    isMorphProperty(property: DzProperty): any;
    isNodeProperty(property: DzProperty): any;
    isModifierProperty(property: DzProperty): any;
    isTransformProperty(property: DzProperty): any;
    isDFormModProperty(property: DzProperty): any;
    isLegacyJointProperty(property: DzProperty): any;
    isLegacyProperty(property: DzProperty): any;
    isAtDefaultValue(property: DzProperty): any;
    getLabel(property: DzProperty): any;
    getInternalName(property: DzProperty): any;
    getNodeName(property: DzProperty): any;
    getNodeType(property: DzProperty): any;
    getNode(property: DzProperty): any;
    getDisplayNode(property: DzProperty): any;
    getErcController(property1: DzProperty, property2: DzProperty): any;
    getMin(property: DzProperty): any;
    getMax(property: DzProperty): any;
    getPropertiesOnElement(element: DzElement): any;
    getPropertiesOnNode(property: DzProperty, includeModifiers?: boolean): any;
    getPropertiesOnNode(node: DzNode, includeModifiers?: boolean): DzProperty[];
    getPrivatePropertiesOnNode(property: DzProperty): any;
    getPrivatePropertiesOnNode(node: DzNode): any;
    getRegionPropertiesOnNode(node: DzNode): any;
    getRegionPropertiesRecurse(region: DzGeometryRegion): any;
    findPropertyOnNode(name: string, node: DzNode): DzProperty;
    findPropertyOnNodeByLabel(label: string, node: DzNode): DzProperty;
    findPropertyOnNodeByInternalName(name: string, node: DzNode): DzProperty;
    helperCanRemove(property: DzProperty): any;
    helperRemoveProperty(property: DzProperty): any;
    setMin(property: DzProperty, value: number): any;
    setMax(property: DzProperty, value: number): any;
    setMinMax(property: DzProperty, min: number, max: number): any;
    setInternalName(property: DzProperty, name: string): any;
    setPropertyPath(property: DzProperty, path: string): any;
    name: string; //
}