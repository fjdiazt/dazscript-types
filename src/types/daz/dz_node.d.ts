/**
 * Base class for objects that can participate in a transform hierarchy.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/node_dz
 */
declare class DzNode extends DzElement {

    /* Properties */

    /**
     * Holds the author of the file for this node. (Read Only)
     * @since 4.8.1.21
     */
    assetAuthor: DzAuthor;

    /**
     * Holds the revision version of the asset file for this node. (Read Only)
     * @since 4.8.1.21
     */
    assetFileRevision: DzVersion;

    /**
     * Holds the asset id for this node.
     * @since 4.8.1.18
     */
    assetId: string; // String

    /**
     * Holds the asset id aliases for this node.
     */
    assetIdAliases: any[]; // Array

    /**
     * Holds the modified date of the asset file for this node. (Read Only)
     * @since 4.8.1.21
     */
    assetModifiedDate: Date;

    /**
     * Holds whether or not the asset for this node needs to be saved. (Read Only)
     * @since 4.11.0.249
     */
    assetNeedSave: boolean; // Boolean

    /**
     * Holds the URI of the asset source for this node; only valid when the asset is in an embedded state - i.e. modified. (Read Only)
     * @since 4.8.1.21
     */
    assetSource: DzUri;

    /**
     * Holds the asset URI for this node. (Read Only)
     * @since 4.8.1.18
     */
    assetUri: DzUri;

    /**
     * Holds the path relative to the node asset file folder to search for addons.
     * @since 4.12.2.44
     */
    extendedAddonsPath: string; // String

    /**
     * Holds additional ids that this node extends.
     * @since 4.12.2.44
     */
    extendedAssetIds: string; // String

    /**
     * Holds the name aliases for this node.
     */
    nameAliases: any[]; // Array

    /**
     * Holds the render priority for this node. Render priority controls the order in which nodes are rendered. The higher the priority, the earlier the node will be rendered. If several nodes have the same render priority, those nodes will be rendered in an arbitrary order.
     * 
     * 
     * The default render priority is RENDER_PRIORITY_NORMAL.
     */
    renderPriority: number; // DzRenderMgr::RenderPriority

    /* Constructors */

    constructor();

    /* Static Methods */

    /**
     * @param node DzNode
     * @param propagate boolean - If true, the hierarchy of nodes that are children of node will also be duplicated.
     * @returns DzNode The (root) node (if any) that results from duplicating node, otherwise null.
     * @since 4.9.3.80
     */
    static duplicate(node: DzNode, propagate: boolean): DzNode;

    /* Methods */

    /**
     * Adds a child to this node.
     * @param child DzNode - The node to add to this node's list of children. A child must be removed from one parent before it can be attached to another.
     * @param inPlace boolean - If true, the necessary transforms to parent 'In Place' will be calculated and applied to the child.
     * @returns DzError
     */
    addNodeChild(child: DzNode, inPlace?: boolean): DzError;

    /**
     * Sets the end point for this node, adjusting for controllers.
     * @param endPnt DzVec3 - The end point for this node. This is the node's end point in relation to its geometry.
     */
    adjustEndPoint(endPnt: DzVec3): void;

    /**
     * Sets the orientation for this node adjusting for controllers.
     * @param orientation DzQuat - The orientation for this node. This defines the space in which node rotations occur.
     */
    adjustOrientation(orientation: DzQuat): void;

    /**
     * Sets the orientation for this node adjusting for controllers.
     * @param angles DzVec3 - The orientation for this node in degrees. This defines the space in which node rotations occur.
     */
    adjustOrientationAngles(angles: DzVec3): void;

    /**
     * Sets the origin for this node adjusting for controllers.
     * @param origin DzVec3 - The origin for this node. This is the node's center point in relation to its geometry.
     */
    adjustOrigin(origin: DzVec3): void;

    /**
     * @param anglesRadians DzVec3 - The per axis Euler angles, in radians, to convert.
     * @returns DzQuat The quaternion, based on the rotation order of this node, that would rotate this node in local-space according to the Euler angles passed.
     * @since 4.12.1.111
     */
    calcLocalRotation(anglesRadians: DzVec3): DzQuat;

    /**
     * Get the current shadow-casting status of this node.
     * @returns boolean true if the node is casting shadows or the active mode of the active renderer does not allow disabling shadows (and thus dynamically hides the property providing control to the user), otherwise false.
     */
    castsShadow(): boolean; // Boolean

    /**
     * Removes all local transform data.
     */
    clearAllTransformData(): void;

    /**
     * Clears the override color to be used to draw the node while using manipulation draw styles.
     */
    clearManipOverColor(): void;

    /**
     * Removes local transform data.
     * @param range DzTimeRange - The time range to clear transform data across.
     */
    clearTransformData(range: DzTimeRange): void;

    /**
     * @param propagate boolean - If true, the hierarchy of nodes that are children of this node will also be duplicated.
     * @returns DzNode The (root) node (if any) that results from duplicating this node, otherwise null.
     * @since 4.9.3.80
     */
    duplicate(propagate: boolean): DzNode;

    /**
     * Finalizes the node's geometry cache.
     * @param isRender boolean - If true, the node should prepare itself for a render quality presentation. This is typically only set true when performing an “offline” render, otherwise it should be set false (default) to prevent thrashing of the geometry cache.
     * @param allowResChange boolean - If true, the geometry is allowed to change resolution in the finalize, otherwise the geometry will stay at its current resolution.
     */
    finalize(isRender?: boolean, allowResChange?: boolean): void;

    /**
     * @param node DzNode - The node to find the index of.
     * @returns number The index of node as a child of this node (if any), otherwise -1.
     */
    findChildIndex(node: DzNode): number; // Number

    /**
     * Get a child from this node by name.
     * @param name string - The name of the child to find.
     * @param recurse boolean - If true, this will be called recursively until a child with a matching name is found.
     * @returns DzNode A child node having a matching name (if any), otherwise NULL.
     */
    findNodeChild(name: string, recurse?: boolean): DzNode;

