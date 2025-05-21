import type { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
import type { ContourDataSource } from '@int/geotoolkit/contour/datasource/ContourDataSource';
/**
 * An abstract class for data loaders
 */
export declare abstract class AbstractDataLoader {
    protected constructor(options?: {
        httpservice?: AbstractHttpService;
    });
    /**
     * Returns the AbstractDataLoader that is loaded from the passed in file.
     * @param file the local file to read
     * @returns dataSource The loaded data source.
     */
    load(file: File | string): Promise<ContourDataSource>;
    /**
     * Loads data from url
     * @param url url of the resource
     * @returns dataSource The loaded data source.
     */
    loadFromURL(url: string): Promise<ContourDataSource>;
    /**
     * Creates data source
     * @param text data in text format
     * @param name source name
     * @returns dataSource
     */
    abstract getDataSource(text: string, name: string): ContourDataSource;
    /**
     * Loads data from file
     * @param file the local file to read
     * @returns dataSource The loaded data source.
     */
    loadFromFile(file: File): Promise<ContourDataSource>;
    static getClassName(): string;
    getClassName(): string;
}
