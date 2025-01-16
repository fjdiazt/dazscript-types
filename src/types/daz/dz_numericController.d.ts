declare class DzNumericController extends DzController {
    apply(val: number, time: DzTime, local: boolean): any;
    applyInverse(val: number, time: DzTime, local: boolean): any;
}