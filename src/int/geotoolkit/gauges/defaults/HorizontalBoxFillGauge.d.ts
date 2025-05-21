/**
 * @module geotoolkit/gauges/defaults/HorizontalBoxFillGauge
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { LinearGauge } from '@int/geotoolkit/gauges/LinearGauge';
/**
 * Implements a linear gauge (with horizontal scale). The fill indicator shows the range of data and the main axis shows the ticks
 */
export declare class HorizontalBoxFillGauge extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): LinearGauge.Options;
    createGauge(params: Partial<LinearGauge.Options>): LinearGauge;
}
