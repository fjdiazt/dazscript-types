/**
 * Represents a Document Object Model (DOM) “Processing Instruction”.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/domprocessinginstruction_dz
 */
declare class DzDomProcessingInstruction extends DzDomNode {

    /* Properties */

    /**
     * Holds the data of the processing instruction.
     */
    data: string; // String

    /**
     * Holds the target of the processing instruction. (Read Only)
     */
    target: string; // String
}
