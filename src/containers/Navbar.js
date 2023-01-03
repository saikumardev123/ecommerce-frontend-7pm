
import { Link, Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Register from './Register';
import ContactUs from '../components/ContactUs';
import Login from './Login'
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import { logout } from '../actions/User';
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import Home from '../components/Home';
import ProductDetails from '../components/ProductDetails';
import Cart from '../components/Cart';
import Checkout from '../containers/Checkout';

function Navbar(props) {
    const navigate = useNavigate();
    console.log("token", props.token);

    // if (props.token == null) {
    //      navigate("login");
    // }

    // if (!props.token) {

    //     //  navigate("/login");
    // }

    const logout = () => {
        alert("logout called");
        localStorage.removeItem("token");
        navigate("/login");

    }

    // useEffect(() => {
    //     console.log("I am in use effect");
    //     if (!props.token) {
    //         navigate("/login");
    //     }
    // }, []);
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">OneKart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            {
                                localStorage.getItem("token") != null ? <> <li className="nav-item">
                                    <Link className="nav-link" onClick={logout}>Logout</Link>
                                </li> <li className="nav-item float-end">
                                        <Link className="nav-link" to="/cart"> <i className="fa fa-shopping-cart" style={{ fontSize: "20px", color: "white" }}></i></Link>
                                    </li> </> : <><li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register" >Register</Link></li></>}
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact_us">Contact Us</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/contact_us" element={<ContactUs></ContactUs>}></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                <Route path="/productdetails" element={<ProductDetails></ProductDetails>}></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
                <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            </Routes>
        </>
    )

}

export default connect((appState) => {
    console.log("appState", appState);
    return { token: appState.accessToken }
}, (dispatch) => {
    return bindActionCreators({ logout: logout }, dispatch)
})(Navbar);