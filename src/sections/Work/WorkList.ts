import {
  imgAdiBlog,
  imgYT,
  imgPizza,
  imgCovid19,
  imgPassDashboard,
  imgPassTickets,
} from "../../assets/images";

export interface IWork {
  image: string;
  title: string;
  webURL: string;
  gitHubURL?: string;
  desc: string;
}

export const workList: IWork[] = [
  {
    image: imgPassTickets,
    title: "Pass Tickets",
    webURL: "https://www.pass-tickets.com/",
    desc: "work__passticketsDesc",
  },
  {
    image: imgPassDashboard,
    title: "Pass Dashboard",
    webURL: "https://dash.pass-tickets.com/login",
    desc: "work__passDashboardDesc",
  },
  {
    image: imgAdiBlog,
    title: "AdiBlog",
    webURL: "https://adi-blog.netlify.app/",
    gitHubURL: "https://github.com/Adelndf/AdiBlog-MERN",
    desc: "work__adiBlogDesc",
  },
  {
    image: imgCovid19,
    title: "Covid-19 Tracker",
    webURL: "https://vibrant-wilson-4381bb.netlify.app/",
    gitHubURL: "https://github.com/Adelndf/covid19-tracker",
    desc: "work__Covid19Desc",
  },
  {
    image: imgPizza,
    title: "UI Pizza",
    webURL: "https://eloquent-cori-1e1807.netlify.app/",
    desc: "work__PizzaDesc",
  },
  {
    image: imgYT,
    title: "YouTube clone",
    webURL: "https://chic-khapse-0dd2eb.netlify.app/",
    desc: "work__YTDesc",
  },
];
