import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Node } from '@int/geotoolkit/scene/Node';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import { LogCurveEvents } from '@int/geotoolkit/welllog/LogCurveEvents';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import type { AnchorType } from '@int/geotoolkit/util/AnchorType';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * EventDispatcher Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * This Event is fired when the visual was changed
     */
    VisualChanged = "VisualChanged",
    /**
     * This Event is fired when the visual has been invalidated
     */
    VisualInvalidate = "VisualInvalidate",
    /**
     * This Event is fired when the visual visibility has been invalidated
     */
    VisualVisibilityChanged = "VisualVisibilityChanged"
}
/**
 * Define an abstract implementation of visual header.
 * NOTE: Custom LogVisualHeader implementation MUST override "clone" operation for
 * LogVisualHeaderProvider to be able to create new header instance(s) internally.
 * This is a base class for all visual headers.
 *
 * @example
 * // This example shows how to create a custom header for a curve, it displays just a curve name.
 * import {setClassName} from '@int/geotoolkit/base';
 * import {LogVisualHeader} from '@int/geotoolkit/welllog/header/LogVisualHeader';
 * import {Transformation} from '@int/geotoolkit/util/Transformation';
 * import {obfuscate} from '@int/geotoolkit/lib';
 * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
 *
 * class CustomCurveVisualHeader extends LogVisualHeader {
 *    constructor (options) {
 *        super(options);
 *        this.setTextStyle(new TextStyle('rgb(0,0,0)', 'middle', 'left', '11px sans-serif'));
 *        this.setModelLimits(new Rect(0, 0, 100, 40));
 *    }
 *    render (inputContext) {
 *        const context = this.getWorldTransform() != null ? inputContext.pushTransformation(this.getWorldTransform()) : inputContext;
 *        const rc = this.getModelLimits();
 *        if (rc != null) {
 *          const curve = this.getVisual();
 *          const curveName = curve.getName();
 *          context.setTextStyle(this.getTextStyle().clone().setAlignment('center').setBaseLine('top'));
 *          const oldTr = context.getTransformation();
 *          // transform anchor coordinates to device
 *          const pos = oldTr.transformXY(rc.getCenterX(), rc.getTop());
 *          // Sets identity transformation
 *          context.setTransformation(new Transformation());
 *          context.drawText(pos.getX(), pos.getY(), curveName);
 *          // restore transformation
 *          context.setTransformation(oldTr);
 *        }
 *   }
 *   clone () {
 *       return new CustomCurveVisualHeader(this.getVisual())
 *            .copyConstructor(this, true);
 *   }
 * }
 * setClassName(CustomCurveVisualHeader, 'CustomCurveVisualHeader');
 * // Allows using obfuscated toolkit
 * obfuscate(CustomCurveVisualHeader, LogVisualHeader);
 * // In the next step you can register it for all curves or for an instance of the curve in the header provider. For example for all LogCurves you can use the following code:
 * const headerProvider = widget.getHeaderContainer().getHeaderProvider();
 * headerProvider.registerHeaderProvider(LogCurve.getClassName(), new CustomCurveVisualHeader(null));
 */
