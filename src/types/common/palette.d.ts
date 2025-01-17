declare class Palette extends QObject {
    /* Properties */
    active: Palette;
    alternateBase: Color;
    background: Color;
    base: Color;
    brightText: Color;
    button: Color;
    buttonText: Color;
    dark: Color;
    disabled: Palette;
    foreground: Color;
    highlight: Color;
    highlightedText: Color;
    inactive: Palette;
    light: Color;
    link: Color;
    linkVisited: Color;
    mid: Color;
    midlight: Color;
    shadow: Color;
    text: Color;
    toolTipBase: Color;
    toolTipText: Color;
    window: Color;
    windowText: Color;

    /* Constructors */
    constructor(active: Palette, disabled: Palette, inactive: Palette);
}
