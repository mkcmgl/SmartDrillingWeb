import type { AbstractGauge } from '@int/geotoolkit/gauges/AbstractGauge';
/**
 * Abstract class for gauge factories.
 */
export declare abstract class AbstractFactory {
    protected constructor(params?: AbstractFactory.Options);
    /**
     * Returns a gauge ready for use
     * @param params JSON with overriding properties
     * @returns Gauge with applied default and overridden properties
     */
    abstract createGauge(params?: AbstractGauge.Options): AbstractGauge;
    /**
     * Gets the name of this implementation
     */
    getName(): null | string;
    /**
     * Gets the type of the gauge which this factory implements
     */
    getGaugeType(): null | string;
    /**
     * Returns properties pertaining to the gauge implemented by this factory
     */
    abstract getGaugeProperties(): AbstractGauge.Options;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractFactory {
    /**
     * Object with properties
     */
    type Options = {
        /**
         * Name of the specific instance of the gauge
         */
        name?: string;
        /**
         * The type of the gauge which will be created by this factory
         */
        gaugetype?: string;
    };
}
