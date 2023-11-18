declare class DzNumericController extends DzController {
    apply(val: number, time: DzTime, local: boolean);
    applyInverse(val: number, time: DzTime, local: boolean);
}