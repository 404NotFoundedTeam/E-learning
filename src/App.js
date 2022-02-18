import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p className="text-5xl">Hello world</p>} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default App;
