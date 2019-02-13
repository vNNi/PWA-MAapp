import CryptHelper from '../Helpers/Crypt';
import history from '../history.js';
export default class APIService {
    constructor() {
        const data = new CryptHelper().encryptApiLogin('teste', 123);
        console.log(data);
        this.url = "http://localhost:4000";
        this.apiLogin = data[0];
        this.apiPass = data[1];
        this.GApi = 'https://maps.googleapis.com/maps/api/geocode/';
        this.GApiKey = 'AIzaSyD35EvA-8rFF2mb5S-RO7B-HXmK9_Pe9MQ';
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
                localStorage.setItem('token', result.token);
                localStorage.setItem('userData', JSON.stringify({ id: result.user._id, name: result.user.alias, email: result.user.email }));
                history.push('/list');
            }).catch((err) => {
                history.push('/ServerError');
                console.log(err);
            });
    }
    register(userEmail = "", userAlias = "", userPassword = "") {
        const request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${this.apiLogin}:${this.apiPass}`,
            },
            body: JSON.stringify({
                email: userEmail,
                alias: userAlias,
                password: userPassword,
            }),
        }
        fetch(`${this.url}/user/register`, request).then((response) => {
            if (response.ok) {
                if (response.status === 200 | 201) {
                    return response.json();
                }
                else if (response.status === 401) {
                    return history.push('/login');
                }

            } else {
                throw Error('Infelizmente nossos serviços estão offline');
            }
        }).then((result) => {
            localStorage.setItem('token', result.token);
            localStorage.setItem('userData', JSON.stringify({ id: result.user._id, name: result.user.alias, email: result.user.email }));
            history.push('/list');
        }).catch((err) => {
            console.log(err);
            history.push('/ServerError');
        })
    }
    newLocation(code = 0, text = "") {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                console.log(lat + " " + lng);
                console.log(JSON.parse(localStorage.getItem("userData")).name);
                fetch(`${this.GApi}json?latlng=${lat},${lng}&key=${this.GApiKey}`).then((response) => {
                    return response.json();
                }).then((result) => {
                    const address = result.results[0].address_components[1].short_name || "Rua Dr. Pereira Luiz";
                    const number = result.results[0].address_components[0].short_name || "45";
                    console.log(address + " " + number);
                    const request = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem("token")}`,
                        },
                        body: JSON.stringify({
                            alias: JSON.parse(localStorage.getItem('userData')).name,
                            date: new Date(),
                            status: {
                                code: code,
                                text: text,
                            },
                            address: `${address} - ${number}`,
                        }),
                    }
                    fetch(`${this.url}/user/location/register`, request).then((response) => {
                        if (response.ok) {
                            if (response.status === 201) {
                                return response.json();
                            } else if (response.status === 401) {
                                return history.push('/login', { Unauthorized: true });
                            }
                            else {
                                throw Error('server error');
                            }
                        }
                    }).then((result) => {
                        history.push('/list', { newLocation: true });
                    });
                });
            }, () => {

            })
        }
    }
};