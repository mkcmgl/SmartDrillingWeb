import { Group } from '@int/geotoolkit/scene/Group';
import { IBaseWellTrack } from '@int/geotoolkit/welllog/multiwell/IBaseWellTrack';
import { Range } from '@int/geotoolkit/util/Range';
import { Events as WellEvents } from '@int/geotoolkit/welllog/multiwell/Events';
import { ITrack } from '@int/geotoolkit/welllog/ITrack';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { Layer } from '@int/geotoolkit/scene/Layer';
import type { DataBinding } from '@int/geotoolkit/data/DataBinding';
import type { DataSource } from '@int/geotoolkit/data/DataSource';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
/**
 * Define abstract well track
 */
export declare abstract class AbstractWellTrack extends Group implements ITrack, IBaseWellTrack {
    /**
     * Creates AbstractWellTrack
     * @param [options] addition options
     */
    protected constructor(options?: AbstractWellTrack.Options);
    on<E extends keyof AbstractWellTrack.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractWellTrack.EventMap[E]) => void): this;
    off<E extends keyof AbstractWellTrack.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractWellTrack.EventMap[E]) => void): this;
    notify<E extends keyof AbstractWellTrack.EventMap>(type: E, source: AbstractWellTrack, args?: AbstractWellTrack.EventMap[E]): this;
    protected copyConstructor(src: AbstractWellTrack, deepCopy?: boolean): this;
    /**
     * Sets well title
     * @param title well title
     * @returns this
     */
    setTitle(title: string): this;
    /**
     * Return title
     * @returns well title
     */
    getTitle(): string;
    /**
     * Sets visible depth limits
     * @param fromIndex depth range
     * @param [toIndex] option to fit to container visible limits
     * @example
     * // Set visible limits to fit visible area of container
     * well.setVisibleDepthLimits(limits, true);
     */
    setVisibleDepthLimits(fromIndex: Range, toIndex?: boolean): this;
    /**
     * Sets visible depth limits
     * By default it tries to fit depth based on the current visible limits of the well. If container limits
     * should be used then specify the last parameter to true
     * @param fromIndex start depth
     * @param toIndex end range
     * @param [fitHeight] option to fit to container visible limits
     */
    setVisibleDepthLimits(fromIndex: number, toIndex: number, fitHeight?: boolean): this;
    /**
     * Sets a depth scale factor.
     * @throws Will throw an error if the current scale is NaN
     * @param scale A number of depth units in device unit.
     * @param [scaleUnit] scale unit of the display. if it is not specified then it takes from track container
     * @param [deviceUnit] device unit of the display. if it is not specified then it takes from track container
     * @returns this
     * @example
     * //  To set depth scale range as a ratio, you can use units as follows
     * const unitFactory = UnitFactory.getInstance();
     * well.setDepthScale(30, unitFactory.getUnit("feet"), unitFactory.getUnit("inch")); //1 inch == 30 feet
     */
    setDepthScale(scale: number, scaleUnit?: AbstractUnit, deviceUnit?: AbstractUnit): this;
    asNode(): Node;
    /**
     * Converts depth to position inside of the bounds
     * @param depth depth
     * @returns vertical position inside of the bounds
     */
    protected convertDepthToBounds(depth: number): number;
    /**
     * Return a depth range, which is visible now
     */
    abstract getVisibleDepthLimits(): Range;
    /**
     * Return track manipulator layer for internal use only
     */
    abstract getManipulatorLayer(): CompositeNode;
    /**
     * Return a layer to display markers
     */
    abstract getMarkerLayer(): Layer;
    /**
     * Return scale to device. How many scale units in one device unit.
     * @param [scaleUnit] scale unit of the display. if it is not specified then it takes from track container
     * @param [deviceUnit] device unit of the display. if it is not specified then it takes from track container
     * @returns a index scale to device or NaN if scale if not available
     * @example
     * //  to get the current depth scale of well.
     * const uf = UnitFactory.getInstance();
     * well.getDepthScale(uf.getUnit("cm"), uf.getUnit("cm"));
     */
    abstract getDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Returns depth or time range
     */
    abstract getDepthLimits(): Range;
    /**
     * Return the data binding
     */
    abstract getDataBinding(): DataBinding;
    /**
     * Gets a data model
     */
    abstract getData(): DataSource | AbstractDataTable;
}
export declare namespace AbstractWellTrack {
    /**
     * options
     */
    type Options = Group.Options & {
        /**
         * well track title
         */
        title?: string;
    };
    type EventMap = Group.EventMap & {
        [WellEvents.DepthScaleChanged]: void;
    };
}
