/**
 * @module geotoolkit3d/scene/Object3D
 */
import { Object3D as BASEObject3D } from 'three';
import { Event } from '@int/geotoolkit3d/Event';
import type { Plot } from '@int/geotoolkit3d/Plot';
import type { Camera, Scene, WebGLRenderer } from 'three';
/**
 * Base class of Carnac3D objects.<br>
 * <br>
 * This class extends THREE.Object3D to expose some useful functions and add some new features.<br>
 * It is similar to a CarnacJS Group (has children and holds a transformation that applies to its children).<br>
 * <br>
 * To change the location/size/orientation of an Object3D, refer to THREEJS documentation
 */
export declare class Object3D extends BASEObject3D {
    constructor();
    /**
     * Notifies this object and its parent that this object has been invalidated.<br>
     * If this object is in a Plot, it will be marked as dirty and will trigger a rendering cycle.<br>
     * @param [event] The event to fire
     */
    invalidateObject(event?: Event): this;
    /**
     * This function is called prior to rendering and can update this object's content.<br>
     * <br>
     * It should not trigger any invalidateObject though.<br>
     * Note that it is not necessary nor recommended to explicitly call updateObject on this object's children as updateObject will be called on all nodes present in the scene.<br>
     * <br>
     * This will be executed before the transformations simplification.<br>
     * <br>
     * @see {@link @int/geotoolkit3d/Plot~Plot} for more details on the render steps
     * @param scene The scene
     * @param camera The camera
     */
    updateObject(scene: Scene, camera: Camera): this;
    /**
     * This function is called prior to rendering and can update this object's content.<br>
     * <br>
     * It should not trigger any invalidateObject though.<br>
     * Note that it is not necessary nor recommended to explicitly call beforeRender on this object's children as beforeRender will be called on all nodes present in the scene.<br>
     * <br>
     * This will be executed after the transformations simplification.<br>
     * <br>
     * @see {@link @int/geotoolkit3d/Plot~Plot} for more details on the render steps
     * @param scene The scene
     * @param camera The camera used for this render phase.
     * @param plot The 3D plot
     * @param renderer The renderer
     */
    beforeRender(scene: Scene, camera: Camera, plot: Plot, renderer: WebGLRenderer): this;
    /**
     * This function is called after rendering and can update this object's content.<br>
     * <br>
     * It should not trigger any invalidateObject though.<br>
     * Note that it is not necessary nor recommended to explicitly call afterRender on this object's children as beforeRender will be called on all nodes present in the scene.<br>
     * <br>
     * This will be executed after the transformations simplification.<br>
     * <br>
     * @see {@link @int/geotoolkit3d/Plot~Plot} for more details on the render steps
     * @param scene The scene
     * @param camera The camera used for this render phase.
     * @param plot The 3D plot
     * @param renderer The renderer
     */
    afterRender(scene: Scene, camera: Camera, plot: Plot, renderer: WebGLRenderer): this;
    /**
     * Adds object as child of this object.
     * @param object object
     * @returns this
     */
    add(object: BASEObject3D | BASEObject3D[]): this;
    /**
     * Removes object as child of this object.
     * @param object object
     * @returns this
     */
    remove(object: BASEObject3D | BASEObject3D[]): this;
    /**
     * Returns true if this object make its own highlight effect (like geotoolkit3d.scene.reservoir.hexahedral.ReservoirGrid)
     * This is to prevent unnecessary executions of the costly hightlight passes.
     */
    useOwnHighlight(): boolean;
    /**
     * Register object for special processing through a callback function<br>
     * @example
     * geotoolkit3d.util.ObjectProcessor.getDefaultInstance().registerObject(this.getClassName(), callback);
     */
    static register(): void;
    /**
     * Dispose object
     */
    dispose(): void;
    /**
     * Returns whether this object has been disposed
     */
    isDisposed(): boolean;
    /**
     * Set options
     * @param [options] options object
     * @returns this
     */
    setOptions(options?: Object3D.Options): this;
    /**
     * Get options
     * @returns options object
     */
    getOptions(): Required<Object3D.Options>;
    /**
     * Set visible
     * @param visible true, if object is visible
     * @param [silent] true, if object shouldn't be invalidated
     * @returns this
     */
    setVisible(visible: boolean, silent?: boolean): this;
    /**
     * Get visible
     * @returns true, if object is visible
     */
    getVisible(): boolean;
    /**
     * Return if this object can be picked/selected (see RendererPicking).<br>
     */
    isSelectable(): boolean;
    /**
     * Set if this object can be picked/selected (see RendererPicking).<br>
     * @param selectable if can be selected
     */
    setSelectable(selectable: boolean): void;
    getClassName(): string;
    static getClassName(): string;
}
export declare namespace Object3D {
    /**
     * options object
     */
    type Options = {
        /**
         * true to make object visible
         */
        visible?: boolean;
    };
}
