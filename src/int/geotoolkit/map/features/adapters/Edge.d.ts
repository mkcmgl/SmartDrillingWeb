import { IGeometryToText } from '@int/geotoolkit/map/features/adapters/IGeometryToText';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { IGeometryToShape } from '@int/geotoolkit/map/features/adapters/IGeometryToShape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LineString } from '@int/geotoolkit/map/features/LineString';
import type { Point } from '@int/geotoolkit/map/features/adapters/Point';
import type { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
/**
 * Calculates right edge point of geometry and applies it to {@link @int/geotoolkit/scene/shapes/Text~Text} as an anchor
 */
export declare class Edge implements IGeometryToShape, IGeometryToText {
    /**
     * @param [options] options
     */
    constructor(options?: Point.Offset);
    /**
     * Sets feature_geometry-to-text_anchor_position offset options. For the new options to take effect on layer, the layer has to be invalidated.
     *
     * @param options options
     * @returns this
     */
    setOptions(options: Point.Offset): this;
    /**
     * Calculates right end point of polyline and applies it to {@link @int/geotoolkit/scene/shapes/Text~Text} as an anchor
     *
     * @param geometry feature geometry
     * @param text text shape to set the anchor on
     * @param [context] rendering context or its transformation
     */
    apply(geometry: LineString.Geometry, text: AnchoredShape, context?: RenderingContext | Transformation): void;
    static getClassName(): string;
    getClassName(): string;
}
