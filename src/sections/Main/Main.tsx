import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toBlue, toGreen, toRed } from "../../app/redux/theme/themeSlice";
import "./Main.css";
import Blob from "./../../components/Blob/Blob";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Main = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const despatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);

  return (
    <section id="home" className="main screen-width">
      <div className="main__left">
        <div className="main__header">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {t("main_name1")}{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {t("main_name2")}
            </motion.span>
          </motion.h1>
          <motion.span
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {t("main_nameSpan")}
          </motion.span>
        </div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          className="main__desc"
        >
          <p>{t("main_desc")}</p>
        </motion.div>
        <div className="main__theme">
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            {t("main_theme")} <span>{t("main_themeSpan")}</span>
          </motion.p>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="main__themeContainer"
          >
            <div
              onClick={() => despatch(toBlue())}
              className="main__themeSelect blue"
              style={
                theme !== "blue"
                  ? {
                      opacity: 0.4,
                      boxShadow: "0px 0px 0px transparent",
                      transform: "scale(0.9)",
                    }
                  : { opacity: 1 }
              }
            ></div>
            <div
              onClick={() => despatch(toRed())}
              className="main__themeSelect red"
              style={
                theme !== "red"
                  ? {
                      opacity: 0.4,
                      boxShadow: "0px 0px 0px transparent",
                      transform: "scale(0.9)",
                    }
                  : { opacity: 1 }
              }
            ></div>
            <div
              onClick={() => despatch(toGreen())}
              className="main__themeSelect green"
              style={
                theme !== "green"
                  ? {
                      opacity: 0.4,
                      boxShadow: "0px 0px 0px transparent",
                      transform: "scale(0.9)",
                    }
                  : { opacity: 1 }
              }
            ></div>
          </motion.div>
        </div>
      </div>

      {windowSize <= 768 && (
        <div className="main__right mob">
          <div className="main__blob">
            <Blob mobile />
          </div>
          <div className="main__blob filter">
            <Blob mobile />
          </div>
        </div>
      )}

      {windowSize > 768 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          drag
          dragConstraints={{
            top: -5,
            left: -5,
            right: 5,
            bottom: 5,
          }}
          whileTap={{ cursor: "grabbing" }}
          whileHover={{ cursor: "grab" }}
          className="main__right"
        >
          <div className="main__blob">
            <Blob />
          </div>
          <div className="main__blob filter">
            <Blob />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Main;
