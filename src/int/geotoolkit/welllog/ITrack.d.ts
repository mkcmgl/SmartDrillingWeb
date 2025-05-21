/**
 * @module geotoolkit/welllog/ITrack
 */
import type { Range } from '@int/geotoolkit/util/Range';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Interface for welllog tracks
 * @interface
 */
export declare abstract class ITrack {
    /**
     * Returns depth range
     */
    abstract getDepthLimits(): Range;
    /**
     * Returns visible depth range
     */
    abstract getVisibleDepthLimits(): Range;
    /**
     * Returns layout style
     */
    abstract getLayoutStyle(): LayoutStyle;
    /**
     * Returns Tag
     */
    abstract getTag(): any;
    /**
     * Return track bounds
     */
    abstract getBounds(): Rect | null;
    /**
     * Return track as {@link @int/geotoolkit/scene/Node~Node} instance
     */
    abstract asNode(): Node;
}
