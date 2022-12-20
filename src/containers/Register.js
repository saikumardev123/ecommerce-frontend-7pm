import { useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { register } from '../actions/User';
import { useNavigate } from 'react-router-dom';

function Register(props) {

    const navigate = useNavigate();

    const [registerDetails, setRegisterDetails] = useState(
        {
            username: "",
            password: "",
            email: ""
        }
    );
    if (props.token) {
        console.log(props.token);
        navigate("/dashboard");

    }
    const updateValues = (event) => {
        var value = event.target.value;
        var name = event.target.name;
        setRegisterDetails({ ...registerDetails, [name]: value })
    }
    const registerUser = (event) => {
        event.preventDefault();
        console.log(registerDetails);
        props.register(registerDetails);
    }
    return (
        <>
            <form>
                <br></br>   <br></br>    <br></br>
                <div>
                    <h2 style={{ textAlign: "center" }}>Register Here</h2>

                    <hr></hr>
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
                            <input type="text" onChange={updateValues} className="form-control" placeholder="Enter email" name="email" />
                        </div>

                        <div className="col">
                            <button onClick={registerUser} className="btn btn-success">Register</button>
                        </div>


                    </div>
                </div>

            </form>
        </>
    )

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ register: register }, dispatch);
}

function mapStateToProps(appState) {

    console.log("appState", appState);
    return { token: appState.accessToken };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

// export default connect((appState) => {
//     console.log("appState", appState);
//     return { token: appState.accessToken };
// }, mapDispatchToProps)(Register);

