/**
 * Manager that is responsible for simulation engines and simulation.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/simulationmgr_dz
 */
declare class DzSimulationMgr extends DzBase {

    /* Methods */

    /**
     * Clears all simulation data in the scene for the active simulation engine.
     * @returns DzError DZ_NO_ERROR if the operation is successful, otherwise an appropriate error code.
     */
    clearSimulation(): DzError;

    /**
     * @param className string
     * @returns DzSimulationEngine The simulation engine with the given class name (if any), otherwise null.
     */
    findSimulationEngine(className: string): DzSimulationEngine;

    /**
     * @returns DzSimulationEngine The active simulation engine for the application. This will be NULL if no simulation engines are available.
     */
    getActiveSimulationEngine(): DzSimulationEngine;

    /**
     * @returns number The number of simulation engines available to the application.
     */
    getNumSimulationEngines(): number; // Number

    /**
     * @param which number
     * @returns DzSimulationEngine If which is within the range [0, getNumSimulationEngines() - 1], the simulation engine at the given index, otherwise null.
     */
    getSimulationEngine(which: number): DzSimulationEngine;

    /**
     * @returns any[] A list of simulation engines available in the application.
     */
    getSimulationEngineList(): any[]; // Array

    /**
     * @returns boolean true if the application is currently simulating, otherwise false.
     */
    isSimulating(): boolean; // Boolean

    /**
     * Sets the active simulation engine for the application.
     * @param engine DzSimulationEngine - The simulation engine to make active.
     */
    setActiveSimulationEngine(engine: DzSimulationEngine): void;

    /**
     * Performs a simulation on the scene with the given simulation settings. If no simulation settings are specified, then the current application simulation settings are used.
     * @returns DzError DZ_NO_ERROR if the operation is successful, otherwise an appropriate error code.
     */
    simulate(): DzError;

    /* Signals */

    /**
     * Emitted when the active simulation engine has changed.
     * @param engine DzSimulationEngine - The newly active simulation engine.
     */
    activeSimulationEngineChanged: ISignal<DzSimulationEngine>;

    /**
     * Emitted when a new simulation engine is added to the manager. This only occurs at startup as plug-ins are being loaded.
     * @param engine DzSimulationEngine - The new simulation engine that was added to the manager.
     */
    simulationEngineAdded: ISignal<DzSimulationEngine>;

    /**
     * Emitted when an error occurs while the active simulation engine is simulating.
     * @param errorMsg string - The error message.
     */
    simulationError: ISignal<string>;

    /**
     * Emitted just after a simulation operation is finished. This is only emitted when a simulation operation is performed by calling simulate() - this includes all simulation operations that are started by the user from the interface. This may not include simulation operations performed by plug-ins, scripts, etc which do not call simulate().
     * @param succeeded boolean - true if the simulation was successful, false if the simulation failed or was cancelled by the user.
     */
    simulationFinished: ISignal<boolean>;

    /**
     * Emitted when the default options for the active simulation engine have been restored.
     */
    simulationOptionDefaultsRestored: ISignal<void>;

    /**
     * Emitted just before a simulation operation begins. This is only emitted when a simulation operation is performed by calling simulate() - this includes all simulation operations that are started by the user from the interface. This may not include simulation operations performed by plug-ins, scripts, etc which do not call simulate().
     */
    simulationStarting: ISignal<void>;
}
