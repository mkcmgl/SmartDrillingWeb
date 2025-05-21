/**
 * Base class for animations
 */
export declare abstract class AbstractAnimation {
    /**
     * Function, that changes scene and returns true if animation was ended
     * @returns true, if animation is ended
     */
    abstract run(): boolean;
    static getClassName(): string;
    getClassName(): string;
}
