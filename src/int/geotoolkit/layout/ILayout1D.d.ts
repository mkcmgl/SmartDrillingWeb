/**
 * @module geotoolkit/layout/ILayout1D
 */
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Range } from '@int/geotoolkit/util/Range';
import type { ILayoutElement1D } from '@int/geotoolkit/layout/ILayoutElement1D';
/**
 * Interface to layout {@link @int/geotoolkit/layout/ILayoutElement1D~ILayoutElement1D} elements.
 * @see {@link @int/geotoolkit/layout/ILayoutElement1D~ILayoutElement1D}
 *
 * @interface
 */
export declare abstract class ILayout1D {
    /**
     * Layouts elements
     *
     * @param elements {@link @int/geotoolkit/layout/ILayoutElement1D~ILayoutElement1D} elements to layout
     * @param context rendering context
     * @param limits limits to layout elements within
     */
    abstract layout(elements: Iterator<ILayoutElement1D>, context: RenderingContext, limits: Range): void;
}
