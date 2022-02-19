import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Courses from "./pages/courses";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className='header-cover sticky top-0 left-0 w-full shadow-sm'>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<HomePage />} />
        <Route path="/posts" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
