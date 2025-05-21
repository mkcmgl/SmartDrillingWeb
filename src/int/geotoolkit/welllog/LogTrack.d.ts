/**
 * @module geotoolkit/welllog/LogTrack
 */
import { BorderStrategy } from '@int/geotoolkit/welllog/BorderStrategy';
import { TrackHighlightStrategy } from '@int/geotoolkit/welllog/TrackHighlightStrategy';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Border } from '@int/geotoolkit/scene/shapes/Border';
import { ITrack } from '@int/geotoolkit/welllog/ITrack';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { Node } from '@int/geotoolkit/scene/Node';
import { TrackContainer } from '@int/geotoolkit/welllog/TrackContainer';
import { IUnitInfo } from '@int/geotoolkit/welllog/IUnitInfo';
import { Range } from '@int/geotoolkit/util/Range';
import { LogBlock } from '@int/geotoolkit/welllog/LogBlock';
import type { Events as LayoutEvents } from '@int/geotoolkit/layout/Events';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import { Events as LogVisualEvents, LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { Layer } from '@int/geotoolkit/scene/Layer';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogTrackHeader } from './header/LogTrackHeader';
import type { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
/**
 * The LogTrack is a generic container of Well elements like logcurves, log-axis, log-images, etc.
 * It can be used for various purposes like DepthIndex, TimeIndex or a plain LogCurve container. <br>
 * For example, one could add {@link @int/geotoolkit/axis/Axis~Axis} to a log track to create an index-track, Or add a {@link @int/geotoolkit/welllog/LogLog10ValueGrid~LogLog10ValueGrid} to create a logarithmic display.<br>
 * Track it this is not linear or logarithmic, you can mix regular curve and logarithmic in linear track and logarithmic curve with regular in logarithmic track.<br>
 * <br>
 * Options in the constructor are used to manipulate other properties like border,bounds. A combination of tracks can be displayed by using {@link @int/geotoolkit/welllog/TrackContainer~TrackContainer}.<br>
 * To add a curve to the track simply use track.addChild(curve)<br>
 * The children are displayed in order you add it in to the track so if you add curve and then lithology, then lithology will be above curve. <br>
 * @example
 * // To change the order you can remove child and add it again or use:
 * track.changeChildOrder(curve, NodeOrder.Last); // Please see CompositeNode#changeChildOrder documentation
 *
 * @example
 * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
 * // to modify properties of the border using css.
 * const css = [
 * '.geotoolkit.welllog.LogTrack {',
 *           '   border-linestyle-color: red;',
 *           '   border-linestyle-width: 2;',
 *           '}',
 * ].join('\n');
 * track.setCss(new CssStyle({'css': css}));
 * @example
 * // This example shows how to reorganize children in a particular track.
 * import {from} from '@int/geotoolkit/selection/from';
 * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
 * import {NodeOrder} from '@int/geotoolkit/scene/CompositeNode';
 * from(linearTrack)
 *  .where( (node) => node instanceof LogCurve })
 *  .selectToArray()
 *  .forEach((logCurve) => {
 *        logCurve.getTrack().changeChildOrder(logCurve, NodeOrder.Last);
 *   });
 * widget.getTrackHeader(linearTrack).rebuild();
 */
export declare class LogTrack extends CompositeNode implements ITrack, ILayoutable {
    constructor(options?: LogTrack.Options);
    on<E extends keyof LogTrack.EventMap>(type: E, callback: (eventType: E, sender: this, args: LogTrack.EventMap[E]) => void): this;
    off<E extends keyof LogTrack.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LogTrack.EventMap[E]) => void): this;
    clone(): LogTrack;
    protected copyConstructor(src: LogTrack, deepCopy?: boolean): this;
    /**
     * Invalidate bounds
     * @param [bounds] if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     * @param [force] force invalidation
     * @returns this
     */
    invalidateParent(bounds?: Rect, force?: boolean): this;
    /**
     * Return parent track container or null
     */
    getTrackContainer(): TrackContainer | null;
    /**
     * Returns visible depth range
     */
    getVisibleDepthLimits(): Range;
    /**
     * Set track width and layout remains tracks
     * @param width a new track width
     * @returns this
     */
    setWidth(width: number): this;
    /**
     * Returns track width
     */
    getWidth(): number;
    /**
     * Returns an object that has getDeviceUnit and getScaleUnit functions
     */
    getUnitInfo(): IUnitInfo;
    /**
     * Sets the track's unit info object, which holds getDeviceUnit and getScaleUnit functions
     * @param unitInfo track's unit info - device unit and the scaled unit
     * @returns this
     */
    setUnitInfo(unitInfo: IUnitInfo): this;
    /**
     * Return an object where it is possible to specify the visibility of each border
     */
    getBorders(): Border.Visible;
    /**
     * return border visual
     * @returns border
     */
    getBorder(): Border;
    /**
     * set borders state
     * @param borders borders
     */
    setBorders(borders: Border.Visible): this;
    /**
     * Return border style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets border color
     * Returns this track
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return background color
     */
    getFillStyle(): FillStyle;
    /**
     * Sets background fill style
     * Returns this track
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Returns the track header if it exists
     */
    getHeader(): LogTrackHeader | null;
    /**
     * Returns the track footer if it exists
     */
    getFooter(): LogTrackHeader | null;
    /**
     * Render highlight background
     * @param context Rendering Context
     * @param [callback] callback to be called after fill highlight
     * @returns this
     */
    protected fillHighlight(context: RenderingContext, callback?: () => void): this;
    /**
     * Render highlight border
     * @param context Rendering Context
     * @param [callback] callback to be called after stroke highlight
     * @returns this
     */
    protected strokeHighlight(context: RenderingContext, callback?: () => void): this;
    /**
     * Render highlight shape
     * @param context Rendering Context
     * @param [callback] callback to be called after highlight renders
     * @returns this
     */
    protected renderHighlight(context: RenderingContext, callback?: () => void): this;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect): this;
    updateContentsTransform(): void;
    /**
     * Return true if the representation is flipped horizontally
     *
     * @returns horizontal flip
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     *
     * @param enable enable flip
     * @returns this
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Sets model depth range
     *
     * @param range a new depth range
     * @returns this
     */
    setDepthLimits(range: Range): this;
    /**
     * Sets model minimum and maximum depth
     *
     * @param minDepth minimum depth
     * @param maxDepth maximum depth
     * @returns this
     */
    setDepthLimits(minDepth: number, maxDepth: number): this;
    /**
     * Returns depth range
     */
    getDepthLimits(): Range;
    /**
     * Returns model limits
     */
    getModelLimits(): Rect;
    /**
     * Return log block
     */
    getBlock(): LogBlock;
    asNode(): Node;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): LogTrack.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogTrack.Options): this;
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
     * Invalidate layout
     * @param [propagate] propagate
     * @returns this
     */
    invalidateLayout(propagate?: boolean): this;
    /**
     * Return true if layout is invalid
     */
    isLayoutInvalidated(): boolean;
    /**
     * Set invalidation status
     * @param invalidated invalidated layout
     */
    protected setLayoutInvalidated(invalidated: boolean): void;
    notify<E extends keyof LogTrack.EventMap>(event: E, source: LogTrack, args?: LogTrack.EventMap[E]): this;
    /**
     * Create a new layer, which always has coordinates from 0 to 1 in horizontal direction
     * @param name name of the layer
     */
    static createLogOverlay(name: string): Layer;
}
export declare namespace LogTrack {
    type Options = CompositeNode.Options & {
        /**
         * bounds of the visual
         */
        bounds?: Rect;
        /**
         * model limits
         */
        limits?: Rect;
        /**
         * log block
         */
        logblock?: LogBlock;
        /**
         * strategy on how to display the border of the track
         */
        borderstrategy?: BorderStrategy;
        /**
         * outline of the track
         */
        border?: Border.Options | Border;
        /**
         * track highlight strategy
         */
        highlightstrategy?: TrackHighlightStrategy;
        /**
         * highlight outline of the track
         */
        highlight?: Border.Options | Border;
        /**
         * background color fill style
         */
        backgroundcolor?: FillStyle.Type;
        /**
         * line style or options
         */
        linestyle?: LineStyle.Type;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = CompositeNode.OptionsOut & {
        /**
         * bounds of the node in the parent coordinates
         */
        bounds: Rect;
        /**
         * model limits
         */
        limits: Rect;
        /**
         * log block
         */
        logblock: LogBlock;
        /**
         * border rendering strategy
         */
        borderstrategy: BorderStrategy;
        /**
         * border
         */
        border: Border;
        /**
         * highlight rendering strategy
         */
        highlightstrategy: TrackHighlightStrategy;
        /**
         * highlight shape options
         */
        highlight: Border | null;
        /**
         * background color fill style
         */
        backgroundcolor: FillStyle;
        /**
         * line style
         */
        linestyle: LineStyle;
    };
    type EventMap = CompositeNode.EventMap & {
        [LogVisualEvents.HeaderSet]: {
            name: string;
            visual: LogAbstractVisual;
            header: LogVisualHeader;
        };
        [LayoutEvents.LayoutInvalidated]: LogTrack;
    };
}
