/**
 * Base class for all simulation engines.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/simulationengine_dz
 */
declare class DzSimulationEngine extends DzBase {

    /* Methods */

    /**
     * Clears all simulation data in the scene for this engine.
     * @returns DzError
     */
    clearSimulation(): DzError;

    /**
     * Starts a custom simulation on the list of nodes specified, using this engine.
     * @param nodes any[] - The list of nodes to perform the simulation on.
     * @returns DzError
     */
    customSimulate(nodes: any[]): DzError;

    /**
     * @param list any[]
     * @returns any[] A list of elements that hold the properties for controlling this engine.
     */
    getSimulationElements(list: any[]): any[]; // Array

    /**
     * Starts a simulation using this engine.
     * @returns DzError
     */
    simulate(): DzError;

    /* Signals */

    /**
     * Emitted just before the engine begins simulating.
     * @param engine DzSimulationEngine - This engine.
     */
    aboutToSimulate: ISignal<DzSimulationEngine>;

    /**
     * Emitted just after the engine finishes simulating.
     * @param engine DzSimulationEngine - This engine.
     */
    simulateFinished: ISignal<DzSimulationEngine>;

    /**
     * Emitted when an error occurs while the engine is simulating.
     * @param errorMsg string - The error message.
     */
    simulationError: ISignal<string>;
}
