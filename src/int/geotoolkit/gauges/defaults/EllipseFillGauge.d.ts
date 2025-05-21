/**
 * @module geotoolkit/gauges/defaults/EllipseFillGauge
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { LinearGauge } from '@int/geotoolkit/gauges/LinearGauge';
/**
 * Implements a linear gauge (with vertical scale) . The fill shows the range of data and the value is displayed in the center of the gauge.
 */
export declare class EllipseFillGauge extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): LinearGauge.Options;
    createGauge(params: Partial<LinearGauge.Options>): LinearGauge;
}
