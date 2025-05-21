import { AbstractProcessor } from '@int/geotoolkit/animation/processors/AbstractProcessor';
/**
 * Can process object `{key: value}`, typeof value === number
 */
export declare class ObjectProcessor extends AbstractProcessor<any> {
    process(from: any, to: any, out: any, func: AbstractProcessor.ProcessAnimationCallback): any;
    clone(v: any): any;
    /**
     * Returns instance of the ObjectProcessor
     */
    static getInstance(): ObjectProcessor;
}
