import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { ShapeAdapter } from '@int/geotoolkit/controls/editing/ShapeAdapter';
/**
 * Implements an abstract handle which can be used to manipulate toolkit components.
 */
export declare abstract class AbstractHandle extends Shape {
    protected constructor(options?: AbstractHandle.Options);
    /**
     * Used for cloning
     * @param src Source to copy from
     */
    copyConstructor(src: AbstractHandle): this;
    /**
     * Sets the adapter which owns this handle.
     * @param adapter The owner adapter
     */
    setAdapter(adapter: ShapeAdapter): this;
    /**
     * Returns the adapter which owns this handle.
     * @returns The owner adapter
     */
    getAdapter(): ShapeAdapter | null;
    /**
     * Sets active state of this handle. Active state defines which style will be used
     * when rendering the handle.
     * @param active Active state flag
     */
    setActive(active: boolean): this;
    /**
     * Returns active state of this handle. Active state defines which style will be used
     * when rendering the handle.
     * @returns active Active state flag
     */
    isActive(): boolean;
    /**
     * Return fill style for active state
     *
     * @returns fillStyle current fill style
     */
    getActiveFillStyle(): FillStyle;
    /**
     * Sets fill style for active state
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setActiveFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Sets line style for active state
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setActiveLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return line style for inactive state
     *
     * @returns gets current active line style
     */
    getActiveLineStyle(): LineStyle;
    /**
     * Sets line style for inactive state
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setInactiveLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return fill style for inactive state
     *
     * @returns gets current inactive line style
     */
    getInactiveLineStyle(): LineStyle;
    /**
     * Return fill style for inactive state
     *
     * @returns fillStyle current fill style
     */
    getInactiveFillStyle(): FillStyle;
    /**
     * Sets fill style for inactive state
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setInactiveFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Sets a json with information required to operate this handle.
     * The information may be different for every adapter and defined by adapter itself
     */
    setOperationInfo(operationInfo: AbstractHandle.OperationInfo | any): this;
    /**
     * Returns a json with information required to operate this handle.
     * The information may be different for every adapter and defined by adapter itself
     *
     * @returns The Operation Info
     */
    getOperationInfo(): AbstractHandle.OperationInfo | any;
    /**
     * Gets properties pertaining to this handle
     */
    getProperties(): AbstractHandle.OptionsOut;
    /**
     * Sets properties pertaining to this object
     * @param props object with the new properties to set
     * @returns this
     */
    setProperties(props?: AbstractHandle.Options): this;
}
export declare namespace AbstractHandle {
    /**
     * properties
     */
    type Options = Shape.Options & {
        /**
         * Fill style of the handle when it is active
         */
        activefillstyle?: FillStyle.Type;
        /**
         * Fill style to apply to handle when it is not active
         */
        inactivefillstyle?: FillStyle.Type;
        /**
         * Line style of the handle when it is active
         */
        activelinestyle?: LineStyle.Type;
        /**
         * Line style to apply to handle when it is not active
         */
        inactivelinestyle?: LineStyle.Type;
        /**
         * operation info contains x, y, width and height as numbers
         */
        operationinfo?: OperationInfo;
        /**
         * The owner adapter
         */
        shapeadapter?: ShapeAdapter;
        /**
         * Active state flag
         */
        active?: boolean;
    };
    type OperationInfo = {
        index?: number;
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    };
    type OptionsOut = Shape.OptionsOut & {
        /**
         * Fill style of the handle when it is active
         */
        activefillstyle?: FillStyle;
        /**
         * Fill style to apply to handle when it is not active
         */
        inactivefillstyle?: FillStyle;
        /**
         * Line style of the handle when it is active
         */
        activelinestyle?: LineStyle;
        /**
         * Line style to apply to handle when it is not active
         */
        inactivelinestyle?: LineStyle;
        /**
         * operation info contains x, y, width and height as numbers
         */
        operationinfo?: OperationInfo;
        /**
         * The owner adapter
         */
        shapeadapter?: ShapeAdapter;
        /**
         * Active state flag
         */
        active?: boolean;
    };
}
