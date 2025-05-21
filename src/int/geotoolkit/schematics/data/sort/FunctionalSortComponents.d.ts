/**
 * @module geotoolkit/schematics/data/sort/FunctionalSortComponents
 */
import { SortComponents } from '@int/geotoolkit/schematics/data/sort/SortComponents';
import { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * General sorting class: sorts well bore components according to customer's function
 */
export declare class FunctionalSortComponents extends SortComponents {
    constructor(f: (data: WellBoreData.Elements[]) => WellBoreData.Elements[]);
    /**
     * Sorts well bore components data
     * @param data well bore components data
     * @returns ierator over sorted components
     */
    sort(data: WellBoreData.Elements[] | WellBoreData): Iterator<WellBoreData.Elements>;
}
