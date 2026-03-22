declare class DzController extends DzBase {
    // Enumerations
    // ControllerEffect	{ None, Additive, Replace }

    description: string;
    slaveDescription: string;
    effect: number;

    getOwner(): DzProperty;
    getProperty(): DzNumericProperty;
    getCurrentProperty(): DzNumericNodeProperty;
}