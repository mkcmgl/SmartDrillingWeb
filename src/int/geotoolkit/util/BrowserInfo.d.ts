/**
 * Defines the utility class that returns browser info
 */
export declare class BrowserInfo {
    /**
     * if IE browser
     */
    static isIE(): boolean;
    /**
     * if Edge browser
     */
    static isEdge(): boolean;
    /**
     * if Chrome browser
     */
    static isChrome(): boolean;
    /**
     * if Firefox browser
     */
    static isFirefox(): boolean;
    /**
     * if Opera browser
     */
    static isOpera(): boolean;
    /**
     * if Safari browser
     */
    static isSafari(): boolean;
    /**
     * if iOS's browser
     */
    static isIOS(): boolean;
    /**
     * if the browser is running on a mobile device
     * Primary check uses navigator.userAgentData API, some browsers do not support it according to https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgentData
     * Secondary check uses navigator.userAgent. In some cases the userAgent can be configured by user and might cause unreliable detection result.
     * Because iPads running Safari are automatically spoofed as Macintosh devices, we estimate that 'Macintosh with touchscreen' are camouflaged iPad.
     * If the device is an actual Macintosh with a touch-capable monitor, running Safari, this will still return true.
     */
    static isMobile(): boolean;
    /**
     * if device uses touchscreen
     */
    static isTouchScreen(): boolean;
    /**
     * if React Native environment
     */
    static isReactNative(): boolean;
    /**
     * Version
     */
    static getVersion(): string;
    /**
     * Language
     */
    static getLanguage(): string;
    /**
     * if PlatformPreview
     */
    static isPlatformPreview(): boolean;
    /**
     * if PlatformPreview6Plus
     */
    static isPPB6(): boolean;
    /**
     * if PlatformPreview6Plus
     */
    static supportWasm(): boolean;
    /**
     * if using browser
     */
    static isUsingBrowser(): boolean;
}
