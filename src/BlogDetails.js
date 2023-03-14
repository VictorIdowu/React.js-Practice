import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const deleteHandler = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <section className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Written by{" "}
            {blog.author
              .toLowerCase()
              .replace(blog.author[0], blog.author[0].toUpperCase())}
          </p>
          <p className="blog-text">{blog.body}</p>
          <button onClick={deleteHandler}>Delete</button>
        </article>
      )}
    </section>
  );
};

export default BlogDetails;
