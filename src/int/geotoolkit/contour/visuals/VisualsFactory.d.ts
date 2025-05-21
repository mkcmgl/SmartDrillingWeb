/**
 * @module geotoolkit/contour/visuals/VisualsFactory
 */
import { ContourFillVisual } from '@int/geotoolkit/contour/visuals/ContourFillVisual';
import { ContourLineVisual } from '@int/geotoolkit/contour/visuals/ContourLineVisual';
import { ContourFaultVisual } from '@int/geotoolkit/contour/visuals/ContourFaultVisual';
import { ContourBorderVisual } from '@int/geotoolkit/contour/visuals/ContourBorderVisual';
/**
 * A factory to create instances of contour visuals.
 * This class utilises the singleton pattern to build the factory itself.
 */
export declare class VisualsFactory {
    /**
     * Returns the singleton factory instance.
     * @returns instance The factory instance
     */
    static getInstance(): VisualsFactory;
    /**
     * Creates a new fill visual
     * @returns fillVisual The fill visual.
     */
    createFillVisual(): ContourFillVisual;
    /**
     * Creates a new line visual
     * @returns lineVisual The line visual.
     */
    createLineVisual(): ContourLineVisual;
    /**
     * Creates a new fault visual
     * @returns faultVisual The fault visual.
     */
    createFaultVisual(): ContourFaultVisual;
    /**
     * Creates a new border visual.
     * @returns borderVisual The borer visual.
     */
    createBorderVisual(): ContourBorderVisual;
    static getClassName(): string;
    getClassName(): string;
}
