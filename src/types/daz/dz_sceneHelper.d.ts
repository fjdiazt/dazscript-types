/**
 * Convenience object to make working with DzNode and DzProperty objects easier.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/scenehelper_dz
 */
declare class DzSceneHelper extends QObject {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @param selectedOnly boolean - Whether or not to limit the nodes to only those that are selected.
     * @param boneTopSelected boolean - Whether or not to climb the lineage of any DzBone encountered, and instead collect the top-most selected.
     * @param boneSkeleton boolean - Whether or not to collect the DzSkeleton when a DzBone is encountered; overrides boneTopSelected.
     * @returns any[] An list of the collected unique nodes.
     */
    collectNodes(selectedOnly: boolean, boneTopSelected: boolean, boneSkeleton: boolean): any[]; // Array

    /**
     * @param bone DzNode
     * @param propertyName string - The name of the DzNumericProperty to be controlled.
     * @param controlBone DzNode
     * @param controllerName string - The name of the DzNumericProperty used to control.
     * @param type number - The type of calculation this link performs.
     * @param scalar number - The value of the multiplier for the link.
     * @param addend number - The value of the additive offset for the link.
     * @returns DzERCLink The ERC link created, or NULL.
     */
    createLink(bone: DzNode, propertyName: string, controlBone: DzNode, controllerName: string, type: number, scalar: number, addend: number): DzERCLink;

    /**
     * @param bone DzNode
     * @param name string - The name of the DzMorph to create.
     * @param deltas any[] - A two dimensional Array, an array of 4 element arrays, where the first element of each array is the index of the vertex to set delta values for, the second element is the X-axis value for the delta, the third element is the Y-axis value for the delta, and the fourth element is the Z-axis value for the delta.
     * @param overwrite boolean - Whether or not to replace a DzMorph named name.
     * @returns DzMorph The morph created, or NULL if the morph could not be created.
     */
    createMorph(bone: DzNode, name: string, deltas: any[], overwrite: boolean): DzMorph;

    /**
     * @param propertyName string - The name of the property to find the control property for.
     * @param node DzNode - The node to find propertyName on.
     * @param recurse boolean - If node is a DzSkeleton and propertyName cannot be found using findPropertyInGroup(), determines whether to attempt locating propertyName on one of the DzBone owned by the skeleton.
     * @param nameLabelMatch boolean - Whether the name and label of the property must match propertyName.
     * @returns DzProperty The first control property of the property with the given internal name, or NULL.
     */
    findControlProperty(propertyName: string, node: DzNode, recurse: boolean, nameLabelMatch?: boolean): DzProperty;

    /**
     * @param propName string - The name of the property to find.
     * @param elem DzElement - The element to search.
     * @returns DzProperty The first property with the given internal name, otherwise NULL.
     * @since 4.11.0.232
     */
    findProperty(propName: string, elem: DzElement): DzProperty;

    /**
     * @param internalName string - The internal name of the property to find.
     * @param elem DzElement - The element to search.
     * @returns DzProperty The first property with the given internal name, otherwise NULL.
     * @since 4.11.0.232
     */
    findPropertyByInternalName(internalName: string, elem: DzElement): DzProperty;

    /**
     * @param label string - The label of the property to find.
     * @param elem DzElement - The element to search.
     * @returns DzProperty The first property with the given label, otherwise NULL.
     * @since 4.11.0.232
     */
    findPropertyByLabel(label: string, elem: DzElement): DzProperty;

    /**
     * @param propertyName string - The name of the property to find.
     * @param group DzPropertyGroup - The DzPropertyGroup to find propertyName in.
     * @param traverse boolean - If propertyName cannot be found in group, determines whether to attempt locating propertyName in the DzPropertyGroup siblings of group.
     * @param recurse boolean - If propertyName cannot be found in group, determines whether to attempt locating propertyName in the DzPropertyGroup children of group.
     * @param nameLabelMatch boolean - Whether the name and label of the property must match propertyName.
     * @returns DzProperty The first property with the given internal name, or NULL.
     */
    findPropertyInGroup(propertyName: string, group: DzPropertyGroup, traverse: boolean, recurse: boolean, nameLabelMatch?: boolean): DzProperty;

