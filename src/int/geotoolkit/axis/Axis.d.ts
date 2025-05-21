/**
 * @module geotoolkit/axis/Axis
 */
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LabelPosition, TickInfo, TickPosition } from '@int/geotoolkit/axis/TickInfo';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { AdaptiveTickGenerator } from '@int/geotoolkit/axis/AdaptiveTickGenerator';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { AxisMappingDimension } from '@int/geotoolkit/axis/AxisMappingDimension';
import { IModel } from '@int/geotoolkit/scene/IModel';
/**
 * This class uses the {@link @int/geotoolkit/axis/TickGenerator~TickGenerator} which is passed to it and creates an axis.<br>
 * It allows to modify the axis tick positions, axis orientations, axis label positions etc. CSS can be used to modify all axis settings.
 * @example
 * // In this example we have used AdaptiveLogTickGenerator and set the label rotation to true. Refer to the axes and grid tutorial for more options.
 * import {AdaptiveTickGenerator} from '@int/geotoolkit/axis/AdaptiveTickGenerator';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * import {Axis} from '@int/geotoolkit/axis/Axis';
 *
 * const tickGenerator = new AdaptiveTickGenerator();
 * const minValue = 40000;
 * const maxValue = 15000000;
 * const bounds = new Rect(120, 10, 150, 340);
 * // note that group has a clipping by model limits, so to avoid overlapping set models limits accordingly.
 * const axis = new Axis(tickGenerator)
 *     .setBounds(bounds)
 *     .setModelLimits(new Rect(minValue, minValue, maxValue, maxValue))
 *     .setAutoLabelRotation(true);
 */
