/**
 * This class provide interface for processors which are used by {@link @int/geotoolkit/animation/effects/AbstractEffect~AbstractEffect} to animate complex structures
 * like object, array or other.
 */
export declare abstract class AbstractProcessor<T = any> {
    /**
     * Method iterates over passed object, extracts numeric properties and call function with them
     * @param from initial state
     * @param to target state
     * @param out destination state
     * @param func interpolate function
     * @returns res destination state
     */
    abstract process(from: T, to: T, out: T, func: AbstractProcessor.ProcessAnimationCallback): T;
    /**
     * Calculate distance between two objects
     * @param v1 first object
     * @param v2 second object
     * @returns distance
     */
    distance(v1: T, v2: T): number;
    /**
     * Returns clone of passed object
     * @param v object to clone
     * @returns clone
     */
    abstract clone(v: T): T;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractProcessor {
    type ProcessAnimationCallback = (from: number, to: number) => number;
}
