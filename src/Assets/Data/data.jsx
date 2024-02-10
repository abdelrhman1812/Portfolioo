/* Tech */

import bootstrap from '../../Assets/images/skills/bootstrap.png';

import CSS from '../../Assets/images/skills/css.1b9dcc2e.svg';

import HTML from '../../Assets/images/skills/html5.a7362949.svg';

import JS from '../../Assets/images/skills/javascript.455da02c.svg';

import JQ from '../../Assets/images/skills/jquery.svg';

import react from '../../Assets/images/skills/react.svg';

import SASS from '../../Assets/images/skills/sass.svg';


/* ==========  Imaes ========== */

/* Ecommerce */
import Ecommerce from '../images/Projects/E-commerce/Home.png';

import eHome from '../images/Projects/E-commerce/Home.png';
import ecart from '../images/Projects/E-commerce/cart.png';
import ecategory from '../images/Projects/E-commerce/category.png';
import econtact from '../images/Projects/E-commerce/contact.png';
import elogin from '../images/Projects/E-commerce/login.png';
import eProduct from '../images/Projects/E-commerce/products.png';
import eprofile from '../images/Projects/E-commerce/profile.png';
import ergister from '../images/Projects/E-commerce/register.png';
import ewishlist from '../images/Projects/E-commerce/wishlist.png';

/* Dark */

import edcart from '../images/Projects/E-commerce/Dark/cart.png';
import edcategory from '../images/Projects/E-commerce/Dark/category.png';
import edcontact from '../images/Projects/E-commerce/Dark/contact.png';
import edHome from '../images/Projects/E-commerce/Dark/home.png';
import edlogin from '../images/Projects/E-commerce/Dark/login.png';
import edProduct from '../images/Projects/E-commerce/Dark/product.png';
import edprofile from '../images/Projects/E-commerce/Dark/profile.png';
import edrgister from '../images/Projects/E-commerce/Dark/rejster.png';
import edwishlist from '../images/Projects/E-commerce/Dark/wish list.png';


/* Yummy */

import Yummy from '../images/Projects/Yummy/Home.png';

import yHome from '../images/Projects/Yummy/Home.png';
import yAbout from '../images/Projects/Yummy/about.png';
import yCategory from '../images/Projects/Yummy/category.png';
import yContact from '../images/Projects/Yummy/contact.png';
import yDetails from '../images/Projects/Yummy/details.png';
import yFoodMenu from '../images/Projects/Yummy/foodMenu.png';
import yServices from '../images/Projects/Yummy/servicess.png';

/* Notes */
import Notes from '../images/Projects/Notes/Home.png';

import homeNote from '../images/Projects/Notes/Home note.png';
import noteLogin from '../images/Projects/Notes/Login.png';
import media from '../images/Projects/Notes/media.png';
import media_ from '../images/Projects/Notes/media_.png';


/* EVS */

import EVS from '../images/Projects/Evs/Home.png';
import evsPhoto from '../images/Projects/Evs/Photo.png';
import evsPhotoDetails from '../images/Projects/Evs/photo-overlay.png';

import evsVideoDetails from '../images/Projects/Evs/video-overlay.png';
import evsVideo from '../images/Projects/Evs/video.png';


/* Masterscaf */

import Masterscaf from '../images/Projects/Masterscaf/Home.png';
import masterscafAbout from '../images/Projects/Masterscaf/about.png';
import masterscafEvents from '../images/Projects/Masterscaf/events.png';
import masterscafProjects from '../images/Projects/Masterscaf/projects.png';
import masterscafSystem from '../images/Projects/Masterscaf/system.png';



/* Mealify */

import Mealify_Light from '../images/Projects/Mealify/Home-light.png';
import Mealify_dark from '../images/Projects/Mealify/home-dark.png';


/* Login */

// import homeSmart from '../images/Projects/login/home.png';
// import loginSmart from '../images/Projects/login/login.png';
// import registerSmart from '../images/Projects/login/register.png';


/* BookMark */

import BookMark from '../images/Projects/BookMark/BookMark.png';

/* Weather */
import Weather from '../images/Projects/Weather App/weather.png';


/* Quotes */
import Quotes from '../images/Projects/Quotes/Quotes.png';



/*   Daniels  */
import Daniels from '../images/Projects/Daniels/Dan.png';

/*   Devfolio  */
import Devfolio from '../images/Projects/Devfolio/Dev.png';

