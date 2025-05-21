/**
 * @module geotoolkit/util/Hashtable
 */
/**
 * Hashtable
 * @deprecated since 4.0. Use built-in Map instead.
 */
export declare class Hashtable {
    public clear: () => void;
    public clone: () => Hashtable;
    public containsKey: (key: any) => any;
    public containsValue: (value: any) => boolean;
    public each: (callback: any) => void;
    public entries: Function;
    public get: (key: any) => any;
    public isEmpty: () => boolean;
    public keys: () => any[];
    public put: (key: any, value: any) => any;
    public putAll: (hashtable: any, conflictCallback: any) => void;
    public remove: (key: any) => any;
    public size: () => number;
    public values: () => any[];
    /**
     * @param [hashingFunctionParam] hashingFunctionParam
     * @param [equalityFunctionParam] equalityFunctionParam
     */
    public constructor(hashingFunctionParam?: Function, equalityFunctionParam?: Function);
}
