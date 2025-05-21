import { HeaderComponent } from '@int/geotoolkit/scene/exports/HeaderComponent';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import type { WellLogWidget } from '@int/geotoolkit/welllog/widgets/WellLogWidget';
import type { PageElement } from '@int/geotoolkit/scene/exports/PageElement';
/**
 * Header Component that print WellLogWidget headers on each page
 */
export declare class WellLogHeaderComponent extends HeaderComponent {
    /**
     * @param widget widget to get headers
     */
    constructor(widget: WellLogWidget);
    /**
     * Get the default size of the component
     *
     * @returns dimension
     */
    getDefaultSize(): Dimension;
    /**
     * Get function to check element visibility. It displays header, where track container exists
     * and header container is not visible.
     *
     * @returns function to check
     */
    isElementVisible(): PageElement.isVisiblePageElementCallback | null;
}
