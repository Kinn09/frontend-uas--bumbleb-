import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail1 from "./pages/detail1";
import Utama from "./pages/Utama";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/detail1" element={<Detail1/>}/>
        <Route path="/" element={<Utama/>}/>
      </Routes>
    </div>
  );
}

export default App;
