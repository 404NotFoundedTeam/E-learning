import { Routes, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Courses from "./pages/courses";

function App() {
  return (
    <>
      <div className='header-cover sticky top-0 left-0 w-full shadow-sm z-10'>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<HomePage />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
