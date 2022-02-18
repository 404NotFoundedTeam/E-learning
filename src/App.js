import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<HomePage />} />
      <Route path="/course" element={<HomePage />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default App;
