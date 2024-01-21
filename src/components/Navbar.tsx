import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <img src={'/logo.svg'} />
      </div>
      <div className="nav-links">
        <a href="#home">HOME</a>
        <a href="#work">WORK</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
