/**
 * A class for creating a single lightweight clone of a node in the scene, within a group of like clones.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/instancegroupitem_dz
 */
declare class DzInstanceGroupItem extends DzBase {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Copies the transform values of the given nodes transform properties. Also copies rotation order.
     * @param node DzNode - The node to copy transform values from.
     */
    copyTransformFromNode(node: DzNode): void;

    /**
     * Copies the transform values to the given nodes transform properties. Also copies rotation order
     * @param node DzNode - The node to copy transform values from.
     */
    copyTransformToNode(node: DzNode): void;

    /**
     * @returns DzVec3 The endpoint values of this item.
     */
    getEndPointValues(): DzVec3;

    /**
     * @returns number The general scale value of this item.
     */
    getGeneralScaleValue(): number; // Number

    /**
     * @returns string The label of this item.
     */
    getLabel(): string; // String

    /**
     * @returns DzVec3 The local-space position of the item at the current time.
     */
    getLocalPos(): DzVec3;

    /**
     * @returns DzQuat The local-space rotation of the item at the current time.
     */
    getLocalRot(): DzQuat;

    /**
     * @returns DzMatrix3 The local-space scale of the item at the time.
     */
    getLocalScale(): DzMatrix3;

    /**
     * @returns DzMatrix3 A matrix representing the composed local transform for this item at the current time.
     */
    getLocalTransform(): DzMatrix3;

    /**
     * @returns DzQuat The orientation of the item.
     */
    getOrientation(): DzQuat;

    /**
     * @returns DzVec3 The orientation values of this item, in degrees.
     */
    getOrientationValues(): DzVec3;

    /**
     * @returns DzVec3 The origin (centerpoint) values of this item.
     */
    getOriginValues(): DzVec3;

    /**
     * @returns DzVec3 The potion values of this item.
     */
    getPositionValues(): DzVec3;

    /**
     * @returns DzRotationOrder The rotation order of this item.
     */
    getRotationOrder(): DzRotationOrder;

    /**
     * @returns DzVec3 The rotation values of this item, in degrees.
     */
    getRotationValues(): DzVec3;

    /**
     * @param tm DzTime - The scene time at which to get the the transform.
     * @param defaultVal boolean - Use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzVec3 The world-space position of the item.
     */
    getWSPos(tm: DzTime, defaultVal?: boolean): DzVec3;

    /**
     * @returns DzVec3 The world-space position of the item at the current time.
     */
    getWSPos(): DzVec3;

    /**
     * @param tm DzTime - The scene time at which to get the the transform.
     * @param defaultVal boolean - Use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzQuat The world-space rotation of the item.
     */
    getWSRot(tm: DzTime, defaultVal?: boolean): DzQuat;

    /**
     * @returns DzQuat The world-space rotation of the item at the current time.
     */
    getWSRot(): DzQuat;

    /**
     * @param tm DzTime - The scene time at which to get the the transform.
     * @param defaultVal boolean - Use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzMatrix3 The world-space scale of the item.
     */
    getWSScale(tm: DzTime, defaultVal?: boolean): DzMatrix3;

    /**
     * @returns DzMatrix3 The world-space scale of the item at the current time.
     */
    getWSScale(): DzMatrix3;

    /**
     * @returns DzMatrix3 A matrix representing the composed world-space transform for this item at the current time.
     */
    getWSTransform(): DzMatrix3;

    /**
     * @param tm DzTime - The scene time at which to get the the transform.
     * @param defaultVal boolean - Use the default version of the origin, end point, and orientation instead of the current position.
     * @returns DzMatrix3 A matrix representing the composed world-space transform for this item.
     */
    getWSTransform(tm: DzTime, defaultVal?: boolean): DzMatrix3;

    /**
     * @returns DzVec3 The xyz scale values of this item.
     */
    getXYZScaleValues(): DzVec3;

    /**
     * @returns boolean true if this node inherits scale from its parent, otherwise false.
     */
    inheritsScale(): boolean; // Boolean

    /**
     * Sets the endpoint for this item.
     * @param x number - The x position.
     * @param y number - The y position.
     * @param z number - The z position.
     */
    setEndPoint(x: number, y: number, z: number): void;

    /**
     * Sets whether or not this node inherits the scale of its parent.
     * @param onOff boolean - If true, scaling the parent of this node will scale this node also.
     */
    setInheritScale(onOff: boolean): void;

    /**
     * Sets the label for this item.
     * @param label string - The label to set.
     */
    setLabel(label: string): void;

    /**
     * Sets the orientation for this item.
     * @param x number - The rotation, in degrees, on the x axis.
     * @param y number - The rotation, in degrees, on the y axis.
     * @param z number - The rotation, in degrees, on the z axis.
     */
    setOrientation(x: number, y: number, z: number): void;

    /**
     * Sets the origin for this item.
     * @param x number - The x position.
     * @param y number - The y position.
     * @param z number - The z position.
     */
    setOrigin(x: number, y: number, z: number): void;

    /**
     * Sets the position for this item.
     * @param x number - The x position.
     * @param y number - The y position.
     * @param z number - The z position.
     */
    setPosition(x: number, y: number, z: number): void;

    /**
     * Sets the rotation for this item.
     * @param x number - The rotation, in degrees, on the x axis.
     * @param y number - The rotation, in degrees, on the y axis.
     * @param z number - The rotation, in degrees, on the z axis.
     */
    setRotation(x: number, y: number, z: number): void;

    /**
     * Sets the rotation order for this item.
     * @param order DzRotationOrder - The rotation order to set.
     */
    setRotationOrder(order: DzRotationOrder): void;

    /**
     * Sets the scale for this item.
     * @param x number - The scale on the x axis.
     * @param y number - The scale on the y axis.
     * @param z number - The scale on the z axis.
     * @param genScale number - The general scale.
     */
    setScale(x: number, y: number, z: number, genScale: number): void;

    /* Signals */

    /**
     * Emitted when the local transform for this item has changed.
     */
    localTransformChanged: ISignal<void>;

    /**
     * Emitted when the transform for this item has changed.
     */
    transformChanged: ISignal<void>;
}
