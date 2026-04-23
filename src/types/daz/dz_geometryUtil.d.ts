/**
 * DAZ Script's global static object for geometry manipulation utility functions.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/geometryutil_dz
 */
declare class DzGeometryUtil extends QObject {

    /* Enumerations (Static Properties) */

    /**
     * DAZ enum member of PrimitiveType.
     */
    static Sphere: number;

    /**
     * DAZ enum member of PrimitiveType.
     */
    static Cube: number;

    /**
     * DAZ enum member of PrimitiveType.
     */
    static Cone: number;

    /**
     * DAZ enum member of PrimitiveType.
     */
    static Plane: number;

    /**
     * DAZ enum member of PrimitiveType.
     */
    static Torus: number;

    /**
     * DAZ enum member of PrimitiveType.
     */
    static Cylinder: number;

    /* Methods */

    /**
     * Converts a scene item with polygon mesh geometry to a SubD object. If the node passed in is a DzBone or DzSkeleton, the entire figure will be converted to SubD.
     * @param node DzNode - The scene item to convert.
     * @param defaultLevel number - The default subdivision level of the item after conversion.
     * @returns DzError DZ_NO_ERROR on success, otherwise an error code.
     */
    convertToSubD(node: DzNode, defaultLevel?: number): DzError;

    /**
     * Creates a primitive based on the settings supplied.
     * @param settings DzSettings - The settings that specify the type of primitive and corresponding dimensions.
     * @returns DzNode The new primitive node in the scene. NULL if nothing was created.
     */
    createPrimitive(settings: DzSettings): DzNode;

    /**
     * Populates a settings object with the default settings that are used to create a primitive.
     * @param type number - The type of primitive shape to get the default options for.
     * @param settings DzSettings - The settings object to populate with the individual settings that specify the type of primitive and corresponding dimensions.
     * @since 4.9.3.105
     */
    getDefaultPrimitiveOptions(type: number, settings: DzSettings): void;
}
