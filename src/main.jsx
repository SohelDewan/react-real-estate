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
import Estate from './components/Estate';
import EstateSectionPage from './components/EstateSectionPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')      
      },
    
      {
        path: '/estate/:title',
        element: <Estate />,
        loader: ()=> fetch('/data.json') 
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
        path: "/estate-section-page",
        element: <EstateSectionPage />,
        loader: ()=> fetch('/data.json') 
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
