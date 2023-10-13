declare class DzDeviceMgr extends QObject {

    /* Properties */

    /* Methods */
    getNumDevices(): number;
    getDevice(which: number): DzDevice;
}