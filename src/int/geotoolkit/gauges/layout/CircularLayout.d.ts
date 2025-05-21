import { GaugeLayout } from '@int/geotoolkit/gauges/layout/GaugeLayout';
import { Region } from '@int/geotoolkit/gauges/layout/Region';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Defines layout for circular gauges
 */
export declare class CircularLayout extends GaugeLayout {
    constructor(options?: CircularLayout.Options);
}
export declare namespace CircularLayout {
    /**
     * properties
     */
    export type Options = GaugeLayout.Options & {
        /**
         * layout regions
         */
        regions?: Regions;
        /**
         * center
         */
        center?: Point;
    };
    /**
     * properties
     */
    export type OptionsOut = GaugeLayout.OptionsOut & {
        /**
         * layout regions
         */
        regions: Required<Regions>;
        /**
         * center
         */
        center: Point;
    };
    type Regions = {
        /**
         * east region
         */
        east?: Region;
        /**
         * west region
         */
        west?: Region;
        /**
         * north region
         */
        north?: Region;
        /**
         * south region
         */
        south?: Region;
        /**
         * northwest region
         */
        northwest?: Region;
        /**
         * northeast region
         */
        northeast?: Region;
        /**
         * southeast region
         */
        southeast?: Region;
        /**
         * southwest region
         */
        southwest?: Region;
        /**
         * central region
         */
        center?: Region;
        /**
         * innereast region
         */
        innereast?: Region;
        /**
         * innerwest region
         */
        innerwest?: Region;
        /**
         * innernorth region
         */
        innernorth?: Region;
        /**
         * innersouth region
         */
        innersouth?: Region;
        /**
         * innercenter region
         */
        innercenter?: Region;
        /**
         * circleregion region
         */
        circleregion?: Region;
    };
    export {};
}
