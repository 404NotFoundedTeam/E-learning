import { Routes, Route } from "react-router-dom";
import Courses from "./pages/courses/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p className="text-5xl">Hello world</p>} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;
