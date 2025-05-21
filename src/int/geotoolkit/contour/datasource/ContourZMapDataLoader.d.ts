/**
 * @module geotoolkit/contour/datasource/ContourZMapDataLoader
 */
import { AbstractDataLoader } from '@int/geotoolkit/contour/datasource/AbstractDataLoader';
import type { ContourDataSource } from '@int/geotoolkit/contour/datasource/ContourDataSource';
import type { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
/**
 * A utility class that creates a ContourZMapDataLoader from a passed in file.
 */
export declare class ContourZMapDataLoader extends AbstractDataLoader {
    constructor(options?: {
        httpservice?: AbstractHttpService;
    });
    getDataSource(text: string, name: string): ContourDataSource;
}
