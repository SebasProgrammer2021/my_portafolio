import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoLogoGithub } from "react-icons/io5";
import { SiVtex } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export const projectData = [
  {
    id: 1,
    image: "/ptll_ppal_app_mhwebp.webp",
    title: "App Mario Hernandez",
    description: "This is a hybrid application that uses a base developed with React Native. It embeds a complete site built on VTEX, along with custom components in React.js, facilitating the purchase of a variety of brand products.",
    type: "Ecommerce",
    websiteLink: "https://play.google.com/store/apps/details?id=com.shopmh",
    technologies: [
      { name: "JavaScript", icon: IoLogoJavascript, color: "rgb(247 223 30)" },
      { name: "HTML5", icon: IoLogoHtml5, color: "rgb(239 68 68)" },
      { name: "CSS3", icon: IoLogoCss3, color: "rgb(33 150 243)" },
      { name: "VTEX", icon: SiVtex, color: "#e31c58" },
      { name: "TypeScript", icon: BiLogoTypescript, color: "#007acc" },
      { name: "React", icon: IoLogoReact, color: "#61DAFB" },
    ],
  },
  {
    id: 2,
    image: "/ptll_empresarios_haceb.webp",
    title: "Empresarios Haceb",
    description: "Ecommerce platform for selling Haceb brand products through referrals. It is fully developed on VTEX and also has an administration panel for managing the business owner.",
    type: "Ecommerce",
    websiteLink: "https://empresarios.haceb.com/",
    technologies: [
      { name: "JavaScript", icon: IoLogoJavascript, color: "rgb(247 223 30)" },
      { name: "HTML5", icon: IoLogoHtml5, color: "rgb(239 68 68)" },
      { name: "CSS3", icon: IoLogoCss3, color: "rgb(33 150 243)" },
      { name: "VTEX", icon: SiVtex, color: "#e31c58" },
      { name: "TypeScript", icon: BiLogoTypescript, color: "#007acc" },
      { name: "React", icon: IoLogoReact, color: "#61DAFB" },
    ],
  },
  {
    id: 3,
    image: "/ptll_tita_test.webp",
    title: "Tita Media Test",
    description: "Web application that allows login with Google, viewing a feed of posts with details like likes and comments. It includes a user information modal, tag filtering, and displays the authenticated user's information in the header.",
    type: "Technical Test",
    websiteLink: "https://sebasprogrammer2021.github.io/Tita-Media-prueba-t-cnica/",
    technologies: [
      { name: "React", icon: IoLogoReact, color: "#61DAFB" },
      { name: "Github-Pages", icon: IoLogoGithub, color: "#fff" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "rgb(247 223 30)" },
      { name: "HTML5", icon: IoLogoHtml5, color: "rgb(239 68 68)" },
      { name: "CSS3", icon: IoLogoCss3, color: "rgb(33 150 243)" },
    ],
  },
  {
    id: 4,
    image: "/ptll_movie_searcher.webp",
    title: "Movie Searcher",
    description: "Movie searcher by name, allowing you to get the image, name, and release year of the movie in the results view. In the detailed view, it shows the movie's name, cover, main actors, and a description.",
    type: "Course Project",
    websiteLink: "https://movie-searcher-udemy.surge.sh/",
    technologies: [
      { name: "JavaScript", icon: IoLogoJavascript, color: "rgb(247 223 30)" },
      { name: "HTML5", icon: IoLogoHtml5, color: "rgb(239 68 68)" },
      { name: "CSS3", icon: IoLogoCss3, color: "rgb(33 150 243)" },
      { name: "React", icon: IoLogoReact, color: "#61DAFB" },
    ],
  },
  {
    id: 5,
    image: "/ptll_credicalidda.webp",
    title: "Credicalidda",
    description: "Informational content page about services offered by Credicalidda, such as FAQs, contact information, terms and conditions, and privacy policies.",	
    type: "Informative Website",
    websiteLink: "https://www.credicalidda.com.pe/paginas-informativas#selected=Preguntas-frecuentes",
    technologies: [
      { name: "JavaScript", icon: IoLogoJavascript, color: "rgb(247 223 30)" },
      { name: "HTML5", icon: IoLogoHtml5, color: "rgb(239 68 68)" },
      { name: "CSS3", icon: IoLogoCss3, color: "rgb(33 150 243)" },
      { name: "React", icon: IoLogoReact, color: "#61DAFB" },
      { name: "VTEX", icon: SiVtex, color: "#e31c58" },
    ],
  }
]
