import { IFormatter } from '@int/geotoolkit/map/features/formatters/IFormatter';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Features info formatter that displays features attributes in a simple list
 */
export declare class List implements IFormatter {
    /**
     * Features info formatter that displays features attributes in a simple list
     * @param showId true to display features id before their attributes, false otherwise
     */
    constructor(showId?: boolean);
    /**
     * Formats html text based on feature attributes as a list
     * @param features features list to format
     * @param text text created by the previous formatters from other layers
     * @returns text the formatted text result
     */
    format(features: AbstractFeature[], text: string): string;
    static getClassName(): string;
    getClassName(): string;
}
