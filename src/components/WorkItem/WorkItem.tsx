import "./WorkItem.css";
import { AiFillGithub } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  webURL: string;
  gitHubURL: string;
  desc: string;
  delay: number;
}

const WorkItem = ({ image, title, webURL, gitHubURL, desc, delay }: Props) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: delay }}
      className="workItem"
    >
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
            <a
              className="workItem__iconLink"
              target="_blank"
              href={gitHubURL}
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
        <div className="workItem__desc">{desc}</div>
      </div>
    </motion.div>
  );
};

export default WorkItem;
