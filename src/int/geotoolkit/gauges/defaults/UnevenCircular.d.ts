/**
 * @module geotoolkit/gauges/defaults/UnevenCircular
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
import type { Region } from '@int/geotoolkit/gauges/layout/Region';
/**
 * Implements a circular gauge with irregular tick spacing. Some ticks/labels may be hidden
 * due to label collisions.
 */
export declare class UnevenCircular extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory
     */
    getGaugeProperties(): UnevenCircular.Options;
    createGauge(params: Partial<UnevenCircular.Options> & {
        regions?: Record<string, Region.Options>;
    }): CircularGauge;
}
export declare namespace UnevenCircular {
    /**
     * properties
     */
    type Options = CircularGauge.Options & {
        /**
         * The axis to be added
         */
        axis: CircularAxis.Options & {
            labels: {
                labels: string[];
                positions: number[];
            };
        };
    };
}
