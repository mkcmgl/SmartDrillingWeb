import { IFormatter } from '@int/geotoolkit/map/features/formatters/IFormatter';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Features info formatter based on the one attribute field.
 */
export declare class SingleField implements IFormatter {
    /**
     * Features info formatter based on the one attribute field.
     * @param [field] field to show, id is used if no value provided
     * @param [separator] html separator between different features info (e.g use ', ' for comma-separated list)
     * @param [limit] upper limit for the aggregated features are shown
     * @param [unique] true to filter repeating fields
     */
    constructor(field?: string, separator?: string, limit?: number, unique?: boolean);
    /**
     * Formats html text based on the provided features attribute field
     * @param features features list to format
     * @param text text created by the previous formatters from other layers
     * @returns text the formatted text result
     */
    format(features: AbstractFeature[], text: string): string;
    static getClassName(): string;
    getClassName(): string;
}