    /**
     * Get a child from this node by asset id.
     * @param assetID string - The asset ID of the child to find.
     * @param recurse boolean - If true, this will be called recursively until a child with a matching asset ID is found.
     * @param checkSource boolean - If true, the asset's source will be checked for a match.
     * @returns DzNode A child node having a matching asset ID (if any), otherwise NULL.
     */
    findNodeChildByAssetID(assetID: string, recurse?: boolean, checkSource?: boolean): DzNode;

    /**
     * Get a child from this node by label.
     * @param label string - The label of the child to find.
     * @param recurse boolean - If true, this will be called recursively until a child with a matching label is found.
     * @returns DzNode A child node having a matching label (if any), otherwise NULL.
     * @since 4.10.0.68
     */
    findNodeChildByLabel(label: string, recurse?: boolean): DzNode;

    /**
     * Get a child from this node by name (or alias).
     * @param name string - The name (or alias) of the child to find.
     * @param aliases boolean - If true, consider name aliases.
     * @param recurse boolean - If true, this will be called recursively until a child with a matching name (or alias) is found.
     * @returns DzNode A child node having a matching name or alias (if any), otherwise NULL.
     */
    findNodeChildByNameOrAlias(name: string, aliases: boolean, recurse?: boolean): DzNode;

    /**
     * @param uri DzUri - The URI path to the property.
     * @returns DzProperty The property referred to by the uri or null if the property cannot be found.
     * @since 4.9.2.20
     */
    findPropertyReference(uri: DzUri): DzProperty;

    /**
     * @returns DzBoolProperty The property used for controlling whether or not the transform controls for this node, and the local transform, is overridden to be identity.
     * @since 4.11.0.300
     */
    getDisableTransformControl(): DzBoolProperty;

    /**
     * @param defaultVal boolean - If true, the default value for the end point is returned, otherwise the current value is.
     * @returns DzVec3 The endpoint for this node.
     */
    getEndPoint(defaultVal?: boolean): DzVec3;

    /**
     * @returns DzFloatProperty The float property that controls the x position of the node's end point.
     */
    getEndXControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls the y position of the node's end point.
     */
    getEndYControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls the z position of the node's end point.
     */
    getEndZControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls local rotation of the node around the first axis of the rotation order.
     * @since 4.9.3.17
     */
    getFirstAxisRotControl(): DzFloatProperty;

    /**
     * @returns DzBoolProperty The property used for controlling whether or not the local transform for this node is ignored by any geometry associated with it.
     * @since 4.12.1.68
     */
    getIgnoreLocalTransformControl(): DzBoolProperty;

    /**
     * @returns DzBox3 A three dimensional box containing the current node (including associated geometry - if any) oriented to the cardinal axes of the world and represented in coordinates that are relative to the node origin.
     */
    getLocalBoundingBox(): DzBox3;

    /**
     * @returns DzOrientedBox3 A three dimensional box containing the current node (including associated geometry - if any) oriented to the cardinal axes of the node and represented in coordinates that are relative to the node origin.
     */
    getLocalOrientedBox(): DzOrientedBox3;

    /**
     * @returns DzVec3 The local-space position of the node at the current time.
     */
    getLocalPos(): DzVec3;

    /**
     * @param tm DzTime - The scene time at which to get the transform.
     * @param defaultVal boolean - Use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzVec3 The local-space position of the node.
     */
    getLocalPos(tm: DzTime, defaultVal?: boolean): DzVec3;

    /**
     * @returns DzQuat The local-space rotation of the node at the current time.
     */
    getLocalRot(): DzQuat;

    /**
     * @param tm DzTime - The scene time at which to get the transform.
     * @param defaultVal boolean - Use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzQuat The local-space rotation of the node.
     */
    getLocalRot(tm: DzTime, defaultVal?: boolean): DzQuat;

    /**
     * @returns DzMatrix3 The local-space scale of the node at the time.
     */
    getLocalScale(): DzMatrix3;

    /**
     * @param tm DzTime - The scene time at which to get the transform.
     * @param defaultVal boolean - Use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzMatrix3 The local-space scale of the node.
     */
    getLocalScale(tm: DzTime, defaultVal?: boolean): DzMatrix3;

    /**
     * Get the composed local transform info for this node at the current time.
     * @returns DzMatrix3 A matrix representing the composed local transform for this node.
     */
    getLocalTransform(): DzMatrix3;

    /**
     * Get the composed local transform info for this node.
     * @param tm DzTime - The scene time at which to get the transform.
     * @param defaultVal boolean - Use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzMatrix3 A matrix representing the composed local transform for this node.
     */
    getLocalTransform(tm: DzTime, defaultVal?: boolean): DzMatrix3;

    /**
     * @param posLocal DzVec3 - The local-space position offset for this node.
     * @param rotLocal DzQuat - The local-space rotation offset for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale offset for this node.
     * @returns Object An object with properties named after the transform properties and their respective values.
     * @since 4.12.1.111
     */
    getLocalTransformAxisValues(posLocal: DzVec3, rotLocal: DzQuat, scaleLocal: DzMatrix3): Object;

    /**
     * Get the child at the given index.
     * @param i number
     * @returns DzNode The i'th node attached to this node as a child. NULL if the index is invalid.
     */
    getNodeChild(i: number): DzNode;

    /**
     * @param recurse boolean - If true, recursively collect all this node's children, scanning the hierarchy from this node down. If false (default), collect only this node's immediate children.
     * @returns any[] A list containing the children of this node.
     */
    getNodeChildren(recurse?: boolean): any[]; // Array

    /**
     * Get the parent of this node.
     * @returns DzNode The parent of this node in the scene hierarchy, NULL if this node is at root level.
     */
    getNodeParent(): DzNode;

    /**
     * Get the number of children attached to this node.
     * @returns number The number of nodes attached to this node as children in the scene hierarchy.
     */
    getNumNodeChildren(): number; // Number

