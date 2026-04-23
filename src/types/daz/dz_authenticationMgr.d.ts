/**
 * Manager that is responsible for authentication of a Daz 3D user account.
 * @docurl https://docs.daz3d.com/public/software/dazstudio/4/referenceguide/scripting/api_reference/object_index/authenticationmgr_dz
 */
declare class DzAuthenticationMgr extends QObject {

    /* Methods */

    /**
     * This function will attempt to authenticate a Daz 3D user account. If no account information has been entered by the user, a dialog will be displayed to securely acquire the username and password to be authenticated.
     * @returns boolean true if the user was authenticated, otherwise false.
     */
    authenticateUser(): boolean; // Boolean

    /**
     * @returns string If the user has (not necessarily is) logged in to a Daz 3D user account and the application has a valid connection to the database, a token that represents the account that the user last logged into is returned. If the user has not logged into a Daz 3D user account or the application does not have a valid connection to the database, an empty string is returned.
     */
    getUserToken(): string; // String

    /**
     * @returns boolean true if the user is authenticated (currently logged in), otherwise false.
     */
    isAuthenticated(): boolean; // Boolean

    /**
     * @returns boolean true if in process of logging in, otherwise false. The event queue must execute to finish login.
     * @since 4.9.3.71
     */
    isLoggingIn(): boolean; // Boolean

    /**
     * Invalidates any existing authentication.
     */
    logout(): void;

    /* Signals */

    /**
     * Emitted when the user begins to login to a Daz 3D account.
     */
    beginLogin: ISignal<void>;

    /**
     * Emitted when the user begins to log out of a Daz 3D account.
     */
    beginLogout: ISignal<void>;

    /**
     * Emitted when the current Daz 3D account in use changes.
     */
    currentAccountChanged: ISignal<void>;

    /**
     * Emitted after the user has successfully logged in to a Daz 3D account.
     */
    loggedIn: ISignal<void>;

    /**
     * Emitted after the user has successfully logged out of a Daz 3D account.
     */
    loggedOut: ISignal<void>;
}
