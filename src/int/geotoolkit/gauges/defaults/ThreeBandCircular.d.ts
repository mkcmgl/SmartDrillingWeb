/**
 * @module geotoolkit/gauges/defaults/ThreeBandCircular
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { Group } from '@int/geotoolkit/scene/Group';
import { Layers } from '@int/geotoolkit/gauges/layout/Layers';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { Regions } from '@int/geotoolkit/gauges/layout/Regions';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
import type { Region } from '@int/geotoolkit/gauges/layout/Region';
/**
 * Implements a circular gauge with three axis (displaying three different data sets). There are
 * one large, one medium, and one small axis, called 'large', 'medium', and 'small' respectively.
 * The name of the gauge is displayed in a circle in center, value for each axis is displayed in
 * the cut of that axis.
 */
export declare class ThreeBandCircular extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): ThreeBandCircular.Options;
    createGauge(params: Partial<ThreeBandCircular.Options>): CircularGauge;
}
export declare namespace ThreeBandCircular {
    /**
     * properties
     */
    type Options = CircularGauge.Options & {
        /**
         * The set of axis to be added
         */
        axis: {
            /**
             * The small axis options
             */
            small: CircularAxis.Options;
            /**
             * The medium axis options
             */
            medium: CircularAxis.Options;
            /**
             * The large axis options
             */
            large: CircularAxis.Options;
        };
        /**
         * The set of regions to be added
         */
        regions: {
            /**
             * The center region options
             */
            centerregion: Region.Options;
            /**
             * The center top region options
             */
            centertop: Region.Options;
            /**
             * The center middle region options
             */
            centermid: Region.Options;
            /**
             * The center bottom region options
             */
            centerbottom: Region.Options;
        };
        /**
         * The custom component array to be added into gauge
         */
        customcomponents: {
            /**
             * The custom component
             */
            component: Group;
            /**
             * The custom component position to add
             */
            position: Regions | string;
            /**
             * The custom component layer to add
             */
            layer: Layers | string;
            /**
             * The custom component name
             */
            name: string;
        }[];
    };
}
