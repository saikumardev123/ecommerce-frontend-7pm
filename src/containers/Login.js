import { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/User';
import { useNavigate, useLocation } from 'react-router-dom';


function Login(props) {

    const navigate = useNavigate();

    const location = useLocation();

    const [loginDetails, setLoginDetails] = useState(
        {
            username: "",
            password: "",
        }
    );
    if (props.token) {
        console.log(props.token);
        navigate("/dashboard");

    }
    const updateValues = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setLoginDetails({ ...loginDetails, [name]: value })
    }
    const loginUser = (event) => {
        event.preventDefault();
        console.log(loginDetails);
        props.login(loginDetails);
    }
    return (
        <>
            <form>
                <br></br>   <br></br>    <br></br>
                <div>
                    <h2 style={{ textAlign: "center" }}>Login Here</h2>

                    <hr></hr>
                    <h3 style={{ color: "red", textAlign: "center" }}>{location.state != null ? location.state.message : ''}</h3>
                    <br></br><br></br>
                    <div className="row">
                        <div className="col">
                            <input type="text" onChange={updateValues} className="form-control" placeholder="Enter username" name="username" />
                        </div>
                        <div className="col">
                            <input type="password" onChange={updateValues} className="form-control" placeholder="Enter password" name="password" />
                        </div>
                    </div>  <br></br>
                    <div className="row">
                        <div className="col">
                            <button onClick={loginUser} className="btn btn-success">Login</button>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login: login }, dispatch);
}

function mapStateToProps(appState) {

    console.log("appState", appState);
    return { token: appState.accessToken };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default connect((appState) => {
//     console.log("appState", appState);
//     return { token: appState.accessToken };
// }, mapDispatchToProps)(Register);

