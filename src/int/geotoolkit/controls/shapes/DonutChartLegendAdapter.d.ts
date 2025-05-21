import { ShapeLegendAdapter } from '@int/geotoolkit/controls/shapes/ShapeLegendAdapter';
import { SymbolLegendItem } from '@int/geotoolkit/controls/shapes/SymbolLegendItem';
import type { DonutChart } from '@int/geotoolkit/controls/shapes/DonutChart';
/**
 * Creates {@link @int/geotoolkit/controls/shapes/SymbolLegendItem~SymbolLegendItem} elements
 * based on {@link @int/geotoolkit/controls/shapes/DonutChart~DonutChart} shape
 */
export declare class DonutChartLegendAdapter extends ShapeLegendAdapter {
    constructor(donutChart: DonutChart, options?: ShapeLegendAdapter.Options);
    /**
     * Creates legend items based on donut shape instance (and options if provided)
     * @param [options] legend items' options
     * @returns array of {@link @int/geotoolkit/controls/shapes/LegendItem~LegendItem} elements
     */
    createLegendItems(options?: ShapeLegendAdapter.Options): SymbolLegendItem[];
    /**
     * Disposes the object.
     */
    dispose(): void;
}