export declare abstract class LogVisualHeader<T extends Node = Node> extends AbstractNode implements ILayoutable {
    protected constructor(options?: LogVisualHeader.Options<T> | T);
    on<E extends keyof LogVisualHeader.EventMap>(type: E, callback: (eventType: E, sender: this, args: LogVisualHeader.EventMap[E]) => void): this;
    off<E extends keyof LogVisualHeader.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LogVisualHeader.EventMap[E]) => void): this;
    notify<E extends keyof LogVisualHeader.EventMap>(type: E, source: LogVisualHeader, args?: LogVisualHeader.EventMap[E]): this;
    protected copyConstructor(src: LogVisualHeader<T>, deepCopy?: boolean): this;
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory
     * leaks
     */
    dispose(): void;
    /**
     * Return text shape helper instance
     * @param x x coordinate
     * @param y y coordinate
     * @param text text to display
     * @param textStyle a new shape text style
     * @param alignment anchor alignment
     * @returns text shape helper
     */
    protected getTextShapeHelper(x?: number, y?: number, text?: string, textStyle?: TextStyle.Options | string | TextStyle | null, alignment?: AnchorType): Text;
    /**
     * Return visibility of the header
     *
     * @returns true if header itself and associated LogVisual is visible
     */
    getVisible(): boolean;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     * @param [merge] true if you want to merge layoutStyle with existing attribute, false by default
     */
    setLayoutStyle(layoutStyle: LayoutStyle | LayoutStyle.Options, merge?: boolean): this;
    /**
     * Return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Invalidate area of the shape.  This method invalidates parent by default. invalidated from parent to root node.
     * @param [bounds] bounds of the invalid rectangle in the inner node coordinates
     * @param [force] true if parent should be invalidated immediately
     * if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     * @returns this
     */
    invalidate(bounds?: Rect, force?: boolean): this;
    /**
     * Returns highlight options
     * @returns highlight options
     */
    getHighlightOptions(): LogVisualHeader.HighlightOptions;
    /**
     * Set highlight options
     * @param options highlight options
     */
    setHighlightOptions(options: LogVisualHeader.HighlightOptions): this;
    /**
     * Return line style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets a line style
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Sets fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Sets border line style
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setBorderLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Gets border line style
     */
    getBorderLineStyle(): LineStyle;
    /**
     * Sets a current text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Options | string | TextStyle | null, merge?: boolean): this;
    /**
     * Return a current text style
     */
    getTextStyle(): TextStyle;
    /**
     * Draws a rectangle at the model limits and fill it with specified fillStyle
     *
     * @param context Rendering Context
     * @param [fillStyle] Fill Style for the rectangle
     */
    fillBorder(context: RenderingContext, fillStyle?: FillStyle): this;
    /**
     * Stroke border with specified
     *
     * @param context Rendering Context
     * @param [borderLineStyle] the LineStyle for the border
     */
    drawBorder(context: RenderingContext, borderLineStyle?: LineStyle): this;
    /**
     * Sets model limits
     *
     * @param modelLimits desired model Limits
     */
    setModelLimits(modelLimits: Rect): this;
    /**
     * Return model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Return header desired height
     */
    getDesiredHeight(): number;
    /**
     * Return header desired content height with padding
     * @param header header instance
     */
    static getDesiredHeight(header: LogVisualHeader): number;
    /**
     * Sets padding style
     * @param paddingStyle padding style
     * @param [merge] true if you want to merge paddingStyle with existing attribute, false by default
     */
    setPaddingStyle(paddingStyle: SpaceStyle | SpaceStyle.Options, merge?: boolean): this;
    /**
     * Return padding style
     * @returns padding
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Return bound in the parent coordinates
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the curve in the parent coordinates and set up auto bounds
     * false
     *
     * @param bounds bounds of the curve in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Enable or disable auto bounds If auto bounds is enabled then it equals to
     * parent model limits
     *
     * @param enable Enable or disable auto bounds
     */
    setAutoBounds(enable: boolean): this;
    /**
     * Return area without paddings. Model limits are
     * mapped to content area, where children are layout.
     * @param [transformation] scene transformation
     */
    getContentsArea(transformation?: Transformation): Rect;
    /**
     * Return transformation from model to bounds
     */
    getContentsTransform(): Transformation;
    /**
     * <code>getWorldTransform</code> retrieves the local transformation
     * of the node which represents multiplication of parent to bounds and
     * contents transformations.
     */
    getWorldTransform(): Transformation;
    /**
     * Enable automatic bounds. If auto bounds is enabled then it equals to
     * parent model limits
     */
    isAutoBounds(): boolean;
    /**
     * Gets visual to be used to render header
     * @returns visual
     */
    getVisual(): T;
    /**
     * Returns the displayed mode value
     */
    getDisplayMode(): string[] | string;
    /**
     * Sets the displayed mode value
     * @param displayMode header display mode
     */
    setDisplayMode(displayMode: string[] | string): this;
    /**
     * Returns the displayed value
     *
     * @returns displayString
     */
    getDisplayString(): string;
    /**
     * Sets the displayed value
     * @param displayString the displayed value
     */
    setDisplayString(displayString: string): this;
    /**
     * Returns 0
     */
    getDisplayValue(): number;
    /**
     * Returns the displayed depth value
     */
    getDisplayDepth(): number;
    /**
     * Check culling
     * Returns true if object is inside of renderable area
     *
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the props to set
     */
    getProperties(): LogVisualHeader.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogVisualHeader.Options<T>): this;
    /**
     * for internal use only, make text always readable
     * @param context rendering context
     * @param [x] x position to place text
     * @param [y] y position to place text
     * @param [text] text to be displayed
     * @param [style] text style
     * @param [alignment] alignment for placement of text
     * @param [theta] of rotation
     * @param [maxSize] max size or width
     */
    protected drawText(context: RenderingContext, x?: number, y?: number, text?: string, style?: TextStyle, alignment?: AnchorType, theta?: number, maxSize?: number | Dimension): void;
    /**
     * Returns bounding box of the text
     * @param context rendering context
     * @param [x] x position to place text
     * @param [y] y position to place text
     * @param [text] text to be displayed
     * @param [style] text style
     * @param [alignment] alignment for placement of text
     * @param [theta] of rotation
     */
    protected getTextBoundingBox(context: RenderingContext, x?: number, y?: number, text?: string, style?: TextStyle, alignment?: AnchorType, theta?: number): Rect;
    /**
     * Returns biggest text in specified width
     *
     * @param context Rendering Context
     * @param text Text to calculate the size for
     * @param maxLen max length available for the text
     */
    checkTextSize(context: RenderingContext, text: string, maxLen: number): string;
    /**
     * Notify that layout is invalidated. Send event {@link import("geotoolkit/layout/Events").Events.LayoutInvalidated}
     * @param [propagate] propagate invalidate layout to parent
     * @returns this
     */
    invalidateLayout(propagate?: boolean): this;
    /**
     * Return true if the representation is flipped horizontally
     *
     * @returns horizontal flip
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     *
     * @param enable enable flip flag, if it is null [default] header try to use same property from associated visual
     * @returns this
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * This method is called if visual is changing.
     */
    protected onVisualChanging(): void;
    /**
     * This method is called if visual is changed.  Send event {@link import("geotoolkit/welllog/header/LogVisualHeader").Events.VisualChanged}
     */
    protected onVisualChanged(): void;
    setVisual(visual: T): this;
    /**
     * Adds new css class to node
     * @param cssclass css class name('s)
     */
    addCssClass(cssclass: string[] | string): this;
    /**
     * Removes css class from node
     * @param cssclass css class name('s)
     */
    removeCssClass(cssclass: string[] | string): this;
}
export declare namespace LogVisualHeader {
    /**
     * visual for the header or properties object
     */
    type Options<T extends Node = Node> = AbstractNode.Options & {
        /**
         * visual for the header
         */
        visual?: T;
        /**
         * the text style
         */
        textstyle?: TextStyle | string | TextStyle.Options;
        /**
         * the line style
         */
        linestyle?: LineStyle.Type;
        /**
         * the fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * border line style
         */
        borderlinestyle?: LineStyle | string | LineStyle.Options;
        /**
         * desired model Limits
         */
        modellimits?: Rect;
        /**
         * bounds of the curve in the parent coordinates
         */
        bounds?: Rect;
        /**
         * It has properties for specifying the padding for each side
         */
        padding?: SpaceStyle | SpaceStyle.Options;
        /**
         * automatic calculation of header size on or off
         */
        autobounds?: boolean;
        /**
         * depth
         */
        depth?: number;
        /**
         * display mode
         */
        displaymode?: string[] | string;
        /**
         * display string
         */
        displaystring?: string;
        /**
         * layoutstyle
         */
        layoutstyle?: LayoutStyle | LayoutStyle.Options;
        /**
         * rounded box options
         */
        roundedbox?: {
            /**
             * radius of the rounded box
             */
            radius?: number;
            /**
             * linestyle of the rounded box
             */
            linestyle?: LineStyle.Type;
            /**
             * fillstyle of the rounded box
             */
            fillstyle?: FillStyle.Type;
        };
    };
    /**
     * highlight options
     */
    type HighlightOptions = {
        /**
         * highlight flag
         */
        highlight?: boolean;
        /**
         * line style
         */
        linestyle?: LineStyle | string;
        /**
         * fill style
         */
        fillstyle?: FillStyle | string;
    };
    /**
     * An object containing the props to set
     */
    type OptionsOut<T extends Node = Node> = AbstractNode.OptionsOut & {
        /**
         * visual
         */
        visual: T;
        /**
         * the text style
         */
        textstyle: TextStyle;
        /**
         * the line style
         */
        linestyle: LineStyle;
        /**
         * the fill style
         */
        fillstyle: FillStyle;
        /**
         * border line style
         */
        borderlinestyle: LineStyle;
        /**
         * desired model Limits
         */
        modellimits: Rect;
        /**
         * bounds of the curve in the parent coordinates
         */
        bounds: Rect;
        /**
         * It has props for specifying the padding for each side. See {@link import("geotoolkit/attributes/SpaceStyle").SpaceStyle.setProperties}
         */
        padding?: SpaceStyle;
        /**
         * automatic calculation of header size on or off
         */
        autobounds: boolean;
        /**
         * depth
         */
        depth: number;
        /**
         * display mode
         */
        displaymode: string | string[];
        /**
         * display string
         */
        displaystring: string;
        /**
         * layoutstyle
         */
        layoutstyle?: LayoutStyle;
        /**
         * rounded box options
         */
        roundedbox: {
            /**
             * radius of the rounded box
             */
            radius: number;
            /**
             * linestyle of the rounded box
             */
            linestyle: LineStyle;
            /**
             * fillstyle of the rounded box
             */
            fillstyle: FillStyle;
        };
    };
    type EventMap = AbstractNode.EventMap & {
        [Events.VisualChanged]: Node;
        [Events.VisualInvalidate]: Node;
        [Events.VisualVisibilityChanged]: Node;
        [LogCurveEvents.MicropositionChanged]: Node;
    };
}
