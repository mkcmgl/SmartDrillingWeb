import type { Material, Object3D } from 'three';
export declare type ObjectWithMaterial<O extends Object3D = Object3D, T extends Material | Material[] = Material | Material[]> = O & {
    material: T;
};
export declare function isObjectWithMaterial<O extends Object3D = Object3D, T extends Material | Material[] = Material | Material[]>(source: O): source is ObjectWithMaterial<O, T>;
