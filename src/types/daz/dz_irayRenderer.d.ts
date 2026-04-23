/**
 * The NVIDIA Iray renderer.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/irayrenderer_dz
 */
declare class DzIrayRenderer extends DzRenderer {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * @returns boolean
     * @since 4.12.1.81
     */
    getAllowCPUFallback(): boolean; // Boolean

    /**
     * @returns boolean
     * @since 4.12.1.81
     */
    getAllowGPUDetection(): boolean; // Boolean

    /**
     * @returns number The CPU load limit for the NVIDIA Iray renderer.
     * @since 4.12.1.81
     */
    getCPULoadLimit(): number; // Number

    /**
     * @returns boolean true if CPU thread affinity is enabled, otherwise false.
     * @since 4.12.1.81
     */
    getCPUThreadAffinityEnabled(): boolean; // Boolean

    /**
     * @returns boolean
     * @since 4.12.1.81
     */
    getGPUDriverCheck(): boolean; // Boolean

    /**
     * @returns number The GPU load limit for the NVIDIA Iray renderer.
     * @since 4.12.1.81
     */
    getGPULoadLimit(): number; // Number

    /**
     * @returns number
     * @since 4.12.1.81
     */
    getHighThreshold(): number; // Number

    /**
     * @returns number
     * @since 4.12.1.81
     */
    getMediumThreshold(): number; // Number

    /**
     * @returns number
     * @since 4.12.1.81
     */
    getNVLINKPeerGroupSize(): number; // Number

    /**
     * @returns DzElement The element that holds the properties for this renderer.
     */
    getPropertyHolder(): DzElement;

    /**
     * @returns boolean true if this renderer is currently performing an interactive progressive render, otherwise false.
     */
    isIPRRendering(): boolean; // Boolean

    /**
     * @param onOff boolean
     * @since 4.12.1.81
     */
    setAllowCPUFallback(onOff: boolean): void;

    /**
     * @param onOff boolean
     * @since 4.12.1.81
     */
    setAllowGPUDetection(onOff: boolean): void;

    /**
     * Sets the CPU load limit for the NVIDIA Iray renderer.
     * @param limit number - The new CPU load limit. This value may be clamped against some upper bound imposed by license restrictions.
     * @returns boolean true if the limit was successfully set, false if the new limit was not set (e.g., invalid - less than 1.0).
     * @since 4.12.1.81
     */
    setCPULoadLimit(limit: number): boolean; // Boolean

    /**
     * Sets the affinity of CPU threads.
     * @param onOff boolean - If true, threads are bound to the CPU they are currently running on. If false (default), the operating system is free to migrate threads between CPUs as it sees fit (which may suffer from cache misses).
     * @returns boolean true if thread affinity was successfully set, otherwise false.
     * @since 4.12.1.81
     */
    setCPUThreadAffinityEnabled(onOff: boolean): boolean; // Boolean

    /**
     * @param onOff boolean
     * @since 4.12.1.81
     */
    setGPUDriverCheck(onOff: boolean): void;

    /**
     * Sets the GPU load limit for the NVIDIA Iray renderer.
     * @param limit number - The new GPU load limit. This value may be clamped against some upper bound imposed by license restrictions.
     * @returns boolean true if the limit was successfully set, false if the new limit was not set (e.g., invalid - less than 1.0).
     * @since 4.12.1.81
     */
    setGPULoadLimit(limit: number): boolean; // Boolean

    /**
     * @param val number
     * @since 4.12.1.81
     */
    setHighThreshold(val: number): void;

    /**
     * @param val number
     * @since 4.12.1.81
     */
    setMediumThreshold(val: number): void;

    /**
     * @param size number
     * @since 4.12.1.81
     */
    setNVLINKPeerGroupSize(size: number): void;

    /* Undocumented Augment Members */

    /** @undocumented */
    addRenderElements(p0: DzElementList): any;

    /** @undocumented */
    autoBake(p0: DzRenderHandler, p1: DzCamera, p2: DzLightListIterator, p3: DzNodeListIterator, p4: DzBakerOptions): any;

    /** @undocumented */
    bake(p0: DzRenderHandler, p1: DzCamera, p2: DzLightListIterator, p3: DzNodeListIterator, p4: DzBakerOptions): any;

    /** @undocumented */
    exportRenderToBridgeQueue(p0: QString): any;

    /** @undocumented */
    exportRenderToBridgeQueue(p0: QString, p1: QString): any;

    /** @undocumented */
    exportRenderToBridgeQueue(p0: QString, p1: QString, p2: DzCamera): any;

    /** @undocumented */
    exportRenderToBridgeQueue(p0: QString, p1: QString, p2: DzCamera, p3: DzRenderOptions): any;

    /** @undocumented */
    exportRenderToBridgeQueue(p0: QString, p1: QString, p2: DzCamera, p3: DzRenderOptions, p4: number): any;

    /** @undocumented */
    iskindof(p0: QString): any;
}
