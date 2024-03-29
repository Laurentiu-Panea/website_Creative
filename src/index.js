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
import BaraProgramare from "./components/BaraProgramare";
import FormularProgramare from "./components/FormularProgramare";
import Home from "./components/Home";
import Coafor from "./components/Coafor";
import Manichiura from "./components/Manichiura";
import Cosmetica from "./components/Cosmetica";

// varianta noua de routing,care permite data fetching de la API's

const router = createBrowserRouter([
  {
    // aici la path-ul "/Home" pentru ca vreau sa fie afisat in bara url acest lucru
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Formular-programare",
    element: <FormularProgramare />,
  },
  {
    path: "/Bara-programare",
    element: <BaraProgramare />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Coafor",
    element: <Coafor />,
  },
  {
    path: "/Manichiura",
    element: <Manichiura />,
  },
  {
    path: "/Cosmetica",
    element: <Cosmetica />,
  },
  {
    //acest Navigator imi deschide pagina la "/Home",neavand la deschiderea aplicatiei ruta"/Home" prestabilita
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
