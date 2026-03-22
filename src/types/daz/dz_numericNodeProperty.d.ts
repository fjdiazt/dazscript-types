declare class DzNumericNodeProperty extends DzFloatProperty {

    /* Properties */

    /* Methods */
    nodeChanged(node: DzNode): void;
    invalidWithoutNodeChanged(onOff: boolean): void;
    setMustHaveNode(onOff: boolean): void;
    setNode(node: DzNode): void;
    isInvalidWithoutNode(): boolean;
    redirectNodes(): any; // TODO ;
    emitNodeChanged(node: DzNode): void;
    emitInvalidWithoutNodeChanged(onOff: boolean): void;
}