/**
 * Registry which stores geometries.
 */
export declare class Registry {
    constructor();
    /**
     * Return known geometry
     * @param geometryName geometry name
     * @returns extension geometry extension
     */
    getGeometry(geometryName: string): Function;
    /**
     * Register geometry extension
     * @param geometryName geometry name
     * @param extension geometry extension
     */
    registerGeometry(geometryName: string, extension: Function): this;
    /**
     * Returns instance of the Geometries registry
     * @returns Geometries registry
     */
    static getInstance(): Registry;
    static getClassName(): string;
    getClassName(): string;
}
