import type { AbstractPicking } from '@int/geotoolkit3d/picking/AbstractPicking';
export declare type PointsPickingResult = AbstractPicking.PickingResult & {
    /**
     * The point index in the picked pointCloud.
     */
    pointindex: number;
};
