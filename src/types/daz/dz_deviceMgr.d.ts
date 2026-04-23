/**
 * Manager responsible for hardware devices.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/devicemgr_dz
 */
declare class DzDeviceMgr extends QObject {

    /* Methods */

    /**
     * @param which number - The index of the device to get.
     * @returns DzDevice The device at the given index.
     */
    getDevice(which: number): DzDevice;

    /**
     * @returns number The number of available devices.
     */
    getNumDevices(): number; // Number
}
