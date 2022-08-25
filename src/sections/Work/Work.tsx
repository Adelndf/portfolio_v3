import { WorkItem } from "../../components";
import "./Work.css";
import { useTranslation } from "react-i18next";
import { imgAdiBlog, imgYT, imgPizza, imgCovid19 } from "../../assets/images";
import { motion } from "framer-motion";

const Work = () => {
  const { t } = useTranslation();
  const works = [
    {
      image: imgAdiBlog,
      title: "AdiBlog",
      webURL: "https://adi-blog.netlify.app/",
      gitHubURL: "https://github.com/Adelndf/AdiBlog-MERN",
      desc: t("work__adiBlogDesc"),
      delay: 0.1,
    },
    {
      image: imgYT,
      title: "YouTube clone",
      webURL: "https://chic-khapse-0dd2eb.netlify.app/",
      gitHubURL: "https://github.com/Adelndf",
      desc: t("work__YTDesc"),
      delay: 0.2,
    },
    {
      image: imgPizza,
      title: "UI Pizza",
      webURL: "https://eloquent-cori-1e1807.netlify.app/",
      gitHubURL: "https://github.com/Adelndf",
      desc: t("work__PizzaDesc"),
      delay: 0.3,
    },
    {
      image: imgCovid19,
      title: "Covid-19 Tracker",
      webURL: "https://vibrant-wilson-4381bb.netlify.app/",
      gitHubURL: "https://github.com/Adelndf/covid19-tracker",
      desc: t("work__Covid19Desc"),
      delay: 0.4,
    },
  ];

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
        {works.map((item, i) => {
          const { image, title, webURL, gitHubURL, desc, delay } = item;
          return (
            <WorkItem
              key={i}
              image={image}
              title={title}
              webURL={webURL}
              gitHubURL={gitHubURL}
              desc={desc}
              delay={delay}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
