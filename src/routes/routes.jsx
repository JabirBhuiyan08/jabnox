import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layout/Main";
import Coding from "../CodingPage/Coding";
import SocialBooster from "../SocialBooster/SocialBooster";
import Design from "../Graphic Design/Design";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Wordpress from "../Wordpress/Wordpress";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
        children: [
             {
                path: "/",
                element: <Home></Home>,
             },
             {
                path: "coding",
                element: <Coding></Coding>,
             },
             {
                path: "wordpress",
                element: <Wordpress></Wordpress>,
             },
             {
                path: "social-booster",
                element: <SocialBooster></SocialBooster>,
             },
             {
                path: "graphic-design",
                element: <Design></Design>,
             },
             {
                path: "about",
                element: <About></About>,
             },
             {
                path: "contact",
                element: <Contact></Contact>,
             },
        ]
   }
]);