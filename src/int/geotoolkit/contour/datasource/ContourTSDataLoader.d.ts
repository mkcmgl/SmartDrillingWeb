/**
 * @module geotoolkit/contour/datasource/ContourTSDataLoader
 */
import { AbstractDataLoader } from '@int/geotoolkit/contour/datasource/AbstractDataLoader';
import type { ContourDataSource } from '@int/geotoolkit/contour/datasource/ContourDataSource';
import type { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
/**
 * A utility class that creates a ContourTSDataSource from a passed in file or form url.
 */
export declare class ContourTSDataLoader extends AbstractDataLoader {
    constructor(options?: {
        httpservice?: AbstractHttpService;
    });
    getDataSource(text: string, name: string): ContourDataSource;
}
