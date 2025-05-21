import type { Node } from '@int/geotoolkit/report/dom/Node';
/**
 * Helper class for the Report parsers utils
 * The class Utils contains common Parser utils
 */
export declare class Utils {
    /**
     * Extracts requested attribute from provided node
     * @param node XML node
     * @param attrName The name of attribute to obtain
     * @param [defaultValue] default value
     * @returns Value of the attribute
     */
    static getAttribute(node: Node, attrName: string, defaultValue?: string): string | null;
    /**
     * Parse string into array of objects, assuming that string value looks like "[value,value,value]"
     * for example "[10,20,30,75.8999,36]" or "[x:10;y:20,x:15;y:45]"
     * <polygon path="x:[1,2,3,4,5];y:[5,4,3,2,1]"/>
     * @param value value
     */
    static tryParseArray(value: string | null): (Record<string, any> | string | number | boolean)[] | null;
    /**
     * Parse string in to object, assuming that string value looks like "name:value;name:value"
     * for example <group bounds="x:10;y:10;width:100;height:200" limits="auto"/>
     * or <group layoutstyle="left:50%;top:50%;right:0;bottom:0" limits="auto"/>
     * @param value value
     * @param [trimValues] automatically trim values
     */
    static tryParseJSON(value: string | null, trimValues?: boolean): Record<string, any> | null;
    /**
     * Try parse value to avoid converting it in our existing code
     * @param value value
     */
    static tryParseValue(value: string): number | string | boolean;
    static getClassName(): string;
    getClassName(): string;
}
