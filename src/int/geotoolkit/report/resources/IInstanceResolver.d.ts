/**
 * @module geotoolkit/report/resources/IInstanceResolver
 */
/**
 * Define class resolver interface
 * @interface
 */
export declare abstract class IInstanceResolver {
    /**
     * Return resolved instance
     * @param className class name
     * @param args
     */
    abstract resolve(className: string, args?: Record<string, any> | Array<any>): any | null;
}
