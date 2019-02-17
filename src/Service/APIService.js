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
                if (response) {
                    return response.json();
                } else {
                    throw Error('Infelizmente nossos serviços estão offline');
                }
            }).then((result) => {
                console.log(result);
                if (result.code === 200) {
                    localStorage.setItem('token', result.token);
                    localStorage.setItem('userData', JSON.stringify({ id: result.user._id, name: result.user.alias, email: result.user.email }));
                    history.push('/list');
                } else if (result.code === 401) {
                    history.push('/', { unauthorized: true });
                } else if (result.code === 404) {
                    history.push('/register', { UserNotFound: true });
                }
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
                return response.json();
            } else {
                throw Error('Infelizmente nossos serviços estão offline');
            }
        }).then((result) => {
            if (result.code === 200 || 201) {
                localStorage.setItem('token', result.token);
                localStorage.setItem('userData', JSON.stringify({ id: result.user._id, name: result.user.alias, email: result.user.email }));
                history.push('/list');
            } else if (result.status === 401) {
                return history.push('/', { unauthorized: true });
            }
        }).catch((err) => {
            console.log(err);
            history.push('/ServerError');
        })
    }
    newLocation(code = 0, text = "") {
        if (code === 2) {
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
                    address: `Arena Corinthians - Avenida Miguel Ignácio Curi - Artur Alvim`,
                }),
            }
            fetch(`${this.url}/user/location/register`, request).then((result) => {
                if (result) {
                    if (result.status === 201) {
                        history.push('/list', { newLocation: "true" });
                    } else if (result.status === 401) {
                        history.push('/', { unauthorized: "true" });
                    } else {
                        throw new Error('Server error:');
                    }
                }
                else {
                    history.push('/ServerError');
                }
            }).catch((error) => {
                console.log(error);
                history.push('/ServerError');
            });
            console.log('sai da promise');
            return;
        }
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
                        if (response) {
                            if (response.status === 201) {
                                return response.json();
                            } else if (response.status === 401) {
                                history.push('/', { unauthorized: "true" });
                            }
                            else {
                                throw Error('server error');
                            }
                        } else {
                            history.push('/ServerError');
                        }
                    }).then((result) => {
                        history.push('/list', { newLocation: true });
                    }).catch((err) => {
                        console.log(err);
                        history.push('ServerError');
                    });
                });
            }, (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        history.push('/location', { PERMISSION_DENIED: true })
                        break;
                    case error.POSITION_UNAVAILABLE:
                        history.push('/location', { POSITION_UNAVAILABLE: true })
                        break;
                    case error.TIMEOUT:
                        history.push('/location', { TIMEOUT: true });
                        break;
                    case error.UNKNOWN_ERROR:
                        history.push('/location', { UNKNOWN_ERROR: true })
                        break;
                    default:
                        history.push('/list');
                }
            })
        }
    }
    getLocationList() {
        const request = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            },
        }
        fetch(`${this.url}/user/location/list`, request).then((result) => {
            if (result) {
                if (result.status === 200) {
                    return result.json();
                } else if (result.status === 401) {
                    history.push('/', { unauthorized: true })
                } else {
                    history.push('/ServerError');
                }
            } else {
                history.push('/ServerError');
            }
        }).then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
            history.push('/ServerError');
        })
    }
};