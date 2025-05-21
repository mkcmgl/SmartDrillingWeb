import type { Plot } from '@int/geotoolkit3d/Plot';
import type { Object3D as ThreeObject3D, Vector2, Vector3 } from 'three';
/**
 * Parent class for picking algorithms.<br>
 * <br>
 * Subclasses should implement 3D picking (pixel to worldcoordinate).<br>
 * Builtin implementation include raytracing and renderer-picking.<br>
 */
export declare class AbstractPicking {
    /**
     * Pick the object(s) at the given plot coordinates
     * @param plot The target plot
     * @param x The x coordinate in plot device space
     * @param y The y coordinate in plot device space
     * @returns An array of jsons containing the intersecting object3d(s)
     */
    static pick(plot: Plot, x: number, y: number, width?: number, height?: number, filter?: AbstractPicking.FilterFunction): AbstractPicking.PickingResult[];
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractPicking {
    /**
     * PickingResult can be expanded by ExtraPickingModeCallback
     */
    type PickingResult = {
        /**
         * The picked object
         */
        object: ThreeObject3D;
        /**
         * The picking position in 3D world coordinates
         */
        point: Vector3;
        /**
         * The picking position on the screen/device, in pixels coordinates
         */
        pointdevice?: Vector2;
        /**
         * Plot root
         */
        root?: ThreeObject3D;
    } & Record<string, any>;
    type FilterFunction = (object: ThreeObject3D, pickable: boolean) => boolean;
}
