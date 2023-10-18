import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './sites/AboutUs/AboutUs';
import Home from './sites/Home/Home';
import Products from './sites/Products/Products';
import Product from './sites/Product/Product';
import PageNotFound from './sites/PageNotFound/PageNotFound';
import Contact from './sites/Contact/Contact';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[

      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/aboutus",
        element: <AboutUs />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/products/:productId",
        element: <Product />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
      
    ]
  }
]
,
  {basename: '/'}
);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
