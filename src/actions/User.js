import axios from 'axios';
export default function register(registerDetails) {
    console.log("I am in register action");
    console.log("register details", registerDetails);
    var promise = axios.post("http://localhost:8089/api/v1.0.0/user/register", registerDetails);
    return {
        type: "REGISTER_USER",
        payload: promise
    }
}
