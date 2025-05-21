/**
 * @module geotoolkit/report/resources/IResourceResolver
 */
import type { IResource } from '@int/geotoolkit/report/resources/IResource';
import type { ClassType } from '@int/geotoolkit/base';
/**
 * Define resource resolver interface
 * @interface
 */
export declare abstract class IResourceResolver {
    /**
     * Load resource
     */
    abstract load(): Promise<any>;
    /**
     * @param url
     * @param [iResourceType] resource type
     */
    abstract canResolve(url: string, iResourceType?: ClassType): boolean;
    /**
     * Return resource
     * @param url
     * @param [iResourceType] resource type
     */
    abstract get(url: string, iResourceType?: ClassType): IResource;
}
