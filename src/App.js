import { Routes, Route } from 'react-router-dom'
import Posts from './pages/Posts'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import Courses from './pages/courses'
import Course from './pages/course/Course'
import MainPost from './pages/Post.js'
import Footer from './components/Footer'

function App() {
  return (
    <section>
      <div className="header-cover sticky top-0 z-50 left-0 w-full shadow-sm">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course" element={<Course />} />
        <Route path="/posts">
          <Route path="" element={<Posts />} />
          <Route path="post" element={<MainPost />} />
        </Route>
      </Routes>

      <Footer />
    </section>
  )
}

export default App
