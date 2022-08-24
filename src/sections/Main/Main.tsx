import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toBlue, toGreen, toRed } from "../../app/redux/theme/themeSlice";
import "./Main.css";
import Blob from "./../../components/Blob/Blob";

const Main = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const despatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <section className="main screen-width">
      <div className="main__left">
        <div className="main__header">
          <h1>
            {t("main_name1")} <span>{t("main_name2")}</span>
          </h1>
          <span>{t("main_nameSpan")}</span>
        </div>
        <div className="main__desc">
          <p>{t("main_desc")}</p>
        </div>
        <div className="main__theme">
          <p>
            {t("main_theme")} <span>{t("main_themeSpan")}</span>
          </p>
          <div className="main__themeContainer">
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
          </div>
        </div>
      </div>
      <div className="main__right">
        <div className="main__blob">
          <Blob />
        </div>
        <div className="main__blob filter">
          <Blob />
        </div>
      </div>
    </section>
  );
};

export default Main;
