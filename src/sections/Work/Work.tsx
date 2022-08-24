import { WorkItem } from "../../components";
import "./Work.css";
import { useTranslation } from "react-i18next";
import { imgAdiBlog, imgYT, imgPizza, imgCovid19 } from "../../assets/images";

const Work = () => {
  const { t } = useTranslation();
  const works = [
    {
      image: imgAdiBlog,
      title: "AdiBlog",
      webURL: "https://adi-blog.netlify.app/",
      gitHubURL: "https://github.com/Adelndf/AdiBlog-MERN",
      desc: t("work__adiBlogDesc"),
      durations: 0.1,
    },
    {
      image: imgYT,
      title: "YouTube clone",
      webURL: "https://chic-khapse-0dd2eb.netlify.app/",
      gitHubURL: "https://github.com/Adelndf",
      desc: t("work__YTDesc"),
      durations: 0.2,
    },
    {
      image: imgPizza,
      title: "UI Pizza",
      webURL: "https://eloquent-cori-1e1807.netlify.app/",
      gitHubURL: "https://github.com/Adelndf",
      desc: t("work__PizzaDesc"),
      durations: 0.3,
    },
    {
      image: imgCovid19,
      title: "Covid-19 Tracker",
      webURL: "https://vibrant-wilson-4381bb.netlify.app/",
      gitHubURL: "https://github.com/Adelndf/covid19-tracker",
      desc: t("work__Covid19Desc"),
      durations: 0.4,
    },
  ];

  return (
    <section id="work" className="work screen-width">
      <h1 className="title">
        {t("work__title1")} <span>{t("work__titleSpan")}</span>{" "}
        {t("work__title2")}
      </h1>
      <div className="work__container">
        {works.map((item, i) => {
          const { image, title, webURL, gitHubURL, desc, durations } = item;
          return (
            <WorkItem
              key={i}
              image={image}
              title={title}
              webURL={webURL}
              gitHubURL={gitHubURL}
              desc={desc}
              durations={durations}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
