import { Transformation } from '@int/geotoolkit/util/Transformation';
import { ContourLabelsDirection } from '@int/geotoolkit/contour/processor/ContourLabelsDirection';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { ContourEvent } from '@int/geotoolkit/contour/events/ContourEvent';
import { EventType } from '@int/geotoolkit/contour/events/ContourEvent';
import { ContourFaultList } from '@int/geotoolkit/contour/faults/ContourFaultList';
import { ContourLineVisual } from '@int/geotoolkit/contour/visuals/ContourLineVisual';
import { ContourFillVisual } from '@int/geotoolkit/contour/visuals/ContourFillVisual';
import { ContourFaultVisual } from '@int/geotoolkit/contour/visuals/ContourFaultVisual';
import { ContourBorderVisual } from '@int/geotoolkit/contour/visuals/ContourBorderVisual';
import { AbstractVisual } from '@int/geotoolkit/contour/visuals/AbstractVisual';
import type { AbstractProjection } from '@int/geotoolkit/contour/projections/AbstractProjection';
import type { ContourAbstractGrid } from '@int/geotoolkit/contour/grid/ContourAbstractGrid';
import type { AbstractContourDataSource } from '@int/geotoolkit/contour/datasource/AbstractContourDataSource';
import type { ContourScale } from '@int/geotoolkit/contour/scale/ContourScale';
import type { VisualEvent } from '@int/geotoolkit/contour/events/VisualEvent';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
/**
 * The VisualOrder enumeration is used to define the order a new visual should be inserted into ContourShape
 * @enum
 * @readonly
 */
export declare enum VisualOrder {
    /**
     * This visual should be inserted default another visual
     */
    DEFAULT = "Default",
    /**
     * This visual should be inserted above another visual
     */
    ABOVE = "Above",
    /**
     * This visual should be inserted below another visual
     */
    BELOW = "Below",
    /**
     * This visual should be inserted at the front (i.e. on top of all the other visuals)
     */
    FRONT = "Front",
    /**
     * This visual should be inserted at the back (i.e. underneath all the other visuals)
     */
    BACK = "Back"
}
/**
 * The IsoLineSmoothingType enumeration is used to define which smoothing algorithm
 * to use when using WASM implementation of Contour
 * @enum
 * @readonly
 */
export declare enum IsoLineSmoothingType {
    /**
     * No smoothing will be applied
     */
    None = "None",
    /**
     * Smoothing will be done using WASM implementation
     */
    Fast = "Fast",
    /**
     * Smoothing will be done using js implementation based on splines
     */
    Strong = "Strong"
}
/**
 * The contour shape acts as a container for all the contour visuals.
 * It may receive events from the visuals and may send its own events to the listeners.
 */
