import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const { search, onChangeSearch } = props;
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          وبلاگ من
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={`/blog-1${location.search}`}
              >
                بلاگ 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/blog-2${location.search}`}>
                بلاگ 2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {" "}
                درباره من{" "}
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <input
              value={search.get("query") || ""}
              onChange={(event) => onChangeSearch(event)}
              className="form-control ms-2"
              type="search"
              placeholder="جستجو..."
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
