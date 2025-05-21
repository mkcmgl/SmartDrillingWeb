/**
 * @module geotoolkit/scene/exports/AbstractNodeAdapter
 */
import { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { LayoutedDimension } from '@int/geotoolkit/scene/exports/LayoutedDimension';
/**
 * Enum of node adapter scaling options:
 * - TrueScale : 'TrueScale'
 * - PixelScale : 'PixelScale'
 * @enum
 * @readonly
 */
export declare enum ScaleMode {
    /**
     * True Scale
     */
    TrueScale = "TrueScale",
    /**
     * Pixel Scale
     */
    PixelScale = "PixelScale"
}
/**
 * Document Element class that is used to layout the pdf document
 */
export declare abstract class AbstractNodeAdapter extends AbstractDocumentElement {
    /**
     * @param bounds bounds
     * @param exportLimits export limits in the bounds coordinates
     */
    protected constructor(bounds: Rect, exportLimits: Rect);
    /**
     * Returns node adapter scale mode
     * @returns scale mode
     */
    getScaleMode(): ScaleMode;
    /**
     * Set node adapter scale mode
     * @param scaleMode scale mode
     * @returns this
     */
    setScaleMode(scaleMode: ScaleMode): this;
    setBounds(bounds: Rect): this;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     */
    setLayoutStyle(layoutStyle: LayoutStyle | LayoutStyle.Options): this;
    /**
     * Return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Sets export limits of the node
     * @param exportLimits bound of the node
     * @returns this
     */
    setExportLimits(exportLimits: Rect): this;
    /**
     * Returns export limits
     */
    getExportLimits(): Rect;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    getLayoutedDimension(): LayoutedDimension;
    /**
     * Return true if the representation is flipped horizontally
     *
     * @returns flip
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     *
     * @param enable enable flip
     * @returns this
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Return true if the representation is flipped vertically
     *
     * @returns flip
     */
    isVerticalFlip(): boolean;
    /**
     * Set vertical flip of the representation
     *
     * @param enable enable flip
     * @returns this
     */
    setVerticalFlip(enable: boolean): this;
    /**
     * return local transformation
     */
    getLocalTransformation(): Transformation | null;
    /**
     * set local transformation
     * @param localTransformation local transformation
     */
    setLocalTransformation(localTransformation: Transformation): this;
    setTranslation(x: number, y: number): this;
    setScale(sx: number, sy: number): this;
    updateLayout(rect?: Rect): void;
}
