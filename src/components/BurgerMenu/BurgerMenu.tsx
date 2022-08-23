import { useState } from "react";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={toggle ? "burgerMenu active" : "burgerMenu"}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
