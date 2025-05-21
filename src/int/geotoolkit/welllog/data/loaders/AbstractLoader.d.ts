import type { Range } from '@int/geotoolkit/util/Range';
/**
 * Abstract data loader that loads data by requested range
 */
export declare abstract class AbstractLoader {
    /**
     * Dispose
     */
    abstract dispose(): void;
    /**
     * Requests data from the server
     * @param range range
     * @param scale scale
     */
    abstract load(range: Range, scale: number): Promise<void>;
    static getClassName(): string;
    getClassName(): string;
}
