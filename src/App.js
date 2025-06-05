import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { ProductContainer } from "./components/ProductContainer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { About } from "./components/About";
import { ContactUs } from "./components/Contact";
import { Error } from "./components/Error";
import { ProductDescription } from "./components/ProductDescription";
// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import('./components/Grocery'));
const App = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      { path: '/', element: <ProductContainer />},
      { path: "about", element: <About></About> },
      { path: "contact", element: <ContactUs></ContactUs>},
      { path: "grocery", element: <Suspense fallback={"...loading"}><Grocery></Grocery></Suspense> },
      { path: 'products/:id', element: <ProductDescription></ProductDescription>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
