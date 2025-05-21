import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
/**
 * Abstract class to sorts well bore components data into rendering order
 */
export declare abstract class SortComponents {
    /**
     * Sorts well bore components data
     * @param well bore components data
     * @returns ierator over sorted components
     */
    abstract sort(data: WellBoreData.Elements[]): Iterator<WellBoreData.Elements>;
    static getClassName(): string;
    getClassName(): string;
}
