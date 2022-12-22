import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const cartCount = props.cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <div className="store-navbar">
      <ul>
          <li className="nav-item">
          <NavLink exact className="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="active" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="active" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </div>
  );
}