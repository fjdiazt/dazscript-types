/**
 * Convenience object for HTTP requests
 * Provides a simple implementation of the HTTP protocol
 */
declare class DzHttpHelper extends QObject {
    /**
     * Constructor - Creates a new instance
     */
    constructor();

    /**
     * Aborts the current request and deletes all scheduled requests
     */
    abort(): void;

    /**
     * Sends an asynchronous request to the server
     * Returns immediately without waiting for a response
     * @param content - The content to send (if any)
     */
    doAsynchronousRequest(content?: ByteArray): void;

    /**
     * Sends a synchronous request to the server
     * Waits for a response before returning
     * @param content - The content to send (if any)
     * @returns A byte array consisting of the response content
     */
    doSynchronousRequest(content?: ByteArray): ByteArray;

    /**
     * Get a human-readable description of the last error that occurred
     * @returns Error message, or empty string if no error
     */
    getError(): string;

    /**
     * Sets the HTTP connection mode used for connecting to the server
     * @param mode - The connection mode to set - i.e., "http" or "https"
     */
    setConnectionMode(mode: string): void;

    /**
     * Sets the value of the special HTTP header content-type field
     * @param type - The content-type to set - e.g., "application/json"
     */
    setContentType(type: string): void;

    /**
     * Sets HTTP header values
     * @param keys - The keys in the http header
     * @param values - The corresponding values for the keys (must be same length as keys)
     */
    setHeaderValues(keys: Array<any>, values: Array<any>): void;

    /**
     * Sets the host for requests
     * @param host - The host to set - e.g., "www.daz3d.com"
     */
    setHost(host: string): void;

    /**
     * Sets the path portion of the URL
     * @param path - The path to set - e.g., "/dazApi/slab/13176"
     */
    setPath(path: string): void;

    /**
     * Sets the query string (and optionally fragment) portion of the URL
     * @param query - The query string (and optionally fragment) to set
     */
    setQueryString(query: string): void;

    /**
     * Sets the HTTP request method which describes the request's action
     * @param method - The request method to set - e.g., "GET", "POST", "HEAD"
     */
    setRequestMethod(method: string): void;

    /**
     * Signal emitted when new bytes are received
     * Signature: "received(QByteArray)"
     */
    received: ISignalT<ByteArray>;
}
