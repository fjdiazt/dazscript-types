/**
 * Class for importing geometry in the Wavefront Object (*.obj) format.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/objimporter_dz
 */
declare class DzObjImporter extends DzGeometryImporter {

    /* Constructors */

    constructor();

    /* Undocumented Augment Members */

    /** @undocumented */
    iskindof(kind: string): any;

    /** @undocumented */
    getName(): string;

    /** @undocumented */
    setLoadFilter(filter: DzFileLoadFilter): any;

    /** @undocumented */
    getFileLoadFilter(): any;

    /** @undocumented */
    addNodetoFilter(node: DzNode): any;

    /** @undocumented */
    finishFilter(): any;
}
