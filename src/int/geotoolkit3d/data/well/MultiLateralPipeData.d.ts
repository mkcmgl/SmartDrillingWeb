import type { Vector3 } from 'three';
/**
 * Multilateral pipe data combines an array of wells into one object.
 */
export declare class MultiLateralPipeData {
    /**
     * @param options The object of pipe data
     */
    constructor(options: MultiLateralPipeData.Options);
    /**
     * Returns the pipe data as an array
     */
    getPipeArray(): MultiLateralPipeData.PipeData[];
    /**
     * Get n-th pipe
     * @param index The index of pipe
     * @returns The index-th pipe
     */
    getPipe(index: number): MultiLateralPipeData.PipeData | null;
    /**
     * Remove n-th pipe from current pipes
     * @param index The index of pipe
     * @returns this
     */
    removePipe(index: number): this | null;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace MultiLateralPipeData {
    /**
     * The object of pipes data
     */
    type Options = {
        /**
         * The array of pipes
         */
        data: PipeData[];
    };
    type PipeData = {
        /**
         * the XYZ coordinates for the path
         */
        positions: Vector3[];
        /**
         * the XYZ normals for the path
         */
        normals: Vector3[];
        /**
         * the XYZ binormals for the path
         */
        binormals: Vector3[];
        /**
         * the XYZ tangents for the path
         */
        tangents: Vector3[];
        /**
         * radius of the tube for each deviation value
         */
        radii: number[];
        /**
         * A value attribute used for coloring the trajectory
         */
        values: number[];
    };
}
