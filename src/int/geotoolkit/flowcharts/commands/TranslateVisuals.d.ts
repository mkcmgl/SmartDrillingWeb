import { TransformVisuals } from '@int/geotoolkit/flowcharts/commands/TransformVisuals';
import { Point } from '@int/geotoolkit/util/Point';
/**
 * Translates visual using a delta
 */
export declare class TranslateVisuals extends TransformVisuals {
    /**
     * @param options command options
     */
    constructor(options: TranslateVisuals.Options);
}
export declare namespace TranslateVisuals {
    /**
     * command options
     */
    type Options = TransformVisuals.Options & {
        /**
         * model location
         */
        delta?: Point;
    };
}
