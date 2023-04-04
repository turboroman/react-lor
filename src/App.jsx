import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './components/home/Home'
import Books from './components/books/Books'
import Movies from './components/movies/Movies'
import MainLayout from './layouts/MainLayout'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="books" element={<Books />} />
            <Route path="movies" element={<Movies />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
