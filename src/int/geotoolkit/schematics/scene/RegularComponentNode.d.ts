import { ReusableComponentNode } from '@int/geotoolkit/schematics/scene/ReusableComponentNode';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
/**
 * Most-common schematics components are derived from this class. Derived components: "tubing", "valve", "nipple" etc. <br>
 * To specify an offset from center on a component, use the 'offset' property in  "setGeometryData" method below.
 */
export declare abstract class RegularComponentNode extends ReusableComponentNode {
    protected constructor(options?: RegularComponentNode.Options);
    /**
     * Gets component's textual description. <br>
     * The returned string contains description (if available, name otherwise),
     * plus geometry information: 'depth' ('from' and 'to'), as well as 'diameter' ('outer')
     */
    toString(): string;
    /**
     * Validates geometry data.
     *
     * @param geometryData an object with geometry data
     */
    validGeometryData(geometryData: WellBoreData.Entity): boolean;
    /**
     * Sets geometry
     *
     * @param geometryData an object with geometry data
     * @returns this
     */
    setGeometryData(geometryData: WellBoreData.Entity): this;
    /**
     * Checks collision.
     * Returns true if object is inside of renderable area
     *
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): RegularComponentNode.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: RegularComponentNode.Options): this;
}
export declare namespace RegularComponentNode {
    /**
     * An object containing the properties to set
     */
    type Options = ReusableComponentNode.Options & {
        /**
         * depth from
         */
        depthfrom?: number;
        /**
         * depth to
         */
        depthto?: number;
        /**
         * outer radius
         */
        outerradius?: number;
        /**
         * component offset
         */
        offset?: number;
    };
    /**
     * properties
     */
    type OptionsOut = ReusableComponentNode.OptionsOut & {
        /**
         * depth from
         */
        depthfrom?: number;
        /**
         * depth to
         */
        depthto?: number;
        /**
         * outer radius
         */
        outerradius?: number;
        /**
         * component offset
         */
        offset?: number;
    };
}
