import logo from './logo.svg';
import './App.css';
import Navbar from './containers/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter>

    </>
  );
}

export default App;
