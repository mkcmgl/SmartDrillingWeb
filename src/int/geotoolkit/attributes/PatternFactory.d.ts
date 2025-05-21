import type { Pattern } from '@int/geotoolkit/attributes/Pattern';
import type { Group } from '@int/geotoolkit/scene/Group';
/**
 * Service to provide reusable patterns
 */
export declare class PatternFactory {
    constructor();
    /**
     * Sets pattern load timeout
     * @param timeout
     * @returns this
     */
    setLoadTimeout(timeout: number): this;
    /**
     * Gets pattern load timeout
     * @returns number
     */
    getLoadTimeout(): number;
    /**
     * return an array with all the categories
     */
    getCategories(): string[];
    /**
     * Removes a category
     * @param name name of the Pattern
     */
    removeCategory(name: string): void;
    /**
     * Remove all patterns and categories
     */
    clear(): void;
    /**
     * Simply creates pattern by source without registering at factory
     * @param src image src
     * @param [options] pattern object, image url, image from DOM element or the image patterns options
     */
    createPattern(src: Pattern | Group | HTMLImageElement | string, options?: PatternFactory.CreatePatternOptions): Pattern;
    /**
     * Adds a new pattern with the specified options and registers it on factory. Requires pattern name
     * note: if the pattern already exist it will override it.
     * @param src image src
     * @param options pattern options or pattern name.
     */
    addPattern(src: Group | HTMLImageElement | string, options: PatternFactory.AddPatternOptions | string): Pattern;
    /**
     * Removes a pattern from this service
     * @param name pattern name
     * @param [category] category name
     */
    removePattern(name: string, category?: string): void;
    /**
     * Returns the pattern of specific category and name. Creates a new one if it doesn't exist
     * @param name pattern name
     * @param [category] category name
     */
    getPattern(name: string, category?: string): Pattern | null;
    /**
     * Return the list of pattern names contained in all or specific category
     * @param [category] category name
     * @returns pattern names
     */
    getNames(category?: string): string[];
    /**
     * Returns all image patterns contained in all or specific category
     * @param [category] category name
     * @returns The patterns
     */
    getPatterns(category?: string): Pattern[];
    /**
     * Adds pattern alias to a specific or default category
     * @param base original pattern name
     * @param alias name(s) of the original name
     * @param [category] category name
     */
    addAlias(base: string, alias: string | string[], category?: string): void;
    /**
     * Removes a pattern alias from specific or default category
     * @param alias name
     * @param [category] category name
     */
    removeAlias(alias: string, category?: string): void;
    /**
     * Removes all or specified category aliases
     * @param [category] category name
     */
    clearAliases(category?: string): void;
    /**
     * Returns instance of the registry
     * @returns pattern factory
     */
    static getInstance(): PatternFactory;
    /**
     * Returns default container name
     * @returns default container name
     */
    static getDefaultContainerName(): string;
    /**
     * Set Default container name
     * @param name default container name
     */
    static setDefaultContainerName(name: string): PatternFactory;
}
export declare namespace PatternFactory {
    /**
     * PatternFactory options
     */
    type Options = {
        /**
         * Timeout for loading pattern
         */
        timeout: number;
    };
    /**
     * pattern object, image url, image from DOM element or the image patterns options
     */
    type CreatePatternOptions = {
        /**
         * additional info associated with current image pattern
         * @deprecated since 4.0. Not used anymore.
         */
        userhandle?: Function;
        /**
         * or url of the image to load
         */
        url?: string;
        /**
         * Flag that sets scalability of the pattern
         */
        scalable?: boolean;
        /**
         * desired image width
         */
        desiredwidth?: number;
        /**
         * desired image height
         */
        desiredheight?: number;
    };
    /**
     * pattern options or pattern name.
     */
    type AddPatternOptions = Omit<CreatePatternOptions, 'url'> & {
        /**
         * name of the container
         */
        containername?: string;
        /**
         * name of the pattern
         */
        name: string;
        /**
         * pattern category
         */
        category?: string;
    };
}
