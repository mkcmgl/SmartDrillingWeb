import { Range } from '@int/geotoolkit/util/Range';
import { RemoteDataSource } from '@int/geotoolkit/ivaapbackend/RemoteDataSource';
/**
 * Provides utility class to load surface data from IVAAP backend
 */
export declare class RemoteGridSurfaceDataSource extends RemoteDataSource<RemoteGridSurfaceDataSource.MetaInfo> {
    loadMeta(url: string): Promise<RemoteGridSurfaceDataSource.MetaInfo>;
    /**
     * Loads surface
     */
    loadSurface(): Promise<RemoteGridSurfaceDataSource.SurfaceStream>;
}
export declare namespace RemoteGridSurfaceDataSource {
    /**
     * Defines surface meta information from backend
     */
    type MetaInfo = {
        /**
         * name of surface
         */
        name: string;
        /**
         * rows count
         */
        rowCount: number;
        /**
         * columns count
         */
        columnCount: number;
        /**
         * x origin
         */
        originX: number;
        /**
         * y origin
         */
        originY: number;
        /**
         * rotation angle
         */
        rotationAngle: number;
        /**
         * unit
         */
        unit: string;
        /**
         * values array
         */
        values: {
            /**
             * identifier
             */
            identifier: number;
            /**
             * name
             */
            name: string;
            /**
             * minimal value
             */
            minimum: number;
            /**
             * maximal value
             */
            maximum: number;
            /**
             * step
             */
            step: number;
            /**
             * a flag indicating whether the field is an indexed key
             */
            isKey: boolean;
            /**
             * format type
             */
            formatType: number;
            /**
             * description
             */
            description: string;
        }[];
        /**
         * origin
         */
        origin: {
            /**
             * x origin
             */
            x: number;
            /**
             * y origin
             */
            y: number;
            /**
             * z origin
             */
            z: number;
        };
        /**
         * x-axis step
         */
        xStep: number;
        /**
         * y-axis step
         */
        yStep: number;
    };
    /**
     * Defines Surface properties
     */
    type SurfaceStream = {
        /**
         * surface values
         */
        values: number[];
        /**
         * surface values range
         */
        valuesRange: Range;
    };
}
