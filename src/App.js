import React from "react";
import ReactDOM from 'react-dom/client';
import {Header} from './components/Header';
import { ProductContainer } from "./components/ProductContainer";

const App = () => {
  return <div>
    <Header></Header>
    <ProductContainer></ProductContainer>
  </div>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

