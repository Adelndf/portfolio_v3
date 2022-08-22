import { useEffect, useState } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";

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
  const { t, i18n } = useTranslation();
  const currentLanguageCookie = cookies.get("i18next") || "en";
  const currentLanguage: any = languages.find(
    (l) => l.code === currentLanguageCookie
  );

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
    <nav className="navbar">
      <div className="navbar__container screen-width">
        <div className="navbar__left">
          <p>
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
        <div className="navbar__right">
          <span
            onClick={() => i18n.changeLanguage(t("nav_changeLang"))}
            className="navbar__lang"
          >
            {t("nav_lang")}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
