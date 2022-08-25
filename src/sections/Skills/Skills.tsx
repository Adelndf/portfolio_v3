import "./Skills.css";
import {
  imgCss,
  imgExpress,
  imgGit,
  imgMongoDB,
  imgNext,
  imgNode,
  imgReact,
  imgRedux,
  imgSass,
  imgTypescript,
  imgJavascript,
  imgHtml,
  imgTailwindCss,
} from "../../assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const imagesList = [
  {
    image: imgHtml,
  },
  {
    image: imgCss,
  },
  {
    image: imgTailwindCss,
  },
  {
    image: imgExpress,
  },
  {
    image: imgNext,
  },
  {
    image: imgNode,
  },
  {
    image: imgGit,
  },
  {
    image: imgMongoDB,
  },
  {
    image: imgRedux,
  },
  {
    image: imgReact,
  },
  {
    image: imgSass,
  },
  {
    image: imgTypescript,
  },
  {
    image: imgJavascript,
  },
];

const Skills = () => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0.0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div id="skills" className="skills">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        <span>{t("skills_titleSpan")}</span> {t("skills_title")}
      </motion.h1>
      <div className="skills__content screen-width">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="skills__box"
        >
          <h1>Frontend</h1>
          <ul>
            <li>HTML & CSS/Sass</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="skills__box"
        >
          <h1>Backend</h1>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>RestAPI</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="skills__box"
        >
          <h1>Other</h1>
          <ul>
            <li>Redux & Redux toolkit</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>Git</li>
            <li>TailwindCSS</li>
          </ul>
        </motion.div>
      </div>
      <div className="skills__container">
        <Slider {...settings}>
          {imagesList.map(({ image }, i) => (
            <img src={image} alt={`imageNumber-${i + 1}`} key={i} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
