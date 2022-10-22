import { Routes, Route } from 'react-router-dom';
import { AllAnimes } from '../Pages/AllAnimes';
import { AllMovies } from '../Pages/AllMovies';
import { AnimeHome } from '../Pages/AnimeHome';
import { IndividualAnime } from '../Pages/IndividualAnime';
import { IndividualMovie } from '../Pages/IndividualMovie';
import { MovieHome } from '../Pages/MovieHome';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieHome />} />
      <Route path="/animes" element={<AnimeHome />} />
      <Route path="/allmovies" element={<AllMovies />} />
      <Route path="/allanimes" element={<AllAnimes />} />
      <Route path="/movie/:id" element={<IndividualMovie />} />
      <Route path="/anime/:id" element={<IndividualAnime />} />
    </Routes>
  );
};
