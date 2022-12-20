export default function (state = null, action) {
    console.log(action);
    switch (action.type) {
        case "REGISTER_USER":
            console.log(action.payload);
            return action.payload.data.token;

        case "LOGIN_USER":
            console.log(action.payload);
            return action.payload.data.token;

        case "LOGOUT":
            console.log("logout is called");
            console.log("action.payload", action.payload);
            return action.payload;

        default: return state;
    }
}