export declare class Axis extends Shape implements ILayoutable, IModel {
    /**
     * Create Axis
     * @param [tickGenerator] User can pass an object OR a tickGenerator (by default {@link @int/geotoolkit/axis/AdaptiveTickGenerator~AdaptiveTickGenerator} is used of nothing is passed)
     */
    constructor(tickGenerator?: Axis.Options | TickGenerator);
    clone(): Axis;
    protected copyConstructor(src: Axis, deepCopy?: boolean): this;
    /**
     * Sets label manual settings mode (AnchorType and no shifts)
     * @param state label manual settings mode
     * @returns this
     */
    setLabelManualSettings(state: boolean): this;
    /**
     * Gets label manual settings mode (AnchorType and no shifts)
     * @returns label manual settings mode
     */
    getLabelManualSettings(): boolean;
    /**
     * Sets label padding
     * @param padding label padding
     * @returns this
     */
    setLabelPadding(padding: number): this;
    /**
     * Gets label padding
     * @returns padding label padding
     */
    getLabelPadding(): number;
    /**
     * Sets the label position
     * @param position label position
     * @returns this
     */
    setLabelPosition(position: LabelPosition): this;
    /**
     * Return the label position
     */
    getLabelPosition(): LabelPosition;
    /**
     * Sets the label offset
     * @param offset the label offset
     * @returns this
     */
    setLabelOffset(offset: number): this;
    /**
     * Return the label offset
     */
    getLabelOffset(): number;
    /**
     * Sets a base line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setBaseLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return a base line style
     */
    getBaseLineStyle(): LineStyle;
    /**
     * Return base line visibility
     */
    getBaseLineVisible(): boolean;
    /**
     * Set base line visibility
     * @param visible visible
     */
    setBaseLineVisible(visible: boolean): this;
    /**
     * Return a text style
     * @returns textStyle
     */
    getTextStyle(): TextStyle;
    /**
     * Set text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Return boolean flag that enables/disables ellipsis in case if text is too long
     */
    getShowTitleEllipsis(): boolean;
    /**
     * Enables/disables ellipsis in case if text is too long
     * @param showellipsis true for ellipsis
     * @returns this
     */
    setShowTitleEllipsis(showellipsis: boolean): this;
    /**
     * Sets tick generator
     *
     * @param tickGenerator a tick generator to be used
     * @returns this
     */
    setTickGenerator(tickGenerator: TickGenerator | AdaptiveTickGenerator.Options): this;
    /**
     * Return a current tick generator
     *
     * @returns a current tick generator
     */
    getTickGenerator(): TickGenerator;
    /**
     * Gets axis bounds
     *
     * @returns axis bounds
     */
    getBounds(): Rect | null;
    /**
     * Gets model limits
     *
     * @returns model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Sets model limits
     *
     * @param modelLimits model limits or rectangle where ticks are to be generated
     * @returns this
     */
    setModelLimits(modelLimits: Rect): this;
    /**
     * Sets an axis bounds
     *
     * @param bounds axis bounds
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Set infinity mode flag to draw axis outside the model limits
     * @param infinityMode infinity mode flag
     * @returns this
     */
    setInfiniteMode(infinityMode: boolean): this;
    /**
     * Return infinity mode flag
     * @returns flag
     */
    getInfiniteMode(): boolean;
    render(context: RenderingContext): void;
    /**
     * Sets hide overlapped text flag
     * @param flag hide overlapped text flag
     * @returns this
     */
    setHideOverlappedText(flag: boolean): this;
    /**
     * Gets hide overlapped text flag
     * @returns hide overlapped text flag
     */
    getHideOverlappedText(): boolean;
    /**
     * Get title anchor
     * @returns alignment
     */
    getTitleAnchor(): AnchorType;
    /**
     * Set title alignment
     * @param titleAnchor anchor
     */
    setTitleAnchor(titleAnchor: AnchorType): this;
    /**
     * Set title visibility state
     * @param visible visible title
     */
    setTitleVisible(visible: boolean): this;
    /**
     * Get title visibility state
     * @returns visible state
     */
    getTitleVisible(): boolean;
    /**
     * Sets title text
     * @param titleText title text
     * @returns this
     */
    setTitleText(titleText: string): this;
    /**
     * Set title
     * @param title axis title text or title object
     * @returns this
     */
    setTitle(title: Axis.Title | string): this;
    /**
     * Get axis title
     * @returns axis title
     */
    getTitle(): string;
    /**
     * Returns title offset
     * @returns offset
     */
    getTitleOffset(): Dimension;
    /**
     * Sets title offset
     * @param titleOffset offset
     */
    setTitleOffset(titleOffset: Dimension): this;
    /**
     * Returns title margin
     */
    getTitleMargin(): SpaceStyle | null;
    /**
     * Sets title margin
     * @param titleMargin title margin style
     * @returns this
     */
    setTitleMargin(titleMargin: SpaceStyle | SpaceStyle.Options | null): this;
    /**
     * Set axis title text style
     *
     * @param titleTextStyle a new title text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTitleTextStyle(titleTextStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * The style associated with this axis title.
     *
     * @returns textStyle
     */
    getTitleTextStyle(): TextStyle;
    /**
     * Sets axis orientation
     *
     * @param orientation (It can be "Vertical" or "Horizontal");
     * @returns this
     */
    setOrientation(orientation: string | Orientation): this;
    /**
     * Return axis orientation
     *
     * @returns "horizontal" or "vertical"
     */
    getOrientation(): Orientation;
    /**
     * Returns axis tick info
     * @returns tickInfo
     */
    getTickInfo(): TickInfo;
    /**
     * Return tick position
     * @returns tickPosition
     */
    getTickPosition(): TickPosition | string;
    /**
     * Sets tick position as text
     * @param position
     */
    setTickPosition(position: TickPosition | string): this;
    /**
     * Sets auto rotation angle for vertical axis
     *
     * @param angle angle of label auto rotation
     * @returns this
     */
    setAutoLabelRotationAngle(angle: number): this;
    /**
     * Gets auto rotation angle for vertical axis
     *
     * @returns angle
     */
    getAutoLabelRotationAngle(): number;
    /**
     * Set auto label rotation
     * @param enable enable automatic label rotation
     * @returns this
     */
    setAutoLabelRotation(enable: boolean): this;
    /**
     * Get auto label rotation
     */
    getAutoLabelRotation(): boolean;
    /**
     * Check culling
     *
     * @param context Rendering Context
     * @returns true if object is inside of rendarable area
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     * @param [merge] true if you want to merge layoutStyle with existing attribute, false by default
     */
    setLayoutStyle(layoutStyle: LayoutStyle | LayoutStyle.Options, merge?: boolean): this;
    /**
     * Transformation of inner contents to bounds
     */
    getContentsTransform(): Transformation | null;
    /**
     * Retrieves the local transformation of the node which represents multiplication of parent to bounds and
     * contents transformations.
     */
    getWorldTransform(): Transformation;
    /**
     * Invalidate parent area
     * @param [bounds] area to invalidate
     * @param [force] force
     * @returns this
     */
    invalidateParent(bounds?: Rect, force?: boolean): this;
    /**
     * return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Gets maximum label size
     * @returns maximum label size (in device space)
     */
    getMaximumLabelSize(): number;
    /**
     * Sets maximum label size
     * @param maximumLabelSize maximum label size (in device space)
     * @returns this
     */
    setMaximumLabelSize(maximumLabelSize: number): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties
     */
    getProperties(): Axis.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Axis.Options): this;
    /**
     * Sets axis dimension to synchronize tick generator parameters with external source
     * @param dimension dimension
     */
    setAxisDimension(dimension: AxisMappingDimension | AxisMappingDimension.Options | null): this;
    /**
     * Gets axis dimension to synchronize tick generator parameters with external source
     */
    getAxisDimension(): AxisMappingDimension | null;
    /**
     * Update axis dimension for new data limits and optional device size of the axis
     * @param minValue minimum value
     * @param maxValue maximum value
     * @param [size] size of the axis in device space. if size is not provided
     * then size is calculated based on limits and current transformation.
     * @returns this
     */
    updateAxisDimension(minValue: number, maxValue: number, size?: number): this;
    /**
     * Notify that layout is invalidated. Send event {@link import("geotoolkit/layout/Events").Events.LayoutInvalidated}
     * @returns this
     */
    invalidateLayout(): this;
    /**
     * This method is called if visibility is changed.  Send event {@link import("geotoolkit/scene/Node").Events.VisibilityChanged}
     */
    protected onVisibilityChanged(): void;
    /**
     * Called if axis dimension is changed
     * @param dimension dimension
     */
    protected onAxisDimensionChanged(dimension: AxisMappingDimension): void;
}
export declare namespace Axis {
    type Options = Shape.Options & OptionsBase;
    /**
     * An object containing the properties
     */
    type OptionsOut = Shape.OptionsOut & {
        /**
         * axis orientation
         */
        orientation?: Orientation;
        /**
         * rectangle where to generate ticks
         */
        modellimits?: Rect;
        /**
         * labels textstyle
         */
        textstyle?: TextStyle;
        /**
         * instance of tick generator
         */
        tickgenerator?: TickGenerator;
        /**
         * position of the tick
         */
        tickposition?: TickPosition;
        /**
         * label position
         */
        labelposition?: LabelPosition;
        /**
         * offset the label offset
         */
        labeloffset?: number;
        /**
         * base line style
         */
        baselinestyle?: LineStyle;
        /**
         * automatic label rotation
         */
        autolabelrotation?: boolean;
        /**
         * auto rotation angle for axis
         */
        autolabelrotationangle?: number;
        /**
         * visibility of baseline
         */
        visiblebaseline?: boolean;
        /**
         * enable label filtering if labels are overlapped
         */
        hideoverlappedtext?: boolean;
        /**
         * enable / disable manual settings for labels like anchor
         */
        labelmanualsettings?: boolean;
        /**
         * layout style
         */
        layoutstyle?: LayoutStyle;
        /**
         * Title options
         */
        title?: Title;
        /**
         * label padding size in pixels
         */
        labelpadding?: number;
        /**
         * maximum label size (in device space), text will be wrapped, if it is bigger than maximum label size
         */
        maximumlabelsize?: number;
        /**
         * infinity mode
         */
        infinity?: boolean;
        /**
         * axis bounds
         */
        bounds?: Rect;
        /**
         * Axis dimension to setup axis limits
         */
        dimension?: AxisMappingDimension;
    };
    /**
     * User can pass an object OR a tickGenerator (by default {@link @int/geotoolkit/axis/AdaptiveTickGenerator~AdaptiveTickGenerator} is used of nothing is passed)
     */
    type OptionsBase = {
        /**
         * tickGenerator to use in axis
         */
        tickgenerator?: TickGenerator | AdaptiveTickGenerator.Options;
        /**
         * rectangle where to generate ticks
         */
        modellimits?: Rect;
        /**
         * labels textstyle
         */
        textstyle?: TextStyle.Type;
        /**
         * tick position
         */
        tickposition?: TickPosition;
        /**
         * label position
         */
        labelposition?: LabelPosition;
        /**
         * offset the label offset
         */
        labeloffset?: number;
        /**
         * base line style
         */
        baselinestyle?: LineStyle.Type;
        /**
         * automatic label rotation
         */
        autolabelrotation?: boolean;
        autolabelrotationangle?: number;
        /**
         * visibility of baseline
         */
        visiblebaseline?: boolean;
        /**
         * enable / disable manual settings for labels like anchor
         */
        labelmanualsettings?: boolean;
        /**
         * desired layout style
         */
        layoutstyle?: LayoutStyle | LayoutStyle.Options;
        /**
         * infinity mode
         */
        infinity?: boolean;
        /**
         * axis bounds
         */
        bounds?: Rect;
        /**
         * axis orientation
         */
        orientation?: Orientation;
        /**
         * axis title
         */
        title?: Title;
        /**
         * hide overlapped text flag
         */
        hideoverlappedtext?: boolean;
        /**
         * label padding size in pixels
         */
        labelpadding?: number;
        /**
         * maximum label size (in device), text will be wrapped, if it is bigger than maximum label size
         */
        maximumlabelsize?: number;
        /**
         * Axis dimension to setup axis limits
         */
        dimension?: AxisMappingDimension | AxisMappingDimension.Options;
    };
    /**
     * axis title text or title object
     */
    type Title = {
        /**
         * axis title text
         */
        text?: string;
        /**
         * visibility
         */
        visible?: boolean;
        /**
         * offset
         */
        offset?: Dimension;
        /**
         * margin style
         */
        margin?: SpaceStyle | SpaceStyle.Options;
        /**
         * text style
         */
        textstyle?: TextStyle.Type;
        /**
         * alignment
         */
        alignment?: AnchorType;
        /**
         * enables/disables ellipsis in case if text is too long
         */
        showellipsis?: boolean;
    };
}
