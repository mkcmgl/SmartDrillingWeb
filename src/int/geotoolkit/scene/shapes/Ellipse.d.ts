import { RectangularShape } from '@int/geotoolkit/scene/shapes/RectangularShape';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines ellipse node which is an elongated circle defined by a bounding frame.
 */
export declare class Ellipse extends RectangularShape {
    /**
     * @param [center] EllipseParamsType
     */
    constructor(center?: Ellipse.Options);
    /**
     * @param [centerX] - x coordinate of the center or properties object
     * @param [centerY] - y coordinate of the center
     * @param [radiusX] - radius along the x axis
     * @param [radiusY] - radius along the y axis
     * @param [visible] - visibility
     * @param [linestyle] - style applied on outline
     * @param [fillstyle] - style applied on fill
     */
    constructor(centerX?: number, centerY?: number, radiusX?: number, radiusY?: number, visible?: boolean, linestyle?: LineStyle | string | LineStyle.Options, fillstyle?: FillStyle | string | LineStyle.Options);
    /**
     * Creates ellipse
     * @param [center] EllipseCenterType
     * @returns {Ellipse} this
     */
    setEllipse(center?: Ellipse.Center): this;
    /**
     * Creates ellipse
     * @param [x] number x coordinate of the center
     * @param [y] number y coordinate of the center
     * @param [radiusX] number radius along the x axis
     * @param [radiusY] number radius along the y axis
     * @returns {Ellipse} this
     */
    setEllipse(x?: number, y?: number, radiusX?: number, radiusY?: number): this;
    render(context: RenderingContext): void;
}
export declare namespace Ellipse {
    /**
     * - x coordinate of the center or properties object
     */
    type Options = RectangularShape.Options & Center & {
        /**
         * - visibility
         */
        visible?: boolean;
        /**
         * - style applied on outline
         */
        linestyle?: LineStyle | string | LineStyle.Options;
        /**
         * - style applied on fill
         */
        fillstyle?: FillStyle | string | LineStyle.Options;
    };
    type Center = {
        x?: number;
        y?: number;
        /**
         * - x coordinate of the center
         */
        centerx?: number;
        /**
         * - y coordinate of the center
         */
        centery?: number;
        /**
         * - radius along the x axis
         */
        radiusx?: number;
        /**
         * - radius along the y axis
         */
        radiusy?: number;
        centerdata?: number;
        radiusdata?: number;
    };
}
