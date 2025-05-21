import { IGeometryToShape } from '@int/geotoolkit/map/features/adapters/IGeometryToShape';
import { IGeometryToText } from '@int/geotoolkit/map/features/adapters/IGeometryToText';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Point as _Point } from '@int/geotoolkit/map/features/Point';
/**
 * Applies feature geometry's 'x' and 'y' (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/AnchoredShape~AnchoredShape} as an anchor
 */
export declare class Point implements IGeometryToShape, IGeometryToText {
    /**
     * @param [options] options
     */
    constructor(options?: Point.Offset);
    /**
     * Sets feature_geometry-to-text_anchor_position offset options. For the new options to take effect on layer, the layer has to be invalidated.
     *
     * @param [options] options
     * @returns this
     */
    setOptions(options?: Point.Offset): this;
    /**
     * Applies feature geometry's 'x' and 'y' to {@link @int/geotoolkit/scene/shapes/AnchoredShape~AnchoredShape} as an anchor
     *
     * @param geometry feature geometry
     * @param shape shape to set the anchor on
     * @param [context] rendering context or its transformation
     */
    apply(geometry: _Point.Geometry, shape: AnchoredShape, context?: RenderingContext | Transformation): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Point {
    /**
     * options
     */
    type Offset = {
        /**
         * anchor offset
         */
        offset?: {
            /**
             * x-offset in device coordinates
             */
            x?: number;
            /**
             * y-offset in device coordinates
             */
            y?: number;
        };
    };
}
