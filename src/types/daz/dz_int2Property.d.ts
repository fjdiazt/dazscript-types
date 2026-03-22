declare class DzInt2Property extends DzIntProperty {

    adjustInt2Value(val: DzInt2): DzInt2;
    adjustInt2Value(tm: DzTime, val: DzInt2): DzInt2;

    getDefaultInt2Value(): DzInt2;

    getInt2FollowValue(): DzInt2;
    getInt2FollowValue(tm: DzTime): DzInt2;

    getInt2Value(): DzInt2;
    getInt2Value(tm: DzTime): DzInt2;

    getKeyInt2Value(i: number): DzInt2;

    getLocalInt2Value(): DzInt2;
    getLocalInt2Value(tm: DzTime): DzInt2;

    getRawInt2Value(): DzInt2;
    getRawInt2Value(tm: DzTime): DzInt2;

    setDefaultInt2Value(val: DzInt2): void;

    setInt2Value(val: DzInt2): void;
    setInt2Value(tm: DzTime, val: DzInt2): void;

    setKeyInt2Value(i: number, val: DzInt2): void;

    setRawInt2Value(val: DzInt2): void;
    setRawInt2Value(tm: DzTime, val: DzInt2): void;

}


