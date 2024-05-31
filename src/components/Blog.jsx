import { useParams, useNavigate, useLocation } from "react-router-dom";
import { deleteBlog, getDetailsBlog } from "../dataBlog2";

const Blog = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const blog = getDetailsBlog(parseInt(params.blogId));

  if (!blog) {
    return (
      <div
        className="p-4 d-flex justify-content-center align-items-center"
        style={{ width: "80%" }}
      >
        <h5>بلاگ مورد نظر یافت نشد</h5>
      </div>
    );
  }

  return (
    <div className="p-4 d-flex justify-content-center">
      <div className="card mb-3" style={{ width: 840 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={blog.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => {
                deleteBlog(blog.id);
                navigate("/blog-2" + location.search);
              }}
            >
              حذف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
