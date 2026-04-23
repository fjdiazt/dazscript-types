/**
 * Encapsulates an Interactive Lesson object.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/interactivelessonobject_dz
 */
declare class DzInteractiveLessonObject extends QObject {

    /* Methods */

    /**
     * @returns DzInteractiveInstructionObject A new DzInteractiveInstructionObject appended to the end of the interactive lesson.
     */
    appendInstruction(): DzInteractiveInstructionObject;

    /**
     * @returns number The number of instructions in the interactive lesson.
     */
    count(): number; // Number

    /**
     * @returns number The index of the current instruction in the interactive lesson.
     */
    currentIndex(): number; // Number

    /**
     * @param index number
     * @returns DzInteractiveInstructionObject A new DzInteractiveInstructionObject inserted into the interactive lesson at index position.
     */
    insertInstruction(index: number): DzInteractiveInstructionObject;

    /**
     * @param index number
     * @returns DzInteractiveInstructionObject The instruction at index in the interactive lesson.
     */
    instructionAt(index: number): DzInteractiveInstructionObject;

    /**
     * @returns DzInteractiveInstructionObject The next instruction in the interactive lesson, or NULL if the last instruction.
     */
    nextInstruction(): DzInteractiveInstructionObject;
}
