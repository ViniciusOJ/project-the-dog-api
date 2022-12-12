import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HeaderElements.css";
import { useEffect, useState } from "react";
import husky from "../../img/husky.png";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    if (windowSize.width >= 950) {
      setIsMobile(false);
    }
    console.log(windowSize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width, windowSize.height]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={husky}></img>
        </Link>
      </div>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to="/" className="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/breeds" className="breeds">
            Breeds
          </Link>
        </li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Header;
