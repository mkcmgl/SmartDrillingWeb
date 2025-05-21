/**
 * @module geotoolkit3d/data/loader/vtk/VTKLoader
 */
import { AbstractLoader } from '@int/geotoolkit3d/data/loader/AbstractLoader';
/**
 * This class can parse vtk files and return a comprehensive json object.<br>
 * <br>
 * This object can be used to generate Geometries and Object3D.<br>
 * See {@link @int/geotoolkit3d/data/loader/vtk/VTKFactory~VTKFactory} for a default implementation of VTK_JSON-to-Object3D implementation.<br>
 * <br>
 * Refer to the {@link http://www.vtk.org/wp-content/uploads/2015/04/file-formats.pdf VTK-File-specification} for details.<br>
 * <br>
 * Note that, for now, only ASCII format is supported.
 */
export declare class VTKLoader extends AbstractLoader {
    constructor();
    /**
     * Loads the vtk file at the given URL.<br>
     * <br>
     * This convenience function exists to mimic THREEJS loaders API.<br>
     * Internally it uses THREE.XHRLoader and THREE.LoadingManager.<br>
     * @param url The url of the VTK file
     * @param params the optional parameters
     */
    load(url: string, params?: AbstractLoader.LoadOptions): void;
}
