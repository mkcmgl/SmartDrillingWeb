/**
 * @module geotoolkit/contour/datasource/ContourDataSource
 */
import { AbstractContourDataSource } from '@int/geotoolkit/contour/datasource/AbstractContourDataSource';
/**
 * The type of contour grid.
 * @enum
 * @readonly
 */
export declare enum ContourGridType {
    /**
     * The triangular grid type
     */
    TriangularGrid = "TriangularGrid",
    /**
     * The rectangular grid type
     */
    RectangularGrid = "RectangularGrid",
    /**
     * The unknown grid type
     */
    Unknown = "Unknown"
}
/**
 * This 'interface' class extends abstract definition of contour data, which
 * includes information about model limits and contour grid.
 * This interface can be implemented for ZMAP and TSURF data
 */
export declare abstract class ContourDataSource extends AbstractContourDataSource {
    protected constructor();
    /**
     * Sets the object name
     * @param name The name of the object
     * @returns this
     */
    setObjectName(name: string): this;
    /**
     * Gets the object name
     * @returns name The name of the object
     */
    getObjectName(): string;
    /**
     * Gets the minimum z-value.
     * @returns min The minimum of the data.
     */
    getMin(): number;
    /**
     * Sets the minimum z-value.
     * @param min The minimum of the data.
     * @returns this
     */
    setMin(min: number): this;
    /**
     * Gets the maximum z-value.
     * @returns max The maximum of the data.
     */
    getMax(): number;
    /**
     * Sets the maximum z-value.
     * @param max The maximum of the data
     * @returns this
     */
    setMax(max: number): this;
    /**
     * Updates area.
     */
    abstract updateArea(): void;
    /**
     * Gets the type of grid.
     */
    abstract getGridType(): ContourGridType;
}
