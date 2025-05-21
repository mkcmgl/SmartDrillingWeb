import { AnnotationOverlay as BaseAnnotationOverlay } from '@int/geotoolkit/widgets/overlays/AnnotationOverlay';
import type { MultiWellWidget } from '@int/geotoolkit/welllog/multiwell/MultiWellWidget';
/**
 * Creates implementation of the multi welllog annotation overlay
 */
export declare class AnnotationOverlay extends BaseAnnotationOverlay<MultiWellWidget> {
    constructor(widget: MultiWellWidget, options?: BaseAnnotationOverlay.Options);
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
}
