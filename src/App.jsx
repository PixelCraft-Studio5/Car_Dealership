import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./pages/Browse";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;