    /**
     * Get the object currently associated with this node.
     * @returns DzObject The object that is associated with this node. NULL if node has no object.
     */
    getObject(): DzObject;

    /**
     * @param defaultVal boolean - Get the default or current values of the orientation. defaultVal defaults to false or current position.
     * @returns DzQuat The orientation of the node.
     */
    getOrientation(defaultVal?: boolean): DzQuat;

    /**
     * @returns DzFloatProperty The float property that controls the x rotation of the node's orientation.
     */
    getOrientXControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls the y rotation of the node's orientation.
     */
    getOrientYControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls the z rotation of the node's orientation.
     */
    getOrientZControl(): DzFloatProperty;

    /**
     * @param defaultVal boolean - Get the default or current values of the origin. Default is false for current.
     * @returns DzVec3 The origin of the node.
     */
    getOrigin(defaultVal?: boolean): DzVec3;

    /**
     * @returns DzFloatProperty The float property that controls the x position of the node's origin.
     */
    getOriginXControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls the y position of the node's origin.
     */
    getOriginYControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls the z position of the node's origin.
     */
    getOriginZControl(): DzFloatProperty;

    /**
     * @returns DzNumericNodeProperty The property used for tracking the point-at target.
     */
    getPointAtControl(): DzNumericNodeProperty;

    /**
     * @returns number The value that determines how closely this node aims at its point-at target.
     * @since 4.12.1.68
     */
    getPointAtStrength(): number; // Number

    /**
     * @returns DzNode The point at target for this node (if any), otherwise null.
     * @since 4.12.1.68
     */
    getPointAtTarget(): DzNode;

    /**
     * @returns DzPresentation The presentation for this property or NULL if there is none.
     */
    getPresentation(): DzPresentation;

    /**
     * @returns DzOrientedBox3 If the preview box has been set, a three dimensional box that represents the current node (including associated geometry - if any) oriented to the cardinal axes of the node and represented in coordinates that are relative to the node origin. If a preview box has not been set, an invalid box.
     */
    getPreviewBox(): DzOrientedBox3;

    /**
     * @returns DzEnumProperty The enum property that controls the render priority of this node.
     */
    getRenderPriorityControl(): DzEnumProperty;

    /**
     * @returns DzBoolProperty The boolean property that controls render visibility of this node.
     */
    getRenderVisibilityControl(): DzBoolProperty;

    /**
     * Get the node rotation order.
     * @returns DzRotationOrder The order that the axis rotations are applied to this node.
     */
    getRotationOrder(): DzRotationOrder;

    /**
     * @returns DzFloatProperty The float property that controls general scale of the node.
     */
    getScaleControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls local rotation of the node around the second axis of the rotation order.
     * @since 4.9.3.17
     */
    getSecondAxisRotControl(): DzFloatProperty;

    /**
     * @returns DzBoolProperty The boolean property that controls selectability of this node.
     */
    getSelectabilityControl(): DzBoolProperty;

    /**
     * @returns DzSelectionMap The selection map for this node.
     */
    getSelectionMap(): DzSelectionMap;

    /**
     * @returns DzNode The node to be selected if selection is promoted, otherwise this node.
     */
    getSelectionNode(): DzNode;

    /**
     * @returns DzBoolProperty The boolean property that controls whether this light is casting shadows.
     */
    getShadowControl(): DzBoolProperty;

    /**
     * @returns DzBoolProperty The boolean property that controls simulation visibility of this node.
     * @since 4.9.4.25
     */
    getSimulationVisibilityControl(): DzBoolProperty;

    /**
     * @returns string The singleton identifier for this node (if it is a singleton), otherwise an empty string.
     * @since 4.12.2.20
     */
    getSingletonIDString(): string; // String

    /**
     * Traverses up the node hierarchy and attempts to find a DzSkeleton.
     * @returns DzSkeleton The first DzSkeleton node encountered. NULL if this node is not in the hierarchy of a skeleton.
     */
    getSkeleton(): DzSkeleton;

    /**
     * @returns DzFloatProperty The float property that controls local rotation of the node around the third axis of the rotation order.
     * @since 4.9.3.17
     */
    getThirdAxisRotControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that tools should use to control local rotation of the node around the first axis of the rotation order.
     * @since 4.9.3.17
     */
    getToolFirstAxisRotControl(): DzFloatProperty;

    /**
     * @returns DzQuat The local-space rotation of the node at the current time, in the context of the current tool.
     * @since 4.9.3.16
     */
    getToolLocalRot(): DzQuat;

    /**
     * @param tm DzTime - The scene time at which to get the transform.
     * @param defaultVal boolean - Use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzQuat The local-space rotation of the node, in the context of the current tool.
     * @since 4.8.1.13
     */
    getToolLocalRot(tm: DzTime, defaultVal?: boolean): DzQuat;

    /**
     * @returns DzFloatProperty The float property that tools should use to control local rotation of the node around the second axis of the rotation order.
     * @since 4.9.3.17
     */
    getToolSecondAxisRotControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that tools should use to control local rotation of the node around the third axis of the rotation order.
     * @since 4.9.3.17
     */
    getToolThirdAxisRotControl(): DzFloatProperty;

    /**
     * @param tm DzTime - The scene time at which to get the transform.
     * @param defaultVal boolean - Whether or not to use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzQuat The world-space rotation of the node, in the context of the current tool.
     * @since 4.8.1.13
     */
    getToolWSRot(tm: DzTime, defaultVal?: boolean): DzQuat;

    /**
     * @returns DzQuat The world-space rotation of the node at the current time, in the context of the current tool.
     * @since 4.9.3.16
     */
    getToolWSRot(): DzQuat;

    /**
     * Get the world-space transformation data for this node at the current time, in the context of the current tool.
     * @returns DzMatrix3 A matrix representing the composed world-space transform for this node.
     * @since 4.9.3.16
     */
    getToolWSTransform(): DzMatrix3;

