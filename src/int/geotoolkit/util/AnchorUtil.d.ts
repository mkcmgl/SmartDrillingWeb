/**
 * @module geotoolkit/util/AnchorUtil
 */
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * A utility class for AnchorType
 */
export declare class AnchorUtil {
    /**
     * @param transformation transformation
     * @param anchor anchor type
     * @returns transformed anchor
     */
    static transform(transformation: Transformation, anchor: AnchorType): AnchorType;
    static isTop(anchor: AnchorType | string): boolean;
    static isBottom(anchor: AnchorType | string): boolean;
    static isLeft(anchor: AnchorType | string): boolean;
    static isRight(anchor: AnchorType | string): boolean;
    static fromString(anchorType: string | AnchorType): AnchorType;
    static toString(anchorType: string | AnchorType): string;
}
