/**
 * @module geotoolkit/scene/exports/CustomPaperFormat
 */
import { PaperFormat } from '@int/geotoolkit/scene/exports/PaperFormat';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { PaperOrientation } from '@int/geotoolkit/scene/exports/PaperOrientation';
import type { Dimension } from '@int/geotoolkit/util/Dimension';
/**
 * Custom paper format
 */
export declare class CustomPaperFormat extends PaperFormat {
    /**
     * set the paper name
     *
     * @param name paper name
     * @returns this
     */
    setName(name: string): this;
    /**
     * set paper width
     *
     * @param width paper width
     * @returns this
     */
    setWidth(width: number): this;
    /**
     * set paper height
     *
     * @param height paper height
     * @returns this
     */
    setHeight(height: number): this;
    /**
     * set top margin
     *
     * @param top top margin
     * @returns this
     */
    setTop(top: number): this;
    /**
     * set bottom margin
     *
     * @param bottom bottom margin
     * @returns this
     */
    setBottom(bottom: number): this;
    /**
     * set left margin
     *
     * @param left left margin
     * @returns this
     */
    setLeft(left: number): this;
    /**
     * set right margin
     *
     * @param right right margin
     * @returns this
     */
    setRight(right: number): this;
    /**
     * set paper unit
     *
     * @param unit paper unit
     * @returns this
     */
    setUnit(unit: AbstractUnit): this;
    /**
     * set dimension
     *
     * @param dimension paper dimension
     * @returns this
     */
    setDimension(dimension: Dimension): this;
    /**
     * set paper orientation
     *
     * @param orientation paper orientation
     * @returns this
     */
    setOrientation(orientation: PaperOrientation): this;
}
