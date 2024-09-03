export function isAuthenticated() {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token') && localStorage.getItem('token');
        return token;
    }
    return false; // Return false or handle the case when not in the browser environment
}
