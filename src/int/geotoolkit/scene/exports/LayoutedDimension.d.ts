import type { Dimension } from '@int/geotoolkit/util/Dimension';
export type LayoutedDimension = {
    fixed: Dimension | null;
    scaled: Dimension | null;
};
