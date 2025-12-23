import { useEffect, useRef, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getFilmDetail,
  getPopularMovies,
  addToHistory,
} from "../../utils/movieService";
import { Typography, Rate, Spin, Card, Divider, Button, message } from "antd";
import MovieCard from "../../components/movieCard/MovieCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import useStyles from "./MovieWatch.style";
import { FilmDetail, PopularMovie } from "../../utils/movie";

const { Title, Paragraph } = Typography;
function MovieWatch() {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [film, setFilm] = useState<FilmDetail | null>(null);
  const [popular, setPopular] = useState<PopularMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [videoLoading, setVideoLoading] = useState(true);
  const USER_ID = "user123";
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHistoryLogged = useRef(false);

  const handleHistoryUpdate = useCallback(
    async (movieData: FilmDetail) => {
      if (isHistoryLogged.current) return;

      isHistoryLogged.current = true;

      try {
        const genres = movieData.genres || [];

        await addToHistory({
          user_id: USER_ID,
          title: movieData.title,
          movie_id: movieData.id,
          poster: movieData.poster,
          genres: genres,
        });

        window.dispatchEvent(new CustomEvent("movieWatched"));
        message.success(
          `History logged for: ${movieData.title}. Recommendations updating...`
        );
      } catch (err) {
        message.error("Failed to log history.");
        isHistoryLogged.current = false;
      }
    },
    [USER_ID]
  );

  const fetchFilmDetails = useCallback(
    async (filmId: number) => {
      try {
        setLoading(true);
        const data = await getFilmDetail(filmId);
        setFilm(data);

        handleHistoryUpdate(data);
      } catch (err) {
        setFilm(null);
      } finally {
        setLoading(false);
      }
    },
    [handleHistoryUpdate]
  );

  const fetchPopularMovies = useCallback(async () => {
    try {
      const movies = await getPopularMovies();
      setPopular(movies);
    } catch (err) {
      setPopular([]);
    }
  }, []);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    isHistoryLogged.current = false;
    setVideoLoading(true);

    const filmId = Number(id);
    fetchFilmDetails(filmId);
    fetchPopularMovies();
  }, [id, fetchFilmDetails, fetchPopularMovies]);

  const handleVideoLoad = () => {
    setVideoLoading(false);
  };

  const handleVideoError = () => {
    setVideoLoading(false);
  };

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleMovieClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  if (loading) {
    return (
      <div className={classes.spinContainer}>
        <Spin size="large" />
        <p>Loading movie data...</p>
      </div>
    );
  }

  if (!film) {
    return <div className={classes.notFound}>Film not found</div>;
  }

  return (
    <div className={classes.container}>
      <Card className={classes.card} variant="borderless">
        <div className={classes.videoContainer}>
          {film.video_key ? (
            <>
              {videoLoading && (
                <div className={classes.videoPlaceholder}>
                  <Spin size="large" />
                  <p>Loading trailer...</p>
                </div>
              )}
              <iframe
                src={`https://www.youtube.com/embed/${film.video_key}?autoplay=1&mute=1`}
                title={`${film.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={classes.iframe}
                style={{ display: videoLoading ? "none" : "block" }}
                onLoad={handleVideoLoad}
                onError={handleVideoError}
              />
            </>
          ) : (
            <div className={classes.placeholder}>Trailer not available</div>
          )}
        </div>

        <div className={classes.movieInfo}>
          <Title level={2} className={classes.title}>
            {film.title}
          </Title>
          <Rate
            allowHalf
            disabled
            value={(film.vote_average || 0) / 2}
            className={classes.rating}
          />
          <Paragraph className={classes.overview}>{film.overview}</Paragraph>
          <Button
            onClick={() => navigate(`/movie/${film.id}`)}
            type="link"
            className={classes.backButton}
          >
            Go to Details
          </Button>
        </div>
      </Card>

      <Divider className={classes.divider} />

      <div className={classes.popularSection}>
        <Title level={4} className={classes.sectionTitle}>
          🎬 More Popular Movies
        </Title>

        <Button
          className={`${classes.navButton} ${classes.leftButton}`}
          icon={<LeftOutlined />}
          onClick={() => scroll(-400)}
        />
        <Button
          className={`${classes.navButton} ${classes.rightButton}`}
          icon={<RightOutlined />}
          onClick={() => scroll(400)}
        />

        <div ref={scrollRef} className={classes.scrollContainer}>
          {popular.map((movie) => (
            <div
              key={movie.id}
              className={classes.movieCol}
              onClick={() => handleMovieClick(movie.id)}
            >
              <MovieCard
                id={movie.id}
                title={movie.title}
                poster={movie.poster}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieWatch;
