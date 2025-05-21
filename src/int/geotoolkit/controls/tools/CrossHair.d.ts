import { Point } from '@int/geotoolkit/util/Point';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { CrossHairEventArgs } from '@int/geotoolkit/controls/tools/CrossHairEventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import { Orientation } from '@int/geotoolkit/util/Orientation';
/**
 * @deprecated since 4.0 use @int/geotoolkit/util/Orientation instead
 */
export { Orientation as LineOrientations };
/**
 * @deprecated since 4.0 use @int/geotoolkit/layout/AnnotationLocation instead
 */
export { AnnotationLocation as LabelPositions };
/**
 * CrossHair Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * onPositionChanged
     */
    onPositionChanged = "onPositionChanged",
    /**
     * onPointerUp
     */
    onPointerUp = "onPointerUp",
    /**
     * onPointerDown
     */
    onPointerDown = "onPointerDown"
}
/**
 * Creates a CrossHair tool. The tool supports events shown below. It provides built-in functions to customise the styles for the tool and its labels.
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
export declare class CrossHair extends AbstractTool {
    /**
     * Creates CrossHair
     * @param [layer] manipulator layer
     * @param [name] name of the tool used like cross-hair etc
     */
    constructor(layer?: CompositeNode, name?: string);
    /**
     * Creates CrossHair
     * @param [options] properties object
     */
    constructor(options?: CrossHair.Options);
    on<E extends keyof CrossHair.EventMap>(type: E, callback: (eventType: E, sender: this, args: CrossHair.EventMap[E]) => void): this;
    off<E extends keyof CrossHair.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: CrossHair.EventMap[E]) => void): this;
    notify<E extends keyof CrossHair.EventMap>(type: E, source: CrossHair, args?: CrossHair.EventMap[E]): this;
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
     * @returns properties object
     */
    getProperties(): CrossHair.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: CrossHair.Options): this;
    /**
     * Gets settings for one label
     * @param orientation label orientation
     * @returns JSON to configure label
     */
    getLabelSettings(orientation: AnnotationLocation): CrossHair.LabelSettingsOut | null;
    /**
     * Set Settings for one label
     * @param orientation label orientation
     * @param [settings] JSON to configure label
     * @returns this
     */
    setLabelSettings(orientation: AnnotationLocation, settings?: CrossHair.LabelSettings): this;
    /**
     * Sets the text style of labels
     * @param textStyle for the crosshair labels on screen
     * @returns this
     */
    setTextStyle(textStyle: TextStyle | string | TextStyle.Options): this;
    /**
     * Sets vertical line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setVerticalLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * return vertical line style
     */
    getVerticalLineStyle(): LineStyle;
    /**
     * Sets vertical line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setHorizontalLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * return horizontal line style
     */
    getHorizontalLineStyle(): LineStyle;
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
     * @param position position of the label to be changed
     * @param textConverter function that takes x and y to convert to text for the label
     * @returns this
     */
    setLabelsTextConverter(position: AnnotationLocation, textConverter: CrossHair.TextConverter): this;
    /**
     * Sets callback for selecting target Node from scene
     * @param callback function that takes current mouse position and returns target for crosshair
     * @returns this
     */
    setSelectTargetCallback(callback: CrossHair.SelectTargetCallback): this;
    /**
     * Returns current target
     * @returns target
     */
    getTarget(): Node | null;
}
export declare namespace CrossHair {
    /**
     * object containing crosshair option OR manipulator layer
     */
    type Options = AbstractTool.Options & {
        /**
         * - default linestyle shared for all orientations.
         */
        linestyle?: LineStyle.Type;
        /**
         * - default textstyle shared for all orientations.
         */
        textstyle?: TextStyle;
        /**
         * OutLinestyle for both lines
         */
        outlinestyle?: LineStyle.Type;
        /**
         * Linestyle for horizontal line
         */
        horizontal?: LineStyle.Type;
        /**
         * Linestyle for vertical line
         */
        vertical?: LineStyle.Type;
        /**
         * fillstyle of the cross-hair (used only with radius)
         */
        fillstyle?: FillStyle.Options | FillStyle;
        /**
         * radius of the cross-hair center target
         */
        radius?: number;
        /**
         * symbol of the cross-hair
         */
        symbol?: SymbolShape;
        /**
         * JSON for north label. See setLabelSettings for more details
         */
        north?: LabelSettings;
        /**
         * JSON for south label. See setLabelSettings for more details
         */
        south?: LabelSettings;
        /**
         * JSON for east label. See setLabelSettings for more details
         */
        east?: LabelSettings;
        /**
         * JSON for west label. See setLabelSettings for more details
         */
        west?: LabelSettings;
        /**
         * JSON for center label. See setLabelSettings for more details
         */
        center?: LabelSettings & {
            /**
             * central labels offset relative to mouse position
             */
            labelsoffset?: {
                /**
                 * x-offset in pixels
                 */
                x?: number;
                /**
                 * y-offset in pixels
                 */
                y?: number;
            };
            /**
             * lock x position, can be useful if vertical cursor is hidden
             */
            lockx?: boolean;
            /**
             * lock y position, can be useful if horizontal cursor is hidden
             */
            locky?: boolean;
        };
        /**
         * preserve annotation's orientation of labels for different
         */
        keeporientation?: boolean;
        /**
         * if 'none' of false - do not create labels
         */
        labels?: 'none' | boolean;
    };
    /**
     * properties object
     */
    type OptionsOut = AbstractTool.OptionsOut & {
        /**
         * Linestyle for both lines
         */
        linestyle: LineStyle | null;
        /**
         * default textstyle shared for all orientations.
         */
        textstyle: TextStyle | null;
        /**
         * OutLinestyle for both lines
         */
        outlinestyle: LineStyle | null;
        /**
         * Linestyle for horizontal line
         */
        horizontal: LineStyle | null;
        /**
         * Linestyle for vertical line
         */
        vertical: LineStyle | null;
        /**
         * fillstyle of the cross-hair (used only with radius)
         */
        fillstyle: FillStyle | null;
        /**
         * radius of the cross-hair center target
         */
        radius: number;
        /**
         * symbol of the cross-hair
         */
        symbol: SymbolShape | null;
        /**
         * JSON for north label. See setLabelSettings for more details
         */
        north?: LabelSettingsOut;
        /**
         * JSON for south label. See setLabelSettings for more details
         */
        south?: LabelSettingsOut;
        /**
         * JSON for east label. See setLabelSettings for more details
         */
        east?: LabelSettingsOut;
        /**
         * JSON for west label. See setLabelSettings for more details
         */
        west?: LabelSettingsOut;
        /**
         * JSON for center label. See setLabelSettings for more details
         */
        center?: LabelSettingsOut & {
            /**
             * central labels offset relative to mouse position
             */
            labelsoffset?: {
                /**
                 * x-offset in pixels
                 */
                x?: number;
                /**
                 * y-offset in pixels
                 */
                y?: number;
            };
            /**
             * lock x position, can be useful if vertical cursor is hidden
             */
            lockx?: boolean;
            /**
             * lock y position, can be useful if horizontal cursor is hidden
             */
            locky?: boolean;
        };
        /**
         * preserve annotation's orientation of labels for different axis direction. It means 'north' is always on 'top' and 'west' is on the left side. It is false for compatibility.
         */
        keeporientation?: boolean;
    };
    /**
     * JSON to configure label
     */
    type LabelSettingsOut = {
        /**
         * text style of the text
         */
        textstyle: TextStyle;
        /**
         * fill style of the text
         */
        fillstyle: FillStyle;
        /**
         * line style of the text border
         */
        linestyle: LineStyle;
        /**
         * visibility of the text
         */
        visible: boolean;
        /**
         * alignment of the text
         */
        alignment: AnchorType;
        /**
         * padding between the text and the border
         */
        padding: number;
        /**
         * radius of the cross-hair center target
         */
        radius: number;
        /**
         * label offset between the text and cross-hair cursor, use padding in case of undefined
         */
        offset: SpaceStyle;
        /**
         * strategy to convert x,y to text
         */
        textconverter: TextConverter;
    };
    /**
     * JSON to configure label
     */
    type LabelSettings = {
        /**
         * text style of the text
         */
        textstyle?: TextStyle.Type;
        /**
         * fill style of the text
         */
        fillstyle?: FillStyle.Type;
        /**
         * line style of the text border
         */
        linestyle?: LineStyle.Type;
        /**
         * visibility of the text
         */
        visible?: boolean;
        /**
         * alignment of the text
         */
        alignment?: AnchorType;
        /**
         * padding between the text and the border
         */
        padding?: number;
        /**
         * radius of the text shape border
         */
        radius?: number;
        /**
         * label offset between the text and cross-hair cursor, use padding in case of undefined
         */
        offset?: SpaceStyle.Options | SpaceStyle;
        /**
         * strategy to convert x,y to text
         */
        textconverter?: TextConverter;
    };
    type TextConverter = (x: number, y: number) => string;
    /**
     * Select target from scene.
     */
    type SelectTargetCallback = (point: Point) => Node | null;
    type EventMap = AbstractTool.EventMap & {
        [Events.onPositionChanged]: CrossHairEventArgs;
        [Events.onPointerUp]: CrossHairEventArgs;
        [Events.onPointerDown]: CrossHairEventArgs;
    };
}