const projects = [

    /* e-commerce */
    {
        id: '1',
        title: "e-commerce",
        imgCover: Ecommerce,
        gitHub: 'https://abdelrhman1812.github.io/online_shop/',
        tech: [react, HTML, CSS, bootstrap],
        describtion: "It allows you to create an account, log in to it, and then add your needed & desired products to your cart or save them in your Wishlist for a future purchase. It aims to provide users with a seamless and enjoyable online shopping experience. Wondering if you can use your preferred payment method? I have counted everything, so you can choose to pay either in cash or online. ",
        tools: ["react-router-dom", 'react-query', "react-helmet", "axios", "formik", "Yup", "react-slick", "slick-carousel", "react-loader-spinner", "react-hot-toast", "react-detect-offline", "jwt-decode", "Aos"],
        images: [eHome, edHome,
            elogin, edlogin,
            ergister, edrgister,
            eProduct, edProduct,
            ecategory, edcategory,
            ewishlist, edwishlist,
            ecart, edcart,
            eprofile, edprofile,
            econtact, edcontact]
    },

    /* Yummy */
    {
        id: '2',
        title: "Yummy APP",
        imgCover: Yummy,
        gitHub: 'https://abdelrhman1812.github.io/Yummy-React.js/',
        tech: [react, HTML, CSS, bootstrap],
        describtion: "Meals and Recipes website is a website that provides a wide range of different recipes and dishes. Users can find recipes for various dishes, drinks, desserts, snacks, etc. Step-by-step cooking instructions are provided to help users prepare recipes easily. When you visit the website, you will be provided with some popular meals. Do you like one of them? Don't wait, and click on it directly so you can view the meal's instructions and ingredients. In the categories section, you will view all the meals' categories, and then you can choose the one you like the most, to be able to see all the meals related to the chosen category.",
        tools: ["react-router-dom", 'react-query', "react-helmet", "axios", "Aos"],
        images: [yHome, yAbout, yServices, yFoodMenu, yCategory, yDetails, yContact]
    },

    /* Notes */
    {
        id: '3',
        title: "Notes APP",
        imgCover: Notes,
        gitHub: 'https://abdelrhman1812.github.io/Notes/',
        tech: [react, HTML, CSS, bootstrap],
        describtion: `Having trouble organizing your ideas in one place? Struggling to find your old important notes?

        Your Problems will be solved in no time, if you try my simple QuickNotes Web App.
        
        It secures all of your notes by allowing you to create an account and save them there for as long as you want.
        
        When you log in to your account, you can easily add your notes and manage them by either editing or deleting them.
        
        Need to find an important note quickly? Simply type any memorized word from the note's title in the search field.`,
        tools: ["react-router-dom", 'react-query', "react-helmet", "axios", "Aos"],
        images: [Notes, noteLogin, homeNote, media, media_]
    },

    /* evs */
    {
        id: '4',
        title: "Evs-Electrify",
        imgCover: EVS,
        gitHub: 'https://abdelrhman1812.github.io/evs-electrify/',
        tech: [HTML, bootstrap, SASS, JS, JQ],
        describtion: `FIRST ELECTRIC VEHICLES  EXPO & CONFERENCE IN EGYPT Task Of factory Yard`,
        images: [EVS, evsPhoto, evsPhotoDetails, evsVideo, evsVideoDetails]
    },

    /* Masterscaf */
    {
        id: '5',
        title: "Masterscaf",
        imgCover: Masterscaf,
        gitHub: 'https://abdelrhman1812.github.io/Masterscaff/',
        tech: [HTML, bootstrap, SASS, JS, JQ],
        describtion: `MasterCafe  Task Of factory Yard `,
        images: [Masterscaf, masterscafAbout, masterscafProjects, masterscafSystem, masterscafEvents]
    },

    /* Mealify_dark */
    {
        id: '6',
        title: "Mealify",
        imgCover: Mealify_dark,
        gitHub: 'https://abdelrhman1812.github.io/mealify/',
        tech: [HTML, CSS],
        describtion: `Mealify is a simple Restaurant Landing Page that was built using HTML and CSS Only.
        I've used HTML Semantic Elements, Flexbox, CSS Pseudo-classes, CSS Pseudo-elements, CSS Variables, Position, Transition, Animation and Media Query to build this responsive layout.
        This landing page supports dark mode.`,
        images: [Mealify_Light, Mealify_dark]
    },





    /* BookMark */
    {
        id: '7',
        title: "Smart Login",
        imgCover: BookMark,
        gitHub: 'https://abdelrhman1812.github.io/BookMark/',
        tech: [HTML, bootstrap, CSS, JS],
        describtion: ``,
        images: [BookMark]
    },

    // /* Login */

    // {
    //     id: '8',
    //     title: "Smart Login",
    //     imgCover: registerSmart,
    //     gitHub: 'https://abdelrhman1812.github.io/Login_Register/',
    //     tech: [HTML, bootstrap, CSS, JS],
    //     describtion: ``,
    //     images: [loginSmart, registerSmart, homeSmart]
    // },

    /* Weather */
    {
        id: '8',
        title: "Weather App",
        imgCover: Weather,
        gitHub: 'https://abdelrhman1812.github.io/Weather/',
        tech: [HTML, bootstrap, CSS, JS],
        describtion: `- It allows you to check the weather forecast for your current location or searchfor weather information in various cities
        worldwide.
        -Features:
        - 3-day forecasts
        - Current location detection
        - City search
        -Tech : HTML ,`,
        images: [Weather]
    },


    /* Quotes */

    {
        id: '9',
        title: "Quotes",
        imgCover: Quotes,
        gitHub: 'https://abdelrhman1812.github.io/Quote/',
        tech: [HTML, bootstrap, CSS, JS],
        describtion: ``,
        images: [Quotes]
    },

    /* Daniels */
    {
        id: '10',
        title: "Daniels",
        imgCover: Daniels,
        gitHub: 'https://abdelrhman1812.github.io/daniels/',
        tech: [HTML, bootstrap, CSS],
        describtion: ``,
        images: [Daniels]
    },


    /* Daniels */
    {
        id: '11',
        title: "Devfolio",
        imgCover: Devfolio,
        gitHub: 'https://abdelrhman1812.github.io/devFolio/',
        tech: [HTML, bootstrap, CSS],
        describtion: ``,
        images: [Daniels]
    },






]


export default projects;