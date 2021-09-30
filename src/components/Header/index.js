import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import Cart from "../../views/Cart";

const Header = () => {
    const cart = useSelector((c) => c.cart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">SHOP</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart({cart.length})</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;