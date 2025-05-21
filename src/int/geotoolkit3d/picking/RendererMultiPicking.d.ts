/**
 * @module geotoolkit3d/picking/RendererMultiPicking
 */
import { AbstractPicking } from '@int/geotoolkit3d/picking/AbstractPicking';
import type { Plot } from '@int/geotoolkit3d/Plot';
/**
 * Picking using GPU.<br>
 * <br>
 * This selection strategy is to determine what objects are at the requested location.<br>
 * <ul>
 * <li>Use a distance-based criteria</li>
 * <li>Can be slow if there are a lot of objects at plot device point </li>
 * <li>Returns all objects at the given location that match the criteria </li>
 * </ul>
 */
export declare class RendererMultiPicking extends AbstractPicking {
    constructor();
    /**
     * Pick objects at the given pixel location (relative to the plot).<br>
     * <br>
     *
     * @param plot The target plot
     * @param x The x coordinate in device space (pixels)
     * @param y The x coordinate in device space (pixels)
     * @param [width] The amount of pixels to consider on the left and right side of the given x (effective width will be 2 times given width, plus 1 (the center pixel))
     * @param [height] The amount of pixels to consider on the top and bottom side of the given y (effective height will be 2 times given height, plus 1 (the center pixel))
     * @param [filter] A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link import("geotoolkit3d/picking/RendererPicking").RendererPicking filtering} documentation)
     * @returns An array of PickingResult containing the intersecting shapes
     */
    static pick(plot: Plot, x: number, y: number, width?: number, height?: number, filter?: AbstractPicking.FilterFunction): AbstractPicking.PickingResult[];
}
