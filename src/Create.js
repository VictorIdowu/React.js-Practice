import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const titleInputHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyInputHandler = (e) => {
    setBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <section className="create">
      <h2>Add a new Blog</h2>
      <form onSubmit={submitHandler}>
        <label>Blog title:</label>
        <input
          onChange={titleInputHandler}
          type="text"
          required
          value={title}
        />
        <label>Blog body</label>
        <textarea onChange={bodyInputHandler} required value={body}></textarea>
        <label>Blog author:</label>
        <select onChange={authorChangeHandler} value={author}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </section>
  );
};

export default Create;
