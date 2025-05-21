import type { Object3D as ThreeObject3D } from 'three';
/**
 * This utility class provides a way to bind objects with a callback
 * function.<br>
 * For example, if an object is selected, it will be processed
 * through callback function if its namespace is in processor.
 */
export declare class ObjectProcessor {
    constructor(name?: string);
    /**
     * Return name of provider
     */
    getName(): string;
    /**
     * Set name
     * @param name name of the header provider
     * @returns this
     */
    setName(name: string): this;
    /**
     * Register object with its class name,
     * by binding it to a custom process callback.<br>
     * @param name the class name of object
     * @param callback the callback that binds with
     * @returns this
     */
    registerObject(name: string, callback: ObjectProcessor.Callback): this;
    /**
     * Return and process the object if it has been registered in the processor
     * @param object the object to be processed
     * @returns object
     */
    processObject(object: ThreeObject3D): ThreeObject3D | ThreeObject3D[];
    /**
     * Return default instance of the ObjectProcessor
     *
     * @returns this
     */
    static getDefaultInstance(): ObjectProcessor;
    /**
     * Return the properties of this processor
     * @returns properties
     */
    getProperties(): ObjectProcessor.Options;
    /**
     * Reset the processor to default state
     * @returns this
     */
    resetProcessor(): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace ObjectProcessor {
    type Callback = (x: ThreeObject3D) => ThreeObject3D | ThreeObject3D[];
    type Options = {
        count: number;
    } & Record<string, Record<string, Callback>>;
}
