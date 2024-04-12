import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import UpdateProfile from './components/UpdateProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children:[
      {
        path: "/",
        element: <Home></Home>
        
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FirebaseProvider>
    <RouterProvider router={router} />
  </FirebaseProvider>
  </React.StrictMode>,
)
