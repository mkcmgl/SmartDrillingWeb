/**
 * @module geotoolkit/gauges/defaults/VerticalTraffic
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { TrafficGauge } from '@int/geotoolkit/gauges/TrafficGauge';
/**
 * Implements a vertical traffic gauge with three lights, green, yellow, and red. When a light is not active,
 * it is light grey.
 */
export declare class VerticalTraffic extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): TrafficGauge.Options;
    createGauge(params: Partial<TrafficGauge.Options>): TrafficGauge;
}
