/* global globalThis */
/**
 * In the browser it is just a global window object.
 * But if you use this in NodeJS, it will initialize the window object based on the jsdom and canvas library.
 * So there is no reason for a browser-only application or library to use it. Global window object can be used instead.
 * But for NodeJS or an isomorphic library (with browser and NodeJS support) this is mandatory.
 */
export declare const $window: Window & typeof globalThis;
export declare const $document: Document;
