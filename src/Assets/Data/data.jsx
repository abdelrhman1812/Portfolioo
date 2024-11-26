/* Tech */

import bootstrap from "../../Assets/images/skills/bootstrap.png";
import CSS from "../../Assets/images/skills/css.1b9dcc2e.svg";
import HTML from "../../Assets/images/skills/html5.a7362949.svg";
import JS from "../../Assets/images/skills/javascript.455da02c.svg";
import JQ from "../../Assets/images/skills/jquery.svg";
import react from "../../Assets/images/skills/react.svg";
import SASS from "../../Assets/images/skills/sass.svg";
import Express from "../images/skills/express-original.svg";
import mongodb from "../images/skills/Mongo.svg";
import Next from "../images/skills/nextjs.svg";
import Nodejs from "../images/skills/nodejs.svg";
import Sequelize from "../images/skills/sequelize.svg";
import Tailwind from "../images/skills/tailwind-css.svg";

/* Image */
import E_commerce from "../images/Projects/E-commerce/Home.png";
import Electronic_Store from "../images/Projects/Electronic Store/electronic.png";

import GameApp from "../images/Projects/Games App/Games.png";
import food from "../images/Projects/Yummy/Home.png";

import socialApp from "../images/Projects/Blog/Blog.png";
import courses from "../images/Projects/courses platform/courses platform.png";
import forOurChildren from "../images/Projects/For Our/header.png";

import Masterscaf from "../images/Projects/Masterscaf/Home.png";
import Mealify from "../images/Projects/Mealify/Home-light.png";

import Daniels from "../images/Projects/Daniels/Dan.png";
import Evs_Electrify from "../images/Projects/Evs/Home.png";
import weatherApp from "../images/Projects/Weather App/weather.png";

import Edu_Learn_Dashboard from "../images/edulearn/Home.png";
import Task_Manager from "../images/Projects/Task Manger/Task.png";

import Notes_APP from "../images/Projects/Notes/Home.png";

import english from "../images/Projects/english app/english.png";
import Fokir from "../images/Projects/Fokir/fokir.png";
import naturalProducts from "../images/Projects/natural products/natural-products.png";
import Saraha from "../images/Projects/saraha/sarah.png";

