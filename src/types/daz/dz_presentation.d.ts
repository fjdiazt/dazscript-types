declare class DzPresentation extends DzBase {

    /* Properties */
    type: string;
    label: string;
    description: string;
    iconLarge: string;
    iconSmall: string;
    colorA: Color;
    colorB: Color;
    autoFitBase: string;
    preferredBase: string;

    /* Methods */
    iconReady(): void;
    attributeChanged(): void;
}