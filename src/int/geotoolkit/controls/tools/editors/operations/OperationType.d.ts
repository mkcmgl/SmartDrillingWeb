/**
 * @module geotoolkit/controls/tools/editors/operations/OperationType
 */
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Defines possible edit operations types
 * @enum
 * @readonly
 */
export declare enum OperationType {
    /**
     * Translation operation
     */
    Translate = "Translate",
    /**
     * Transformation operation
     */
    Transform = "Transform",
    /**
     * Rotation operation
     */
    Rotate = "Rotate",
    /**
     * Changing bounds operation
     */
    ChangeBounds = "ChangeBounds"
}
/**
 * Defines operation data
 */
declare type OperationData = {
    /**
     * any user-specific data
     */
    hint?: any;
};
/**
 * Defines base callback type for all operations
 */
export declare type OperationCallback<T extends OperationData = OperationData & Record<string, any>> = (node: Node, data: T) => void;
/**
 * Defines transformation operation data
 */
declare type TransformNodeOperationData = OperationData & {
    /**
     * the transformation to apply
     */
    tr: Transformation;
};
/**
 * Defines translation operation data
 */
declare type TranslateNodeOperationData = OperationData & {
    /**
     * the x-axis translate
     */
    dx: number;
    /**
     * the y-axis translate
     */
    dy: number;
};
/**
 * Defines rotation operation data
 */
declare type RotateNodeOperationData = OperationData & {
    /**
     * the rotation angle
     */
    angle: number;
};
/**
 * Defines change bounds operation data
 */
declare type ChangeBoundsOperationData = OperationData & {
    /**
     * the left top corner
     */
    p1: Point;
    /**
     * the right bottom corner
     */
    p2: Point;
};
export declare type OperationDataMap = {
    [OperationType.Translate]: TranslateNodeOperationData;
    [OperationType.Transform]: TransformNodeOperationData;
    [OperationType.Rotate]: RotateNodeOperationData;
    [OperationType.ChangeBounds]: ChangeBoundsOperationData;
};
export {};
