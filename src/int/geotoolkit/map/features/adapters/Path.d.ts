/**
 * @module geotoolkit/map/features/adapters/Path
 */
import { IGeometryToShape } from '@int/geotoolkit/map/features/adapters/IGeometryToShape';
import type { Path as PathShape } from '@int/geotoolkit/scene/shapes/Path';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Polygon } from '@int/geotoolkit/map/features/Polygon';
/**
 * Applies {@link @int/geotoolkit/map/features/LineString~LineString} or {@link @int/geotoolkit/map/features/Polygon~Polygon}
 * geometry's coordinates (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/Path~Path}
 */
export declare class Path implements IGeometryToShape {
    /**
     * Applies feature geometry's 'x' and 'y' coordinates to {@link @int/geotoolkit/scene/shapes/Path~Path} shape
     *
     * @param geometry feature geometry
     * @param path path to set the coordinates on
     * @param [context] rendering context or its transformation
     */
    apply(geometry: Polygon.Geometry, path: PathShape, context?: RenderingContext | Transformation): void;
    static getClassName(): string;
    getClassName(): string;
}
