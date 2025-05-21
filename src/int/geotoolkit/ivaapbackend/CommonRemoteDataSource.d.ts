import { AbstractRemoteDataSource } from '@int/geotoolkit/ivaapbackend/AbstractRemoteDataSource';
/**
 * Provides utility class to load data collections and individual datasets from IVAAP backend
 */
export declare class CommonRemoteDataSource extends AbstractRemoteDataSource<CommonRemoteDataSource.Data> {
    constructor(options?: AbstractRemoteDataSource.Options);
    loadMeta(url: string): Promise<CommonRemoteDataSource.Data>;
    /**
     * Loads datasets collection
     * @param url the collection url
     */
    protected loadCollection<T extends CommonRemoteDataSource.Dataset>(url: string): Promise<CommonRemoteDataSource.DataCollection<T>>;
    /**
     * Loads an individual dataset
     * @param url the data url
     */
    protected loadDataSet<T extends CommonRemoteDataSource.Dataset = CommonRemoteDataSource.Dataset>(url: string): Promise<T>;
}
export declare namespace CommonRemoteDataSource {
    /**
     * Defines dataset collection
     */
    type DataCollection<T extends Dataset = Dataset> = {
        /**
         * The items collection
         */
        items: T[];
    };
    /**
     * Defines dataset
     */
    type Dataset<T extends Record<string, any> = Record<string, any>> = {
        /**
         * The dataset identifier
         */
        id: string;
        /**
         * The dataset content
         */
        content: T;
        /**
         * The list of links leading to the services supported by dataset
         */
        links: Link[];
    };
    /**
     * Defines link to the dataset
     */
    type Link = {
        /**
         * The dataset name. This value is not supposed to change with internationalization
         */
        rel: string;
        /**
         * The dataset name
         */
        name?: string;
        /**
         * The system name of the dataset with the "v1/schema/int/" prefix added
         */
        relEntity: string;
        /**
         * The system name of the dataset
         */
        relEntityType?: string;
        /**
         * The link's destination
         */
        href: string;
        /**
         * The flag indicating if this dataset has children
         */
        children: boolean;
        /**
         * The flag indicating if this dataset has children that can be added to a project
         */
        hasProjectEntityChildren: boolean;
        /**
         * The flag indicating if this dataset can be added to a project
         */
        isProjectEntity: boolean;
    };
    type Data = CommonRemoteDataSource.DataCollection | CommonRemoteDataSource.Dataset;
}
