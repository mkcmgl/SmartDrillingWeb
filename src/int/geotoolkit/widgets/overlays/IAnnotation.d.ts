import type { Image } from '@int/geotoolkit/scene/shapes/Image';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Point } from '@int/geotoolkit/util/Point';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Annotation
 * @interface
 */
export declare abstract class IAnnotation {
    /**
     * Get annotation name
     *
     * @returns returns name
     */
    abstract getName(): string;
    /**
     * Set annotation name
     * @param name
     * @returns this
     */
    abstract setName(name: string): this;
    /**
     * Get annotation text
     *
     * @returns returns text
     */
    abstract getText(): string;
    /**
     * Set annotation text
     * @param text
     * @returns this
     */
    abstract setText(text: string): this;
    /**
     * Get annotation symbol
     */
    abstract getSymbol(): IAnnotation.Symbol;
    /**
     * Set annotation symbol
     * @param symbol (base64 in case of url)
     * @returns this
     */
    abstract setSymbol(symbol: IAnnotation.Symbol): this;
    /**
     * Return line style
     */
    abstract getLineStyle(): LineStyle | null;
    /**
     * Sets line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    abstract setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return fill style
     */
    abstract getFillStyle(): FillStyle | null;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    abstract setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Get text style
     */
    abstract getTextStyle(): TextStyle | null;
    /**
     * Set text style
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    abstract setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Get annotation anchor
     *
     * @returns target
     */
    abstract getAnchor(): Point;
    /**
     * Set annotation anchor
     * Returns annotation
     * @param anchor
     * @returns this
     */
    abstract setAnchor(anchor: Point): this;
    /**
     * Get annotation target
     *
     * @returns target
     */
    abstract getTarget(): Node;
    /**
     * Set annotation target
     * @param target
     * @returns this
     */
    abstract setTarget(target: Node): this;
    /**
     * Get annotation options
     *
     * @returns options
     */
    abstract getOptions(): Record<string, any>;
    /**
     * Set annotation options
     * @param options
     * @returns this
     */
    abstract setOptions(options: Record<string, any>): this;
    getClassName(): string;
    static getClassName(): string;
}
export declare namespace IAnnotation {
    type Symbol = string | Image | Group | {
        width?: number;
        height?: number;
        /**
         * default is true
         */
        keepaspectratio?: boolean;
        url?: string;
        node?: Node;
    };
}
