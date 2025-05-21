/**
 * @module geotoolkit/contour/faults/ContourFaultList
 */
import { ContourFault } from '@int/geotoolkit/contour/faults/ContourFault';
/**
 * The ContourFaultList object is used to pass the fault data to the contour shape ready for rendering.
 * It also performs some basic pre-processing calculations on the faults (validation/etc)
 */
export declare class ContourFaultList {
    constructor();
    /**
     * Removes all of the fault data from this fault list
     */
    removeAll(): void;
    /**
     * Adds a fault with explicit data to this fault list
     * @throws Error fault has less than 2 point
     * @param xCoordinates array of x coordinates
     * @param yCoordinates array of y coordinates
     * @param left array of left values or boolean indicating if closed
     * @param right array of right values
     * @param closed is fault closed or not
     */
    addFault(xCoordinates: Float64Array, yCoordinates: Float64Array, left: Float64Array, right: Float64Array, closed: boolean): void;
    /**
     * Adds a fault with explicit data to this fault list
     * @throws Error fault has less than 2 point
     * @param xCoordinates array of x coordinates
     * @param yCoordinates array of y coordinates
     * @param closed is fault closed or not
     */
    addFault(xCoordinates: Float64Array, yCoordinates: Float64Array, closed: boolean): void;
    /**
     * Number of faults in list
     */
    getSize(): number;
    /**
     * Gets a Fault from the fault list
     * @param index The index of the fault in the fault list
     * @returns fault The fault
     */
    getFault(index: number): ContourFault | null;
    static getClassName(): string;
    getClassName(): string;
}
