import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import About from "./components/About";
import AppointmentForm from "./components/AppointmentForm";
import Home from "./components/Home";
import HairPage from "./components/HairPage";
import ManicureAndPedicurePage from "./components/ManicureAndPedicurePage";
import CosmeticsAndMakeUpPage from "./components/CosmeticsAndMakeUpPage";

// the new routing option, which allows data fetching from API's

const router = createBrowserRouter([
  {
    // here at the path "/Home" because I want this to be displayed in the url bar
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/AppointmentForm",
    element: <AppointmentForm />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Coafor",
    element: <HairPage />,
  },
  {
    path: "/Manichiura",
    element: <ManicureAndPedicurePage />,
  },
  {
    path: "/Cosmetica&MakeUp",
    element: <CosmeticsAndMakeUpPage />,
  },
  {
    //this Navigator opens my page at "/Home", not having the default "/Home" route when opening the application
    path: "/",
    element: <Navigate to="/Home" />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
