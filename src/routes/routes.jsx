import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layout/Main";
import Coding from "../CodingPage/Coding";
import SocialBooster from "../SocialBooster/SocialBooster";
import Design from "../Graphic Design/Design";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Wordpress from "../Wordpress/Wordpress";
import LoginPage from "../Login/LoginPage";
import Reviews from "../About/Reviews";
import ReviewForm from "../About/ReviewForm/ReviewForm";
import OurProfile from "../About/OurProfile";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage";
import DashboardReviews from "../Dashboard Children/DashboardReviews";
import Portfolios from "../Dashboard Children/Portfolio/Portfolios";
import PortfolioForm from "../Dashboard Children/Portfolio/PortfolioForm";
import BlogForm from "../Dashboard Children/Blog/BlogForm";
import Blogs from "../Dashboard Children/Blog/Blogs";
import DashboardContacts from "../Dashboard Children/Contacts/DashboardContacts";
import axiosPublic from "../hooks/axiosPublic";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
             {
                path: "login",
                element: <LoginPage></LoginPage>,
             },
             {
                path: "login/:id",
                element: <LoginPage></LoginPage>,
             },
             {
               path: "reviews",
               element: <Reviews></Reviews>
             },
             {
               path: "review-form",
               element: <ReviewForm></ReviewForm>
             },
             {
               path: "our-profile",
               element: <OurProfile></OurProfile>
             },
             {
               path: "portfolios",
               element: <Portfolios></Portfolios>
             }
        ]
   },{
      path: "/dashboard",
      element: <PrivateRoute>
         <Dashboard></Dashboard></PrivateRoute>,
      children:[
         {
            path:"dashboard-reviews",
            loader: () => axiosPublic.get('/reviews').then(res => res.data),
            element:<DashboardReviews></DashboardReviews>
         },
         {
            path:"portfolios",
            loader: () => axiosPublic.get('/portfolios').then(res => res.data),
            element:<Portfolios></Portfolios>
         },
         {
            path:"portfolio-form",
            element:<PortfolioForm></PortfolioForm>
         },
         {
            path:"blog-form",
            element:<BlogForm></BlogForm>
         },
         {
            path:"blogs",
            element:<Blogs></Blogs>
         },
         {
            path:"dashboard-reviews",
            element:<DashboardReviews></DashboardReviews>
         },
         {
            path:"dashboard-contacts",
            element:<DashboardContacts></DashboardContacts>
         }
      ]

   }
]);