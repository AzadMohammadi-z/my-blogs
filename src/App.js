import { useState } from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Blog1 from "./components/Blog1";
import Blog2 from "./components/Blog2";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { getBlogs } from "./dataBlog2";
import { getBlogs1 } from "./dataBlog1";

function App() {
  const blogs = getBlogs();
  const blogs1 = getBlogs1();
  const [search, setSearch] = useSearchParams("");

  const onChangeSearch = (event) => {
    let query = event.target.value;
    if (query) return setSearch({ query });
    setSearch({});
  };

  return (
    <div className="">
      <Navbar search={search} onChangeSearch={onChangeSearch} />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          path="/blog-1"
          element={<Blog1 blogs={blogs1} search={search} />}
        >
          <Route path="/blog-1/:blogId" element={<Blog />} />
        </Route>

        <Route path="/blog-2" element={<Blog2 blogs={blogs} search={search} />}>
          <Route
            index
            element={
              <div
                className="align-items-center justify-content-center d-flex"
                style={{ width: "80%" }}
              >
                <h3>بلاگ مورد نظر خود را انتخاب نمایید</h3>
              </div>
            }
          />
          <Route path="/blog-2/:blogId" element={<Blog />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <div className="align-items-center justify-content-center d-flex">
              <h1>صفحه مورد نظر یافت نشد</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
