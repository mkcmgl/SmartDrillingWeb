/**
 * @module geotoolkit/scene/RestrictVisibleModelLimitsStrategy
 */
import { ScaleScrollStrategy } from '@int/geotoolkit/scene/ScaleScrollStrategy';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Group } from '@int/geotoolkit/scene/Group';
/**
 * RestrictVisibleModelLimitsStrategy input transformation adjustment is restricted based on the options supplied.
 *
 * RestrictVisibleModelLimitsStrategy adjust transformation the way data model's visible model limits do not go
 * beyond entire model limits. When either of the options  is set to "true" on the strategy, additional corresponding
 * (horizontal or vertical) transformation suppression is performed.
 */
export declare class RestrictVisibleModelLimitsStrategy extends ScaleScrollStrategy {
    constructor(options?: RestrictVisibleModelLimitsStrategy.Options);
    adjustTransformation(model: Group, newTr: Transformation): Transformation;
}
export declare namespace RestrictVisibleModelLimitsStrategy {
    type Options = {
        /**
         * flag to set nohorizontalscalescroll
         */
        nohorizontalscalescroll?: boolean;
        /**
         * flag to set noverticalscalescroll
         */
        noverticalscalescroll?: boolean;
        /**
         * minimum visible horizontal part of model [0;1]
         */
        minvisiblehorizontalpart?: number;
        /**
         * minimum visible vertical part of model [0;1]
         */
        minvisibleverticalpart?: number;
    };
}
