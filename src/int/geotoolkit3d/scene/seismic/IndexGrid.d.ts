import { Grid } from '@int/geotoolkit3d/scene/grid/Grid';
import type { IndexCoordinates } from '@int/geotoolkit3d/transformation/IndexCoordinates';
/**
 * A grid specialized for IJ objects like seismic.<br>
 * <br>
 * For convenience, a specialized version of {@link @int/geotoolkit3d/scene/grid/Grid~Grid} using a {@link @int/geotoolkit3d/transformation/IndexCoordinates~IndexCoordinates}.<br>
 * <br>
 * The grid will set its location and size in IJ automatically.<br>
 * In order to be displayed correctly, this grid should be added to the SeismicVolume.<br>
 * <br>
 */
export declare class IndexGrid extends Grid {
    constructor(options: IndexGrid.Options);
}
export declare namespace IndexGrid {
    type Options = Grid.Options & {
        /**
         * The index coordinates
         */
        index: IndexCoordinates;
    };
}
