import type { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { HeaderType } from '@int/geotoolkit/welllog/header/HeaderType';
/**
 * Create the standard representation of a well log header provider.
 */
export declare class LogVisualHeaderProvider {
    constructor(options?: LogVisualHeaderProvider.Options | string);
    /**
     * return name of provider
     */
    getName(): string;
    /**
     * set name
     * @param name name of the header provider
     * @returns this
     */
    setName(name: string): this;
    /**
     * Sets header type to be used to register a header of each visual
     * @param type type of the header
     */
    setHeaderType(type: HeaderType | null): this;
    /**
     * Return header type or null if it is not set
     */
    getHeaderType(): HeaderType | null;
    /**
     * Gets header helpers
     */
    getHeaderHelpers(): Record<string, LogVisualHeader>;
    /**
     * Returns header instance associated with specified visual
     * @param node specified visual
     * @returns header
     */
    getHeader(node: Node): LogVisualHeader | null;
    /**
     * Sets header instance for specified visual
     * @param node current node
     * @param headerInstance prototype to create the header instance
     * @param [silent] silent node to avoid sending events that header is created
     */
    registerHeader(node: Node, headerInstance: LogVisualHeader, silent?: boolean): this;
    /**
     * Sets header implementation
     * @param className class name for visual
     * @param [headerInstance] prototype to create the header instance, use null to unregister
     */
    registerHeaderProvider(className: string, headerInstance?: LogVisualHeader): this;
    /**
     * return default header implementation for specified class name
     * @param className class name for visual
     */
    getHeaderProvider(className: string): LogVisualHeader | null;
    /**
     * Apply changes for existing header provider and
     * register modified provider as a new one for the current type
     * @param className class name for visual
     * @param callback callback
     */
    changeHeaderProvider(className: string, callback: (header: LogVisualHeader) => void): void;
    /**
     * get header prototype
     * @param node type of visual to return
     */
    getHeaderPrototype(node: Node): LogVisualHeader;
    /**
     * Return default instance of the LogVisualHeaderProvider
     *
     * @returns default instance
     */
    static getDefaultInstance(): LogVisualHeaderProvider;
    /**
     * Returns clone
     * @param [deepCopy] clone headers prototypes if deep is true overwise copy only references
     * @returns clone
     */
    clone(deepCopy?: boolean): LogVisualHeaderProvider;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogVisualHeaderProvider.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     * @example
     * import {CompositeLogCurve} from '@int/geotoolkit/welllog/CompositeLogCurve';
     * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
     * class CustomHeader extends LogVisualHeader {...};
     * properties = {
     *     'headerhelpers': {
     *       LogCurve.getClassName(): new CustomHeader()),
     *       CompositeLogCurve.getClassName(): new CustomHeader())
     *     }
     * }
     */
    setProperties(properties?: LogVisualHeaderProvider.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace LogVisualHeaderProvider {
    /**
     * name of the header provider or properties object
     */
    type Options = {
        /**
         * see example
         */
        headerhelpers?: {
            [key: string]: LogVisualHeader;
        };
        /**
         * name of the header provider
         */
        name?: string;
        /**
         * radius of the rounded box
         */
        roundedboxradius?: number;
        /**
         * Header type to be used instead of name to register header for each visual
         */
        headertype?: HeaderType;
    };
    /**
     * properties object
     */
    type OptionsOut = {
        /**
         * see example
         */
        headerhelpers: {
            [key: string]: LogVisualHeader;
        };
        /**
         * radius of the rounded box
         */
        roundedboxradius?: number;
        /**
         * name of the header provider
         */
        name: string;
        /**
         * Header type to be used instead of name to register header for each visual
         */
        headertype: HeaderType | null;
    };
}
