import { Routes, Route } from "react-router-dom";
import Courses from "./pages/courses";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course" element={<HomePage />} />
      <Route path="/posts" element={<HomePage />} />
    </Routes>
  );
}

export default App;
