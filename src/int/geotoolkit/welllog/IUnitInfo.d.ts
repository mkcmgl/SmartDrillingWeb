/**
 * @module geotoolkit/welllog/IUnitInfo
 */
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Interface for unit information
 * @interface
 */
export declare abstract class IUnitInfo {
    /**
     * Return unit of the measure to be used to display scale in the header
     */
    abstract getScaleUnit(): AbstractUnit;
    /**
     * Return a unit of the measure of device
     */
    abstract getDeviceUnit(): AbstractUnit;
}
