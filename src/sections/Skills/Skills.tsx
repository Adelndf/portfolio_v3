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

const Blob = () => {
  return (
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      id="blobSvg"
    >
      <g transform="translate(148.97201538085938, -5.773887634277344)">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" className="skill__stopBlob1"></stop>
            <stop offset="100%" className="skill__stopBlob2"></stop>
          </linearGradient>
        </defs>
        <path className="blob" fill="url(#gradient)">
          <animate
            attributeName="d"
            dur={"20000ms"}
            repeatCount="indefinite"
            values="M436,297Q444,344,394.5,356.5Q345,369,320.5,410Q296,451,259,412.5Q222,374,168.5,397Q115,420,128.5,361Q142,302,115,276Q88,250,111,222Q134,194,142,159Q150,124,180.5,101Q211,78,245,101.5Q279,125,335,99Q391,73,404.5,121Q418,169,423,209.5Q428,250,436,297Z;
            M394.5,282.5Q384,315,382.5,365Q381,415,334.5,416Q288,417,247.5,427Q207,437,169,418.5Q131,400,125,356.5Q119,313,90,281.5Q61,250,69,208Q77,166,112.5,144Q148,122,181.5,109Q215,96,255.5,72Q296,48,337.5,68Q379,88,382,136.5Q385,185,395,217.5Q405,250,394.5,282.5Z;
            M377,275.5Q356,301,366.5,355Q377,409,341,451Q305,493,260,449Q215,405,158.5,420Q102,435,86.5,385.5Q71,336,67.5,293Q64,250,91.5,218.5Q119,187,147,171.5Q175,156,185,82Q195,8,242,42.5Q289,77,324,95.5Q359,114,378.5,146.5Q398,179,398,214.5Q398,250,377,275.5Z;
            M436,297Q444,344,394.5,356.5Q345,369,320.5,410Q296,451,259,412.5Q222,374,168.5,397Q115,420,128.5,361Q142,302,115,276Q88,250,111,222Q134,194,142,159Q150,124,180.5,101Q211,78,245,101.5Q279,125,335,99Q391,73,404.5,121Q418,169,423,209.5Q428,250,436,297Z"
          ></animate>
        </path>
      </g>
    </svg>
  );
};

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
      <h1 className="title">
        <span>{t("skills_titleSpan")}</span> {t("skills_title")}
      </h1>
      <div className="skills__content screen-width">
        <div className="skills__box">
          <h1>Frontend</h1>
          <ul>
            <li>HTML / CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div className="skills__box">
          <h1>Backend</h1>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className="skills__box">
          <h1>Other</h1>
          <ul>
            <li>Redux & Redux toolkit</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            <li>Git</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
      </div>
      <div className="skills__container">
        <div className="skills__blob left">
          <Blob />
        </div>
        <Slider {...settings}>
          {imagesList.map(({ image }, i) => (
            <img src={image} alt={`imageNumber-${i + 1}`} />
          ))}
        </Slider>
        <div className="skills__blob right">
          <Blob />
        </div>
      </div>
    </div>
  );
};

export default Skills;
