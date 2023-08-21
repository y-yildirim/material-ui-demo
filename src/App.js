import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
