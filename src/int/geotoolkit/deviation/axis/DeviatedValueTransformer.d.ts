/**
 * @module geotoolkit/deviation/axis/DeviatedValueTransformer
 */
import { ValueTransformer } from '@int/geotoolkit/axis/ValueTransformer';
import type { DeviatedCompositeNode } from '@int/geotoolkit/deviation/scene/DeviatedCompositeNode';
import type { Axis } from '@int/geotoolkit/axis/Axis';
/**
 * Axis labels' ValueTransform implementation for deviated value-transformed case.
 */
export declare class DeviatedValueTransformer extends ValueTransformer {
    constructor(deviatedCompositeNode: DeviatedCompositeNode, valueTransformer: ValueTransformer, axis: Axis);
    getAxis(): Axis;
    transform(valueModelAxis: number): number;
}
