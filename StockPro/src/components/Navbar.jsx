import { NavLink } from "react-router-dom";

export const Navbar = ({ login, handlerLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">CartApp & UsersApp</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        {/* CartApp */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart/catalog">Catálogo</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart/cart">Carrito</NavLink>
                        </li>

                        {/* InvoiceApp */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/invoice">Factura</NavLink>
                        </li>

                        {/* UsersApp */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">Usuarios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users/register">Registrar Usuario</NavLink>
                        </li>

                    </ul>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogout">
                    {
                        login?.user ? (
                            <>
                                <span className="nav-item nav-link text-primary mx-3">
                                    {login.user.username}
                                </span>
                                <button
                                    onClick={handlerLogout}
                                    className="btn btn-outline-success"
                                >
                                    Logout
                                </button>
                            </>
                        ) : null
                    }
                </div>
            </div>
        </nav>
    );
};
