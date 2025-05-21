import { IFormatter } from '@int/geotoolkit/map/features/formatters/IFormatter';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Features info formatter that creates table based on the one attribute field.
 */
export declare class Table implements IFormatter {
    /**
     * Features info formatter that creates table based on the one attribute field.
     * @param [fields] fields to show in table, all fields are shown if no value provided
     * @param [vertical] true if feature info should be located in a column with the field names at the first.
     * Otherwise features are placed in a row one under another with field names as a header
     */
    constructor(fields?: string[], vertical?: boolean);
    /**
     * Formats html text based on the provided features attribute field
     * @param features features list to format
     * @param text text created by the previous formatters from other layers
     * @returns text the formatted text result
     */
    format(features: AbstractFeature[], text: string): string;
    /**
     * Creates table formatter function based on the provided object
     * @param obj fields formatter object
     * @param [vertical] true if feature info should be located in a column with the field names at the first.
     * Otherwise features are placed in a row one under another with field names as a header
     * @example
     * import {Table} from '@int/geotoolkit/map/features/formatters/Table';
     * const formatter = Table.fromObject({
     *      'City': (feature) => feature.getAttributes()['city'] + ', ' + feature.getAttributes()['country']',
     *      'Population': f(feature) => feature.getAttributes()['pop'],
     *      'Latitude': (feature) => feature.getGeometry()['y'],
     *      'Longitude': (feature) => feature.getGeometry()['x']
     * });
     */
    static fromObject(obj: Record<string, (feature: AbstractFeature) => string>, vertical?: boolean): (features: AbstractFeature[], text: string) => string;
    static getClassName(): string;
    getClassName(): string;
}
