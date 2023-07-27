import logo from './logo.svg';
import './App.css';
import "./styles/globals.css"
import { Layout } from './components';
import { About, Home, Projects } from "./pages"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
