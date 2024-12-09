import './App.css'
// import HomePage from './pages/HomePage/HomePage'
// import Navigation from './components/Navigation/Navigation';
// import MoviesDetailsPage from './pages/MoviesDetailsPage/MoviesDetailsPage';
// import MovieReviews from './components/MovieReviews/MovieReviews';
// import MovieCast from './components/MovieCast/MovieCast';
// import MoviesPage from './pages/MoviesPage/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const MoviesDetailsPage = lazy(() => import('./pages/MoviesDetailsPage/MoviesDetailsPage'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));

function App() { 
  return (
    <>
    <Navigation />
    <Suspense fallback={<div>Loading your amazing page...</div>}> 
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/movies' element={<MoviesPage />}/>
        <Route path='/movies/:movieId' element={<MoviesDetailsPage />}> 
          <Route path='reviews' element={<MovieReviews />}/>
          <Route path='cast' element={<MovieCast />}/>
        </Route>
      </Routes>
    </Suspense>
    </>
  )
}

export default App
