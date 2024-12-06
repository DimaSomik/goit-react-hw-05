import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Navigation from './components/Navigation/Navigation';
import MoviesDetailsPage from './pages/MoviesDetailsPage/MoviesDetailsPage';
import { Route, Routes } from 'react-router-dom';

function App() { 

  return (
    <>
    <Navigation />
    <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/movies/:movieId' element={<MoviesDetailsPage />}/>
    </Routes>
    </>
  )
}

export default App
