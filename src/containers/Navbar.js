
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './Register';
import ContactUs from '../components/ContactUs';
import Login from './Login'
import Dashboard from './Dashboard';
import { connect } from 'react-redux';

function Navbar(props) {

    console.log("token", props.token);

    return (
        <>
            <BrowserRouter>

                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="#">OneKart</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                {
                                    props.token ? <> <li className="nav-item">
                                        <Link className="nav-link" to="/login">Logout</Link>
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

                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/contact_us" element={<ContactUs></ContactUs>}></Route>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

                </Routes>

            </BrowserRouter>


        </>
    )

}

export default connect((appState) => {
    console.log("appState", appState);
    return { token: appState.accessToken }
})(Navbar);