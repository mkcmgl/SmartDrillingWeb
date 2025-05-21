/**
 * Empty js object with the record-like type
 */
export declare type EmptyRecord = Record<PropertyKey, never>;
/**
 * Any js object with the record-like type
 */
export declare type AnyRecord = Record<PropertyKey, unknown>;
// To use with protected ctors
export declare type ClassType<T = any> = Function & {
    prototype: T;
};
export declare type Constructor<T = any> = abstract new (...args: any) => T;
export declare type Constructable<T = any> = new (...args: any) => T;
/**
 * Makes interface, class, etc, looks like Record<,> for the typescript type system
 */
export declare type ToRecord<T> = {
    [K in keyof T]: T[K];
};
/**
 * Shallow merge types by properties substitution
 */
export declare type Merge<T extends AnyRecord, U extends AnyRecord> = Omit<T, keyof U> & U;
/**
 * Recursively merge types by second type parameter properties substitution
 */
export declare type DeepMerge<T, U> = U extends AnyRecord ? T extends AnyRecord ? {
    [K in keyof U]: K extends keyof T ? DeepMerge<T[K], U[K]> : U[K];
} & Omit<T, keyof U> : U : U;
/**
 * Toggle lowercase for the property names, one level only.
 */
export declare type ToLowercase<T extends AnyRecord> = {
    [Key in keyof T & string as Lowercase<Key>]: T[Key];
};
/**
 * Recursively toggle lowercase for the property names.
 */
export declare type ToDeepLowercase<T> = T extends AnyRecord ? {
    [K in string & keyof T as Lowercase<K>]: ToDeepLowercase<T[K]>;
} : T;
/**
 * Recursively make record properties required
 */
export declare type DeepRequired<T> = T extends AnyRecord ? {
    [K in keyof T]-?: DeepRequired<T[K]>;
} : T;
/**
 * Recursively make record properties partial
 */
export declare type DeepPartial<T> = T extends AnyRecord ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : T;
/**
 * Inherit the prototype methods from one constructor into another.
 * Based on the Closure Library
 * @deprecated since 4.0, use standard extends instead
 * @param childClass Child class.
 * @param parentClass Parent class.
 */
export declare const inherits: (childClass: ClassType, parentClass: ClassType) => void;
/**
 * Sets resources
 * @deprecated since 4.0. Use external storage instead.
 * @param moduleName module name
 * @param resourceName resource name
 * @param resource resource object
 */
export declare const setResource: (moduleName: string, resourceName: string, resource: any) => void;
/**
 * Return a resource for the current module and resource name.
 * @deprecated since 4.0. Use external storage instead.
 * @param moduleName current module
 * @param resourceName resource name
 */
export declare const getResource: (moduleName: string, resourceName: string) => any | null;
/**
 * Print in console log message. Passes on all parameters as passed.
 *
 * @param {...*} args a list of objects to output. The string representations of each of these objects are appended together in the order listed and output
 */
export declare const log: (...args: any[]) => void;
/**
 * Print in console info message. Passes on all parameters as passed.
 *
 * @param {...*} args a list of objects to output. The string representations of each of these objects are appended together in the order listed and output
 */
export declare const info: (...args: any[]) => void;
/**
 * Print in console warn message. Passes on all parameters as passed.
 *
 * @param {...*} args a list of objects to output. The string representations of each of these objects are appended together in the order listed and output
 */
export declare const warn: (...args: any[]) => void;
/**
 * Print in console error message. Passes on all parameters as passed.
 *
 * @param {...*} args a list of objects to output. The string representations of each of these objects are appended together in the order listed and output
 */
export declare const error: (...args: any[]) => void;
/**
 * Make shallow comparison of two objects
 * @param firstObject first object to compare
 * @param secondObject second object to compare
 */
export declare function shallowEqual(firstObject: Record<string, any>, secondObject: Record<string, any>): boolean;
/**
 * This method is used to merge properties of two objects from options to results
 *
 * @param options an object to merge properties.
 * @param [result] Object to merge properties from options. All properties from options are copied to result. If result contains property from options it is replaced. If result has a property and options doesn't have a property the property will be saved in result.
 * @param [lowercase] merge all properties to lower case. if this flag is set then result will have all properties in lower case
 * @param [copyUndefinedOptions] copy input options with undefined values
 */
export declare function mergeObjects<T, U>(options: T, result: U, lowercase: true, copyUndefinedOptions?: boolean): Merge<ToLowercase<ToRecord<T>>, ToRecord<U>>;
/**
 * This method is used to merge properties of two objects from options to results
 *
 * @param options an object to merge properties.
 * @param [result] Object to merge properties from options. All properties from options are copied to result. If result contains property from options it is replaced. If result has a property and options doesn't have a property the property will be saved in result.
 * @param [lowercase] merge all properties to lower case. if this flag is set then result will have all properties in lower case
 * @param [copyUndefinedOptions] copy input options with undefined values
 */
export declare function mergeObjects<T, U>(options: T, result?: U, lowercase?: false, copyUndefinedOptions?: boolean): Merge<ToRecord<T>, ToRecord<U>>;
/**
 * Create a deep copy of array
 * @param array array of object or primitive types
 * @param [lowercase] optional parameters to convert properties of object to lower case
 * @returns a new instance of objects' array
 */
