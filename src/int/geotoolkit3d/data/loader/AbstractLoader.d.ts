/**
 * Parent class for data loader.<br>
 *
 * A low level class for loading resources with XMLHttpRequest.<br>
 */
export declare abstract class AbstractLoader {
    protected constructor();
    /**
     * Loads the file at the given URL. Could be either local or remote url.<br>
     * This convenience function exists to mimic THREEJS loaders API.<br>
     * Internally it uses THREE.XHRLoader and THREE.LoadingManager.<br>
     * <br>
     * One could also use directly the function parse() to handle loading the dataset manually/differently.
     * <br>
     * Note that, for convenience, this function returns a Promise AND accepts callbacks (that do not contribute to the returned promise).<br>
     * One is free to use either the Promise or the callback to be 'notified' when the stream is ready.<br>
     * <br>
     * @param url the url of the file
     * @param [params] the optional parameters
     */
    abstract load(url: string, params?: AbstractLoader.LoadOptions): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractLoader {
    /**
     * the optional parameters
     */
    type LoadOptions = {
        /**
         * the function called upon success
         */
        onLoad?: (result: any) => void;
        /**
         * the function called while load progresses
         */
        onProgress?: (result: any) => void;
        /**
         * the function called if an error occurs
         */
        onError?: (error: string | Error | ErrorEvent) => void;
    };
}
