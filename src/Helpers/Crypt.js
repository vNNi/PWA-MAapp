export default class Crypt {
    encryptApiLogin(login, password) {
        const login64 = Buffer.from(login.toString()).toString('base64');
        const pass64 = Buffer.from(password.toString()).toString('base64')
        return [login64, pass64];
    }
}