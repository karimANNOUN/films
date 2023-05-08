import { Routes ,Route } from "react-router-dom";
import { MovieList  , Search , Pagenotfound , MovieDetails} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
    <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
        <Route path="movie/:id" element={<MovieDetails/>} />
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top" />} />
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
        <Route path="*" element={<Pagenotfound title="Page Not Found" />} />
        <Route path="search" element={<Search apiPath="search/movie" />} />
    </Routes>
    </div>
  )
}