    /**
     * Get the world-space transformation data for this node, in the context of the current tool.
     * @param tm DzTime - The scene time at which to get the transform.
     * @param defaultVal boolean - Whether or not to use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzMatrix3 A matrix representing the composed world-space transform for this node.
     * @since 4.8.1.13
     */
    getToolWSTransform(tm: DzTime, defaultVal?: boolean): DzMatrix3;

    /**
     * @returns DzFloatProperty The float property that tools should use to control local rotation of the node around the x axis.
     */
    getToolXRotControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that tools should use to control local rotation of the node around the y axis.
     */
    getToolYRotControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that tools should use to control local rotation of the node around the z axis.
     */
    getToolZRotControl(): DzFloatProperty;

    /**
     * @returns DzBoolProperty The boolean property that controls viewport visibility of this node.
     * @since 4.11.0.36
     */
    getViewportVisibilityControl(): DzBoolProperty;

    /**
     * @returns DzBoolProperty The boolean property that controls visibility (to viewports, to renders, to simulation) of this node.
     */
    getVisibilityControl(): DzBoolProperty;

    /**
     * @returns DzBox3 A three dimensional box containing the current node (including associated geometry - if any) oriented to the cardinal axes of the world and represented in coordinates that are relative to the world origin.
     */
    getWSBoundingBox(): DzBox3;

    /**
     * @returns DzOrientedBox3 A three dimensional box containing the current node (including associated geometry - if any) oriented to the cardinal axes of the world and represented in coordinates that are relative to the node origin.
     */
    getWSOrientedBox(): DzOrientedBox3;

    /**
     * @returns DzVec3 The world-space position of the node at the current time.
     */
    getWSPos(): DzVec3;

    /**
     * @param tm DzTime - The scene time at which to get the transform.
     * @param defaultVal boolean - Whether or not to use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzVec3 The world-space position of the node.
     */
    getWSPos(tm: DzTime, defaultVal?: boolean): DzVec3;

    /**
     * @returns DzQuat The world-space rotation of the node at the current time.
     */
    getWSRot(): DzQuat;

    /**
     * @param tm DzTime - The scene time at which to get the transform.
     * @param defaultVal boolean - Whether or not to use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzQuat The world-space rotation of the node.
     */
    getWSRot(tm: DzTime, defaultVal?: boolean): DzQuat;

    /**
     * @returns DzMatrix3 The world-space scale of the node at the current time.
     */
    getWSScale(): DzMatrix3;

    /**
     * @param tm DzTime - The scene time at which to get the transform.
     * @param defaultVal boolean - Whether or not to use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzMatrix3 The world-space scale of the node.
     */
    getWSScale(tm: DzTime, defaultVal?: boolean): DzMatrix3;

    /**
     * Get the world-space transformation data for this node at the current time.
     * @returns DzMatrix3 A matrix representing the composed world-space transform for this node.
     */
    getWSTransform(): DzMatrix3;

    /**
     * Get the world-space transformation data for this node.
     * @param tm DzTime - The scene time at which to get the transform.
     * @param defaultVal boolean - Whether or not to use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzMatrix3 A matrix representing the composed world-space transform for this node.
     */
    getWSTransform(tm: DzTime, defaultVal?: boolean): DzMatrix3;

    /**
     * @param posLocal DzVec3
     * @param rotLocal DzQuat
     * @param scaleLocal DzMatrix3
     * @returns Object An object with properties named after the transform properties and their respective values, at the current time.
     * @since 4.12.1.111
     */
    getWSTransformAxisValues(posLocal: DzVec3, rotLocal: DzQuat, scaleLocal: DzMatrix3): Object;

    /**
     * @param tm DzTime - The scene time at which to get the transform.
     * @param posLocal DzVec3 - The local-space position offset for this node.
     * @param rotLocal DzQuat - The local-space rotation offset for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale offset for this node.
     * @returns Object An object with properties named after the transform properties and their respective values, at the specified time.
     * @since 4.12.1.111
     */
    getWSTransformAxisValues(tm: DzTime, posLocal: DzVec3, rotLocal: DzQuat, scaleLocal: DzMatrix3): Object;

    /**
     * @returns DzFloatProperty The float property that controls the local x position of the node.
     */
    getXPosControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls local rotation of the node around the x axis.
     */
    getXRotControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls scaling of the node along the x axis.
     */
    getXScaleControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls the local y position of the node.
     */
    getYPosControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls local rotation of the node around the y axis.
     */
    getYRotControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls scaling of the node along the y axis.
     */
    getYScaleControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls the local z position of the node.
     */
    getZPosControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls local rotation of the node around the z axis.
     */
    getZRotControl(): DzFloatProperty;

    /**
     * @returns DzFloatProperty The float property that controls scaling of the node along the z axis.
     */
    getZScaleControl(): DzFloatProperty;

    /**
     * @returns boolean true if this node inherits scale from its parent, otherwise false.
     */
    inheritsScale(): boolean; // Boolean

    /**
     * Invalidates the bounding boxes for this node, causing them to be recalculated.
     * @param checkSkeleton boolean - Whether or not to invalidate the bounding box for this node's skeleton, if it has one.
     */
    invalidateBoundingBoxes(checkSkeleton?: boolean): void;

    /**
     * @returns boolean true if this node is set invisible by a group node, otherwise false.
     */
    invisibleByGroup(): boolean; // Boolean

    /**
     * @returns boolean true if this node is set invisible in render by a group node, otherwise false.
     * @since 4.9.4.73
     */
    invisibleInRenderByGroup(): boolean; // Boolean

    /**
     * @returns boolean true if this node is set invisible in simulation by a group node, otherwise false.
     * @since 4.9.4.73
     */
    invisibleInSimulationByGroup(): boolean; // Boolean

    /**
     * @returns boolean true if this node is set invisible in view by a group node, otherwise false.
     * @since 4.11.0.36
     */
    invisibleInViewportByGroup(): boolean; // Boolean

