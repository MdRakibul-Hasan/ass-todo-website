import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './Components/Services/Register/Register.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LayOut from './Components/LayOut.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Services/Login/Login.jsx';
import AuthProvider from './Components/Services/AuthProvider.jsx';
import ProtectedRoute from './Components/Services/ProtectedRoute/ProtectedRoute.jsx';
import AboutUs from './Components/OptionalPage/AboutUs.jsx';
import TermsAndConditions from './Components/OptionalPage/TermsAndConditions.jsx';
import PrivacyPolicy from './Components/OptionalPage/PrivacyPolicy.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';
import AddProduct from './Components/Dashboard/AddProduct.jsx';
import UpdateProduct from './Components/Dashboard/UpdateProduct.jsx';

import ProductDetails from './Components/Home/ProductDetails.jsx';
import Products from './ProductCategory/Products.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import MyProfile from './Components/Dashboard/MyProfile.jsx';
import MyProduct from './Components/Dashboard/MyProduct.jsx';
import Allusers from './Components/Dashboard/Allusers.jsx';
import ProductReviewQueue from './Components/Dashboard/ProductReviewQueue.jsx';
import ReportedContent from './Components/Dashboard/ReportedContent.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,

    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('/data.json')

      },
      {
        path: '/techProduct/:id',
        element: <ProtectedRoute> <ProductDetails></ProductDetails></ProtectedRoute>,
        loader: ({params})=>fetch(`https://ass12-crud-server3.vercel.app/techProduct/${params.id}`),
        
      },
      
      {
        path: '/products',
        element: <Products></Products>,
        // loader: ()=>fetch('https://ass12-crud-server3.vercel.app/techProduct'),
        
      },
      {
        path: '/addProduct',
        element:  <AddProduct></AddProduct>,
        loader: ()=>fetch('/data.json'),
        
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },      
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/terms',
        element: <TermsAndConditions></TermsAndConditions>
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy></PrivacyPolicy>
      },

    ]
  },
  {
    path: 'dashboard',
    element :<ProtectedRoute><Dashboard></Dashboard></ProtectedRoute>,
    children: [
      {
        path: 'myprofile',
        element: <MyProfile></MyProfile>,

      },
      {
        path: 'addproduct',
        element: <AddProduct></AddProduct>,
        
      },
      {
        path: 'myproduct',
        element: <MyProduct></MyProduct>,
        loader: ()=>fetch('https://ass12-crud-server3.vercel.app/techProduct'),
      }
      ,
      {
        path: 'updateproduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params})=>fetch(`https://ass12-crud-server3.vercel.app/techProduct/${params.id}`),
        
      },
      // admin dashboard
      {
        path: 'manageusers',
        element: <Allusers></Allusers>,
        loader: ()=>fetch('https://ass12-crud-server3.vercel.app/users'),
      },
      // moderator dashboard
      {
        path: 'productstatus',
        element: <ProductReviewQueue></ProductReviewQueue>,
        loader: ()=>fetch('https://ass12-crud-server3.vercel.app/techProduct'),
      },
      {
        path: 'reportedContent',
        element: <ReportedContent></ReportedContent>,
        loader: ()=>fetch('https://ass12-crud-server3.vercel.app/techProduct'),
      },
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
 <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
