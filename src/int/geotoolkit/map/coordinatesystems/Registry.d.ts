/**
 * @module geotoolkit/map/coordinatesystems/Registry
 */
import { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import { WKT } from '@int/geotoolkit/map/coordinatesystems/WKT';
import type { GeodeticSystem } from '@int/geotoolkit/map/GeodeticSystem';
/**
 * This class provides registry of coordinate systems.
 */
export declare class Registry {
    constructor();
    /**
     * Returns coordinate system created from the object, name, epsg code or WKT string
     * @param system coordinate system, name, epsg code or WKT string
     */
    getCoordinateSystem(system: AbstractSystem | GeodeticSystem | WKT.Options | string | number | null): AbstractSystem | null;
    /**
     * Sets default system class, that will be used in getCoordinateSystem
     * @deprecated since 2023 (4.0)
     * @param System default system class
     * @returns this
     */
    setDefaultSystem(System: typeof AbstractSystem): this;
    /**
     * Registers a new coordinate system
     * @throws Error system is not an instance of AbstractSystem
     * @param system a new coordinate system
     * @returns this
     */
    registerCoordinateSystem(system: AbstractSystem): this;
    /**
     * Returns singleton instance of the coordinate system registry
     */
    static getDefault(): Registry;
    static getClassName(): string;
    getClassName(): string;
}
