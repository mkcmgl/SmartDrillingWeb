/**
 * @module geotoolkit3d/data/loader/surface/EarthVisionLoader
 */
import { AbstractLoader } from '@int/geotoolkit3d/data/loader/AbstractLoader';
/**
 * A loader dedicated for EarthVision grid surface.<br>
 * EarthVision is a common-used format in oil & gas softwares such as Petrel.<br>
 * It has grid dimension defined at file header. The dataset specification is in a form of
 * (x, y, z, [colume], [row]) for each line.<br>
 */
export declare class EarthVisionLoader extends AbstractLoader {
    constructor();
    load(url: string, params?: AbstractLoader.LoadOptions): void;
}
