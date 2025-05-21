import type { Point } from '@int/geotoolkit/util/Point';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Represents an abstract class that specify model area.
 */
export declare abstract class Area {
    /**
     * Check if the area contains point
     * @param x x position of the point
     * @param y y position of the point
     * @throws {Error} if illegal argument count
     */
    abstract contains(x: number, y: number): boolean;
    /**
     * Check if the area contains point
     * @param point point
     * @throws {Error} if illegal argument count
     */
    abstract contains(point: Point): boolean;
    abstract contains(x: number | Point, y?: number): boolean;
    /**
     * Return bounds and locks the bounds rect from further editing.
     * @returns bounds
     */
    abstract getBounds(): Rect | null;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): Record<string, any>;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Record<string, any>): this;
    static getClassName(): string;
    getClassName(): string;
}
