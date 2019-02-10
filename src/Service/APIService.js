import CryptHelper from '../Helpers/Crypt';
import history from '../history.js';
export default class APIService {
    constructor() {
        const data = new CryptHelper().encryptApiLogin('teste', 123);
        console.log(data);
        this.url = "http://localhost:4000";
        this.apiLogin = data[0];
        this.apiPass = data[1];
    }
    login(userEmail, userPassword) {
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${this.apiLogin}:${this.apiPass}`,
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword,
            }),
        }
        fetch(`${this.url}/user/login`, request)
            .then((response) => {
                if (response.ok) {
                    if (response.status === 200) {
                        return response.json();
                    }
                    else if (response.status === 401) {
                        return history.push('/login');
                    }

                } else {
                    throw Error('Infelizmente nossos serviços estão offline');
                }
            }).then((result) => {
                console.log(result);
                localStorage.setItem('token', result.token);
                localStorage.setItem('userData', { id: result.user._id, name: result.user.alias, email: result.user.email });
                history.push('/list');
            }).catch((err) => {
                history.push('/ServerError');
            });
    }
};