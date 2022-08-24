import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import useClickOutside from "../../hooks/useClickOutside";

const languages = [
  {
    code: "en",
    name: "English",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguageCookie = cookies.get("i18next") || "en";
  const currentLanguage: any = languages.find(
    (l) => l.code === currentLanguageCookie
  );
  const ref = useRef(null);
  useClickOutside(ref, () => setToggle(false));

  useEffect(() => {
    document.body.dir = currentLanguage.dir;
  }, [currentLanguage.dir]);

  const handleActive = (type: string) => {
    if (type === "home") {
      setActive("home");
    }
    if (type === "work") {
      setActive("work");
    }
    if (type === "skills") {
      setActive("skills");
    }
    if (type === "contact") {
      setActive("contact");
    }
  };

  return (
    <nav ref={ref} className="navbar">
      <div className="navbar__container screen-width">
        <div className="navbar__left">
          <p onClick={() => window.top}>
            Adel<span>Dev</span>
          </p>
        </div>
        <div className="navbar__mid">
          <a
            onClick={() => handleActive("home")}
            className={active === "home" ? "active" : ""}
            href="#home"
          >
            {t("nav_home")}
          </a>
          <a
            onClick={() => handleActive("work")}
            className={active === "work" ? "active" : ""}
            href="#work"
          >
            {t("nav_work")}
          </a>
          <a
            onClick={() => handleActive("skills")}
            className={active === "skills" ? "active" : ""}
            href="#skills"
          >
            {t("nav_skills")}
          </a>
          <a
            onClick={() => handleActive("contact")}
            className={active === "contact" ? "active" : ""}
            href="#contact"
          >
            {t("nav_contact")}
          </a>
        </div>
        <div
          style={
            currentLanguage.code === "ar"
              ? { textAlign: "left" }
              : { textAlign: "right" }
          }
          className="navbar__right"
        >
          <span
            onClick={() => i18n.changeLanguage(t("nav_changeLang"))}
            className="navbar__lang"
          >
            {t("nav_lang")}
          </span>
        </div>
        <div
          className="navbar__menu"
          style={
            currentLanguage.code === "ar"
              ? { paddingRight: 10 }
              : { paddingLeft: 10 }
          }
        >
          <BurgerMenu toggle={toggle} setToggle={setToggle} />
        </div>
      </div>

      {/* mobile */}
      <div
        onClick={() => setToggle(false)}
        className={toggle ? "navbar__mobile active" : "navbar__mobile"}
      >
        <a href="#home">{t("nav_home")}</a>
        <a href="#work">{t("nav_work")}</a>
        <a href="#skills">{t("nav_skills")}</a>
        <a href="#contact">{t("nav_contact")}</a>
      </div>
    </nav>
  );
};

export default Navbar;