const projects = [
  {
    id: "1",
    title: `Electronic Store`,
    imgCover: Electronic_Store,
    gitHub: "https://abdelrhman1812.github.io/electronic_store/",
    repo: "https://github.com/abdelrhman1812/electronic_store",
    tech: [react, Nodejs, Express, mongodb],
    description: "",
    type: ["Fullstack", "React"],
    isLatest: true,
  },
  {
    id: "2",
    title: `Online Shop`,
    imgCover: E_commerce,
    gitHub: "https://abdelrhman1812.github.io/online_shop/",
    repo: "https://github.com/abdelrhman1812/online_shop",
    tech: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React"],
    isLatest: true,
  },
  {
    id: "3",
    title: `Natural Products`,
    imgCover: naturalProducts,
    gitHub: "https://natural-products-gamma.vercel.app/",
    repo: "https://github.com/abdelrhman1812/natural-products",
    tech: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React"],
  },
  {
    id: "4",
    title: `Games App`,
    imgCover: GameApp,
    gitHub: "https://abdelrhman1812.github.io/games/",
    repo: "https://github.com/abdelrhman1812/games",
    tech: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React", "latest"],
    isLatest: true,
  },
  {
    id: "5",
    title: `Food Recipes`,
    imgCover: food,
    gitHub: "https://abdelrhman1812.github.io/Yummy-React.js/",
    repo: "https://github.com/abdelrhman1812/Yummy-React.js",
    tech: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React", "latest"],
    isLatest: true,
  },
  {
    id: "6",
    title: `Social App`,
    imgCover: socialApp,
    gitHub: "https://facebook-murex-sigma.vercel.app/",
    repo: "https://github.com/abdelrhman1812/Facebook",
    tech: [Next, Sequelize, Tailwind, Nodejs, Express],
    description: "",
    type: ["Fullstack", "Next", "latest"],
    isLatest: true,
  },
  {
    id: "7",
    title: `Courses Platform`,
    imgCover: courses,
    gitHub: "https://abdelrhman1812.github.io/coursaty/",
    repo: "https://github.com/abdelrhman1812/coursaty",
    tech: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React", "latest"],
    isLatest: true,
  },
  {
    id: "8",
    title: `Task Manager`,
    imgCover: Task_Manager,
    gitHub: "https://task-manager-mvc.vercel.app",
    repo: "https://github.com/abdelrhman1812/task_manager_mvc",
    tech: [Nodejs, Express, mongodb, HTML, CSS],
    description: "",
    type: ["Fullstack"],
  },
  {
    id: "9",
    title: `English Track App`,
    imgCover: english,
    gitHub: "https://english-track-app.vercel.app",
    repo: "https://github.com/abdelrhman1812/english_track_app",
    tech: [react, Nodejs, Express, mongodb],
    description: "",
    type: ["Fullstack", "React"],
  },
  {
    id: "10",
    title: `Saraha Clone`,
    imgCover: Saraha,
    gitHub: "https://saraha-app-livid.vercel.app/",
    repo: "https://github.com/abdelrhman1812/saraha-app-mvc",
    tech: [Nodejs, Express, mongodb, HTML, CSS],
    description: "",
    type: ["Fullstack"],
  },
  {
    id: "11",
    title: `Note App`,
    imgCover: Notes_APP,
    gitHub: "https://abdelrhman1812.github.io/Notes/",
    repo: "https://github.com/abdelrhman1812/Notes",
    tech: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React"],
  },
  {
    id: "12",
    title: `For Our Children`,
    imgCover: forOurChildren,
    gitHub: "https://abdelrhman1812.github.io/ForOurChildren/",
    repo: "https://github.com/abdelrhman1812/ForOurChildren",
    tech: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React"],
  },
  {
    id: "13",
    title: `Edu Learn Dashboard`,
    imgCover: Edu_Learn_Dashboard,
    gitHub: "https://abdelrhman1812.github.io/edulearn/",
    repo: "https://github.com/abdelrhman1812/edulearn",
    tech: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React"],
  },
  {
    id: "14",
    title: `Mealify`,
    imgCover: Mealify,
    gitHub: "https://abdelrhman1812.github.io/mealify/",
    repo: "https://github.com/abdelrhman1812/mealify",
    tech: [HTML, CSS],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "15",
    title: `Masterscaf`,
    imgCover: Masterscaf,
    gitHub: "https://abdelrhman1812.github.io/Masterscaff/",
    repo: "https://github.com/abdelrhman1812/Masterscaff",
    tech: [HTML, SASS, JS, JQ],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "16",
    title: `Daniels`,
    imgCover: Daniels,
    gitHub: "https://abdelrhman1812.github.io/daniels/",
    repo: "https://github.com/abdelrhman1812/daniels",
    tech: [HTML, CSS, bootstrap, JS],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "17",
    title: `Evs-Electrify`,
    imgCover: Evs_Electrify,
    gitHub: "https://abdelrhman1812.github.io/evs-electrify/",
    repo: "https://github.com/abdelrhman1812/evs-electrify",
    tech: [HTML, SASS, JS, JQ],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "18",
    title: `Fokir`,
    imgCover: Fokir,
    gitHub: "https://abdelrhman1812.github.io/fokir/",
    repo: "https://github.com/abdelrhman1812/fokir",
    tech: [HTML, CSS],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "19",
    title: `Weather App`,
    imgCover: weatherApp,
    gitHub: "https://abdelrhman1812.github.io/Weather/",
    repo: "https://github.com/abdelrhman1812/Weather",
    tech: [HTML, CSS, bootstrap, JS],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
];

export default projects;
