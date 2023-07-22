import "./WorkItem.css";
import { AiFillGithub } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { IWork } from "../../sections/Work/WorkList";

const WorkItem = ({ image, title, webURL, gitHubURL, desc }: IWork) => {
  const { t } = useTranslation();

  return (
    <div className="workItem">
      <img src={image} alt={title} className="workItem__img" />
      <div className="workItem__info">
        <div className="workItem__title">
          <h1>{title}</h1>
          <div className="workItem___btns">
            <a
              className="workItem__link"
              target="_blank"
              href={webURL}
              rel="noreferrer"
            >
              {t("workItem__live")}
            </a>
            {gitHubURL ? (
              <a
                className="workItem__iconLink"
                target="_blank"
                href={gitHubURL}
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            ) : null}
          </div>
        </div>
        <div className="workItem__desc">{t(desc)}</div>
      </div>
    </div>
  );
};

export default WorkItem;
