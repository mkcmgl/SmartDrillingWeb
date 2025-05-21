/**
 * Define simple class map implementation, to resolve class instances in report specified by it callback-name and arguments
 * @example
 * import {ClassMap} from '@int/geotoolkit/report/resources/ClassMap';
 *
 * const classMap = new ClassMap();
 * classMap.register('default-options', (args) => { return {default: 'value'}; });
 *
 * DOMParser.parse(xmlTemplate)
 *     .then((cgDomDocument) => new Parser(cgDomDocument)
 *         .setClassResolver(classMap)
 *         .parse())
 *     .then((geoDocument) => widget.loadDocument(geoDocument));
 */
export declare class ClassMap {
    constructor();
    /**
     * @param className class name
     * @param args arguments
     */
    resolve(className: string, args?: Record<string, any> | Array<any>): any;
    /**
     * Register instance resolver
     * @param className class name or external method
     * @param callback
     * @returns this
     */
    register(className: string, callback: (args: Record<string, any> | Array<any>) => any): this;
    /**
     * Unregister instance resolver
     * @param className class name or external method
     * @returns this
     */
    unregister(className: string): this;
    /**
     * Return default instance of the class map
     */
    static getDefaultInstance(): ClassMap;
}
