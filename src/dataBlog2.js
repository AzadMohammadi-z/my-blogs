let blogs = [
  {
    id: 1,
    title: "الکترونیک",
    description: "توضیحات عنوان 1",
    img: "https://via.placeholder.com/400",
  },
  {
    id: 2,
    title: "لوازم خانگی",
    description: "توضیحات عنوان 2",
    img: "https://via.placeholder.com/400",
  },
  {
    id: 3,
    title: "ابزار",
    description: "توضیحات عنوان 3",
    img: "https://via.placeholder.com/400",
  },
];

export const getBlogs = () => {
  return blogs;
};

export const getDetailsBlog = (blogId) => {
  const blog = blogs.find((blog) => blog.id == blogId);
  return blog;
};

export const deleteBlog = (blogId) => {
  blogs = blogs.filter((blog) => blog.id !== blogId);
};
