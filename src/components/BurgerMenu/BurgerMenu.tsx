import "./BurgerMenu.css";

interface Porps {
  toggle: boolean;
  setToggle: (value: boolean) => void;
}

const BurgerMenu = ({ toggle, setToggle }: Porps) => {
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
