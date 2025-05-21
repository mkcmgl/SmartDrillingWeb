/**
 * @module geotoolkit/scene/exports/PaperFormat
 */
import { AbstractPaperFormat } from '@int/geotoolkit/scene/exports/AbstractPaperFormat';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { PaperOrientation } from '@int/geotoolkit/scene/exports/PaperOrientation';
/**
 * Paper format
 */
export declare class PaperFormat extends AbstractPaperFormat {
    constructor(name: string, width: number, height: number, top: number, bottom: number, left: number, right: number, unit: AbstractUnit, orientation: PaperOrientation);
}
