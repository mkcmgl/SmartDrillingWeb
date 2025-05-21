/**
 * A simple class which knows how to store alarm or easing or format functions and return them, all by name
 */
export declare class FunctionRegistry {
    constructor(options?: FunctionRegistry.Options);
    /**
     * Returns an instance of registry filled with easing functions
     * @returns registry
     */
    static getDefaultInstance(): FunctionRegistry;
    /**
     * Registers handler function by its name
     * @param functions An object with handlers
     */
    registerFunction(functions: Record<string, Function>): this;
    /**
     * Registers handler function by its name
     * @param name Name of the handler
     * @param func Handler Function
     */
    registerFunction(name: string, func: Function): this;
    /**
     * Gets a handler function by its name
     * @param name Name of the function to get
     */
    getFunction(name: string): null | Function;
    getClassName(): string;
    static getClassName(): string;
}
export declare namespace FunctionRegistry {
    /**
     * object with properties
     */
    type Options = {
        /**
         * An object with handlers
         */
        functions?: Record<string, Function>;
    };
}
