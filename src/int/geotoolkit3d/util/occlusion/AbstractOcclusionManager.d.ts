import type { OrthographicCamera, PerspectiveCamera } from 'three';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { Plot } from '@int/geotoolkit3d/Plot';
/**
 * Abstract class for occlusion manager.<br>
 * It uses an offscreen canvas to render the bounding box of added objects. At each frame,
 * it tests if each bounding box is occluded by using occlusion query that supported in WebGL 2.<br>
 *
 * @returns {import("geotoolkit3d/util/occlusion/AbstractOcclusionManager").AbstractOcclusionManager} this
 */
export declare abstract class AbstractOcclusionManager {
    protected constructor();
    /**
     * Add target objects to occlusion manager for occlusion query<br>
     * It constructs bounding box information and binds the position array to gl program
     * @param object object to add
     */
    abstract setObjects(object: Object3D | Object3D[]): void;
    /**
     * To enable / disable occlusion culling
     * @param toEnable the flag to enable or disable
     * @returns this
     */
    setUsability(toEnable: boolean): this;
    /**
     * Render call in offscreen canvas. It does occlusion query and flip the visibility of objects
     * based on query results.<br>
     * Should be called at each frame in main 3D plot.
     * @param camera the camera
     * @param plot the main plot
     */
    render(camera: PerspectiveCamera | OrthographicCamera, plot: Plot): void;
    /**
     * Resize the offscreen canvas by width and height
     * @param width the width in pixel
     * @param height the height in pixel
     */
    resize(width: number, height: number): void;
    /**
     * Get the number of occluded objects
     * @returns num
     */
    getNumberOfOccludedObjects(): number;
    static getClassName(): string;
    getClassName(): string;
}
