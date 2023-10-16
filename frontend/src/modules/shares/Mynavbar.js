import React from "react";
import { Link } from "react-router-dom";

function Mynavbar() {
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-12">


                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <Link className="navbar-brand" href="#">Navbar</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="#">Link</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" href="#">Action</Link></li>
                                            <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                                    </li>
                                </ul>

                                <form className="d-flex me-5">
                                <div className="dropdown">
                                    <Link href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                                        <strong>mdo</strong>
                                    </Link>
                                    <ul className="dropdown-menu text-small shadow">
                                        <li><Link className="dropdown-item" to="/">Log in</Link></li>
                                        <li><Link className="dropdown-item" href="#">Log out</Link></li>
                                        <li><Link className="dropdown-item" to="registor">Registor</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" href="#">Sign up</Link></li>
                                    </ul>
                                </div>
                                </form>

                            </div>
                        </div>
                    </nav>






                </div>
            </div>
        </div>



    );
}
export default Mynavbar;