export declare class MappedPixel {
    constructor();
    clear(): void;
    append(pixel: {
        area: number;
        dx: number;
        dy: number;
    }): void;
    get(index: number): {
        area: number;
        dx: number;
        dy: number;
    };
    getSize(): number;
    static getClassName(): string;
    getClassName(): string;
}
