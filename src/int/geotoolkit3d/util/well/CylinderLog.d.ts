/**
 * Utility class related to geotoolkit3d.scene.well.CylinderLog
 */
export declare class CylinderLog {
    /**
     * Change the parameters that affects the cylinder precision.<br>
     * <br>
     * Note that this applies only to the Cylinders created after this has been changed.<br>
     * <br>
     * The corner counts affects how 'round' the circles will look like.<br>
     * The diskCount defines how many circles will be created for each log value.<br>
     * <br>
     * @throws Error if cornerCount < 3 or diskCount < 2
     * @param cornerCount The amount of points to create a cylinder like shape
     * @param diskCount The amount of of disks for each sample
     */
    static setCylinderPrecision(cornerCount: number, diskCount: number): void;
    static getClassName(): string;
    getClassName(): string;
}
