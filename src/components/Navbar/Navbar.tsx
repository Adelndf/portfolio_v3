import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container screen-width">
        <div className="navbar__left">
          <p>
            Adel<span>Dev</span>
          </p>
        </div>
        <div className="navbar__mid">
          <a href="#home">home</a>
          <a href="#work">work</a>
          <a href="#skills">skills</a>
          <a href="#contact">hire me</a>
        </div>
        <div className="navbar__right">
          <span className="navbar__lang">العربية</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
