import { KeepAspectRatioRestrictedAnchoredStrategy } from '@int/geotoolkit/scene/KeepAspectRatioRestrictedAnchoredStrategy';
/**
 * KeepAspectRestrictVisibleStrategy input transformation adjustment. This is same as "RestrictVisibleModelLimitsStrategy + KeepAspectRatioRestrictedAnchoredStrategy"
 */
export declare class KeepAspectRestrictVisibleStrategy extends KeepAspectRatioRestrictedAnchoredStrategy {
    constructor(options?: KeepAspectRestrictVisibleStrategy.Options);
}
export declare namespace KeepAspectRestrictVisibleStrategy {
    /**
     * object
     */
    type Options = KeepAspectRatioRestrictedAnchoredStrategy.Options & {
        /**
         * flag to set nohorizontalscalescroll
         */
        nohorizontalscalescroll?: boolean;
        /**
         * flag to set noverticalscalescroll
         */
        noverticalscalescroll?: boolean;
    };
}
