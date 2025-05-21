import { ReusableComponentNode } from '@int/geotoolkit/schematics/scene/ReusableComponentNode';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import type { RenderingHints } from '@int/geotoolkit/schematics/utils/RenderingHints';
/**
 * Most-common schematics component node extension. Derived component(s): "cement"
 */
export declare abstract class FlippedComponentNode extends ReusableComponentNode {
    protected constructor(options?: FlippedComponentNode.Options | boolean);
    /**
     * Sets rendering hints.<br>
     * When overriding the method {@link @int/geotoolkit/schematics/scene/FlippedComponentNode~FlippedComponentNode}'s inheritants must call for
     * "FlippedComponentNode.prototype.setRenderingHints" AT THE VERY END of the method's body
     * @param hints rendering hints
     * @param [deepCopy] a flag indicating if the data should be fully copied before returning or not
     * @returns this
     */
    setRenderingHints(hints: ComponentNode.RenderingHintsBase | RenderingHints, deepCopy?: boolean): this;
    /**
     * Gets component's textual description. <br>
     * The returned string contains description (if available, name otherwise),
     * plus geometry information: 'depth' ('from' and 'to'), as well as 'diameter' ('outer' and 'inner')
     */
    toString(): string;
    /**
     * Gets if the template is "left" one.
     */
    isLeft(): boolean;
    /**
     * Sets the template's "left" flag
     * @param left left flag
     */
    setLeft(left: boolean): this;
    /**
     * Validates geometry data.
     *
     * @param geometryData Geometry data
     */
    validGeometryData(geometryData: WellBoreData.Entity): boolean;
    /**
     * Sets geometry
     *
     * @param geometryData Geometry data for the node
     */
    setGeometryData(geometryData: WellBoreData.Entity): this;
    /**
     * Checks collision
     *
     * @param context Rendering Context
     * @returns true if object is inside of renderable area
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Returns all the properties pertaining to this object
     * @returns An object containing the properties
     */
    getProperties(): FlippedComponentNode.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: FlippedComponentNode.Options): this;
}
export declare namespace FlippedComponentNode {
    /**
     * options or is left
     */
    type Options = ReusableComponentNode.Options & {
        /**
         * isLeft is "left" part of shape flag
         */
        isleft?: boolean;
    };
    /**
     * An object containing the properties
     */
    type OptionsOut = ReusableComponentNode.OptionsOut & {
        /**
         * is left
         */
        isleft?: boolean;
    };
}
