import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Galleryotherpage from './Galleryotherpage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Real } from './componets/RealStaff/Real.jsx';
import { Mappage } from './Mappage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/real",
    element: <Real />
  },
  {
    path: "/gallery",
    element: <Galleryotherpage />
  },
  {
    path: '/Map',
    element: <Mappage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);