    /**
     * @param propName string - The name of the property to find.
     * @param material DzMaterial - The material to search.
     * @returns DzProperty The first property with the given internal name, or NULL.
     * @since 4.11.0.233
     */
    findPropertyOnMaterial(propName: string, material: DzMaterial): DzProperty;

    /**
     * @param internalName string - The internal name of the property to find.
     * @param material DzMaterial - The material to search.
     * @returns DzProperty The first property with the given internal name, or NULL.
     * @since 4.11.0.233
     */
    findPropertyOnMaterialByInternalName(internalName: string, material: DzMaterial): DzProperty;

    /**
     * @param label string - The label of the property to find.
     * @param material DzMaterial - The material to search.
     * @returns DzProperty The first property with the given label, or NULL.
     * @since 4.11.0.233
     */
    findPropertyOnMaterialByLabel(label: string, material: DzMaterial): DzProperty;

    /**
     * @param propName string - The name of the property to find.
     * @param node DzNode - The node to search.
     * @returns DzProperty The first property with the given internal name, or NULL.
     */
    findPropertyOnNode(propName: string, node: DzNode): DzProperty;

    /**
     * @param internalName string - The internal name of the property to find.
     * @param node DzNode - The node to search.
     * @returns DzProperty The first property with the given internal name, or NULL.
     */
    findPropertyOnNodeByInternalName(internalName: string, node: DzNode): DzProperty;

    /**
     * @param label string - The label of the property to find.
     * @param node DzNode - The node to search.
     * @returns DzProperty The first property with the given label, or NULL.
     */
    findPropertyOnNodeByLabel(label: string, node: DzNode): DzProperty;

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzMaterial The DzMaterial associated with the display of prop.
     * @since 4.11.0.233
     */
    getDisplayMaterial(prop: DzProperty): DzMaterial;

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzNode The DzNode associated with the display of prop.
     * @since 4.6.3.45
     */
    getDisplayNode(prop: DzProperty): DzNode;

    /**
     * @param controlledProp DzProperty - The property whose controller will be returned.
     * @param controllingProp DzProperty - The property to determine which controller is returned.
     * @returns DzERCLink The ERC controller for controlledProp that has the same property as controllingProp. If either parameter is null, or controlledProp does not have a controller that has the same property as controllingProp, NULL.
     */
    getErcController(controlledProp: DzProperty, controllingProp: DzProperty): DzERCLink;

    /**
     * @param prop DzProperty - The property in question.
     * @returns string The internal name of prop (or its alias target), or “Unknown”.
     */
    getInternalName(prop: DzProperty): string; // String

    /**
     * @param prop DzProperty - The property in question.
     * @returns string The label of prop, or an empty string.
     */
    getLabel(prop: DzProperty): string; // String

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzMaterial The DzMaterial associated with prop.
     * @since 4.11.0.233
     */
    getMaterial(prop: DzProperty): DzMaterial;

    /**
     * @param prop DzProperty - The property in question.
     * @returns string The name of the DzMaterial associated with prop, or “Unknown” if it has no associated DzMaterial.
     * @since 4.11.0.233
     */
    getMaterialName(prop: DzProperty): string; // String

    /**
     * @param prop DzProperty - The property in question.
     * @returns string A string representation of the property type of prop; “General”, “Simulation Settings” or “Unknown”.
     * @since 4.11.0.233
     */
    getMaterialType(prop: DzProperty): string; // String

    /**
     * Gets the maximum value for prop.
     * @param prop DzProperty - The property to get the max value for.
     * @returns number If prop is non-null and inherits either DzFloatProperty or DzIntProperty, the max value of prop.
     */
    getMax(prop: DzProperty): number; // Number

    /**
     * Gets the minimum value for prop.
     * @param prop DzProperty - The property to get the min value for.
     * @returns number If prop is non-null and inherits either DzFloatProperty or DzIntProperty, the min value of prop.
     */
    getMin(prop: DzProperty): number; // Number

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzNode The DzNode associated with prop.
     */
    getNode(prop: DzProperty): DzNode;

