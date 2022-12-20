import axios from 'axios';
import { Provider } from 'react-redux';
export function register(registerDetails) {
    console.log("I am in register action");
    console.log("register details", registerDetails);
    var promise = axios.post("http://localhost:8089/api/v1.0.0/user/register", registerDetails);
    return {
        type: "REGISTER_USER",
        payload: promise
    }
}

export function login(loginDetails) {
    console.log("I am in login action");
    console.log("loginDetails details", loginDetails);
    var promise = axios.post("http://localhost:8089/api/v1.0.0/user/login", loginDetails);
    return {
        type: "LOGIN_USER",
        payload: promise
    }
}

export function logout() {
    console.log("logout in action");
    return {
        type: "LOGOUT",
        payload: null
    }
}


