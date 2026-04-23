/**
 * Convenience object for HTTP requests.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/httphelper_dz
 */
declare class DzHttpHelper extends QObject {

    /* Constructors */

    constructor();

    /* Methods */

    /**
     * Aborts the current request and deletes all scheduled requests.
     */
    abort(): void;

    /**
     * Sends an asynchronous request to the server.
     * @param content ByteArray - The content to send (if any).
     */
    doAsynchronousRequest(content?: ByteArray): void;

    /**
     * Sends a synchronous request to the server.
     * @param content ByteArray - The content to send (if any).
     * @returns ByteArray A byte array consisting of the response content.
     */
    doSynchronousRequest(content?: ByteArray): ByteArray;

    /**
     * @returns string A human-readable description of the last error that occurred (if any), otherwise an empty string.
     */
    getError(): string; // String

    /**
     * Sets the HTTP connection mode used for connecting to the server.
     * @param mode string - The connection mode to set - i.e., “http” or “https”.
     */
    setConnectionMode(mode: string): void;

    /**
     * Sets the value of the special HTTP header content-type field.
     * @param type string - The content-type to set - e.g., “application/json”.
     */
    setContentType(type: string): void;

    /**
     * @param keys any[] - The keys in the http header.
     * @param values any[] - The corresponding values for the keys.
     */
    setHeaderValues(keys: any[], values: any[]): void;

    /**
     * Sets the host for requests.
     * @param host string - The host to set - e.g.,“www.daz3d.com”.
     */
    setHost(host: string): void;

    /**
     * Sets the path portion of the URL.
     * @param path string - The path to set - e.g., “/dazApi/slab/13176”.
     */
    setPath(path: string): void;

    /**
     * Sets the query string (and optionally fragment) portion of the URL.
     * @param query string - The query string (and optionally fragment) to set.
     */
    setQueryString(query: string): void;

    /**
     * Sets the HTTP request method which describes the requests action.
     * @param method string - The request method to set - e.g., “GET”, “POST”, “HEAD”.
     */
    setRequestMethod(method: string): void;

    /* Signals */

    /**
     * Emitted when new bytes are received.
     * @param bytes ByteArray
     */
    received: ISignal<ByteArray>;

    /* Undocumented Augment Members */

    /** @undocumented */
    setPort(port: number): void;

    /** @undocumented */
    cloneHandler(): DzHttpHelper;
}