    /**
     * @param prop DzProperty - The property in question.
     * @returns string The name of the DzNode associated with prop, or “Unknown” if it has no associated DzNode.
     */
    getNodeName(prop: DzProperty): string; // String

    /**
     * @param prop DzProperty - The property in question.
     * @returns string A string representation of the property type of prop; “Transform”, “General”, “Morph”, “DFormer”, “Poser Joint” or “Unknown”.
     */
    getNodeType(prop: DzProperty): string; // String

    /**
     * @param prop DzProperty - The property to get the DzNode from.
     * @returns any[] All private properties associated with the DzNode that prop is associated with.
     * @since 4.6.3.45
     */
    getPrivatePropertiesOnNode(prop: DzProperty): any[]; // Array

    /**
     * @param node DzNode - The node to get the properties from.
     * @returns any[] All private properties associated with node.
     * @since 4.6.3.45
     */
    getPrivatePropertiesOnNode(node: DzNode): any[]; // Array

    /**
     * @param elem DzElement - The DzElement to get the list of properties from.
     * @returns any[] The properties that are on elem.
     * @since 4.6.3.45
     */
    getPropertiesOnElement(elem: DzElement): any[]; // Array

    /**
     * @param prop DzProperty - The property to get the material from.
     * @param includeProviders boolean - Whether or not to include the properties of settings providers.
     * @returns any[] All properties associated with the material that prop is associated with.
     * @since 4.11.0.223
     */
    getPropertiesOnMaterial(prop: DzProperty, includeProviders?: boolean): any[]; // Array

    /**
     * @param material DzMaterial - The material to get the properties from.
     * @param includeProviders boolean - Whether or not to include the properties of settings providers.
     * @returns any[] All properties associated with the material.
     * @since 4.11.0.223
     */
    getPropertiesOnMaterial(material: DzMaterial, includeProviders?: boolean): any[]; // Array

    /**
     * @param prop DzProperty - The property to get the DzNode from.
     * @param includeModifiers boolean - Whether or not to include the properties of DzModifiers.
     * @returns any[] All properties associated with the DzNode that prop is associated with.
     * @since 4.6.3.45
     */
    getPropertiesOnNode(prop: DzProperty, includeModifiers?: boolean): any[]; // Array

    /**
     * @param node DzNode - The node to get the properties from.
     * @param includeModifiers boolean - Whether or not to include the properties of DzModifiers.
     * @returns any[] All properties associated with the node.
     * @since 4.6.3.45
     */
    getPropertiesOnNode(node: DzNode, includeModifiers?: boolean): any[]; // Array

    /**
     * @param node DzNode - The node to get the properties from.
     * @returns any[] All region properties associated with node.
     * @since 4.6.3.45
     */
    getRegionPropertiesOnNode(node: DzNode): any[]; // Array

    /**
     * @param region any - Undocumented DAZ type: geometryregion_dz.
     * @returns any[] All region properties associated with region.
     * @since 4.6.3.45
     */
    getRegionPropertiesRecurse(region: any): any[]; // Array

    /**
     * @param node DzNode - The DzNode with the DzObject that has the DzMorph.
     * @param name string - The name to make unique.
     * @returns string The unique name for the morph.
     */
    getUniqueMorphName(node: DzNode, name: string): string; // String

    /**
     * @param prop DzProperty - The property to check whether the helper can remove.
     * @returns boolean true if the the helper can remove prop, otherwise false.
     * @since 4.6.3.45
     */
    helperCanRemove(prop: DzProperty): boolean; // Boolean

    /**
     * @param prop DzProperty - The property to remove.
     * @returns boolean true if the helper successfully removed the property, otherwise false.
     * @since 4.6.3.45
     */
    helperRemoveProperty(prop: DzProperty): boolean; // Boolean

    /**
     * @param prop DzProperty - The property in question.
     * @returns boolean true if prop inherits DzNumericProperty and its raw and default values are the same, otherwise false.
     */
    isAtDefaultValue(prop: DzProperty): boolean; // Boolean

