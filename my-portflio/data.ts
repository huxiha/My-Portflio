import { RiComputerLine } from "react-icons/ri";
import { FaPython, FaServer } from "react-icons/fa"
import { IProject, IService, ISkill } from "./type";

export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about: "I can build beutiful web pages using <b>html</b>, <b>css</b>, <b>js</b> and <b>React.js</b>"
    },
    {
        Icon: FaServer,
        title: "Backend Development",
        about: "I can build beutiful web pages using <b>html</b>, <b>css</b>, <b>js</b> and <b>React.js</b>"
    },
    
];

export const projects:IProject[] = [
    {
        id: 1,
        name: "base-apparel-coming-soon",
        description: "This is a solution to the Base Apparel coming soon page challenge on Frontend Mentor.",
        image_path: "/images/apparel.png",
        deployed_url: "https://huxiha.github.io/front-end-project/base-apparel-coming-soon-master/",
        github_url: "https://github.com/huxiha/front-end-project/tree/master/base-apparel-coming-soon-master",
        category: ["HTML", "CSS" , "JS"],
        key_techs: ["html", "css", "js", "grid", "flex"],
    },
    {
        id: 2,
        name: "four-card-feature-section",
        description: "This is a solution to the Four card feature section challenge on Frontend Mentor.",
        image_path: "/images/fourCard.png",
        deployed_url: "https://huxiha.github.io/front-end-project/four-card-feature-section-master/",
        github_url: "https://github.com/huxiha/front-end-project/tree/master/four-card-feature-section-master",
        category: ["HTML", "CSS"],
        key_techs: ["html", "css", "flex"],
    },
    {
        id: 3,
        name: "huddle-landing-page-with-single-introductory-section",
        description: "This is a solution to the Huddle landing page with single introductory section challenge on Frontend Mentor. ",
        image_path: "/images/huddleLanding.png",
        deployed_url: "https://huxiha.github.io/front-end-project/huddle-landing-page-with-single-introductory-section-master/",
        github_url: "https://github.com/huxiha/front-end-project/tree/master/huddle-landing-page-with-single-introductory-section-master",
        category: ["HTML", "CSS"],
        key_techs: ["html", "css", "flex"],
    },
    {
        id: 4,
        name: "insure-landing-page",
        description: "This is a solution to the Insure landing page challenge on Frontend Mentor.",
        image_path: "/images/insureLanding.png",
        deployed_url: "https://huxiha.github.io/front-end-project/insure-landing-page-master/",
        github_url: "https://github.com/huxiha/front-end-project/tree/master/insure-landing-page-master",
        category: ["HTML", "CSS", "JS"],
        key_techs: ["html", "css", "flex", "javascript"],
    },
    {
        id: 5,
        name: "intro-component-with-signup-form",
        description: "This is a solution to the Intro component with sign up form challenge on Frontend Mentor.",
        image_path: "/images/introComponent.png",
        deployed_url: "https://huxiha.github.io/front-end-project/intro-component-with-signup-form-master/",
        github_url: "https://github.com/huxiha/front-end-project/tree/master/intro-component-with-signup-form-master",
        category: ["HTML", "CSS", "JS"],
        key_techs: ["html", "css", "flex", "grid", "javascript"],
    },
    {
        id: 6,
        name: "pricing-component-with-toggle",
        description: "This is a solution to the Pricing component with toggle challenge on Frontend Mentor.",
        image_path: "/images/priceComponent.png",
        deployed_url: "https://huxiha.github.io/front-end-project/pricing-component-with-toggle-master/",
        github_url: "https://github.com/huxiha/front-end-project/tree/master/pricing-component-with-toggle-master",
        category: ["HTML", "CSS", "JS"],
        key_techs: ["html", "css", "flex", "javascript"],
    },
    {
        id: 7,
        name: "rest-countries-api",
        description: "This is a solution to the REST Countries API with color theme switcher challenge on Frontend Mentor.",
        image_path: "/images/restCountry.jpg",
        deployed_url: "https://rest-country-api-virid.vercel.app/",
        github_url: "https://github.com/huxiha/front-end-project/tree/master/rest-countries-api",
        category: ["REACT", "CSS", "JS"],
        key_techs: ["React.js", "css", "javascript"],
    },
    {
        id: 8,
        name: "single-price-grid-component",
        description: "This is a solution to the Single price grid component challenge on Frontend Mentor.",
        image_path: "/images/singlePrice.png",
        deployed_url: "https://huxiha.github.io/front-end-project/single-price-grid-component/",
        github_url: "https://github.com/huxiha/front-end-project/tree/master/single-price-grid-component",
        category: ["HTML", "CSS"],
        key_techs: ["html", "css", "flex"],
    },
    {
        id: 9,
        name: "url-shortening-api",
        description: "This is a solution to the Shortly URL shortening API Challenge challenge on Frontend Mentor.",
        image_path: "/images/urlShortening.png",
        deployed_url: "https://url-shortening-api-xi.vercel.app/",
        github_url: "https://github.com/huxiha/front-end-project/tree/master/url-shortening-api",
        category: ["REACT", "CSS", "JS"],
        key_techs: ["React.js", "css", "javascript", "Json Server"],
    },
    {
        id: 10,
        name: "my-portflio",
        description: "This is my portflio.",
        image_path: "/images/myPortflio.png",
        deployed_url: "https://my-portflio.vercel.app/",
        github_url: "https://github.com/huxiha/My-Portflio/tree/main/my-portflio",
        category: ["NEXT"],
        key_techs: ["Next.js", "TailwindCSS", "typscript", "Framer Motion"],
    },


   
];

export const languages:ISkill[] = [
    {
        name: "Python",
        level: 60,
    },
    {
        name: "Java",
        level: 50,
    },
    {
        name: "Javascript",
        level: 70,
    },
    {
        name: "React.js",
        level: 70,
    },
    {
        name: "Next.js",
        level: 60,
    },
];

export const tools:ISkill[] = [
    {
        name: "Tailwind CSS",
        level: 60,
    },
    {
        name: "Framer",
        level: 40,
    },
    {
        name: "Vercel",
        level: 50,
    },

];