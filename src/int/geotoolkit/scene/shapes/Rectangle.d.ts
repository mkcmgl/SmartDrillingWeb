import { RectangularShape } from '@int/geotoolkit/scene/shapes/RectangularShape';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines rectangle node
 */
export declare class Rectangle extends RectangularShape {
    constructor(options?: Rectangle.Options);
    constructor(options?: Rect);
    constructor(left?: number, top?: number, right?: number, bottom?: number, width?: number, height?: number, visible?: boolean, linestyle?: LineStyle.Type, fillstyle?: FillStyle.Type);
    clone(): Rectangle;
    protected copyConstructor(src: Rectangle, deepCopy?: boolean): this;
    render(context: RenderingContext): void;
    protected renderContent(localContext: RenderingContext): void;
    /**
     * Set border radius in model coordinates.
     * @param radius border radius in model coordinates
     * @returns this
     */
    setCornerRadius(radius: number): this;
    /**
     * return corner radius
     * @returns radius
     */
    getCornerRadius(): number;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Rectangle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     */
    setProperties(properties?: Rectangle.Options): this;
}
export declare namespace Rectangle {
    /**
     * x coordinate of the top left corner
     */
    type Options = RectangularShape.Options & {
        /**
         * This defines if the rectangle has rounded border corners. 'radius' is the length denoting a radius for the rounded border of each corner.
         */
        radius?: number;
    };
    /**
     * properties
     */
    type OptionsOut = RectangularShape.OptionsOut & {
        /**
         * corner radius
         */
        radius?: number;
    };
}