    /**
     * @returns boolean true if the parent of this node, or any of its ancestors, is a DzBone and this node or any of its ancestors should redirect their viewport selection to their ancestors.
     */
    isBoneSelectingNode(): boolean; // Boolean

    /**
     * @returns boolean true if this node is considered an editor node, otherwise false.
     */
    isEditorNode(): boolean; // Boolean

    /**
     * @returns boolean true if this node should not be shown in the interface, otherwise false.
     */
    isHidden(): boolean; // Boolean

    /**
     * @returns boolean true if the node is in the scene, otherwise false.
     * @since 4.6.4.67
     */
    isInScene(): boolean; // Boolean

    /**
     * @returns boolean true if the local transform is disabled, otherwise false.
     * @since 4.12.1.68
     */
    isLocalTransformDisabled(): boolean; // Boolean

    /**
     * @returns boolean true if the local transform is ignored, otherwise false.
     * @since 4.12.1.68
     */
    isLocalTransformIgnored(): boolean; // Boolean

    /**
     * Checks whether or not a given node is one of this node's ancestors in the scene hierarchy.
     * @param node DzNode - The node to look for.
     * @param recurse boolean - Whether or not to ascend the hierarchy.
     * @returns boolean true if the node is an ancestor of this node in the scene hierarchy, otherwise false.
     * @since 4.15.0.18
     */
    isNodeAncestorOf(node: DzNode, recurse?: boolean): boolean; // Boolean

    /**
     * Checks to see if given node is one of this node's immediate children.
     * @param node DzNode - The node to look for in this node's hierarchy.
     * @returns boolean true if the node is a child of this node in the scene hierarchy, otherwise false.
     */
    isNodeChild(node: DzNode): boolean; // Boolean

    /**
     * Checks whether or not a given node is one of this node's descendants in the scene hierarchy.
     * @param node DzNode - The node to look for.
     * @param recurse boolean - Whether or not to descend this node's hierarchy.
     * @returns boolean true if the node is a descendant of this node in the scene hierarchy, otherwise false.
     * @since 4.15.0.18
     */
    isNodeDescendantOf(node: DzNode, recurse?: boolean): boolean; // Boolean

    /**
     * Check to see if this is a root (top) level node.
     * @returns boolean true if this node has no parent in the scene hierarchy, otherwise false.
     */
    isRootNode(): boolean; // Boolean

    /**
     * @returns boolean true if this node is selectable via the 3D viewport, otherwise false.
     */
    isSelectable(): boolean; // Boolean

    /**
     * Get the current selection state of this node.
     * @returns boolean true if the node is selected, otherwise false.
     */
    isSelected(): boolean; // Boolean

    /**
     * @returns boolean true if this node should redirect its viewport selection to its parent, otherwise false.
     */
    isSelectionPromoted(): boolean; // Boolean

    /**
     * Get the current visibility status of this node.
     * @returns boolean true if the node is visible, otherwise false.
     */
    isVisible(): boolean; // Boolean

    /**
     * Get the current render visibility status of this node.
     * @returns boolean true if the node set to be visible in the render, otherwise false.
     * @since 4.11.0.300
     */
    isVisibleInRender(): boolean; // Boolean

    /**
     * Get the current simulation visibility status of this node.
     * @returns boolean true if the node set to be visible in the simulation, otherwise false.
     * @since 4.11.0.300
     */
    isVisibleInSimulation(): boolean; // Boolean

    /**
     * Get the current view visibility status of this node.
     * @returns boolean true if the node set to be visible in the viewport, otherwise false.
     * @since 4.11.0.300
     */
    isVisibleInViewport(): boolean; // Boolean

    /**
     * Marks the asset as being modified.
     * @returns boolean true on success, otherwise false.
     */
    modifyAsset(): boolean; // Boolean

    /**
     * Marks the asset as being modified.
     * @param newUri DzUri - The new file URI for the asset.
     * @returns boolean true on success, otherwise false.
     */
    modifyAsset(newUri: DzUri): boolean; // Boolean

    /**
     * @param childIndex number - The index for the child to move.
     * @param newChildIndex number - The index to put the node at, -1 for end of list, 0 for beginning.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    moveNodeChildToIndex(childIndex: number, newChildIndex: number): DzError;

    /**
     * @param child DzNode - The node child to move.
     * @param index number - The index to put the node at, -1 for end of list, 0 for beginning.
     * @returns DzError DZ_NO_ERROR on success, otherwise an appropriate error code.
     */
    moveNodeChildToIndex(child: DzNode, index: number): DzError;

    /**
     * Removes all of the child nodes of this node.
     */
    removeAllNodeChildren(): void;

    /**
     * Removes a child from this node.
     * @param child DzNode - The node to remove from this node's list of children. A child must be removed from one parent before it can be attached to another.
     * @param inPlace boolean - If true, the necessary transforms to unparent 'In Place' will be calculated and applied to the child.
     * @returns DzError
     */
    removeNodeChild(child: DzNode, inPlace?: boolean): DzError;

    /**
     * Sets the selection state of this node.
     * @param onOff boolean - If true, sets selection on for this node. If false, sets selection off.
     */
    select(onOff?: boolean): void;

    /**
     * Sets the end point for this node.
     * @param endPnt DzVec3 - The end point for this node. This is the node's end point in relation to its geometry.
     * @param makeDefault boolean - Whether or not to set the default value as well as the current value.
     */
    setEndPoint(endPnt: DzVec3, makeDefault?: boolean): void;

    /**
     * Hide or show this node in the interface.
     * @param onOff boolean - If true, the node will not appear in the scene hierarchy. If false, the node will be displayed in the scene hierarchy.
     */
    setHidden(onOff: boolean): void;

    /**
     * Sets whether or not this node inherits the scale of its parent.
     * @param onOff boolean - If true, scaling the parent of this node will scale this node also.
     */
    setInheritScale(onOff: boolean): void;

    /**
     * Sets whether this nodes visibility is controlled by a DzGroupNode.
     * @param yesNo boolean
     */
    setInvisibleByGroup(yesNo: boolean): void;

