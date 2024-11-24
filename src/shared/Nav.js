import Login from "./Login";
import Signup from "./Signup";

function Nav() {
    return (
        <nav className="container-fluid bg-body-tertiary navbar navbar-expand-lg">
            <div className="container">
                <h3 className="navbar-brand">ToDo list</h3>
                {/* <div className="d-flex"> */}
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Contact-us">Contact us</a>
                    </li>
                    <li className="nav-item">
                        <Login />
                    </li>
                    <li className="nav-item">
                        <Signup/>
                    </li>
                </ul>
                {/* <Login /> */}
                {/* <Signup/> */}
             {/* </div> */}
            </div>
        </nav>
    );
}
export default Nav;