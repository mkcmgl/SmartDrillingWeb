/**
 * @module geotoolkit/map/features/adapters/Center
 */
import { IGeometryToText } from '@int/geotoolkit/map/features/adapters/IGeometryToText';
import type { Text } from '@int/geotoolkit/scene/shapes/Text';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Polygon } from '@int/geotoolkit/map/features/Polygon';
/**
 * Enum for GeometryToText modes
 * @enum
 * @readonly
 */
export declare enum Mode {
    /**
     * Use centroid point
     */
    Centroid = "Centroid",
    /**
     * Use center of the inscribed circle with the biggest possible radius
     */
    Incenter = "Incenter",
    /**
     * Use centroid point by default, if it's outside the geometry use incenter
     */
    CentroidOrIncenter = "CentroidOrIncenter",
    /**
     * Use centroid with a few iterations of circle inscribing to improve the result
     */
    Mixed = "Mixed"
}
/**
 * Calculates geometry center and applies it to {@link @int/geotoolkit/scene/shapes/Text~Text} as an anchor
 */
export declare class Center implements IGeometryToText {
    /**
     * @param [mode] geometry center to anchor mode
     */
    constructor(mode?: Mode);
    /**
     * Calculates geometry center and applies it to {@link @int/geotoolkit/scene/shapes/Text~Text} as an anchor
     * @param geometry feature geometry
     * @param text text shape to set the anchor on
     * @param [context] rendering context or its transformation
     */
    apply(geometry: Polygon.Geometry, text: Text, context?: RenderingContext | Transformation): void;
    static getClassName(): string;
    getClassName(): string;
}