    /**
     * Sets whether or not this node's visibility to rendering is controlled by a group node.
     * @param yesNo boolean
     * @since 4.9.4.73
     */
    setInvisibleInRenderByGroup(yesNo: boolean): void;

    /**
     * Sets whether or not this node's visibility to simulation is controlled by a group node.
     * @param yesNo boolean
     * @since 4.9.4.73
     */
    setInvisibleInSimulationByGroup(yesNo: boolean): void;

    /**
     * Sets whether or not this node's visibility to viewport drawing is controlled by a group node.
     * @param yesNo boolean
     * @since 4.11.0.36
     */
    setInvisibleInViewportByGroup(yesNo: boolean): void;

    /**
     * Sets local-space translation for this node at the current time.
     * @param posLocal DzVec3 - The local-space translation for this node.
     */
    setLocalPos(posLocal: DzVec3): void;

    /**
     * Sets local-space translation for this node.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param posLocal DzVec3 - The local-space translation for this node.
     */
    setLocalPos(tm: DzTime, posLocal: DzVec3): void;

    /**
     * Sets local-space rotation for this node at the current time.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     */
    setLocalRot(rotLocal: DzQuat): void;

    /**
     * Sets local-space rotation for this node.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     */
    setLocalRot(tm: DzTime, rotLocal: DzQuat): void;

    /**
     * Sets local-space scale for this node.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     */
    setLocalScale(tm: DzTime, scaleLocal: DzMatrix3): void;

    /**
     * Sets local-space scale for this node at the current time.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     * @param generalScale number - The general scale factor for this node.
     */
    setLocalScale(scaleLocal: DzMatrix3, generalScale: number): void;

    /**
     * Sets local-space scale for this node.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     * @param generalScale number - The general scale factor for this node.
     */
    setLocalScale(tm: DzTime, scaleLocal: DzMatrix3, generalScale: number): void;

    /**
     * Sets local-space scale for this node at the current time.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     */
    setLocalScale(scaleLocal: DzMatrix3): void;

    /**
     * Calculates the local transform matrix for this node at the current time.
     * @param posLocal DzVec3 - The local-space position offset for this node.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     */
    setLocalTransform(posLocal: DzVec3, rotLocal: DzQuat, scaleLocal: DzMatrix3): void;

    /**
     * Calculates the local transform matrix for this node at the given time.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param posLocal DzVec3 - The local-space position offset for this node.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     */
    setLocalTransform(tm: DzTime, posLocal: DzVec3, rotLocal: DzQuat, scaleLocal: DzMatrix3): void;

    /**
     * Calculates the local transform matrix for this node at the current time.
     * @param posLocal DzVec3 - The local-space position offset for this node.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     * @param generalScale number - The general scale for the transform.
     */
    setLocalTransform(posLocal: DzVec3, rotLocal: DzQuat, scaleLocal: DzMatrix3, generalScale: number): void;

    /**
     * Calculates the local transform matrix for this node at the given time.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param posLocal DzVec3 - The local-space position offset for this node.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     * @param generalScale number - The general scale for the transform.
     */
    setLocalTransform(tm: DzTime, posLocal: DzVec3, rotLocal: DzQuat, scaleLocal: DzMatrix3, generalScale: number): void;

    /**
     * Sets whether or not the local transform for this node is disabled.
     * @param onOff boolean - If true, the transform controls are disabled and the local transform for this node is overridden to be identity.
     * @since 4.12.1.68
     */
    setLocalTransformDisabled(onOff: boolean): void;

    /**
     * Sets whether or not the local transform of this node is ignored.
     * @param onOff boolean - If true, the local transform for this node is not applied to any associated geometry.
     * @since 4.12.1.68
     */
    setLocalTransformIgnored(onOff: boolean): void;

    /**
     * Sets the override color to be used to draw the node while using manipulation draw styles.
     * @param color Color - The value for the override color.
     */
    setManipOverColor(color: Color): void;

    /**
     * Sets the object for this node.
     * @param object DzObject - The object that will be drawn by this node. The node takes ownership of this object and deletes it when it is no longer used.
     */
    setObject(object: DzObject): void;

    /**
     * Sets the orientation for this node.
     * @param orientation DzQuat - The orientation for this node. This defines the space in which node rotations occur.
     * @param makeDefault boolean - Whether or not to set the default value as well as the current value.
     */
    setOrientation(orientation: DzQuat, makeDefault?: boolean): void;

    /**
     * Sets the orientation for this node.
     * @param angles DzVec3 - The orientation for this node in degrees. This defines the space in which node rotations occur.
     * @param makeDefault boolean - Whether or not to set the default value as well as the current value.
     */
    setOrientationAngles(angles: DzVec3, makeDefault?: boolean): void;

    /**
     * Sets the origin for this node.
     * @param origin DzVec3 - The origin for this node. This is the node's center point in relation to its geometry.
     * @param makeDefault boolean - Whether or not to set the default value as well as the current value.
     */
    setOrigin(origin: DzVec3, makeDefault?: boolean): void;

    /**
     * Set the strength of the point at parameter.
     * @param strength number - A value in the range [0.0, 1.0] that determines how closely this node aims at its point-at target.
     */
    setPointAtStrength(strength: number): void;

    /**
     * Set the target for this node to be pointed toward.
     * @param target DzNode - The node whose origin will serve as the target of point-at functionality.
     */
    setPointAtTarget(target: DzNode): void;

    /**
     * Sets the presentation for this node.
     * @param pres DzPresentation - The new presentation for this node.
     */
    setPresentation(pres: DzPresentation): void;

    /**
     * Sets the preview box for this node.
     * @param box DzOrientedBox3 - The oriented box to set.
     */
    setPreviewBox(box: DzOrientedBox3): void;

    /**
     * Sets whether or not to redirect selection.
     * @param onOff boolean - If true, the node will redirect its selection to its parent.
     */
    setPromoteSelection(onOff: boolean): void;

