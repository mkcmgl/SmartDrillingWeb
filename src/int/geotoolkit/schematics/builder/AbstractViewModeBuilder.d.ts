import { IViewModeBuilder } from '@int/geotoolkit/schematics/builder/IViewModeBuilder';
import { ComponentNode } from '@int/geotoolkit/schematics/scene/ComponentNode';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * Abstract builder for schematics non-regular view modes
 */
export declare abstract class AbstractViewModeBuilder implements IViewModeBuilder {
    protected constructor();
    abstract build(it: Iterator<ComponentNode>, limits?: Rect): IViewModeBuilder.BuildOptions;
    abstract getOptions(): Record<string, any>;
    abstract setOptions(options: Record<string, any>): this;
    protected getContentModelLimits(it: Iterator<ComponentNode>): Rect | null;
    /**
     * @param it component nodes iterator
     * @param markerValueMin min marker value (for drawing)
     * @param markerValueMax max marker value (for drawing)
     */
    protected setupMarkersBounds(it: Iterator<ComponentNode>, markerValueMin: number, markerValueMax: number): void;
    protected setupNonMarkersBounds(it: Iterator): void;
    protected prepareSetupComponentNodesBounds(srcDepths: number[], dstDepths: number[]): void;
    /**
     * Sets up components bounds
     * @param srcDepths srcDepths
     * @param dstDepths dstDepths
     * @param it component nodes iterator
     * @param markerValueMin min marker value (for drawing)
     * @param markerValueMax max marker value (for drawing)
     * @throws {Error} if arrays are not defined or not equal in length
     */
    setupComponentNodesBounds(srcDepths: number[], dstDepths: number[], it: Iterator<ComponentNode>, markerValueMin: number, markerValueMax: number): void;
    static getClassName(): string;
    getClassName(): string;
}
