/* technologies */

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
    image: Electronic_Store,
    liveUrl: "https://abdelrhman1812.github.io/electronic_store/",
    githubUrl: "https://github.com/abdelrhman1812/electronic_store",
    technologies: [react, Nodejs, Express, mongodb],
    description: "",
    type: ["Fullstack", "React"],
    isLatest: true,
  },
  {
    id: "2",
    title: `Online Shop`,
    image: E_commerce,
    liveUrl: "https://abdelrhman1812.github.io/online_shop/",
    githubUrl: "https://github.com/abdelrhman1812/online_shop",
    technologies: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React"],
    isLatest: true,
  },
  {
    id: "3",
    title: `Natural Products`,
    image: naturalProducts,
    liveUrl: "https://natural-products-gamma.vercel.app/",
    githubUrl: "https://github.com/abdelrhman1812/natural-products",
    technologies: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React"],
  },
  {
    id: "4",
    title: `Games App`,
    image: GameApp,
    liveUrl: "https://abdelrhman1812.github.io/games/",
    githubUrl: "https://github.com/abdelrhman1812/games",
    technologies: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React", "latest"],
    isLatest: true,
  },
  {
    id: "5",
    title: `Food Recipes`,
    image: food,
    liveUrl: "https://abdelrhman1812.github.io/Yummy-React.js/",
    githubUrl: "https://github.com/abdelrhman1812/Yummy-React.js",
    technologies: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React", "latest"],
    isLatest: true,
  },
  {
    id: "6",
    title: `Social App`,
    image: socialApp,
    liveUrl: "https://facebook-murex-sigma.vercel.app/",
    githubUrl: "https://github.com/abdelrhman1812/Facebook",
    technologies: [Next, Sequelize, Tailwind, Nodejs, Express],
    description: "",
    type: ["Fullstack", "Next", "latest"],
    isLatest: true,
  },
  {
    id: "7",
    title: `Courses Platform`,
    image: courses,
    liveUrl: "https://abdelrhman1812.github.io/coursaty/",
    githubUrl: "https://github.com/abdelrhman1812/coursaty",
    technologies: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React", "latest"],
    isLatest: true,
  },
  {
    id: "8",
    title: `Task Manager`,
    image: Task_Manager,
    liveUrl: "https://task-manager-mvc.vercel.app",
    githubUrl: "https://github.com/abdelrhman1812/task_manager_mvc",
    technologies: [Nodejs, Express, mongodb, HTML, CSS],
    description: "",
    type: ["Fullstack"],
  },
  {
    id: "9",
    title: `English Track App`,
    image: english,
    liveUrl: "https://english-track-app.vercel.app",
    githubUrl: "https://github.com/abdelrhman1812/english_track_app",
    technologies: [react, Nodejs, Express, mongodb],
    description: "",
    type: ["Fullstack", "React"],
  },
  {
    id: "10",
    title: `Saraha Clone`,
    image: Saraha,
    liveUrl: "https://saraha-app-livid.vercel.app/",
    githubUrl: "https://github.com/abdelrhman1812/saraha-app-mvc",
    technologies: [Nodejs, Express, mongodb, HTML, CSS],
    description: "",
    type: ["Fullstack"],
  },
  {
    id: "11",
    title: `Note App`,
    image: Notes_APP,
    liveUrl: "https://abdelrhman1812.github.io/Notes/",
    githubUrl: "https://github.com/abdelrhman1812/Notes",
    technologies: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React"],
  },
  {
    id: "12",
    title: `For Our Children`,
    image: forOurChildren,
    liveUrl: "https://abdelrhman1812.github.io/ForOurChildren/",
    githubUrl: "https://github.com/abdelrhman1812/ForOurChildren",
    technologies: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React"],
  },
  {
    id: "13",
    title: `Edu Learn Dashboard`,
    image: Edu_Learn_Dashboard,
    liveUrl: "https://abdelrhman1812.github.io/edulearn/",
    githubUrl: "https://github.com/abdelrhman1812/edulearn",
    technologies: [react, HTML, CSS, bootstrap],
    description: "",
    type: ["React"],
  },
  {
    id: "14",
    title: `Mealify`,
    image: Mealify,
    liveUrl: "https://abdelrhman1812.github.io/mealify/",
    githubUrl: "https://github.com/abdelrhman1812/mealify",
    technologies: [HTML, CSS],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "15",
    title: `Masterscaf`,
    image: Masterscaf,
    liveUrl: "https://abdelrhman1812.github.io/Masterscaff/",
    githubUrl: "https://github.com/abdelrhman1812/Masterscaff",
    technologies: [HTML, SASS, JS, JQ],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "16",
    title: `Daniels`,
    image: Daniels,
    liveUrl: "https://abdelrhman1812.github.io/daniels/",
    githubUrl: "https://github.com/abdelrhman1812/daniels",
    technologies: [HTML, CSS, bootstrap, JS],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "17",
    title: `Evs-Electrify`,
    image: Evs_Electrify,
    liveUrl: "https://abdelrhman1812.github.io/evs-electrify/",
    githubUrl: "https://github.com/abdelrhman1812/evs-electrify",
    technologies: [HTML, SASS, JS, JQ],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "18",
    title: `Fokir`,
    image: Fokir,
    liveUrl: "https://abdelrhman1812.github.io/fokir/",
    githubUrl: "https://github.com/abdelrhman1812/fokir",
    technologies: [HTML, CSS],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
  {
    id: "19",
    title: `Weather App`,
    image: weatherApp,
    liveUrl: "https://abdelrhman1812.github.io/Weather/",
    githubUrl: "https://github.com/abdelrhman1812/Weather",
    technologies: [HTML, CSS, bootstrap, JS],
    description: "",
    type: ["HTML, CSS, Bootstrap, JS"],
  },
];

export default projects;
