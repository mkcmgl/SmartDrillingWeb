import { Rect } from '@int/geotoolkit/util/Rect';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Regions } from '@int/geotoolkit/gauges/layout/Regions';
/**
 * Implements a region which is the main component in the process of layouting the gauge elements. A region
 * is an abstract rectangle which defines some area withing the gauge bounds and can contain any part of the gauge.
 * By default, gauge is divided into 9 regions, but not limited to that. Custom regions can be added. Since regions
 * are an abstract object, no fill style and/or linestyle can be applied to them. Bounds of a region are calculated
 * and set by the gauge, thus, setting bounds from an application will be overridden.
 */
export declare class Region {
    constructor(options?: Region.Options);
    /**
     * Get a clone of this object
     * @returns clone
     */
    clone(): Region;
    /**
     * Gets properties pertaining to this object
     * @returns properties
     */
    getProperties(): Region.OptionsOut;
    /**
     * Sets properties pertaining to this object
     * @param params properties
     */
    setProperties(params?: Region.Options): this;
    /**
     * Returns bounds of the region
     */
    getBounds(): Rect;
    /**
     * Sets bounds for this region
     * @param bounds New bounds
     */
    setBounds(bounds: Rect): this;
    /**
     * Sets Width property of region
     * @param w New Width to set
     */
    setWidth(w: number): this;
    /**
     * Sets Height property of region
     * @param h New Height to set
     */
    setHeight(h: number): this;
    /**
     * Returns Width property of region
     */
    getWidth(): number;
    /**
     * Returns Height property of region
     */
    getHeight(): number;
    /**
     * Sets X property of region
     * @param x New X to set
     */
    setX(x: number): this;
    /**
     * Sets Y property of region
     * @param y New Y to set
     */
    setY(y: number): this;
    /**
     * Gets Line Style of this region
     */
    getLineStyle(): LineStyle;
    /**
     * Gets Fill Style of this region
     */
    getFillStyle(): FillStyle;
    /**
     * Gets the parent where this region is rendered
     */
    getParent(): string | Regions;
    /**
     * Sets the name of region relative to which this region is calculated
     * @param parent region parent
     */
    setParent(parent: string | Regions): this;
    /**
     * Create or get a region from an object
     * @param region A region or an object with region properties
     * @returns region
     */
    static fromObject(region: Region | Region.Options): Region;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Region {
    /**
     * properties
     */
    type Options = {
        /**
         * X coordinate of the region
         */
        x?: number | string;
        /**
         * Y coordinate of the region
         */
        y?: number | string;
        /**
         * Width of the region
         */
        width?: number | string;
        /**
         * Height of the region
         */
        height?: number | string;
        /**
         * The region bounds
         */
        bounds?: Rect;
        /**
         * The region name
         */
        name?: string;
        /**
         * The region fill style
         */
        fillstyle?: FillStyle;
        /**
         * The region line style
         */
        linestyle?: LineStyle;
        /**
         * The region relative to which this region is calculated
         */
        parent?: string | Regions;
    };
    /**
     * properties
     */
    type OptionsOut = Required<Omit<Options, 'x' | 'y' | 'width' | 'height'>>;
}
