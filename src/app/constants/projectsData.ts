import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { SiVtex } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export const projectData = [
  {
    id: 1,
    image: "/ptll_ppal_app_mhwebp.webp",
    title: "App Mario Hernandez",
    description: "Esta es una aplicación híbrida que utiliza una base desarrollada con React Native. Embebe un sitio completo construido en VTEX, junto con componentes personalizados en React.js, facilitando la compra de una variedad de productos de la marca.",
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
    id:2,
    image:"/ptll_empresarios_haceb.webp",
    title: "Empresarios Haceb",
    description: "Plataforma ecommerce para la venta de productos de la marca Haceb por medio de referidos. El cual es desarrollado completamente en VTEX, ademas posee un panel de administración para la gestión del empresario.",
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
  }
]