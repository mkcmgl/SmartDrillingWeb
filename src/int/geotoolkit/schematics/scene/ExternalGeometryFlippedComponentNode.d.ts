import { Group } from '@int/geotoolkit/scene/Group';
import { FlippedComponentNode } from '@int/geotoolkit/schematics/scene/FlippedComponentNode';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
/**
 * External geometry-based reusable component node extension.
 */
export declare class ExternalGeometryFlippedComponentNode extends FlippedComponentNode {
    /**
     * @param [options] or externalGeometry geometry to define the component
     * @param [data] JSON-data to define component
     */
    constructor(options?: ExternalGeometryFlippedComponentNode.Options | Group, data?: ExternalGeometryFlippedComponentNode.Data);
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: ExternalGeometryFlippedComponentNode.Options): this;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): ExternalGeometryFlippedComponentNode.OptionsOut;
    /**
     * Gets template node.
     */
    getTemplateNode(): Group;
    /**
     * Gets template bounds
     */
    getTemplateBounds(): Rect;
    /**
     * Gets "resource-based" status.
     * @returns true
     */
    isResourceBased(): boolean;
    /**
     * Sets "resource-based" status
     * @param resourceBased "resource-based" status
     * @returns this
     */
    setResourceBased(resourceBased: boolean): this;
}
export declare namespace ExternalGeometryFlippedComponentNode {
    /**
     * or externalGeometry geometry to define the component
     */
    type Options = FlippedComponentNode.Options & {
        /**
         * or externalGeometry geometry to define the component
         */
        externalgeometry?: Group;
    };
    /**
     * JSON-data to define component
     */
    type Data = {
        /**
         * component textual description
         */
        description?: string;
        /**
         * component geometry
         */
        geometry?: WellBoreData.Entity;
    };
    /**
     * properties
     */
    type OptionsOut = FlippedComponentNode.OptionsOut & {
        /**
         * or externalGeometry geometry to define the component
         */
        externalgeometry: Group;
    };
}
