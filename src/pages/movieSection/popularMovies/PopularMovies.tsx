import { useEffect, useState } from "react";
import { getPopularMovies } from "../../../utils/movieService";
import MovieRow from "../../../components/movieRow/MovieRow";
import useStyles from "../movie.style";
import type { PopularMovie } from "../../../utils/movie";

function PopularMovies() {
  const classes = useStyles();
  const [movies, setMovies] = useState<PopularMovie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className={classes.container}>
        <div className={classes.sectionTitle}>🔥 Popular Movies</div>
        <div style={{ padding: "16px", textAlign: "center", color: "#fff" }}>
          Loading...
        </div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className={classes.container}>
        <div className={classes.sectionTitle}>🔥 Popular Movies</div>
        <div style={{ padding: "16px", textAlign: "center", color: "#fff" }}>
          No popular movies available.
        </div>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <MovieRow title="Popular Movies" movies={movies} />
    </div>
  );
}

export default PopularMovies;
