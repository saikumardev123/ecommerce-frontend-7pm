import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter> */}

      <ProductDetails></ProductDetails>

      {/* <Products></Products> */}

    </>
  );
}

export default App;
