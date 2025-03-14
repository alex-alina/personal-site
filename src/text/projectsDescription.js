import spirograph from "../assets/spirograph.png";
import careerPage from "../assets/careerPage.png";
import mealPlanner from "../assets/mealPlanner.png";
import habitHop from "../assets/habitHop.png";

const projectsDescription = {
  currentProject: {
    title: "Habit Hop App - WIP",
    description:
      "Responsive, full stack, habit tracker app. React | Redux | JS | Styled components | Styled system | Formik | Jest | TS | Koa | TypeORM | Postgres.",
    image: habitHop,
    projectLink:
      "https://github.com/alex-alina/habit-hop-client#demo---desktop-view",
    gitHubLink: "https://github.com/alex-alina/habit-hop-client",
    openProjectBtn: "Github Demo",
    gitHubBtn: "Open on GitHub",
  },
  projectOne: {
    title: "Spirograph App",
    description:
      "Drawing app that makes mathematical roulette curves and draws circular patterns. React | JS | Paper.js | Styled Components | ESLint.",
    image: spirograph,
    projectLink: "https://spirograph-app.netlify.com/",
    gitHubLink: "https://github.com/alex-alina/spirograph",
    openProjectBtn: "Open Project",
    gitHubBtn: "Open on GitHub",
  },
  projectTwo: {
    title: "Career Page",
    description:
      "Responsive job posting page connected to an application form. React | JavaScript | Material-UI | CSS | SPA | Input validation.",
    image: careerPage,
    projectLink: "https://career-page.netlify.com/",
    gitHubLink: "https://github.com/alex-alina/ams-recruitment",
    openProjectBtn: "Open Project",
    gitHubBtn: "Open on GitHub",
  },
  projectThree: {
    title: "Meal Planner",
    description:
      "Sustainable and planet friendly meal planner app (SPA). Team project. TypeScript | Koa | TypeORM | PostgreSQL| React | Redux | JS.",
    image: mealPlanner,
    projectLink: "https://planet-friendly-meal-planner.netlify.com",
    gitHubLink: "https://github.com/alex-alina/dinner-planner-client",
    openProjectBtn: "Open Project",
    gitHubBtn: "Open on GitHub",
  },
};

export default projectsDescription;
