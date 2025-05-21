import { Rect } from '@int/geotoolkit/util/Rect';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { Range } from '@int/geotoolkit/util/Range';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { ILineDecoration } from '@int/geotoolkit/attributes/ILineDecoration';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * A Welllog marker implementation.<br>
 * This shape is a horizontal line meant to be used in a LogTrack to highlight a specific depth.
 * It holds two labels (depth and name) that can be displayed or not.<br>
 * Note that this is not related to the WelllogWidget built-in markers and that this implementation is a <b>per track</b> marker.
 * So it will display a line only in its track. However a marker can be added on the entire Track Container as well.
 *
 * @example
 * // This example shows how to make the text in marker left aligned.
 * import {IWellTrack} from '@int/geotoolkit/welllog/multiwell/IWellTrack';
 * import {isInstanceOf} from '@int/geotoolkit/base';
 * import {LogMarker} from '@int/geotoolkit/welllog/LogMarker';
 * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
 * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * for (let i = 0; i < multiWellWidget.getTracksCount(); ++i) {
 *  // Use this conditional to check if the track is a well track (as opposed to a correlation track)
 *  if (isInstanceOf(track, IWellTrack)) {
 *      const marker = new LogMarker(2050);
 *      marker.setLineStyle(new LineStyle({'color': 'black'}));
 *      marker.setTextStyle(new TextStyle({
 *          'color': 'black',
 *          'font': '12px sans-serif'
 *      }));
 *      marker.setNameLabel('Marker 1');
 *      marker.setNameLabelPosition(AnchorType.LeftTop); // Left-align name label
 *      marker.setDepthLabel('2050'); // This can be customized with TVD, TVDSS values
 *      marker.setDepthLabelPosition(AnchorType.LeftBottom); // Left-align depth label
 *      track.getMarkerLayer().addChild(marker);
 *  }
 *  }
 * @example
 * // Add a marker to Time Index Track by adding a marker to the specific time position. Following code shows how to add a marker when a widget is based on time.
 * import {WellLogWidget} from '@int/geotoolkit/welllog/widgets/WellLogWidget';
 * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
 * const minValue = new Date(2000, 0, 1, 0, 0, 0, 0).getTime();
 * const maxValue = new Date(2000, 5, 1, 0, 0, 0, 0).getTime();
 *
 *    var widget = new WellLogWidget({
 *     'horizontalscrollable': false,
 *     'verticalscrollable': false,
 *     'trackcontainer': {
 *       'border': {
 *         'visible': false
 *       }
 *     },
 *     'border': {
 *       'visible': false
 *     },
 *     'header': {
 *       'visible': true
 *     }
 *   }).setIndexType('time')
 *    .setIndexUnit('ms')
 *    .setDepthLimits(minValue, maxValue);
 *
 * const marker = new LogMarker(951007515789, 'Marker')
 *    .setLineStyle({
 *           'color': 'red',
 *           'width': 2
 *       })
 *    .setTextStyle({
 *           'font': 'bold 14px Roboto',
 *           'color': 'white'
 *       })
 *    .setNameLabelPosition(AnchorType.LeftTop)
 *    .setFillStyleName('orange')
 *    .setFillNameLabel(true);
 *
 * widget.addTrack(TrackType.IndexTrack).addChild(marker)
 *    .setWidth(70);
 */
