import { IAnnotation } from '@int/geotoolkit/widgets/overlays/IAnnotation';
import { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
import { EventDispatcher, Events } from '@int/geotoolkit/util/EventDispatcher';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * Creates default implementation of the annotation
 */
export declare class Annotation extends EventDispatcher implements IAnnotation, IStyleListener {
    constructor(data: Annotation.Options);
    on<E extends keyof Annotation.EventMap>(type: E, callback: (eventType: E, sender: this, args: Annotation.EventMap[E]) => void): this;
    off<E extends keyof Annotation.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Annotation.EventMap[E]) => void): this;
    notify<E extends keyof Annotation.EventMap>(type: E, source: Annotation, args?: Annotation.EventMap[E]): this;
    /**
     * Return line style
     *
     * @returns lineStyle current line style
     */
    getLineStyle(): LineStyle | null;
    /**
     * Sets line style
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return fill style
     *
     * @returns fillStyle current fill style
     */
    getFillStyle(): FillStyle | null;
    /**
     * Sets fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * The style associated with this text.
     *
     * @returns text style
     */
    getTextStyle(): TextStyle | null;
    /**
     * Set text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Get annotation name
     * @returns returns name
     */
    getName(): string;
    /**
     * Set annotation name
     * @param name new annotation name
     * @returns this
     */
    setName(name: string): this;
    /**
     * Get annotation text
     * @returns returns text
     */
    getText(): string;
    /**
     * Set annotation text
     * @param text new annotation text
     * @returns this
     */
    setText(text: string): this;
    /**
     * Get annotation symbol
     */
    getSymbol(): IAnnotation.Symbol;
    /**
     * Set annotation symbol
     * @param symbol symbol
     * @returns this
     */
    setSymbol(symbol: IAnnotation.Symbol): this;
    /**
     * Get annotation anchor
     * @returns target
     */
    getAnchor(): Point;
    /**
     * Set annotation anchor
     * @param anchor anchor
     * @returns this
     */
    setAnchor(anchor: Point): this;
    /**
     * Get annotation target
     * @returns target
     */
    getTarget(): Node;
    /**
     * Set annotation target
     * @param target target
     * @returns this
     */
    setTarget(target: Node): this;
    /**
     * Get annotation options
     */
    getOptions(): Annotation.OptionsOut;
    /**
     * Set annotation options
     * @param options options
     */
    setOptions(options: Annotation.OptionsBase): this;
    /**
     * Create IAnnotation from object
     * @param object object
     */
    static fromObject(object: Annotation.Options | IAnnotation): IAnnotation;
    /**
     * Connects style.<br>
     * <br>
     * This convenience method subscribes a listener to given style for the specified type.<br>
     * And automatically un-subscribes listener if node is disposed to prevent memory leaks
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     * @returns this
     */
    connectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
    /**
     * Disconnect style
     * <br>
     * This convenience method un-subscribes a listener to given style for the specified type.<br>
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     * @returns this
     */
    disconnectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
    /**
     * invalidate Method
     * @returns method to invalidate this object
     */
    getInvalidateMethod(): IStyleListener.AttributeCallback;
    /**
     * Set annotation properties
     * @param [properties] Annotation properties
     * @returns this
     */
    setProperties(properties?: Annotation.Properties): this;
    /**
     * Get annotation properties
     * @returns Annotation properties
     */
    getProperties(): Annotation.PropertiesOut;
}
export declare namespace Annotation {
    type Options = {
        /**
         * annotation name
         */
        name?: string;
        /**
         * annotation text
         */
        text?: string;
        /**
         * base64 image
         */
        symbol?: IAnnotation.Symbol;
        anchor?: Point;
        /**
         * target
         */
        target?: Node;
        /**
         * options
         */
        options?: OptionsBase;
    };
    /**
     * options
     */
    type OptionsBase = {
        /**
         * annotation text style
         */
        textstyle?: TextStyle.Type;
        /**
         * annotation borderline style
         */
        linestyle?: LineStyle.Type;
        /**
         * annotation fill style
         */
        fillstyle?: FillStyle.Type;
    };
    type OptionsOut = {
        /**
         * annotation text style
         */
        textstyle: TextStyle;
        /**
         * annotation border line style
         */
        linestyle: LineStyle;
        /**
         * annotation fill style
         */
        fillstyle: FillStyle;
    };
    /**
     * Annotation properties
     */
    type Properties = OptionsBase & {
        /**
         * Annotation text content
         */
        text?: string;
    };
    /**
     * Annotation properties
     */
    type PropertiesOut = OptionsOut & {
        /**
         * Annotation text content
         */
        text: string;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.PropertyChanged]: 'Symbol' | 'Target' | 'TextStyle' | 'FillStyle' | 'LineStyle' | 'Options';
    };
}
