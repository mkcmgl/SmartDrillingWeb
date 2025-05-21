/**
 * @module geotoolkit/widgets/timeseries/TimeSeriesShape
 */
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
/**
 * enum of TimeSeriesShape Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * micropositionChanged
     */
    micropositionChanged = "micropositionChanged"
}
/**
 * Defines an abstract timeseries shape that supports micropositioning
 */
export declare class TimeSeriesShape extends Shape {
    constructor(options?: Shape.Options);
    on<E extends keyof TimeSeriesShape.EventMap>(type: E, callback: (eventType: E, sender: this, args: TimeSeriesShape.EventMap[E]) => void): this;
    off<E extends keyof TimeSeriesShape.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: TimeSeriesShape.EventMap[E]) => void): this;
    notify<E extends keyof TimeSeriesShape.EventMap>(type: E, source: TimeSeriesShape, args?: TimeSeriesShape.EventMap[E]): this;
    /**
     * Gets the bounds of the shape
     */
    getBounds(): Rect | null;
    /**
     * Updates bounds for micropositioning
     */
    updateBounds(): this;
    /**
     * Gets transformation from model to bounds
     */
    getContentsTransform(): Transformation;
    /**
     * Gets world transform
     */
    getWorldTransform(): Transformation;
    /**
     * Sets micropositioning
     *
     * @param top top border of microposition
     * @param bottom bottom border of microposition
     */
    setMicroPosition(top: number, bottom: number): this;
    /**
     * Gets micro position
     */
    getMicroPosition(): {
        top: number;
        bottom: number;
    };
    /**
     * Sets border color
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     */
    setBorderLineStyle(lineStyle: LineStyle | LineStyle.Options | string, merge?: boolean): this;
    /**
     * Return border style
     */
    getBorderLineStyle(): LineStyle;
    /**
     * Gets invalidate method
     * @returns method to invalidate this object
     */
    getInvalidateMethod(): IStyleListener.AttributeCallback;
    render(context: RenderingContext): void;
}
export declare namespace TimeSeriesShape {
    type EventMap = AbstractNode.EventMap & {
        [Events.micropositionChanged]: void;
    };
}
