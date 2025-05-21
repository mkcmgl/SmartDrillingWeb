import { AbstractSurfaceData } from '@int/geotoolkit3d/data/surface/AbstractSurfaceData';
import { BasicTriangulator } from '@int/geotoolkit3d/util/surface/BasicTriangulator';
/**
 * Surface data made of an vertice grid that can be triangulated.<br>
 * <br>
 * The grid is expected to have column first:<br>
 * <pre>
 * [(0,0), (1,0), (2,0), (3,0), (0,1), (1,1), (2,1), (3,1), [...], (0,3), (1,3), (2,3), (3,3)]
 * </pre>
 * <br>
 * X and Y values are optionals:<br>
 * If only elevations are provided, X and Y values will be determined from the xmin,xstep, ymin, and ystep values.<br>
 * If both xvalues and yvalues arrays are provided, they should be in the same layout as the elevation array.<br>
 * @throws {Error} if the Surface Data is not compliant and compromise the creation of the surface.
 */
export declare class GridSurfaceData extends AbstractSurfaceData {
    constructor(options: GridSurfaceData.Options);
}
export declare namespace GridSurfaceData {
    /**
     * The options
     */
    type Options = AbstractSurfaceData.Options & Omit<BasicTriangulator.Options, 'data'> & {
        /**
         * The data options
         */
        data: BasicTriangulator.Data & {
            /**
             * optional Value array to instantiate
             */
            values?: number[];
        };
    };
}
