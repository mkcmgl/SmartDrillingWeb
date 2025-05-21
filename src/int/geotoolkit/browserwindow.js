/**
 * @module geotoolkit/window
 */
/* global globalThis */
/**
 * @type {*}
 */
export const $window = typeof globalThis !== 'undefined' ? globalThis.window : window;

/**
 * @type {*}
 */
export const $document = typeof globalThis !== 'undefined' ? globalThis.document : document;
