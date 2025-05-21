/**
 * @module geotoolkit/schematics/data/sort/SortComponents1
 */
import { SortComponents } from '@int/geotoolkit/schematics/data/sort/SortComponents';
import { WellBoreData } from '@int/geotoolkit/schematics/data/WellBoreData';
import { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * Default sorting algorithm
 * 1. Top depth (smallest first)<br>
 * 2. Diameter (biggest first)<br>
 * 3. Component length if two overlaps (longest first)
 */
export declare class DefaultSortComponents extends SortComponents {
    constructor(options: DefaultSortComponents.Options);
    /**
     * Sorts well bore components data
     * @param data well bore components data
     * @returns ierator over sorted components
     */
    sort(data: WellBoreData.Elements[]): Iterator<WellBoreData.Elements>;
}
export declare namespace DefaultSortComponents {
    /**
     * options
     */
    type Options = {
        /**
         * function to return priority level based on component name
         */
        getpriority?: (name: string) => number;
        /**
         * comparator function(a, b)
         */
        comparator?: (a: WellBoreData.Elements, b: WellBoreData.Elements) => number;
    };
}
