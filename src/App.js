import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter> */}

      <Products></Products>

    </>
  );
}

export default App;
