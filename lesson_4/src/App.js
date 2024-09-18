import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from "./components/Pages/About"
import Home from './components/Pages/Home';

function App() {
  return (
    <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
