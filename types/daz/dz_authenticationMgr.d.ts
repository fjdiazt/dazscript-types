declare class DzAuthenticationMgr extends QObject {

    /* Properties */

    /* Methods */
    loggedIn(): void;
    loggedOut(): void;
    authenticateUser(): boolean;
    isAuthenticated(): boolean;
    getUserToken(): QString;
    logout(): void;
}