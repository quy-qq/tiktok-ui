export default function authHeader() {
    const token = JSON.parse(sessionStorage.getItem('accessToken'));

    if (token) {
        return { Authorization: 'Bearer ' + token };
    } else {
        return {};
    }
}
