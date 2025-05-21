import { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Dimension } from '@int/geotoolkit/util/Dimension';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
/**
 * Defines an abstract shape node with predefined line, fill and, text styles
 */
export declare abstract class Shape extends AbstractNode {
    protected constructor(options?: Shape.Options | LineStyle.Type, fillstyle?: FillStyle.Type);
    protected copyConstructor(src: Shape, deepCopy?: boolean): this;
    /**
     * Return line style
     *
     * @returns lineStyle current line style
     */
    getLineStyle(): LineStyle | null;
    /**
     * Sets line style
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return fill style
     *
     * @returns fillStyle current fill style
     */
    getFillStyle(): FillStyle | null;
    /**
     * Sets fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Invalidate bounds
     * @param [bounds] if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     * @param [force] flag indicating if the parent must be forcibly invalidated
     * @returns this
     */
    invalidateParent(bounds?: Rect, force?: boolean): this;
    /**
     * Check collision of the shape bounds with parent invalid area
     * @param bounds shape bounds
     * @param localTransformation local transformation of the bounds
     * @param parentInvalidArea invalid parent area
     * @param [expand] optional expand the bounds in model coordinate
     * @returns true if bounds intersect the invalid area
     */
    static intersectsBounds(bounds: Rect, localTransformation: Transformation, parentInvalidArea: Rect, expand?: Dimension): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): Shape.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: Shape.Options): this;
    /**
     * invalidate Method
     * @returns method to invalidate this object
     */
    getInvalidateMethod(): IStyleListener.AttributeCallback;
}
export declare namespace Shape {
    /**
     * style applied on outline or it is options
     */
    type Options = AbstractNode.Options & {
        /**
         * style applied on outline
         */
        linestyle?: LineStyle.Type;
        /**
         * style applied on fill
         */
        fillstyle?: FillStyle.Type;
    };
    type OptionsOut = AbstractNode.OptionsOut & {
        /**
         * line style
         */
        linestyle?: LineStyle;
        /**
         * fill style
         */
        fillstyle?: FillStyle;
    };
}
