import { AbstractRemoteDataSource } from '@int/geotoolkit/ivaapbackend/AbstractRemoteDataSource';
import type { CommonRemoteDataSource } from '@int/geotoolkit/ivaapbackend/CommonRemoteDataSource';
import type { Cancel } from '@int/geotoolkit/util/Cancel';
/**
 * Provides implementation of data source for loading data from IVAAP backend that stores dataset identifier,
 * its content, and list of links after the loading completed.
 */
export declare class RemoteDataSource<T extends object> extends AbstractRemoteDataSource<T> {
    constructor(options?: AbstractRemoteDataSource.Options);
    /**
     * Load meta data
     * @param url url of metaData information
     * @param [onProgress] a function to be executed to handle progress
     * @param [cancel] a Cancel object that can be used to cancel the loading
     * @returns The promise for the MetaData
     */
    loadMeta(url: string, onProgress?: (event: ProgressEvent) => void, cancel?: Cancel): Promise<T>;
    /**
     * Returns meta information from IVAAP backend
     * @returns meta meta data
     */
    getMetaData(): T;
    /**
     * Sets meta information
     * @param meta the meta information
     */
    protected setMetaData(meta: T): this;
    /**
     * Gets links
     */
    getLinks(): CommonRemoteDataSource.Link[];
    /**
     * Sets links
     * @param links the links
     */
    protected setLinks(links: CommonRemoteDataSource.Link[]): this;
    /**
     * Gets data identifier
     */
    getId(): string;
    /**
     * Sets data identifier
     * @param id the identifier
     */
    protected setId(id: string): this;
}
