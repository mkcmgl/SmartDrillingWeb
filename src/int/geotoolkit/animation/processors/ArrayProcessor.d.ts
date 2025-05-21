import { AbstractProcessor } from '@int/geotoolkit/animation/processors/AbstractProcessor';
/**
 * Can process array of number
 */
export declare class ArrayProcessor extends AbstractProcessor<Array<number>> {
    process(from: Array<number>, to: Array<number>, out: Array<number>, func: AbstractProcessor.ProcessAnimationCallback): Array<number>;
    clone(v: Array<number>): Array<number>;
    /**
     * Returns instance of the ArrayProcessor
     */
    static getInstance(): ArrayProcessor;
}
