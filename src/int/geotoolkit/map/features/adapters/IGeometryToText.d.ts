/**
 * @module geotoolkit/map/features/adapters/IGeometryToText
 */
import type { Text } from '@int/geotoolkit/scene/shapes/Text';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Interface to retrieve feature geometry and apply it to {@link @int/geotoolkit/scene/shapes/Text~Text} as an anchor
 * @interface
 */
export declare abstract class IGeometryToText {
    /**
     * Applies feature geometry to {@link @int/geotoolkit/scene/shapes/Text~Text} shape
     * @param geometry feature geometry
     * @param shape text shape to set the geometry on
     * @param [context] rendering context or its transformation
     */
    abstract apply(geometry: AbstractFeature.Geometry, shape: Text, context?: RenderingContext | Transformation): void;
}
