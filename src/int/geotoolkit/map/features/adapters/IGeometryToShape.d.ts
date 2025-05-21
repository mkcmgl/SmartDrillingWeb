/**
 * @module geotoolkit/map/features/adapters/IGeometryToShape
 */
import type { Node } from '@int/geotoolkit/scene/Node';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Interface to retrieve feature geometry and apply it to {@link @int/geotoolkit/scene/Node~Node} shape
 * @interface
 */
export declare abstract class IGeometryToShape {
    /**
     * Applies feature geometry to {@link @int/geotoolkit/scene/Node~Node} shape
     * @param geometry feature geometry
     * @param shape shape to set the geometry on
     * @param [context] rendering context or its transformation
     */
    abstract apply(geometry: AbstractFeature.Geometry, shape: Node, context?: RenderingContext | Transformation): void;
}