    /**
     * Sets the node rotation order.
     * @param order DzRotationOrder - The order that the axis rotations will be applied in for this node.
     */
    setRotationOrder(order: DzRotationOrder): void;

    /**
     * Sets whether or not this node is selectable via the 3D viewport.
     * @param onOff boolean - If true, the node will be selectable (the default). If false, the node will not participate in the pick image.
     */
    setSelectable(onOff: boolean): void;

    /**
     * Sets the selection map to use for this node.
     * @param map DzSelectionMap - The selection map to use for this node.
     */
    setSelectionMap(map: DzSelectionMap): void;

    /**
     * Sets the local-space rotation for this node, in the context of the current tool, at the current time.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     */
    setToolLocalRot(tm: DzTime, rotLocal: DzQuat): void;

    /**
     * Sets the local-space rotation for this node, in the context of the current tool.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     */
    setToolLocalRot(rotLocal: DzQuat): void;

    /**
     * Calculates the local transform matrix for this node at the current time, in the context of the current tool.
     * @param posLocal DzVec3 - The local-space position offset for this node.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     * @param generalScale number - The general scale for the transform.
     * @since 4.9.3.16
     */
    setToolLocalTransform(posLocal: DzVec3, rotLocal: DzQuat, scaleLocal: DzMatrix3, generalScale: number): void;

    /**
     * Calculates the local transform matrix for this node at the current time, in the context of the current tool.
     * @param posLocal DzVec3 - The local-space position offset for this node.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     * @since 4.9.3.16
     */
    setToolLocalTransform(posLocal: DzVec3, rotLocal: DzQuat, scaleLocal: DzMatrix3): void;

    /**
     * Calculates the local transform matrix for this node at the given time, in the context of the current tool.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param posLocal DzVec3 - The local-space position offset for this node.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     * @param generalScale number - The general scale for the transform.
     * @since 4.8.1.13
     */
    setToolLocalTransform(tm: DzTime, posLocal: DzVec3, rotLocal: DzQuat, scaleLocal: DzMatrix3, generalScale: number): void;

    /**
     * Calculates the local transform matrix for this node, in the context of the current tool, at the given time.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param posLocal DzVec3 - The local-space position offset for this node.
     * @param rotLocal DzQuat - The local-space rotation for this node.
     * @param scaleLocal DzMatrix3 - The local-space scale for this node.
     * @since 4.8.1.13
     */
    setToolLocalTransform(tm: DzTime, posLocal: DzVec3, rotLocal: DzQuat, scaleLocal: DzMatrix3): void;

    /**
     * Sets the world-space rotation for this node at the current time, in the context of the current tool.
     * @param rotWS DzQuat - The world-space rotation for this node.
     * @since 4.9.3.16
     */
    setToolWSRot(rotWS: DzQuat): void;

    /**
     * Sets the world-space rotation for this node, in the context of the current tool.
     * @param tm DzTime - The scene time at which to set the rotation for this node.
     * @param rotWS DzQuat - The world-space rotation for this node.
     * @since 4.9.3.16
     */
    setToolWSRot(tm: DzTime, rotWS: DzQuat): void;

    /**
     * Sets the world-space transform values for this node at the current time, in the context of the current tool.
     * @param posWS DzVec3 - The world-space position offset for this node.
     * @param rotWS DzQuat - The world-space rotation for this node.
     * @param scaleWS DzMatrix3 - The world-space scale for this node.
     * @since 4.9.3.16
     */
    setToolWSTransform(posWS: DzVec3, rotWS: DzQuat, scaleWS: DzMatrix3): void;

    /**
     * Sets the world-space transform values for this node, in the context of the current tool.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param posWS DzVec3 - The world-space position offset for this node.
     * @param rotWS DzQuat - The world-space rotation for this node.
     * @param scaleWS DzMatrix3 - The world-space scale for this node.
     * @since 4.9.3.16
     */
    setToolWSTransform(tm: DzTime, posWS: DzVec3, rotWS: DzQuat, scaleWS: DzMatrix3): void;

    /**
     * Sets whether or not this node's selectability is controlled by a group node.
     * @param yesNo boolean
     */
    setUnselectableByGroup(yesNo: boolean): void;

    /**
     * Sets whether or not this node is visible in the viewport, in renders and in simulations.
     * @param onOff boolean - If true, the node will be visible (the default). If false, the node will not be drawn in the viewport, will not be rendered and will not be simulated.
     */
    setVisible(onOff: boolean): void;

    /**
     * Sets whether or not this node is visible during a render.
     * @param onOff boolean - If true, the node is visible during a render, otherwise it is not.
     */
    setVisibleInRender(onOff: boolean): void;

    /**
     * Sets whether or not this node is visible during a simulation.
     * @param onOff boolean - If true, the node is visible during a simulation, otherwise it is not.
     * @since 4.9.4.25
     */
    setVisibleInSimulation(onOff: boolean): void;

    /**
     * Sets whether or not this node is visible in the 3D viewport.
     * @param onOff boolean - If true, the node will be visible (the default). If false, the node will not be drawn in the 3D viewport.
     * @since 4.11.0.36
     */
    setVisibleInViewport(onOff: boolean): void;

    /**
     * Sets the world-space translation for this node at the current time.
     * @param posWS DzVec3
     */
    setWSPos(posWS: DzVec3): void;

    /**
     * Sets the world-space translation for this node.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param posWS DzVec3
     */
    setWSPos(tm: DzTime, posWS: DzVec3): void;

    /**
     * Sets the world-space rotation for this node at the current time.
     * @param rotWS DzQuat - The world-space rotation for this node.
     */
    setWSRot(rotWS: DzQuat): void;

    /**
     * Sets the world-space rotation for this node.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param rotWS DzQuat - The world-space rotation for this node.
     */
    setWSRot(tm: DzTime, rotWS: DzQuat): void;

