import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/" className="brand">
              Habibi
            </Link>
          </div>
          <div className="nav nav-pills">
            {/* //if we want to customize links like active pe color //we cannot do */}
            {/* that using link so we use navlink here */}
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
            <NavLink
              to="products"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="posts"
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
            >
              Posts
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
