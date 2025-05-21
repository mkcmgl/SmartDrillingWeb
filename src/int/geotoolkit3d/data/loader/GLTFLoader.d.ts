/**
 * @module geotoolkit3d/data/loader/GLTFLoader
 */
import { AbstractLoader } from '@int/geotoolkit3d/data/loader/AbstractLoader';
import type { Merge } from '@int/geotoolkit/base';
import type { Group } from 'three';
import type { AssetType, GLTFPropertyType } from '@int/geotoolkit3d/data/loader/glTFType';
/**
 * glTF loader class.<br>
 * Support glTF 2.0 format. See {@link https://github.com/KhronosGroup/glTF} for specification.
 * For a quick overview of the format, see
 * {@link https://github.com/KhronosGroup/glTF/blob/main/specification/2.0/figures/gltfOverview-2.0.0b.png}
 */
export declare class GLTFLoader extends AbstractLoader {
    constructor();
    /**
     * Load the given glTF data url
     * @param url the URL to the glTF object.
     * @param params options object with the callback to handle successful loading
     */
    load(url: string, params?: GLTFLoader.LoadOptions): void;
}
export declare namespace GLTFLoader {
    /**
     * The result of the glTF parsing
     */
    type ParseResult = {
        /**
         * The animations in this glTF object. Currently unsuported.
         */
        animations: [
        ];
        /**
         * Metadata embedded in the glTF object. Contain the version of the glTF used.
         */
        asset: AssetType;
        /**
         * The cameras in this glTF object. Currently unsuported.
         */
        cameras: [
        ];
        /**
         * The main scene in this glTF object.
         */
        scene: Group;
        /**
         * The scenes as THREE.js Group array, usually contains Object3D as children.
         */
        scenes: Group[];
        /**
         * Additional data, including gltfExtensions used by the object,
         * as well as any properties stored in the original glTF object at glTF.extras.
         */
        userData: GLTFPropertyType['extras'] & {
            gltfExtensions: Record<string, object>;
        };
    };
    type LoadOptions = Merge<AbstractLoader.LoadOptions, {
        /**
         * The callback to handle the successfully loaded glTF object.
         */
        onLoad?: (result: GLTFLoader.ParseResult) => void;
    }>;
}
