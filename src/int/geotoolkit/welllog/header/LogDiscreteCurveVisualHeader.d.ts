import { LogVisualHeader } from '@int/geotoolkit/welllog/header/LogVisualHeader';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { LogDiscreteCurve } from '@int/geotoolkit/welllog/LogDiscreteCurve';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Define visual to render discrete curve header
 */
export declare class LogDiscreteCurveVisualHeader extends LogVisualHeader<LogDiscreteCurve> {
    /**
     * @param [options] visual for discrete curve header or properties object
     */
    constructor(options?: LogDiscreteCurveVisualHeader.Options | LogDiscreteCurve);
    clone(): LogDiscreteCurveVisualHeader;
    protected copyConstructor(src: LogDiscreteCurveVisualHeader, deepCopy?: boolean): this;
    /**
     * Sets header orientation
     *
     * @param orientation header orientation
     * @returns this
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Returns header orientation
     */
    getOrientation(): Orientation;
    /**
     * Set the visibility of curve name
     * @param visible The visibility of the curve name
     */
    setCurveNameVisible(visible: boolean): this;
    /**
     * Gets visibility of curve name
     */
    getCurveNameVisible(): boolean;
    render(context: RenderingContext): void;
}
export declare namespace LogDiscreteCurveVisualHeader {
    /**
     * visual for discrete curve header or properties object
     */
    type Options = LogVisualHeader.Options<LogDiscreteCurve>;
}
