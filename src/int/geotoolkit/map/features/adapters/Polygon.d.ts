import { IGeometryToShape } from '@int/geotoolkit/map/features/adapters/IGeometryToShape';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Polygon as PolygonShape } from '@int/geotoolkit/scene/shapes/Polygon';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Polygon as _Polygon } from '@int/geotoolkit/map/features/Polygon';
/**
 * Applies feature geometry's 'x' and 'y' coordinates (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/Polygon~Polygon}
 */
export declare class Polygon implements IGeometryToShape {
    /**
     * Applies feature geometry's 'x' and 'y' coordinates to {@link @int/geotoolkit/scene/shapes/Polygon~Polygon} shape
     *
     * @param geometry feature geometry
     * @param polygon polygon to set the coordinates on
     * @param [context] rendering context or its transformation
     */
    apply(geometry: _Polygon.Geometry, polygon: PolygonShape, context?: RenderingContext | Transformation): void;
    static getClassName(): string;
    getClassName(): string;
}
