import { Routes, Route } from 'react-router-dom';
import { AnimeHome } from '../Pages/AnimeHome';
import { MovieHome } from '../Pages/MovieHome';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AnimeHome />} />
      <Route path="/movies" element={<MovieHome />} />
    </Routes>
  );
};
