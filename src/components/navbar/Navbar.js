import { useState } from "react";
import Navbarlist from "./Navbarlist";
// imports
import "./Navbar.css";
import ham from "../../asset/ham.png";
import x from "../../asset/x.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const iconChange = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="nav-icons" onClick={iconChange}>
        {isOpen ? <img src={ham} /> : <img src={x} />}
      </div>
      <div>
        {isOpen ? (
          <Navbarlist cssItems="nav-desktop" />
        ) : (
          <Navbarlist cssItems="nav-items" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
