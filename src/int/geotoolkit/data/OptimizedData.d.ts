/**
 * @module geotoolkit/data/OptimizedData
 */
import { AbstractScaledData } from '@int/geotoolkit/data/AbstractScaledData';
import { Range } from '@int/geotoolkit/util/Range';
import { Order } from '@int/geotoolkit/util/Order';
import type { DataSample } from '@int/geotoolkit/data/DataSample';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { DataConversion } from '@int/geotoolkit/data/DataConversion';
import type { DataInterpolation } from '@int/geotoolkit/data/DataInterpolation';
import { OptimizationType } from '@int/geotoolkit/util/OptimizationType';
/**
 * @deprecated since 4.0, use @int/geotoolkit/util/OptimizationType instead
 */
export { OptimizationType };
/**
 * The OptimizedData is a helper object that decorate ScaledData and allows to optimize it
 */
export declare class OptimizedData extends AbstractScaledData {
    /**
     * Create OptimizedData
     * @param scaledData abstract scaled data
     * @param [useXAxisForX] use OX axis for x coordinate of the sample
     */
    constructor(scaledData: AbstractScaledData, useXAxisForX?: boolean);
    /**
     * Sets optimization type
     * @param optimizationType optimization type which is used
     * @returns this
     */
    setOptimizationType(optimizationType: OptimizationType): this;
    /**
     * Turns on/off optimization
     * @param [needOptimization] Is optimization on
     * @returns this
     */
    setOptimization(needOptimization?: boolean): this;
    /**
     * Returns the state of optimization, is it on or off
     * @returns needOptimization Is optimization on`
     */
    getOptimization(): boolean;
    /**
     * Sets conversion
     * @param conversion conversion of the data
     * @returns this
     */
    setConversion(conversion: DataConversion): this;
    /**
     * Sets interpolation
     * @param interpolation algorithm to interpolate samples
     * @returns this
     */
    setInterpolation(interpolation: DataInterpolation): this;
    /**
     * Gets scaled samples
     */
    getSamples(needOptimization?: boolean): DataSample[];
    /**
     * Return sample at specified index
     * @param index sample index
     * @returns sample.
     */
    getSample(index: number): DataSample;
    /**
     * Sets transformation for which optimization was/will be calculated
     * @param modelToDevice model to device transformation
     * @returns this
     */
    setModelToDevice(modelToDevice: Transformation): this;
    /**
     * Gets value array either optimized or not
     * @param [needOptimization] Is optimization needed
     * @returns Value array
     */
    getValueArray(needOptimization?: boolean): number[];
    /**
     * Gets position array either optimized or not
     * @param [needOptimization] Is optimization needed
     * @returns Position array
     */
    getPositionArray(needOptimization?: boolean): number[];
    /**
     * Gets a count of samples either optimized or not
     * @param [needOptimization] is optimization needed
     */
    getLength(needOptimization?: boolean): number;
    /**
     * Return a wrap levels, If data doesn't have wraps than it returns null
     * @param fromPosition from position
     * @param toPosition to position
     */
    getIndexRange(fromPosition: number, toPosition: number): Range;
    /**
     * Returns value at specified position
     * @param position position to return value
     * @returns return value by position
     */
    getValue(position: number): number;
    getValueAt(depth: number): number;
    getSource(): any;
    isForwardOnly(): boolean;
    getDataOrder(): Order;
    getMinWrapLevel(): number;
    getMaxWrapLevel(): number;
    getMinValue(): number;
    getMaxValue(): number;
    getMinPosition(): number;
    getMaxPosition(): number;
    isOutdated(): boolean;
    /**
     * Convert value from original source to current scaled data
     * @param v value of the original data source
     * @param d depth of the original data source
     */
    convertValueFromSource(v: number, d?: number): number;
    /**
     * Convert array of values from original source to current scaled data
     * @param v array of values of the original data source
     * @param d array of depths of the original data source
     */
    convertValueFromSource(v: number[], d?: number[]): number[];
    /**
     * Convert value from scaled data source to original source
     * @param v value of the scaled data source
     */
    convertValueToSource(v: number): number;
    /**
     * Convert array of values from scaled data source to original source
     * @param v array of values of the scaled data source
     */
    convertValueToSource(v: number[]): number[];
}
