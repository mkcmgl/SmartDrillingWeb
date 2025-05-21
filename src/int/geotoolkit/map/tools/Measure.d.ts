import { GeodeticSystem } from '@int/geotoolkit/map/GeodeticSystem';
import { MeasurePathMode } from '@int/geotoolkit/map/tools/MeasurePathMode';
import { Measure as MeasureBase } from '@int/geotoolkit/controls/tools/Measure';
import type { Unit } from '@int/geotoolkit/util/Unit';
import type { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Measure tool for measuring distances and areas on a map
 */
export declare class Measure extends MeasureBase {
    /**
     * @param [options] tool options
     */
    constructor(options?: Measure.Options);
    /**
     * Sets displaying paths mode
     * @param mode paths mode to use
     * @returns this
     */
    setPathMode(mode: MeasurePathMode): this;
    /**
     * Returns current mode for paths
     */
    getPathMode(): MeasurePathMode;
    /**
     * Sets measuring units
     * @param unit unit for measuring
     * @returns this
     */
    setUnit(unit: Unit | string): this;
    /**
     * Returns current measuring unit
     */
    getUnit(): AbstractUnit;
}
export declare namespace Measure {
    /**
     * tool options
     */
    type Options = MeasureBase.Options & {
        /**
         * units for measuring
         */
        unit?: AbstractUnit | string;
        /**
         * true if map should be wrapped, false otherwise
         */
        wrapped?: boolean;
        /**
         * map coordinate system
         */
        system?: GeodeticSystem | AbstractSystem;
        /**
         * measure paths draw mode
         */
        pathmode?: MeasurePathMode;
    };
}