    /**
     * @param prop DzProperty - The property in question.
     * @param recurse boolean - If true (default), the controller hierarchy is recursed.
     * @returns boolean true if prop is controlled by a transform property, otherwise false.
     * @since 4.9.4.86
     */
    isControlledByTransform(prop: DzProperty, recurse?: boolean): boolean; // Boolean

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzProperty The given property (or its alias target) if it's owner is a DzDFormModifier, otherwise NULL.
     */
    isDFormModProperty(prop: DzProperty): DzProperty;

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzProperty The given property (or its alias target) if it's owner is a legacyjoint_dz, otherwise NULL.
     */
    isLegacyJointProperty(prop: DzProperty): DzProperty;

    /**
     * @param prop DzProperty - The property in question.
     * @returns boolean true if the given property (or its alias target) is a legacy property (internal name begins with PBMCC or PBMDC), otherwise false.
     */
    isLegacyProperty(prop: DzProperty): boolean; // Boolean

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzProperty The given property (or its alias target) if it's owner is a DzMaterial, otherwise NULL.
     * @since 4.11.0.233
     */
    isMaterialProperty(prop: DzProperty): DzProperty;

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzProperty The given property (or its alias target) if it's owner is a DzModifier, otherwise NULL.
     */
    isModifierProperty(prop: DzProperty): DzProperty;

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzProperty The given property (or its alias target) if it's owner is a DzMorph, otherwise NULL.
     */
    isMorphProperty(prop: DzProperty): DzProperty;

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzProperty The given property (or its alias target) if it's owner is a DzNode, otherwise NULL.
     */
    isNodeProperty(prop: DzProperty): DzProperty;

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzProperty The given property (or its alias target) if it's owner is a DzSimulationSettingsProvider, otherwise NULL.
     * @since 4.11.0.233
     */
    isSimulationSettingsProviderProperty(prop: DzProperty): DzProperty;

    /**
     * @param prop DzProperty - The property in question.
     * @returns boolean true if the given property is a transform property, otherwise false.
     * @since 4.9.4.86
     */
    isTransform(prop: DzProperty): boolean; // Boolean

    /**
     * @param prop DzProperty - The property in question.
     * @returns DzProperty The given property (or its alias target) if it is a transform property, otherwise NULL.
     */
    isTransformProperty(prop: DzProperty): DzProperty;

    /**
     * Attempts to rename prop to name. If the property is a morph property or a DForm modifier property then the modifier is renamed to name. If any other property associated with the node that this property is associated with has the same internal name as name, this method returns false.
     * @param prop DzProperty - The property to change.
     * @param name string - The new internal name for the property.
     * @returns boolean true if the rename was successful, otherwise false.
     */
    setInternalName(prop: DzProperty, name: string): boolean; // Boolean

    /**
     * Sets the maximum value for prop. This method only applies if prop is non-null and inherits either DzFloatProperty or DzIntProperty. Otherwise this method has no effect.
     * @param prop DzProperty - The property whose maximum value is to be set.
     * @param max number - The value to set. If prop inherits DzIntProperty, max is truncated (not rounded).
     */
    setMax(prop: DzProperty, max: number): void;

    /**
     * Sets the minimum value for prop. This method only applies if prop is non-null and inherits either DzFloatProperty or DzIntProperty. Otherwise this method has no effect.
     * @param prop DzProperty - The property whose minimum value is to be set.
     * @param min number - The value to set. If prop inherits DzIntProperty, min is truncated (not rounded).
     */
    setMin(prop: DzProperty, min: number): void;

    /**
     * Essentially behaves the same as calling both DzSceneHelper::setMin() and DzSceneHelper::setMax().
     * @param prop DzProperty - The property to set min and max values for.
     * @param min number - The new min value for the given property.
     * @param max number - The new max value for the given property.
     */
    setMinMax(prop: DzProperty, min: number, max: number): void;

    /**
     * Sets the DzPropertyGroup path (and appropriate geometryregion_dz) for the given property.
     * @param prop DzProperty - The property to change the path of.
     * @param inPath string - The new path for the given property.
     */
    setPropertyPath(prop: DzProperty, inPath: string): void;

    /**
     * Sets the name of node to a unique version of name.
     * @param node DzNode - The node to set the unique name of.
     * @param name string - The name to make unique.
     */
    setUniqueName(node: DzNode, name: string): void;
}
