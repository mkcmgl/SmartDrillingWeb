/**
 * @module geotoolkit/controls/tools/TernaryCrossHair
 */
import { Point } from '@int/geotoolkit/util/Point';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { Events as CrosshairEvents } from '@int/geotoolkit/controls/tools/CrossHair';
import { CrossHairEventArgs } from '@int/geotoolkit/controls/tools/CrossHairEventArgs';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { TernaryGrid } from '@int/geotoolkit/controls/shapes/TernaryGrid';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { CrossHair } from '@int/geotoolkit/controls/tools/CrossHair';
/**
 * Creates a TernaryCrossHair tool. The tool supports events shown below. It provides built-in functions to customise the styles for the tool and its labels.
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/CrossHair~Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onPositionChanged</td>
 *              <td>{@link @int/geotoolkit/controls/tools/CrossHairEventArgs~CrossHairEventArgs}</td>
 *              <td>This Event is fired when the Cross Hair Mouse position has been changed</td>
 *          </tr>
 *          <tr>
 *              <td>onPointerUp</td>
 *              <td>{@link @int/geotoolkit/controls/tools/CrossHairEventArgs~CrossHairEventArgs}</td>
 *              <td>This Event is fired when the Cross Hair pointer is up</td>
 *          </tr>
 *          <tr>
 *              <td>onPointerDown</td>
 *              <td>{@link @int/geotoolkit/controls/tools/CrossHairEventArgs~CrossHairEventArgs}</td>
 *              <td>This Event is fired when the Cross Hair pointer is down</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 */
export declare class TernaryCrossHair extends AbstractTool {
    /**
     * @param [options] object containing crosshair option OR manipulator layer
     * @param [name] name of the tool
     */
    constructor(options?: TernaryCrossHair.Options | CompositeNode, name?: string);
    on<E extends keyof TernaryCrossHair.EventMap>(type: E, callback: (eventType: E, sender: this, args: TernaryCrossHair.EventMap[E]) => void): this;
    off<E extends keyof TernaryCrossHair.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: TernaryCrossHair.EventMap[E]) => void): this;
    notify<E extends keyof TernaryCrossHair.EventMap>(type: E, source: TernaryCrossHair, args?: TernaryCrossHair.EventMap[E]): this;
    /**
     * Sets line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return line style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets fill style, used if radius is not null
     * @param fillStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Return fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Sets line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setOutLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return outline style
     */
    getOutLineStyle(): LineStyle;
    /**
     * set radius of the cursor center target
     * @param radius center radius
     */
    setRadius(radius: number): this;
    /**
     * Returns radius of the cursor center target
     */
    getRadius(): number;
    /**
     * set cross-hair symbol
     * @param symbol cross-hair symbol
     * @returns this
     */
    setSymbol(symbol: SymbolShape): this;
    /**
     * Return cross-hair symbol
     */
    getSymbol(): SymbolShape;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing crosshair option OR manipulator layer
     */
    getProperties(): TernaryCrossHair.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: TernaryCrossHair.Options): this;
    /**
     * Sets the text style of labels
     * @param textStyle for the crosshair labels on screen, either textStyle or
     * object with "west", "east", "north", "south", "center" textStyle's
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Type): this;
    /**
     * Sets left value line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLeftLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * return left value line style
     */
    getLeftLineStyle(): LineStyle;
    /**
     * Sets right value line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setRightLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * return right value line style
     */
    getRightLineStyle(): LineStyle;
    /**
     * Sets top value line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setTopLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * return top value line style
     */
    getTopLineStyle(): LineStyle;
    /**
     * return visible state
     */
    isVisible(): boolean;
    /**
     * Sets visible
     * @param visible visible attribute set or not
     * @returns this
     */
    setVisible(visible: boolean): this;
    /**
     * The current cross hair position
     */
    getPosition(): Point;
    /**
     * Update position of cursor for the last mouse position. This code can be used
     * if content is scrolled to display the position of the cursor in the last mouse position
     * @param [silent] notification enabled or not
     * @returns this
     */
    updateCursorPosition(silent?: boolean): this;
    /**
     * Sets the current position in model coordinates of the manipulator layer
     * @param position current mouse position
     * @param [silent] notification enabled or not
     * @param [eventArgs] event args which will be passed to event onPositionChanged
     * @returns this
     */
    setPosition(position: Point, silent?: boolean, eventArgs?: EventArgs): this;
    /**
     * sets LabelsTextConverter
     * @param position position of the label to be changed, 'top', 'left' or 'right'
     * @param textConverter function that takes x and y to convert to text for the label
     * @returns this
     */
    setLabelsTextConverter(position: 'top' | 'left' | 'right', textConverter: CrossHair.TextConverter): this;
}
export declare namespace TernaryCrossHair {
    /**
     * object containing crosshair option OR manipulator layer
     */
    type Options = AbstractTool.Options & {
        /**
         * reference to ternary grid
         */
        ternarygrid?: TernaryGrid;
        /**
         * default linestyle shared for all axes
         */
        linestyle?: LineStyle.Type;
        /**
         * OutLinestyle for both lines
         */
        outlinestyle?: LineStyle.Type;
        /**
         * Linestyle for top corner value line
         */
        top?: LineStyle.Type;
        /**
         * Linestyle for left corner value line
         */
        left?: LineStyle.Type;
        /**
         * Linestyle for right corner value line
         */
        right?: LineStyle.Type;
        /**
         * fillstyle of the cross-hair (used only with radius)
         */
        fillstyle?: FillStyle.Type;
        /**
         * radius of the cross-hair center target
         */
        radius?: number;
        /**
         * symbol of the cross-hair
         */
        symbol?: SymbolShape;
        /**
         * default textstyle shared for all axes
         */
        textstyle?: TextStyle.Type | TextStyleLabel;
        /**
         * if 'none' of false - do not create labels
         */
        labels?: 'none' | boolean;
    };
    /**
     * object containing crosshair option OR manipulator layer
     */
    type OptionsOut = AbstractTool.OptionsOut & {
        /**
         * default linestyle shared for all axes
         */
        linestyle: LineStyle;
        /**
         * OutLinestyle for both lines
         */
        outlinestyle: LineStyle;
        /**
         * Linestyle for top corner value line
         */
        top: LineStyle;
        /**
         * Linestyle for left corner value line
         */
        left: LineStyle;
        /**
         * Linestyle for right corner value line
         */
        right: LineStyle;
        /**
         * fillstyle of the cross-hair (used only with radius)
         */
        fillstyle: FillStyle;
        /**
         * radius of the cross-hair center target
         */
        radius: number;
        /**
         * symbol of the cross-hair
         */
        symbol: SymbolShape;
        /**
         * default textstyle shared for all axes
         */
        textstyle?: TextStyle | TextStyleLabel;
    };
    type EventMap = AbstractTool.EventMap & {
        [CrosshairEvents.onPositionChanged]: CrossHairEventArgs;
        [CrosshairEvents.onPointerUp]: CrossHairEventArgs;
        [CrosshairEvents.onPointerDown]: CrossHairEventArgs;
    };
}
declare type Label = {
    visible: boolean;
    padding: number;
};
declare type TextStyleLabel = {
    left: Label;
    right: Label;
    top: Label;
};
export {};
