import { AbstractProcessor } from '@int/geotoolkit/animation/processors/AbstractProcessor';
/**
 * Can process number
 */
export declare class NumberProcessor extends AbstractProcessor<number> {
    process(from: number, to: number, out: number, func: AbstractProcessor.ProcessAnimationCallback): number;
    distance(v1: number, v2: number): number;
    clone(v: number): number;
    /**
     * Returns instance of the NumberProcessor
     */
    static getInstance(): NumberProcessor;
}
