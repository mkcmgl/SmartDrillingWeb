/**
 * @module geotoolkit/schematics/scene/ExternalGeometryComponentNode
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { Group } from '@int/geotoolkit/scene/Group';
import { RegularComponentNode } from '@int/geotoolkit/schematics/scene/RegularComponentNode';
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
/**
 * External geometry-based reusable component node extension.
 */
export declare class ExternalGeometryComponentNode extends RegularComponentNode {
    /**
     * @param [options] or externalGeometry geometry to define the component
     * @param [data] JSON-data to define component
     * @param [asymmetry] asymmetry options
     */
    constructor(options?: ExternalGeometryComponentNode.Options | Group, data?: ComponentNode.Options, asymmetry?: ExternalGeometryComponentNode.Asymmetry);
    setProperties(properties?: ExternalGeometryComponentNode.Options): this;
    getProperties(): ExternalGeometryComponentNode.OptionsOut;
    /**
     * Gets template node (there: external geometry)
     */
    getTemplateNode(): Group;
    /**
     * Gets template bounds (there: external geometry's model limits)
     */
    getTemplateBounds(): Rect;
    /**
     * Gets "resource-based" status
     */
    isResourceBased(): boolean;
    /**
     * Sets "resource-based" status
     * @param resourceBased "resource-based" status
     * @returns this
     */
    setResourceBased(resourceBased: boolean): this;
}
export declare namespace ExternalGeometryComponentNode {
    /**
     * or externalGeometry geometry to define the component
     */
    type Options = RegularComponentNode.Options & {
        /**
         * geometry to define the component
         */
        externalgeometry?: Group;
        /**
         * asymmetry options
         */
        asymmetry?: Asymmetry;
    };
    /**
     * asymmetry options
     */
    type Asymmetry = {
        /**
         * asymmetry on left side
         */
        left?: string | number;
        /**
         * asymmetry on top
         */
        top?: string | number;
        /**
         * asymmetry on right side
         */
        right?: string | number;
        /**
         * asymmetry on bottom
         */
        bottom?: string | number;
    };
    /**
     * properties
     */
    type OptionsOut = RegularComponentNode.OptionsOut & {
        /**
         * geometry to define the component
         */
        externalgeometry: Group;
        /**
         * asymmetry options
         */
        asymmetry: Asymmetry;
    };
}
