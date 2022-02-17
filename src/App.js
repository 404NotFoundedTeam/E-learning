import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p className="text-5xl">Hello world</p>} />
    </Routes>
  );
}

export default App;
