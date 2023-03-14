import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // const title = props.title;

  const blogItems = (
    <ul>
      {blogs.map((blog) => (
        <li className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>
              Written by{" "}
              {blog.author
                .toLowerCase()
                .replace(blog.author[0], blog.author[0].toUpperCase())}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogItems}
    </div>
  );
};

export default BlogList;