export declare class ContourShape extends Shape {
    constructor(options?: ContourShape.Options | LineStyle | string);
    on<E extends keyof ContourShape.EventMap>(type: E, callback: (eventType: E, sender: this, args: ContourShape.EventMap[E]) => void): this;
    off<E extends keyof ContourShape.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ContourShape.EventMap[E]) => void): this;
    notify<E extends keyof ContourShape.EventMap>(type: E, source: ContourShape, args?: ContourShape.EventMap[E]): this;
    /**
     * Get all fill visuals
     */
    getVisuals(visualClassName: 'geotoolkit.contour.visuals.ContourFillVisual'): ContourFillVisual[];
    /**
     * Get all border visuals
     */
    getVisuals(visualClassName: 'geotoolkit.contour.visuals.ContourBorderVisual'): ContourBorderVisual[];
    /**
     * Get all fault visuals
     */
    getVisuals(visualClassName: 'geotoolkit.contour.visuals.ContourFaultVisual'): ContourFaultVisual[];
    /**
     * Get all isoline visuals
     */
    getVisuals(visualClassName: 'geotoolkit.contour.visuals.ContourLineVisual'): ContourLineVisual[];
    /**
     * Get all visuals
     */
    getVisuals(): AbstractVisual[];
    /**
     * Gets the visuals by theirs classname
     * @param [visualClassName] Class name of visual
     * @returns visuals The visuals.
     */
    getVisuals(visualClassName: string): AbstractVisual[];
    /**
     * Sets the visuals.
     * @param visuals The visuals.
     * @returns this
     */
    setVisuals(visuals: AbstractVisual[]): this;
    /**
     * Gets all the contour listeners.
     * @returns listeners The contour listeners.
     */
    getListeners(): AbstractVisual[];
    /**
     * Sets all the contour listeners.
     * @param listeners The contour listeners.
     * @returns this
     */
    setListeners(listeners: AbstractVisual[]): this;
    /**
     * Gets the max label width.
     * @returns maxLabelWidth The max label width.
     */
    getMaxLabelWidth(): number;
    /**
     * Sets the max label width.
     * @param maxLabelWidth The max label width.
     * @returns this
     */
    setMaxLabelWidth(maxLabelWidth: number): this;
    /**
     * Registers the specified contour listener to receive events from this contour shape.
     * @deprecated since 4.0, use .on() instead
     * @param contourListener The contour listener
     */
    addContourListener(contourListener: AbstractVisual): void;
    /**
     * Removes the specified contour listener from receiving events from this contour shape.
     * @deprecated since 4.0, use .off() instead
     * @param contourListener The contour listener
     */
    removeContourListener(contourListener: AbstractVisual): void;
    /**
     * Notifies the registered listeners of an event.
     * @deprecated since 4.0, use .notify() instead
     * @param args The event to pass to the listeners.
     */
    notifyListeners(args: ContourEvent): void;
    /**
     * Gets the listeners notification flag
     * @deprecated since 4.0, use .isSilent() instead
     * @returns notify The boolean notification flag.
     */
    getNotify(): boolean;
    /**
     * Sets the listeners notification flag
     * @deprecated since 4.0, use .setSilent() instead
     * @param notify The boolean notification flag.
     * @returns this
     */
    setNotify(notify: boolean): this;
    /**
     * Gets the shape projection that is to be used when drawing this shape.
     * @returns projection The shape projection.
     */
    getShapeProjection(): AbstractProjection;
    /**
     * Sets the shape projection that is to be used when drawing this shape.
     * Set to null (the default) if you do not wish to use a projection
     * @param projection The shape projection.
     * @returns this
     */
    setShapeProjection(projection: AbstractProjection | null): this;
    /**
     * Gets the contour grid. (Object that stores grid data for this contour shape)
     * @returns grid The contour grid.
     */
    getGrid(): ContourAbstractGrid;
    /**
     * Sets the contour grid.(Object that stores grid data for this contour shape).
     * This will throw an exception if grid is set to null.
     * @throws Error if grid is null
     * @param grid The contour grid.
     * @returns this
     */
    setGrid(grid: ContourAbstractGrid): this;
    /**
     * Gets the data source which provides grids to the contour.
     * @returns dataSource The contour data source.
     */
    getDataSource(): AbstractContourDataSource | null;
    /**
     * Sets the data source which provides grids to the contour.
     * @param dataSource The contour data source.
     * @returns this
     */
    setDataSource(dataSource: AbstractContourDataSource): this;
    /**
     * Gets the grid to model transform
     * @returns gridToModel The grid to model transformation.
     */
    getGridToModel(): Transformation;
    /**
     * Sets the grid to model transform
     * Throws exception when it is set to null.
     * @throws Error if param is null
     * @param gridToModel The grid to model Transformation.
     * @returns this
     */
    setGridToModel(gridToModel: Transformation): this;
    /**
     * Gets the contour scale.
     * This is used to determine the data values for the isolines in this Contour Shape
     * @returns scale The contour scale.
     */
    getScale(): ContourScale;
    /**
     * Sets the contour scale
     * This is used to determine the data values for the isolines in this Contour Shape
     * @param scale The contour scale.
     * @returns this
     */
    setScale(scale: ContourScale): this;
    /**
     * Gets the faults.
     * @returns faults Object that stores the faults for this Contour Shape.
     */
    getFaultsList(): ContourFaultList;
    /**
     * Sets the faults by assigning the Faults property to a new ContourFaultList object storing the faults.
     * If you attempt to assign the Faults property a null value, this will be translated into an empty ContourFaultList.
     * @param faults Object that stores the faults for this Contour Shape.
     * @returns this
     */
    setFaultsList(faults: ContourFaultList): this;
    /**
     * Sets skipping of near points when rendering isolines and isofills (to speed up process).
     * @param skipNearPoints If true then point skipping will be enabled.
     * @returns this
     */
    setSkipNearPoints(skipNearPoints: boolean): this;
    /**
     * Gets the intersecting labels suppression status. Default is false.
     * This status indicates if contour will render labels without intersecting each other. Default is FALSE.
     * The status is true if labels don't intersect each other.
     * @returns suppress The flag indicating whether intersecting labels are suppressed.
     */
    getSuppressIntersectingLabels(): boolean;
    /**
     * Sets the intersecting labels suppression status.
     * This status indicates if contour will render labels without intersecting each other. Default is FALSE.
     * The status is true if labels don't intersect each other.
     * @param suppress The flag indicating whether intersecting labels are suppressed.
     * @returns this
     */
    setSuppressIntersectingLabels(suppress: boolean): this;
    /**
     * Gets the labels direction.
     * @returns direction The labels direction.
     */
    getLabelsDirection(): ContourLabelsDirection;
    /**
     * Sets the labels direction.
     * @param direction The labels direction.
     * @returns this
     */
    setLabelsDirection(direction: ContourLabelsDirection): this;
    /**
     * Gets the flag for grid data checking.
     * DEFAULT: IgnoreErroneousData=false
     * @returns ignore Flag indicating whether grid data changing should be enabled.
     */
    getIgnoreErroneousData(): boolean;
    /**
     * Sets the flag for grid data checking.
     * It is recommended to set value to FALSE always.
     * DEFAULT: IgnoreErroneousData=false
     * @param [ignore] Flag indicating whether grid data changing should be enabled.
     * @returns this
     */
    setIgnoreErroneousData(ignore?: boolean): this;
    /**
     * Gets a flag indicating if isolines are smoothed.
     * @returns smoothed Flag indicating whether isolines are smoothed.
     */
    getSmoothingIsolines(): boolean;
    /**
     * Returns smoothing type
     *
     * @returns smoothingType smoothing type
     */
    getSmoothingIsolinesType(): IsoLineSmoothingType;
    /**
     * Sets a flag for indicating if isolines are smoothed.
     * @param smoothing Flag indicating whether isolines are smoothed.
     * @returns this
     */
    setSmoothingIsolines(smoothing: boolean | IsoLineSmoothingType): this;
    /**
     * Gets the smoothLabels flag.
     * @returns smoothLabels The smoothLabels flag.
     */
    getSmoothingLabels(): boolean;
    /**
     * Sets the smoothLabels flag.
     * @param smoothLabels The smoothLabels flag.
     * @returns this
     */
    setSmoothingLabels(smoothLabels: boolean): this;
    /**
     * Gets the fault point comparison precision (measured in grid cells)
     * @returns precision The fault point precision.
     */
    getFaultPointPrecision(): number;
    /**
     * Sets the fault point comparison precision (measured in grid cells)
     * @param precision The fault point precision.
     * @returns this
     */
    setFaultPointPrecision(precision: number): this;
    /**
     * Gets the first visible scale level.
     * @returns minLevel The first visible scale level.
     */
    getMinVisibleLevel(): number;
    /**
     * Sets the first visible scale level.
     * @param minLevel The first visible scale level.
     * @returns this
     */
    setMinVisibleLevel(minLevel: number): this;
    /**
     * Gets the last visible scale level.
     * @returns maxLevel The last visible scale level.
     */
    getMaxVisibleLevel(): number;
    /**
     * Sets the last visible scale level.
     * @param maxLevel The last visible scale level.
     * @returns this
     */
    setMaxVisibleLevel(maxLevel: number): this;
    /**
     * Sets the bounding box for the contour shape, in non-projected model space.
     * @param bbox Specifies the new bounding box.
     * @returns this
     */
    setBoundingBox(bbox: Rect): this;
    /**
     * Gets the non-projected bounding box.
     * @param tr The transformation from model to device space.
     * @returns bbox The non-projected bounding box of the contour shape.
     */
    getNonProjectedBoundingBox(tr: Transformation): Rect;
    /**
     * Add a visual to this contour shape. It may be inserted at the front or the back.
     * If there is no reference visual then valid order parameters include CG_O_FRONT and CG_O_BACK.
     * If there is a reference visual then value order parameters include CG_O_ABOVE and CG_O_BELOW.
     * Throws an exception for invalid order parameters and for null visual/refVisual.
     * @throws Error if param is null
     * @param visual The visual to add to this shape.
     * @param order The order in which to add the visual.
     * @param [refVisual] The reference visual.
     */
    addVisual(visual: AbstractVisual, order: VisualOrder, refVisual?: AbstractVisual): void;
    /**
     * Remove the specified visual from this contour shape.
     * @throws Error if param is null
     * @param visual The visual that is to be removed.
     */
    removeVisual(visual: AbstractVisual): void;
    /**
     * Updates the line reservations.
     * This is called when something happens which may affect them.
     * E.g. the contour scale changes, a visual's index step changes
     */
    updateLineReservation(): void;
    /**
     * This method is called when any of the visuals containing this contour shape are invalidated.
     * In response, this calls the AbstractShape's 'invalidateShape' method, initiating repainting.
     * @deprecated since 4.0
     * @param args The event from the visual
     */
    visualInvalidated(args: VisualEvent): void;
    /**
     * Gets the bounding box of this contour shape.
     * If projection has been set, then the projected bounding box is returned.
     * @returns bbox The bounding box of the contour shape.
     */
    getBoundingBox(): Rect;
    /**
     * Return bounds
     * @returns bounds
     */
    getBounds(): Rect;
    render(renderingContext: RenderingContext): void;
    /**
     * Converts the model box to the projection box and returns it.
     * @param modelBox The model box.
     * @param reverse True if reverse projection is requested.
     * @returns modelBox
     */
    getProjectionBox(modelBox: Rect, reverse?: boolean): Rect;
    /**
     * Gets first ContourLineVisual of visuals
     * @returns [visual] First ContourIsolineVisual of visuals
     */
    getIsoline(): ContourLineVisual;
    /**
     * Gets first ContourFillVisual of visuals
     * @returns [visual] First ContourFillVisual of visuals
     */
    getIsofill(): ContourFillVisual;
    /**
     * Gets first ContourFaultVisual of visuals
     * @returns [visual] First ContourFaultVisual of visuals
     */
    getFault(): ContourFaultVisual;
    /**
     * Gets first ContourBorderVisual of visuals
     * @returns [visual] First ContourBorderVisual of visuals
     */
    getBorder(): ContourBorderVisual;
    /**
     * Gets all the properties pertaining to this object
     * @returns Contour shape properties
     */
    getProperties(): ContourShape.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: ContourShape.Options): this;
}
export declare namespace ContourShape {
    /**
     * An object containing the properties to set
     */
    type Options = Shape.Options & {
        /**
         * Shape's visuals
         */
        visuals?: AbstractVisual[];
        /**
         * Shape projection that is to be used when drawing this shape
         */
        shapeprojection?: AbstractProjection | null;
        /**
         * Contour grid
         */
        grid?: ContourAbstractGrid;
        /**
         * Contour data source
         */
        datasource?: AbstractContourDataSource | null;
        /**
         * The grid to model transformation
         */
        gridtomodel?: Transformation;
        /**
         * The contour scale
         */
        scale?: ContourScale;
        /**
         * Object that stores the faults for this Contour Shape
         */
        faultslist?: ContourFaultList;
        /**
         * The max label width
         */
        maxlabelwidth?: number;
        /**
         * The flag indicating whether intersecting labels are suppressed
         */
        suppressintersectinglabels?: boolean;
        /**
         * The labels direction
         */
        labelsdirection?: ContourLabelsDirection;
        /**
         * Flag indicating whether grid data changing should be enabled
         */
        ignoreerroneousdata?: boolean;
        /**
         * Flag indicating whether isolines are smoothed
         */
        smoothingisolines?: boolean;
        /**
         * Flag indicating whether labels are smoothed
         */
        smoothinglabels?: boolean;
        /**
         * Fault point comparison precision (measured in grid cells)
         */
        faultpointprecision?: number;
        /**
         * The first visible scale level
         */
        minvisiblelevel?: number;
        /**
         * The last visible scale level
         */
        maxvisiblelevel?: number;
        /**
         * Isofill visual properties or new visual
         */
        isofill?: ContourFillVisual | ContourFillVisual.Options;
        /**
         * Isoline visual properties or new visual
         */
        isoline?: ContourLineVisual | ContourLineVisual.Options;
        /**
         * Border visual properties or new visual
         */
        border?: ContourBorderVisual | ContourBorderVisual.Options;
        /**
         * Fault visual properties or new visual
         */
        fault?: ContourFaultVisual | ContourFaultVisual.Options;
    };
    /**
     * Contour shape properties
     */
    type OptionsOut = Shape.OptionsOut & {
        /**
         * Shape's visuals
         */
        visuals?: AbstractVisual[];
        /**
         * Shape projection that is to be used when drawing this shape
         */
        shapeprojection?: AbstractProjection | null;
        /**
         * Contour grid
         */
        grid?: ContourAbstractGrid;
        /**
         * Contour data source
         */
        datasource?: AbstractContourDataSource | null;
        /**
         * The grid to model transformation
         */
        gridtomodel?: Transformation;
        /**
         * The contour scale
         */
        scale?: ContourScale;
        /**
         * Object that stores the faults for this Contour Shape
         */
        faultslist?: ContourFaultList;
        /**
         * The max label width
         */
        maxlabelwidth?: number;
        /**
         * The flag indicating whether intersecting labels are suppressed
         */
        suppressintersectinglabels?: boolean;
        /**
         * The labels direction
         */
        labelsdirection?: ContourLabelsDirection;
        /**
         * Flag indicating whether grid data changing should be enabled
         */
        ignoreerroneousdata?: boolean;
        /**
         * Flag indicating whether isolines are smoothed
         */
        smoothingisolines?: boolean;
        /**
         * Flag indicating whether labels are smoothed
         */
        smoothinglabels?: boolean;
        /**
         * Fault point comparison precision (measured in grid cells)
         */
        faultpointprecision?: number;
        /**
         * The first visible scale level
         */
        minvisiblelevel?: number;
        /**
         * The last visible scale level
         */
        maxvisiblelevel?: number;
        /**
         * First ContourFillVisual of visuals
         */
        isofill?: ContourFillVisual;
        /**
         * First ContourLineVisual of visuals
         */
        isoline?: ContourLineVisual;
        /**
         * First ContourBorderVisual of visuals
         */
        border?: ContourBorderVisual;
        /**
         * First ContourFaultVisual of visuals
         */
        fault?: ContourFaultVisual;
    };
    type EventMap = AbstractNode.EventMap & {
        [EventType.PROJECTION_CHANGED]: AbstractProjection;
        [EventType.GRID_CHANGED]: ContourAbstractGrid;
        [EventType.BBOX_CHANGED]: Rect;
        [EventType.SCALE_CHANGED]: ContourScale;
        [EventType.FAULTS_CHANGED]: ContourFaultList;
        [EventType.VISUAL_ADDED]: AbstractVisual;
        [EventType.VISUAL_REMOVED]: AbstractVisual;
    };
}
