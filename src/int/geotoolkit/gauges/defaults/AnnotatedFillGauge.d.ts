/**
 * @module geotoolkit/gauges/defaults/AnnotatedFillGauge
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { Group } from '@int/geotoolkit/scene/Group';
import { Regions } from '@int/geotoolkit/gauges/layout/Regions';
import { Layers } from '@int/geotoolkit/gauges/layout/Layers';
import { LinearGauge } from '@int/geotoolkit/gauges/LinearGauge';
/**
 * Implements a linear gauge (with vertical scale) . The fill is the indicator and shows the range of data, the value is displayed outside the gauge at the top. <br>
 * It provides a left axis and right axis. It has a custom component which shows the status text based on the range of the value.
 */
export declare class AnnotatedFillGauge extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): AnnotatedFillGauge.Options;
    createGauge(params: Partial<AnnotatedFillGauge.Options>): LinearGauge;
}
export declare namespace AnnotatedFillGauge {
    /**
     * properties
     */
    type Options = LinearGauge.Options & {
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
        /**
         * An array of objects that describe region sizes
         */
        regionsizes: {
            /**
             * The region size
             */
            size: string | number;
            /**
             * The region name
             */
            region: Regions | string;
        }[];
    };
}
