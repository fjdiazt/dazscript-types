/**
 * Encapsulates an Interactive Lesson Instruction object.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/interactiveinstructionobject_dz
 */
declare class DzInteractiveInstructionObject extends QObject {

    /* Methods */

    /**
     * @param name string
     * @returns Object An Object, Array, Boolean, Number or String if the instruction has a member named name, otherwise null
     */
    getMember(name: string): Object;

    /**
     * @param name string
     * @returns boolean true if the object has a member named name, otherwise false
     */
    hasMember(name: string): boolean; // Boolean

    /**
     * Removes the member/value named name from the instruction.
     * @param name string
     */
    removeMember(name: string): void;

    /**
     * Sets the member name of the instruction to value. A valid value depends on the type of instruction and can be one of Boolean, Number, String or Array.
     * @param name string
     * @param value Object
     */
    setMember(name: string, value: Object): void;
}
