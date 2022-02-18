import { Routes, Route } from 'react-router-dom'
import Course from './pages/course/Course'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<HomePage />} />
      <Route path="/course" element={<Course />} />
      <Route path="/posts" element={<HomePage />} />
    </Routes>
  )
}

export default App
