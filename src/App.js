import Navbar from "./components/navbar";
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Utama from "./pages/Utama";
import Detail from "./pages/Detail";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/detail1" element={<About/>}/>
        <Route path="/" element={<Utama/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
