import { WorkItem } from "../../components";
import "./Work.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { workList } from "./WorkList";
import { Fragment } from "react";

const Work = () => {
  const { t } = useTranslation();

  return (
    <section id="work" className="work screen-width">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        {t("work__title1")} <span>{t("work__titleSpan")}</span>{" "}
        {t("work__title2")}
      </motion.h1>
      <div className="work__container">
        {workList.map((item, i) => {
          const { image, title, webURL, gitHubURL, desc } = item;
          return (
            <Fragment key={i}>
              <WorkItem
                image={image}
                title={title}
                webURL={webURL}
                gitHubURL={gitHubURL}
                desc={desc}
              />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Work;
