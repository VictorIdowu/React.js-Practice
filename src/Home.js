import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { Fragment } from "react";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <Fragment className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
    </Fragment>
  );
};

export default Home;
