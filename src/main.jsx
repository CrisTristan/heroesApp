import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { MarvelPage, DcPage, HeroPage, SearchPage } from "./heroes";
import { LoginPage } from "./auth";
import { Navbar } from "./ui";
import { AuthProvider } from "./auth";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";

const router = createBrowserRouter([
  {
    path: "/marvel",
    element: <PrivateRoute> <Navbar /> <MarvelPage /></PrivateRoute>,
  },
  {
    path: "/dc",
    element: <PrivateRoute><Navbar /><DcPage /></PrivateRoute>
  },
  {
    path: "/login",
    element: <PublicRoute><LoginPage /></PublicRoute>
  },
  {
    path: "/",
    element: <Navigate to={"/marvel"} />
  },
  {
    path: "/search",
    element: <PrivateRoute><Navbar /><SearchPage/></PrivateRoute>
  },
  {
    path: "/hero/:id",
    element: <PrivateRoute><Navbar /><HeroPage/></PrivateRoute>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
