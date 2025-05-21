import { GaugeLayout } from '@int/geotoolkit/gauges/layout/GaugeLayout';
/**
 * Defines layout for circular gauges
 */
export declare class VerticalSplitLayout extends GaugeLayout {
    constructor(options?: VerticalSplitLayout.Options);
}
export declare namespace VerticalSplitLayout {
    /**
     * options
     */
    type Options = GaugeLayout.Options & {
        /**
         * inner north
         */
        innernorth?: number;
        /**
         * inner south
         */
        innersouth?: number;
    };
}
