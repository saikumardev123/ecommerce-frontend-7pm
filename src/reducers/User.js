export default function (state = null, action) {
    console.log(action);
    switch (action.type) {
        case "REGISTER_USER":
            console.log(action.payload);
            return action.payload.data.token;
        default: return state;
    }
}