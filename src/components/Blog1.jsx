import { Link, useSearchParams } from "react-router-dom";

const Blog1 = (props) => {
  const { blogs, search } = props;

  return (
    <div className="row d-flex p-4">
      {blogs
        .filter((blog) => {
          let filter = search.get("query");
          if (!filter) return true;
          let title = blog.title.toLowerCase();
          return title.startsWith(filter.toLowerCase());
        })
        .map((blog) => (
          <div
            className="card m-2 p-0"
            style={{ width: "23.15vw" }}
            key={blog.id}
          >
            <img
              src={blog.img}
              className="card-img-top"
              alt={`image-${blog.id}`}
            />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.description}</p>
              <Link to={`/blogs-1/${blog.id}`}>
                <a href="#" className="btn btn-primary">
                  نمایش بیشتر...
                </a>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Blog1;
