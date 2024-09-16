import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./components/Pages/About"
import Home from './components/Pages/Home';

function App() {
  return (
    <div>
      <Home /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
