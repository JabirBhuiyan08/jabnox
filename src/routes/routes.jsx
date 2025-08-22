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
import axiosPublic from "../hooks/axiosPublic";
import { axiosSecure } from "../hooks/axiosSecure";
import ShowSingleBlog from "../Dashboard Children/Blog/ShowSingleBlog";
import Projects from "../Dashboard Children/Project/Projects";
import ProjectsForm from "../Dashboard Children/Project/ProjectsForm";
import Users from "../Dashboard Children/Users/Users";
import NewDashboardContact from "../Dashboard Children/Contacts/NewDashboardContact";
import { NewContact, NewContactContext } from "../hooks/NewContactContext";
import AdminRoute from "./AdminRoute";
import DashboardHome from "../Dashboard Children/DashboardHome/DashboardHome";
import NoteForm from "../Dashboard Children/Note For User/NoteForm";
import ExcelFile from "../Excel/ExcelFile";
import ExcelDetails from "../Excel/ExcelDetails";
import ReportFrom from "../Dashboard Children/Report a Problem/ReportFrom";
import ApplyNewService from "../Dashboard Children/ApplyNewService/ApplyNewService";
import PendingApplication from "../Dashboard Children/PendingApplication/PendingApplication";
import WebsiteTemplate from "../Dashboard Children/Buy Website Template/WebsiteTemplate";
import UploadService from "../Dashboard Children/Upload Service/UploadService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "excel",
        element: <ExcelFile></ExcelFile>
      },
      {
        path: "excelDetails",
        element: <ExcelDetails></ExcelDetails>
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
        element: <Reviews></Reviews>,
      },
      {
        path: "review-form",
        element: <ReviewForm></ReviewForm>,
      },
      {
        path: "our-profile",
        element: <OurProfile></OurProfile>,
      },
      {
        path: "portfolios",
        element: <Portfolios></Portfolios>,
      },
      {
        path: "blogs/:id",
        loader: ({ params }) =>
          axiosSecure.get(`/blogs/${params.id}`).then((res) => res.data),
        element: <ShowSingleBlog></ShowSingleBlog>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
        
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>
      },
      {
        path: "report-problem",
        element: <ReportFrom></ReportFrom>
      },
      {
        path: "apply-new-service",
        element: <ApplyNewService></ApplyNewService>
      },
      {
        path: "pending-application",
        element: <PendingApplication></PendingApplication>
      },
      {
        path: "website-template",
        element: <WebsiteTemplate></WebsiteTemplate>
      },
      {
        path: "dashboard-reviews",
        loader: () => axiosPublic.get("/reviews").then((res) => res.data),
        element: <DashboardReviews></DashboardReviews>,
      },
      {
        path: "portfolios",
        loader: () => axiosPublic.get("/portfolios").then((res) => res.data),
        element: <Portfolios></Portfolios>,
      },
      
      {
        path: "blogs",
        loader: () => axiosPublic.get("/blogs").then((res) => res.data),
        element: <Blogs></Blogs>,
      },
     
       {
        path: "dashboard-reviews",
        element: <DashboardReviews></DashboardReviews>,
      },

      //admins only routes
      {
        path: "portfolio-form",
        element: 
        <AdminRoute>
          <PortfolioForm></PortfolioForm>
        </AdminRoute>
        
      },
      {
        path: "projects",
        // loader: async() =>await axiosSecure.get("/projects").then((res) => res.data),
        element: <AdminRoute><Projects></Projects></AdminRoute>,
      },
      {
        path: "blog-form",
        element: 
        <AdminRoute>
          <BlogForm></BlogForm>
        </AdminRoute>,
        
      },
     {
        path: "projects-form",
        element: <AdminRoute><ProjectsForm></ProjectsForm></AdminRoute>,
      },
      {
        path: "new-dashboard-contact",
        element: (
          <AdminRoute>
            <NewContact>
              <NewDashboardContact></NewDashboardContact>
            </NewContact>
          </AdminRoute>
        ),
      },
      {
        path: "dashboard-users",
        element: <AdminRoute>
          <Users></Users>
        </AdminRoute>,
      },
      {
        path: "upload-service",
        element: <UploadService></UploadService>
      },
      {
        path:"note-form",
        element: <NoteForm></NoteForm>
      }
    ],
  },
]);
