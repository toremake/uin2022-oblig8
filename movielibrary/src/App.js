import { Route, Routes } from 'react-router-dom';
import './css/MovieApp.css';
import Actor from './components/Actor';
import Actors from './components/Actors';
import Movie from './components/Movie';
import Movies from './components/Movies';
import Layout from './layouts/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Movies />} />
        <Route path="movies">
          <Route index element={<Movies />} />
          <Route path=":slug" element={<Movie />} />
        </Route>
        <Route path="actors">
          <Route index element={<Actors />} />
          <Route path=":slug" element={<Actor />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
