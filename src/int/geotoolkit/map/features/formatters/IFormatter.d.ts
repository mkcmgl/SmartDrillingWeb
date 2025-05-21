/**
 * @module geotoolkit/map/features/formatters/IFormatter
 */
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Interface for the tooltip data formatter for map feature layers
 * @interface
 */
export declare abstract class IFormatter {
    /**
     * Formats features data info
     * @param features features list to format
     * @param text text created by the previous formatters from other layers
     * @returns text the formatted text result
     */
    abstract format(features: AbstractFeature[], text: string): string;
}
