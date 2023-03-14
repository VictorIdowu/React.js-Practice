import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1>The iDsOn Blog</h1>
      <nav className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </nav>
    </header>
  );
};

export default Navbar;
