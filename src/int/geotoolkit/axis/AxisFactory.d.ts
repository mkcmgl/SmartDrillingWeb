import { Axis } from '@int/geotoolkit/axis/Axis';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
/**
 * Defines helper method(s) to create axis instance
 */
export declare class AxisFactory {
    /**
     * Returns instance of the factory
     * @returns factory
     */
    static getInstance(): AxisFactory;
    /**
     * Creates axis
     *
     * @param options axis options
     * @returns axis
     */
    create(options: Axis.Options & {
        location: AnnotationLocation;
    }): Axis;
    static getClassName(): string;
    getClassName(): string;
}
