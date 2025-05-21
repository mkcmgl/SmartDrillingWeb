/**
 * @module geotoolkit/data/ILinkResolver
 */
export declare abstract class ILinkResolver {
    /**
     * Accept data link
     * @param data data link
     * @returns true if link is supported and false if link is not supported
     */
    abstract accept(data: string): boolean;
    /**
     * Resolve data link
     * @param data data link
     */
    abstract resolve(data: string): void;
}
