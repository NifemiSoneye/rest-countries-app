import Nav from "./components/Nav";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryInfo from "./components/CountryInfo";

function App() {
  return (
    <>
      <div className="bg-[#202c37ff] min-h-screen  w-full">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:code" element={<CountryInfo />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
