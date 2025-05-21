import { TrackType } from '@int/geotoolkit/welllog/TrackType';
import { TrackFactory } from '@int/geotoolkit/welllog/TrackFactory';
import { TrackContainer } from '@int/geotoolkit/welllog/TrackContainer';
import { DataBindingRegistry } from '@int/geotoolkit/data/DataBindingRegistry';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { Range } from '@int/geotoolkit/util/Range';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import { Node, StateChanges } from '@int/geotoolkit/scene/Node';
import { LogHeaderContainer } from '@int/geotoolkit/welllog/widgets/visuals/LogHeaderContainer';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { DataBinding } from '@int/geotoolkit/data/DataBinding';
import type { DataSource } from '@int/geotoolkit/data/DataSource';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { Registry as _Registry } from '@int/geotoolkit/persistence/Registry';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Point } from '@int/geotoolkit/util/Point';
import type { ILineDecoration } from '@int/geotoolkit/attributes/ILineDecoration';
export declare class LogTrackContainer extends TrackContainer {
    constructor(options?: LogTrackContainer.Options | TrackFactory);
    /**
     * Return the data binding
     */
    getDataBinding(): DataBinding | DataBindingRegistry;
    /**
     * Sets the data binding
     * @param binding data binding
     * @param [silent] silent mode to forbid
     * @returns this
     */
    setDataBinding(binding: DataBinding | DataBindingRegistry, silent?: boolean): this;
    /**
     * Enumerate each visual in track container
     * @param callback callback method
     */
    forEachVisual(callback: (item: Node) => void): void;
    /**
     * Sets a new data model
     * @param data log data
     * @returns this
     */
    setData(data: DataSource | AbstractDataTable): this;
    /**
     * returns data source
     */
    getData(): DataSource | AbstractDataTable;
    /**
     * Update model limits
     */
    updateModelLimits(): void;
    /**
     * Sets model limits
     *
     * @param rect a new model limits
     * @returns this
     */
    setModelLimits(rect: Rect): this;
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
     * Render children
     * Overrides method from CompositeNode
     * @param context Rendering Context
     */
    protected renderChildren(context: RenderingContext): void;
    /**
     * Sets node filter for selection tool
     * @param nodeFilter filter that allows to filter selected nodes.
     * @returns this
     */
    setNodeFilter(nodeFilter: (item: Node) => boolean): this;
    /**
     * Set indent between tracks
     * @param indent indent between tracks
     * @returns this
     */
    setIndent(indent: number): this;
    /**
     * Return indent between tracks
     */
    getIndent(): number;
    /**
     * Add layer or layer collection to container
     * @param layer layer to be added
     * @returns this
     */
    addLayer(layer: CompositeNode | CompositeNode[]): this;
    /**
     * Remove layer from container
     * @param layer layer to be removed
     * @returns this
     */
    removeLayer(layer: CompositeNode): this;
    /**
     * Returns amount of layers
     */
    getLayersCount(): number;
    /**
     * Return layer at specified index
     * @param index index at which to get the layer for
     * @returns track
     */
    getLayerAt(index: number): CompositeNode;
    /**
     * Insert a track
     *
     * @param index index
     * @param track track to insert
     * @example
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * widget.addTrack(TrackType.LinearTrack);
     * @example
     * // index tracks has 'INDEX_TRACK' css class defined, so it can be used to modify style with css:
     * widget.getTrackContainer().setCss('*[cssclass="INDEX_TRACK"] { visible: false; }');
     * // or differ it from another tracks:
     * if (track.getCssClass() === 'INDEX_TRACK') {
     *     // do smth
     * }
     */
    insertTrack(index: number, track: LogTrackContainer.InsertTrack): LogTrack;
    /**
     * Add track to container
     * @param track track to be added
     */
    addTrack(track: LogTrackContainer.InsertTrack): this;
    /**
     * Remove track from container
     * @param track track to be removed
     * @param [disposeTrack] automatically dispose track. If it is true then method dispose is called for track.
     */
    removeTrack(track: LogTrack, disposeTrack?: boolean): this;
    /**
     * Returns amount of tracks
     */
    getTracksCount(): number;
    /**
     * Return track at specified index
     * @param index index at which to get the track for
     * @returns track
     */
    getTrackAt(index: number): LogTrack;
    /**
     * return index of track
     * @param track index of track
     * @returns index of the track
     */
    getTrackIndex(track: LogTrack): number;
    notify(event: string, source: Node, args?: any): this;
    /**
     * Set track width and layout remains tracks
     * @param width track width
     * @param track current track
     */
    setTrackWidth(width: number, track: LogTrack | LogTrack[]): this;
    /**
     * Returns the minimum width of a track
     * @param [track] track to get minimum width
     */
    getMinWidth(track?: LogTrack): number | string | null;
    /**
     * Returns the maximum width of a track
     * @param [track] track to get maximum width
     */
    getMaxWidth(track?: LogTrack): number | string | null;
    /**
     * Find nearest track at specified `{number}` x-coordinate
     * @param x x coordinate to get the track at
     * @param gap gap
     * @param [tracks] tracks
     */
    static getTrackAtPosition(x: number, gap: number, tracks?: LogTrack[]): LogTrack | {
        left?: LogTrack;
        right?: LogTrack;
    };
    /**
     * Load template
     * @param template template to be applied to the widget
     * @param [registry] registry
     * @param [headerContainer] header container
     */
    loadTemplate(template: string, registry?: _Registry, headerContainer?: LogHeaderContainer): void;
    /**
     * Save template
     * @param [registry] registry
     * @returns return template as a string
     */
    saveTemplate(registry?: _Registry): string;
    /**
     * Find nearest track at specified `{number}` x-coordinate
     * @param x x coordinate to get the track at
     * @param gap gap
     */
    getTrackAtPosition(x: number, gap: number): LogTrack | {
        left?: LogTrack;
        right?: LogTrack;
    };
    /**
     * Update state.
     * @param [regions] optional array to return invalid rectangles
     * @param [changes] optional parameter to specify a reason of changes
     * @returns this
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogTrackContainer.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogTrackContainer.Options): this;
    /**
     * Sets track factory
     * @param trackFactory track factory
     * @returns this
     */
    setTrackFactory(trackFactory: TrackFactory): this;
    /**
     * Returns track factory
     * @returns track factory
     */
    getTrackFactory(): TrackFactory;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of selected nodes
     */
    hitTest(area: Rect | Point, radius?: number): LogTrackContainer.CollapsedInterval[] | null;
}
export declare namespace LogTrackContainer {
    /**
     * track factory or properties object
     */
    type Options = TrackContainer.Options & {
        /**
         * track factory
         */
        trackfactory?: TrackFactory;
        /**
         * indent indent between tracks
         */
        indent?: number;
        /**
         * tracks
         */
        tracks?: LogTrack[];
    };
    type CollapsedInterval = {
        /**
         * flag if interval is collapsed
         */
        collapsed: boolean;
        /**
         * interval depth range
         */
        range: Range;
        /**
         * interval index
         */
        index?: number;
    };
    /**
     * collapsed marker styles
     */
    type CollapsedIntervalMarker = {
        /**
         * marker styles for collapsed mode
         */
        collapsed?: {
            /**
             * marker line style
             */
            line?: {
                /**
                 * marker line color
                 */
                color?: string;
                /**
                 * marker line width
                 */
                width?: number;
                /**
                 * marker line decoration style
                 */
                decoration?: ILineDecoration;
            };
            /**
             * marker symbol shape
             */
            symbol?: {
                /**
                 * marker symbol shape size
                 */
                size?: number;
                /**
                 * marker symbol shape painter
                 */
                painter?: SymbolShape.Painter;
                /**
                 * marker symbol shape linestyle
                 */
                linestyle?: LineStyle.Type;
                /**
                 * marker symbol shape fillstyle
                 */
                fillstyle?: FillStyle.Type;
            };
        };
        /**
         * marker styles for uncollapsed mode
         */
        uncollapsed?: {
            /**
             * marker line style
             */
            line?: {
                /**
                 * marker line color
                 */
                color?: string;
                /**
                 * marker line width
                 */
                width?: number;
                /**
                 * marker line decoration style
                 */
                decoration?: ILineDecoration;
            };
            /**
             * marker symbol shape
             */
            symbol?: {
                /**
                 * marker symbol shape size
                 */
                size?: number;
                /**
                 * marker symbol shape painter
                 */
                painter?: SymbolShape.Painter;
                /**
                 * marker symbol shape linestyle
                 */
                linestyle?: LineStyle.Type;
                /**
                 * marker symbol shape fillstyle
                 */
                fillstyle?: FillStyle.Type;
            };
        };
    };
    /**
     * track to insert
     */
    type InsertTrack = TrackFactory.TrackOptions & {
        /**
         * track type to insert
         */
        type?: TrackType;
    } | TrackType | LogTrack | LogTrack[];
    /**
     * properties object
     */
    type OptionsOut = TrackContainer.OptionsOut & {
        /**
         * track factory
         */
        trackfactory: TrackFactory;
        /**
         * indent indent between tracks
         */
        indent: number;
        /**
         * tracks
         */
        tracks: LogTrack[];
    };
}
