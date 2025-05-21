/**
 * @module geotoolkit/scene/exports/AbstractPaperFormat
 */
import { PaperOrientation } from '@int/geotoolkit/scene/exports/PaperOrientation';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Abstract Paper Format class
 */
export declare abstract class AbstractPaperFormat {
    /**
     * @param name paper name
     * @param width paper width
     * @param height paper height
     * @param top paper top margin
     * @param right paper right margin
     * @param bottom paper bottom margin
     * @param left paper left margin
     * @param unit paper measure unit
     * @param orientation paper orientation
     */
    protected constructor(name: string, width: number, height: number, top: number, right: number, bottom: number, left: number, unit: AbstractUnit, orientation: PaperOrientation);
    /**
     * get the paper name
     * @returns paper name
     */
    getName(): string;
    /**
     * get paper width
     * @returns width
     */
    getWidth(): number;
    /**
     * get paper height
     * @returns height
     */
    getHeight(): number;
    /**
     * get top margin
     * @returns top margin
     */
    getTop(): number;
    /**
     * get bottom margin
     * @returns bottom margin
     */
    getBottom(): number;
    /**
     * get left margin
     * @returns left margin
     */
    getLeft(): number;
    /**
     * get right margin
     * @returns right margin
     */
    getRight(): number;
    /**
     * get paper unit
     * @returns unit
     */
    getUnit(): AbstractUnit;
    /**
     * get dimension
     * @returns dimension
     */
    getDimension(): Dimension;
    /**
     * get paper orientation
     * @returns orientation
     */
    getOrientation(): PaperOrientation;
    static getClassName(): string;
    getClassName(): string;
}
