import { NavLink, Outlet, useLocation } from "react-router-dom";
import { getBlogs } from "../dataBlog2";

const Blog2 = (props) => {
  const { blogs, search } = props;
  const location = useLocation();
  console.log(location.search);

  return (
    <div>
      <div className="p-4 d-flex">
        <nav style={{ width: "20%" }}>
          <ul className="list-group">
            {blogs
              .filter((blog) => {
                let filter = search.get("query");
                if (!filter) return true;
                let title = blog.title.toLowerCase();
                return title.startsWith(filter.toLowerCase());
              })
              .map((blog) => (
                <NavLink
                  key={blog.id}
                  style={{
                    cursor: "pointer",
                  }}
                  to={`/blog-2/${blog.id}${location.search}`}
                >
                  <li className="list-group-item">
                    <label
                      className="form-check-label"
                      style={{ cursor: "pointer" }}
                    >
                      <NavLink
                        to={`/blog-2/${blog.id}${location.search}`}
                        style={({ isActive }) => {
                          return {
                            color: isActive ? "green" : "black",
                            textDecoration: "none",
                          };
                        }}
                      >
                        {blog.title}
                      </NavLink>
                    </label>
                  </li>
                </NavLink>
              ))}
          </ul>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};

export default Blog2;