export declare const deepArrayCopy: <T>(array: T, lowercase?: boolean) => T;
/**
 * Deep merge object method is the same as mergeObject method , except it supports nested objects.
 * @param options an object to merge properties.
 * @param [result] Object to merge properties from options
 * @param [lowercase] merge all properties to lower case. if this flag is set then result will have all properties in lower case
 */
export declare function deepMergeObject(options: any, result?: any, lowercase?: boolean): any;
/**
 * Return an object class name
 * @param obj object to return a class name
 */
export declare const getObjectClassName: (obj: any) => string;
/**
 * Create copy of the object
 * @param obj object to copy
 * @param [target] target
 * @param [param] param to be passed to copy constructor
 * @returns a copy of the input object
 */
export declare const createCopy: <T = any>(obj: T, target?: T, param?: any) => T;
/**
 * Sets name of the class, which can be retrieved using method getClassName()
 * or toString()
 * @param currentClass class
 * @param className name of the class
 */
export declare const setClassName: (currentClass: ClassType, className: string) => void;
/**
 * Does nothing. Intended to use as a default implementation of the optional method.
 */
export declare const dummyMethod: () => void;
/**
 * This method is used to mark a method, which does not have implementation. By default, it throws exception that method is not implemented.
 * @throws {Error} when invoked to indicate the method should be overridden.
 */
export declare const abstractMethod: () => never;
export declare const logLevel: number;
/**
 * Specifies a virtual method.<br>
 *
 * by default, it generates log message when invoked to indicate the method should be overridden.
 */
export declare const virtualMethod: () => void;
/**
 * Return the current version
 */
export declare const getVersion: () => string;
/**
 * Return the current version with full information
 */
export declare const getFullVersion: () => string;
/**
 * Returns class constructor of the class, which is specified
 * as string with full namespace.
 * @param className class name to get the type for
 * @returns constructor of the specified type
 */
export declare const getClassType: (className: string) => ClassType;
/**
 * Return a base class name if it exists
 * @param className class name
 */
export declare const getBaseClassName: (className: string) => string | null;
/**
 * Create instance of the class, which is specified as string with
 * full namespace. This class must have default constructor
 * @param className class name to instantiate
 * @param [options] optional parameters
 * @returns instance of the specified type
 */
export declare const instantiateClass: (className: string, options?: Record<string, any>) => any;
/**
 * Create a function from a string containing the function
 * @deprecated since 4.0
 * @param str string to unpack into a function
 * @returns func function created from string
 */
export declare const str2Function: (str: string) => Function;
export declare const addWatermark: (text: string, color: string, size: string) => void;
/**
 * Enables render using native resolution
 *
 * @param enabled device pixel ratio is set based on this flag
 */
export declare const enableRenderNativeResolution: (enabled: boolean) => void;
/**
 * Returns true if render native resolution
 */
export declare const isRenderNativeResolution: () => boolean;
/**
 * Returns pixel scale on current device
 */
export declare const getPixelScale: () => number;
/**
 * Converts css size to canvas size
 *
 * @param size canvas size
 */
export declare const convertCssToCanvas: (size: number) => number;
/**
 * Converts object to object with properties in lower case
 * @param object object to be processed
 * @returns object new object (!not modified)
 */
export declare const toLowerCase: (object: Record<string, any>) => Record<string, any>;
/**
 * Process object in order to return a copy of the object
 * with flat property names. This method doesn't change original
 * object properties
 *
 * @param object object to be processed
 * @param [recursive] is recursive call flag
 */
export declare function processObjectProperties(object: any, recursive?: boolean): any;
/**
 * Declares "childClass" to implement "parentInterface"
 *
 * @param childClass child class
 * @param parentInterface parent interface
 */
export declare const implementsInterface: (childClass: ClassType, parentInterface: ClassType) => void;
/**
 * Requests "childClass" for "parentInterface" support
 *
 * @param childInstance child class instance
 * @param parentInterface parent interface or its short name
 * @returns child class instance if "parentInterface" is implemented; <b>null</b> otherwise
 * @throws {Error} if parentInterface is not defined
 */
export declare const interfaceCast: (childInstance: any, parentInterface: ClassType | string) => any;
/**
 * Check if instance is a parentClass or implements interface
 * @param instance instance to check implementation
 * @param parentClass parent interface or class
 */
export function isInstanceOf<T>(instance: unknown, parentClass: Constructor<T> | ClassType<T> | string): instance is T;
/**
 * Check if object is empty (has no properties)
 * @param object object to check
 */
export declare const isObjectEmpty: (object: any) => boolean;
/**
 * Utility function to parse inline font string to json object.
 * if the font string is not valid it will return an null object.
 *
 * @param {string} font
 * @returns {object|null} props
 * @returns {string} props.fontweight font weight (normal, bold, etc.)
 * @returns {string} props.fontsize font size (ex: 12px)
 * @returns {string} props.fontfamily font family
 * @returns {string} props.fontlineheight line height
 * @returns {string} props.fontstyle font weight (normal, italic, etc.)
 */
export declare const parseFont: (font: string) => {
    fontweight: string;
    fontsize: string;
    fontfamily: string;
    fontlineheight: string;
    fontstyle: string;
};
/**
 * initialize modules
 * @param options options
 */
export declare const init: (options: {
    /**
     * modules to init
     */
    imports?: ClassType[];
}) => void;
export {};
