import { AbstractWidget } from '@int/geotoolkit3d/widgets/AbstractWidget';
import { Grid } from '@int/geotoolkit3d/scene/grid/Grid';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { GridLegend } from '@int/geotoolkit3d/scene/grid/legend/GridLegend';
/**
 * Widget for projection of meshes. Use method .addMesh to add mesh to widget and it creates grid with projected mesh as shadow painting.
 */
export declare class ProjectionWidget extends AbstractWidget {
    /**
     * @param [options] options object
     */
    constructor(options?: ProjectionWidget.Options);
    /**
     * Sets options
     * @param [options] options object
     * @returns this
     */
    setOptions(options?: ProjectionWidget.OptionsBase): this;
    /**
     * Get options
     * @returns options object
     */
    getOptions(): ProjectionWidget.OptionsBaseOut;
    /**
     * Add mesh to widget
     * @param mesh mesh to project on grid
     * @returns this
     */
    addMesh(mesh: Object3D): this;
    /**
     * Remove mesh from widget
     * @param mesh mesh to remove from widget
     * @returns this
     */
    removeMesh(mesh: Object3D): this;
    /**
     * Add GridLegend to widget
     * @param legend legend to display on grid
     * @returns this
     */
    addLegend(legend: GridLegend): this;
}
export declare namespace ProjectionWidget {
    /**
     * options object
     */
    export type Options = {
        /**
         * options for grid customization
         */
        grid?: Grid.Options;
        /**
         * options for grid dimension factor. Greater than 1 indicates a larger grid
         */
        dimensionfactor?: number;
        /**
         * options for planes visibility
         */
        planes?: PlanesVisibility;
        /**
         * meshes to project on grid
         */
        meshes?: Object3D[];
    };
    /**
     * options object
     */
    export type OptionsBase = Object3D.Options & {
        /**
         * options for grid customization
         */
        grid?: Grid.OptionsBase;
        /**
         * options for grid dimension factor. Greater than 1 indicates a larger grid
         */
        dimensionfactor?: number;
        /**
         * options for planes visibility
         */
        planes?: PlanesVisibility;
        /**
         * meshes to project on grid
         */
        meshes?: Object3D[];
    };
    export type OptionsBaseOut = Required<Object3D.Options> & {
        /**
         * options for grid customization
         */
        grid: Grid.OptionsBaseOut;
        /**
         * options for grid dimension factor. Greater than 1 indicates a larger grid
         */
        dimensionfactor: number;
        /**
         * options for planes visibility
         */
        planes: Required<PlanesVisibility>;
        /**
         * meshes to project on grid
         */
        meshes: Object3D[];
    };
    type PlanesVisibility = {
        /**
         * left plane visiblity
         */
        left?: boolean;
        /**
         * right plane visibility
         */
        right?: boolean;
        /**
         * top plane visibility
         */
        top?: boolean;
        /**
         * bottom plane visibility
         */
        bottom?: boolean;
        /**
         * front plane visibility
         */
        front?: boolean;
        /**
         * back plane visibility
         */
        back?: boolean;
    };
    export {};
}
