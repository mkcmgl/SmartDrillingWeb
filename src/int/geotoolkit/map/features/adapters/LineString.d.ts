/**
 * @module geotoolkit/map/features/adapters/LineString
 */
import { IGeometryToShape } from '@int/geotoolkit/map/features/adapters/IGeometryToShape';
import type { Polyline } from '@int/geotoolkit/scene/shapes/Polyline';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { LineString as _LineString } from '@int/geotoolkit/map/features/LineString';
/**
 * Applies {@link @int/geotoolkit/map/features/LineString~LineString} LineString geometry's coordinates (in Map C.S.) to {@link @int/geotoolkit/scene/shapes/Polyline~Polyline}
 */
export declare class LineString implements IGeometryToShape {
    /**
     * Applies feature geometry's 'x' and 'y' coordinates to {@link @int/geotoolkit/scene/shapes/Polyline~Polyline} shape
     *
     * @param geometry feature geometry
     * @param polyline polyline to set the coordinates on
     * @param [context] rendering context or its transformation
     */
    apply(geometry: _LineString.Geometry, polyline: Polyline, context?: RenderingContext | Transformation): void;
    static getClassName(): string;
    getClassName(): string;
}
