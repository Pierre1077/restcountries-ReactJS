import logo from './logo.svg';
import './App.css';
import Home from "./page/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Visited from "./page/Visited/Visited";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/visited" element={ <Visited/> } />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
