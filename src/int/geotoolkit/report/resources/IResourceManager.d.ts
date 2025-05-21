/**
 * @module geotoolkit/report/resources/IResourceManager
 */
import type { IResource } from '@int/geotoolkit/report/resources/IResource';
import type { ClassType } from '@int/geotoolkit/base';
/**
 * Define resource manager interface
 * @interface
 */
export declare abstract class IResourceManager {
    /**
     * Return resource
     * @param iResourceType resource type
     * @param url
     */
    abstract resolve(iResourceType: ClassType, url: string): IResource | null;
}