    /**
     * Sets the world-space scale for this node.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param scaleWS DzMatrix3 - The world-space scale for this node.
     */
    setWSScale(tm: DzTime, scaleWS: DzMatrix3): void;

    /**
     * Sets the world-space scale for this node at the current time.
     * @param scaleWS DzMatrix3 - The world-space scale for this node.
     */
    setWSScale(scaleWS: DzMatrix3): void;

    /**
     * Sets the world-space transform values for this node at the current time.
     * @param posWS DzVec3 - The world-space position offset for this node.
     * @param rotWS DzQuat - The world-space rotation for this node.
     * @param scaleWS DzMatrix3 - The world-space scale for this node.
     */
    setWSTransform(posWS: DzVec3, rotWS: DzQuat, scaleWS: DzMatrix3): void;

    /**
     * Sets the world-space transform values for this node.
     * @param tm DzTime - The scene time at which to set the transform for this node.
     * @param posWS DzVec3 - The world-space position offset for this node.
     * @param rotWS DzQuat - The world-space rotation for this node.
     * @param scaleWS DzMatrix3 - The world-space scale for this node.
     */
    setWSTransform(tm: DzTime, posWS: DzVec3, rotWS: DzQuat, scaleWS: DzMatrix3): void;

    /**
     * @returns boolean true if this node is set unselectable by a group node, otherwise false.
     */
    unselectableByGroup(): boolean; // Boolean

    /**
     * Called to update any cached or display data for this object.
     * @param isRender boolean - If true, the node should prepare itself for a render quality presentation. This is typically only set true when performing an “offline” render, otherwise it should be set false (default) to prevent thrashing of the geometry cache.
     */
    update(isRender?: boolean): void;

    /**
     * Update the orientation of the node.
     */
    updateOrientation(): void;

    /* Signals */

    /**
     * Emitted immediately before the node is removed from the scene.
     */
    aboutToBeRemoved: ISignal<void>;

    /**
     * Emitted when the node is about to be deleted.
     * @param node DzNode - The node being deleted.
     */
    aboutToDelete: ISignal<DzNode>;

    /**
     * Emitted when the node is added to the scene.
     */
    added: ISignal<void>;

    /**
     * Emitted when the node has been modified.
     */
    assetModified: ISignal<void>;

    /**
     * Emitted after the node has been saved.
     */
    assetWasSaved: ISignal<void>;

    /**
     * Emitted after the bounding box for this node has been invalidated.
     */
    boundBoxInvalidated: ISignal<void>;

    /**
     * Emitted when a child is added to the node.
     * @param child DzNode
     */
    childAdded: ISignal<DzNode>;

    /**
     * Emitted when a child is added to or removed from the node.
     */
    childListChanged: ISignal<void>;

    /**
     * Emitted after the order of this node's children has changed.
     */
    childListOrderChanged: ISignal<void>;

    /**
     * Emitted when a child is removed from the node.
     * @param child DzNode
     */
    childRemoved: ISignal<DzNode>;

    /**
     * Emitted when the visual representation of this node needs to be redrawn.
     */
    drawnDataChanged: ISignal<void>;

    /**
     * Emitted when the hidden state of this node is changed.
     * @param hidden boolean - true if the node is currently hidden in the interface, otherwise false.
     */
    hiddenChanged: ISignal<boolean>;

    /**
     * Emitted when the state of this node's scale inheritance has changed.
     */
    inheritScaleChanged: ISignal<void>;

    /**
     * Emitted when the list of materials for this node has changed.
     */
    materialListChanged: ISignal<void>;

    /**
     * Emitted when the list of selected materials for this node has changed.
     */
    materialSelectionChanged: ISignal<void>;

    /**
     * Emitted when the material selection sets for this node has changed.
     */
    materialSelectionSetsChanged: ISignal<void>;

    /**
     * Emitted when a different object becomes associated with this node.
     * @param node DzNode - This node.
     * @param oldObject DzObject - The prior object, or NULL if none.
     * @param newObject DzObject - The new object, or NULL if none.
     */
    objectChanged: ISignal<DzNode, DzObject, DzObject>;

    /**
     * Emitted when the parent hierarchy for this node has changed.
     * @param node DzNode - This node.
     */
    parentHierarchyChanged: ISignal<DzNode>;

    /**
     * Emitted when this node's selection promotion has changed.
     * @param promoteSelection boolean - true if selection is promoted, false if selection is not promoted.
     */
    promoteSelectionChanged: ISignal<boolean>;

    /**
     * Emitted when the node is removed from the scene.
     */
    removed: ISignal<void>;

    /**
     * Emitted when the rotation order, orientation, center point, or end point for this node have changed.
     */
    riggingChanged: ISignal<void>;

    /**
     * Emitted when the rotation order of this node changes.
     */
    rotationOrderChanged: ISignal<void>;

    /**
     * Emitted when the selectability of the node has changed.
     */
    selectabilityChanged: ISignal<void>;

    /**
     * Emitted when the selection state of this node changes.
     * @param node DzNode - This node.
     * @param onOff boolean - true if the node was selected, false if it was deselected.
     */
    selected: ISignal<DzNode, boolean>;

    /**
     * Emitted when the topology for this node has changed.
     */
    topologyChanged: ISignal<void>;

    /**
     * Emitted when transformation properties of this node change.
     */
    transformChanged: ISignal<void>;

    /**
     * Emitted when the current uv set for this node has changed.
     */
    uvsChanged: ISignal<void>;

    /**
     * Emitted when the visibility of the node has changed.
     */
    visibilityChanged: ISignal<void>;

    /**
     * Emitted when the visibility of the node in renders has changed.
     * @since 4.9.4.73
     */
    visibilityInRenderChanged: ISignal<void>;

    /**
     * Emitted when the visibility of the node in simulations has changed.
     * @since 4.9.4.73
     */
    visibilityInSimulationChanged: ISignal<void>;

    /**
     * Emitted when the visibility of the node in viewports has changed.
     * @since 4.11.0.36
     */
    visibilityInViewportChanged: ISignal<void>;
}
