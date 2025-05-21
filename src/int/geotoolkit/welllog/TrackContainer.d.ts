import { Group } from '@int/geotoolkit/scene/Group';
import { IUnitInfo } from '@int/geotoolkit/welllog/IUnitInfo';
import { Range } from '@int/geotoolkit/util/Range';
import { Rect } from '@int/geotoolkit/util/Rect';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * enum for scroll to depth location
 * @enum
 * @readonly
 */
export declare enum ScrollToLocation {
    /**
     * CENTER, set the scroll depth point at the center of the track container visible limits.
     */
    CENTER = "center",
    /**
     * TOP, set the scroll depth point at the top of the track container visible limits.
     */
    TOP = "top",
    /**
     * BOTTOM, set the scroll depth point at the bottom of the track container visible limits.
     */
    BOTTOM = "bottom",
    /**
     * VISIBLE, set the scroll depth point visible in the track container visible limits.
     */
    VISIBLE = "visible"
}
/**
 * This class implements a container for all kinds of tracks. Multiple tracks can be added to the container using addChild().
 * The trackcontainer will maintain coherent depth limits on the tracks it contains. It also offers convenience functions to manipulate the visible depth limits (scale, scroll, etc).
 * Its size relative to its parent can be defined using the setBounds() function.<br>
 * The trackcontainer also manages the units used in 'model space' (data) to 'device space' (screen). Units can be used along with the 'PPI' {@link @int/geotoolkit/util/UnitFactory~UnitFactory}.setPPI() to compute the actual display scale.
 */
export declare class TrackContainer extends Group implements IUnitInfo {
    constructor(options?: TrackContainer.Options);
    /**
     * Sets the same model depth range for all tracks
     *
     * @param range a new depth range for all tracks
     * @returns this
     */
    setDepthLimits(range: Range): this;
    /**
     * Sets the same depth limits for all tracks
     *
     * @param minDepth min depth for all tracks
     * @param maxDepth max depth for all tracks
     * @returns this
     */
    setDepthLimits(minDepth: number, maxDepth: number): this;
    /**
     * Returns depth range
     */
    getDepthLimits(): Range;
    /**
     * Scroll to depth, you also can specify a location of this depth in the track container,
     * for example if you want to move the depth point location at the bottom of the track put 'BOTTOM' for the location variable.
     * location support : 'center' 'top' 'bottom' and 'visible' cases.
     *
     * warning depth limits should be expanded in order to see it correctly
     *
     * @param [depth] depth in the track container
     * @param [location] location of this depth in the track container
     * @returns this
     */
    scrollToDepth(depth?: number, location?: ScrollToLocation): this;
    /**
     * Returns visible depth range
     */
    getVisibleDepthLimits(): Range;
    /**
     * Sets visible depth limits
     *
     * @param fromDepth visible starting depth t or the visible range to set
     * @param [toDepth] visible ending depth
     * @param [deviceBounds] device bounds of the container to fit
     * new visible depth limits
     * @returns this
     */
    setVisibleDepthLimits(fromDepth: number | Range, toDepth?: number, deviceBounds?: Rect): this;
    /**
     * Return unit of the measure to be used to display scale in the header
     */
    getScaleUnit(): AbstractUnit;
    /**
     * Sets unit of the measure to be used to display scale in the header
     *
     * @param unit a scale unit or string symbol
     * @returns this
     */
    setScaleUnit(unit: AbstractUnit | string): this;
    /**
     * Sets unit of the measure to be used for device
     *
     * @param unit unit of the device
     * @returns this
     */
    setDeviceUnit(unit: AbstractUnit | string): this;
    /**
     * Return a unit of the measure of device
     */
    getDeviceUnit(): AbstractUnit;
    /**
     * Sets a scale unit to be used in the header
     *
     * @param display device unit
     * @param scale scale unit
     */
    setScaleUnits(display: string | AbstractUnit, scale: string | AbstractUnit): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): TrackContainer.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: TrackContainer.Options): this;
}
export declare namespace TrackContainer {
    /**
     * options
     */
    type Options = Group.Options & {
        /**
         * a scale unit or string symbol
         */
        scaleunit?: AbstractUnit | string;
        /**
         * unit of the device
         */
        deviceunit?: AbstractUnit | string;
    };
    type OptionsOut = Group.OptionsOut & {
        /**
         * a scale unit or string symbol
         */
        scaleunit?: AbstractUnit | string;
        /**
         * unit of the device
         */
        deviceunit?: AbstractUnit | string;
    };
}
