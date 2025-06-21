import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Layout/Root.jsx';
import Video from './Components/Page/Video.jsx';
import DetilsVideo from './Components/Page/DetilsVideo.jsx';
import Register from './Components/Page/Register.jsx';
import Login from './Components/Page/Login.jsx';
import MainContextProvider from './Context/MainContextProvider.jsx';
import PrivateRoute from './Components/Private/PrivateRoute.jsx';
import DashBord from './Components/Page/DashBord.jsx';
import Profile from './Components/Page/Profile.jsx';

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/tem/:id',
        loader:({params})=> fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${params.id}`),
        element: <Video></Video>
      },
      {
        path: '',
        element: <Navigate to={'/tem/1001'}></Navigate>
      },
      {
        path:'/show/:id',
        loader : ({params})=> fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${params.id}`),
        element:<DetilsVideo></DetilsVideo>
      }
    ]
  },
  {
    path:'/register',
    element: <Register></Register>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path:'/dashbord',
    element:<PrivateRoute><DashBord></DashBord></PrivateRoute>
    
  },
  {
        path: '/profile',
        element: <Profile></Profile>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContextProvider>
      <RouterProvider router={router} />
    </MainContextProvider>
  </StrictMode>,
)