export declare class LogMarker extends LogAbstractVisual {
    /**
     * Constructor
     * @param [params] object representing log marker configuration
     */
    constructor(params?: LogMarker.Options);
    /**
     * Constructor
     * @param [depth] depth of the marker
     * @param [nameLabel] name label on the marker
     * @param [depthLabel] optional label for depth
     * @param [horizontalTextOffset] horizontal label offset in device space
     * @param [verticalTextOffset] vertical label offset in device space
     */
    constructor(depth?: number, nameLabel?: string, depthLabel?: string, horizontalTextOffset?: number, verticalTextOffset?: number);
    clone(): LogMarker;
    protected copyConstructor(src: LogMarker, deepCopy?: boolean): this;
    /**
     * Sets vertical label offset in device space
     * @param offset offset
     * @returns this
     */
    setVerticalTextOffset(offset: number): this;
    /**
     * Sets horizontal label offset in device space
     * @param offset offset
     * @returns this
     */
    setHorizontalTextOffset(offset: number): this;
    /**
     * Gets vertical label offset in device space
     */
    getVerticalTextOffset(): number;
    /**
     * Gets horizontal label offset in device space
     */
    getHorizontalTextOffset(): number;
    /**
     * Specify name label visible or not.
     *
     * @param visible name label visible or not.
     * @returns this
     */
    setVisibleNameLabel(visible: boolean): this;
    /**
     * Return true if name label is visible. It is visible by default.
     */
    isVisibleNameLabel(): boolean;
    /**
     * Specify depth label visible or not.
     *
     * @param visible specifies if depth label visible or not
     * @returns this
     */
    setVisibleDepthLabel(visible: boolean): this;
    /**
     * Return true if depth label is visible. It is visible by default.
     */
    isVisibleDepthLabel(): boolean;
    /**
     * Specify border name visible or not.
     *
     * @param visible border name visible or not.
     * @returns this
     */
    setVisibleNameBorder(visible: boolean): this;
    /**
     * Return true if Name label border is visible. It is visible by default.
     */
    isVisibleNameBorder(): boolean;
    /**
     * Specify depth label border visible or not.
     *
     * @param visible depth label border visible or not
     * @returns this
     */
    setVisibleDepthBorder(visible: boolean): this;
    /**
     * Return true if depth label border is visible. It is visible by default.
     */
    isVisibleDepthBorder(): boolean;
    /**
     * Specify name label fill style enabled or not.
     *
     * @param enable name label fill style enabled or not.
     * @returns this
     */
    setFillNameLabel(enable: boolean): this;
    /**
     * Return true if name label fill style enabled. It is enabled by default.
     */
    isFillNameLabel(): boolean;
    /**
     * Specify depth label fill style enabled or not.
     *
     * @param enable depth label fill style enabled or not
     * @returns this
     */
    setFillDepthLabel(enable: boolean): this;
    /**
     * Return true if depth label fill style enabled. It is enabled by default.
     */
    isFillDepthLabel(): boolean;
    /**
     * Specify fill style for both name and depth labels.
     *
     * @param fillStyle fill style for both name and depth labels.
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Return fill style of name label
     */
    getFillStyleName(): FillStyle;
    /**
     * Sets fill style of name label
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setFillStyleName(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Return fill style of depth label
     */
    getFillStyleDepth(): FillStyle;
    /**
     * Sets fill style of depth label
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setFillStyleDepth(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Return text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text style
     *
     * @param textStyle text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * specify the orientation of text
     * @param orientation fixed orientation of text, null value means orientation determined by widget's rotation
     * @returns this
     */
    setTextOrientation(orientation: Orientation | null): this;
    /**
     * return orientation of text
     */
    getTextOrientation(): Orientation | null;
    /**
     * Return LogMarker Line Decoration Style
     */
    getLineDecoration(): ILineDecoration;
    /**
     * Specify LogMarker Line Decoration style
     *
     * @param lineDecoration line decoration style
     * @returns this
     */
    setLineDecoration(lineDecoration: ILineDecoration | string): this;
    /**
     * Draws marker
     * @param localContext context
     * @param nameLabelRect bounds for name label
     * @param depthLabelRect bounds for depth label
     */
    protected drawMarker(localContext: RenderingContext, nameLabelRect: Rect, depthLabelRect: Rect): void;
    render(context: RenderingContext): void;
    /**
     * Draw text
     * @param context rendering context
     * @param x x position to place text
     * @param y y position to place text
     * @param text text to be displayed
     * @param textStyle text style
     * @param alignment alignment for placement of text
     * @param lineStyle line style
     * @param fillStyle fill style
     * @param [radius] border radius
     */
    protected drawText(context: RenderingContext, x: number, y: number, text: string, textStyle: TextStyle, alignment: AnchorType, lineStyle: LineStyle, fillStyle: FillStyle, radius?: number): void;
    /**
     * Sets marker
     *
     * @param depth depth to place marker
     * @param [displayNameLabel] name label
     * @param [displayDepthLabel] depth label
     * @returns this
     */
    setDepthValue(depth: number, displayNameLabel?: string, displayDepthLabel?: string): this;
    /**
     * Sets name to be displayed
     *
     * @param nameLabel name to be displayed
     * @returns this
     */
    setNameLabel(nameLabel: string): this;
    /**
     * Returns name to be displayed
     */
    getNameLabel(): string;
    /**
     * Sets depth value to be displayed
     *
     * @param depthLabel name to be displayed
     * @returns this
     */
    setDepthLabel(depthLabel: string): this;
    /**
     * Returns depth label to be displayed
     */
    getDepthLabel(): string;
    /**
     * Set depth
     *
     * @param depth depth to place marker
     * @returns this
     */
    setDepth(depth: number): this;
    /**
     * Return depth
     *
     * @returns depth
     */
    getDepth(): number;
    /**
     * Verifies if object is within given context.
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Return model limits
     *
     * @param [tr] transformation from marker to device
     */
    getBounds(tr?: Transformation): Rect;
    /**
     * return meaning depth limits
     */
    getMeaningDepthLimits(): Range;
    /**
     * Return model limits
     * @param [tr] transformation from marker to device
     */
    getModelLimits(tr?: Transformation): Rect | null;
    /**
     * Return name label position as an anchor point
     */
    getNameLabelPosition(): AnchorType;
    /**
     * Set label position
     *
     * @param anchorPoint label position
     * @returns this
     */
    setNameLabelPosition(anchorPoint: AnchorType): this;
    /**
     * Return depth label position as an anchor point
     */
    getDepthLabelPosition(): AnchorType;
    /**
     * Set depth label position
     *
     * @param anchorPoint label position
     * @returns this
     */
    setDepthLabelPosition(anchorPoint: AnchorType): this;
    /**
     * Returns name label border radius
     */
    getNameBorderRadius(): number;
    /**
     * Sets name label border radius
     */
    setNameBorderRadius(radius: number): this;
    /**
     * Returns depth label border radius
     */
    getDepthBorderRadius(): number;
    /**
     * Sets depth label border radius
     */
    setDepthBorderRadius(radius: number): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogMarker.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogMarker.Options): this;
}
export declare namespace LogMarker {
    /**
     * depth of the marker OR object representing log marker configuration
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * depth of marker
         */
        depth?: number;
        /**
         * name label on marker
         */
        displaynamelabel?: string;
        /**
         * name label position
         */
        namelabelposition?: AnchorType;
        /**
         * display name label or not
         */
        visiblenamelabel?: boolean;
        /**
         * display name border or not
         */
        visiblenameborder?: boolean;
        /**
         * name border radius
         */
        nameborderradius?: number;
        /**
         * The Fill Style name
         */
        fillstylename?: FillStyle.Type;
        /**
         * display fill name label or not
         */
        fillnamelabel?: boolean;
        /**
         * optional depth label
         */
        displaydepthlabel?: string;
        /**
         * depth label position
         */
        depthlabelposition?: AnchorType;
        /**
         * display depth label or not
         */
        visibledepthlabel?: boolean;
        /**
         * display depth border or not
         */
        visibledepthborder?: boolean;
        /**
         * depth border radius
         */
        depthborderradius?: number;
        /**
         * The Fill Style depth
         */
        fillstyledepth?: FillStyle.Type;
        /**
         * display fill depth label or not
         */
        filldepthlabel?: boolean;
        /**
         * The TextStyle
         */
        textstyle?: TextStyle.Type;
        /**
         * The Fill Style for name and depth
         */
        fillstyle?: FillStyle.Type;
        /**
         * orientation of text
         */
        textorientation?: Orientation;
        /**
         * vertical label offset in device space
         */
        verticaltextoffset?: number;
        /**
         * horizontal label offset in device space
         */
        horizontaltextoffset?: number;
        /**
         * line decoration style
         */
        linedecoration?: ILineDecoration | string;
    };
    /**
     * properties object
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * depth to place marker
         */
        depth: number;
        /**
         * name label
         */
        displaynamelabel: string;
        /**
         * depth label
         */
        displaydepthlabel: string;
        /**
         * The TextStyle
         */
        textstyle: TextStyle;
        /**
         * The Fill Style name
         */
        fillstylename: FillStyle;
        /**
         * The Fill Style depth
         */
        fillstyledepth: FillStyle;
        /**
         * display name label or not
         */
        visiblenamelabel: boolean;
        /**
         * display depth label or not
         */
        visibledepthlabel: boolean;
        /**
         * display name border or not
         */
        visiblenameborder: boolean;
        /**
         * display depth border or not
         */
        visibledepthborder: boolean;
        /**
         * display fill name label or not
         */
        fillnamelabel: boolean;
        /**
         * display fill depth label or not
         */
        filldepthlabel: boolean;
        /**
         * depth label position
         */
        depthlabelposition: AnchorType;
        /**
         * name label position
         */
        namelabelposition: AnchorType;
        /**
         * orientation of text
         */
        textorientation: Orientation | null;
        /**
         * vertical text offset
         */
        verticaltextoffset: number;
        /**
         * horizontal text offset
         */
        horizontaltextoffset: number;
        /**
         * marker line type
         */
        linedecoration: ILineDecoration;
        /**
         * depth border radius
         */
        depthborderradius: number;
        /**
         * name border radius
         */
        nameborderradius: number;
    };
}
