/**
 * A global static object for system services.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/system_dz
 */
declare class DzSystem extends QObject {

    /* Methods */

    /**
     * @param environmentVariable string - The name of the environment variable to retrieve. The 'environment' only exists within the context of the script process, for the duration of said process.
     * @returns string The String stored in environmentVariable.
     */
    getenv(environmentVariable: string): string; // String

    /**
     * Sets the value of an environment variable. If the environment variable does not exist, it is created. The environment is only changed within the context of the script process, for the duration of said process.
     * @param environmentVariable string - The environment variable to set the value of.
     * @param value string - The new value of the environment variable.
     */
    setenv(environmentVariable: string, value: string): void;

    /**
     * Deprecated
     * @param expression string
     */
    print(expression: string): void;

    /**
     * Deprecated
     * @param expression string
     */
    println(expression: string): void;
}
