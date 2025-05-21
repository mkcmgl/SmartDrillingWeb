/**
 * @module geotoolkit/layout/ILayoutElement1D
 */
import type { Range } from '@int/geotoolkit/util/Range';
/**
 * Layout element to be used for layout by {@link @int/geotoolkit/layout/ILayout1D~ILayout1D} implementation.
 * @see {@link @int/geotoolkit/layout/ILayout1D~ILayout1D}
 *
 * @interface
 */
export declare abstract class ILayoutElement1D {
    /**
     * Gets value
     */
    abstract getValue(): number;
    /**
     * Gets value range to layout
     */
    abstract getLayoutRange(suppressUpdate?: boolean): Range;
    /**
     * Updates value range to layout
     */
    abstract updateLayoutRange(): void;
    /**
     * Gets offset applied
     */
    abstract getOffset(): number;
    /**
     * Sets offset to apply
     *
     * @param offset to apply
     * @returns this
     */
    abstract setOffset(offset: number): this;
    /**
     * Gets "overlapped" flag
     */
    abstract getOverlapped(): boolean;
    /**
     * Gets depths
     */
    abstract getDepth(): number;
    /**
     * Sets "overlapped" flag
     *
     * @param overlapped "overlapped" flag
     */
    abstract setOverlapped(overlapped: boolean): void;
}
