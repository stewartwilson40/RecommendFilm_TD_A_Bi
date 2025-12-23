import { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { getUpcomingMovies } from "../../utils/movieService";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import useStyles from "./Carousel.style";
import type { CarouselMovie } from "../../utils/movie";

const HeroCarousel = () => {
  const [movies, setMovies] = useState<CarouselMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const classes = useStyles();
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    const fetchUpcomingMoviesData = async () => {
      try {
        setLoading(true);
        const upcomingMovies = await getUpcomingMovies();
        setMovies(upcomingMovies);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };

    fetchUpcomingMoviesData();
  }, []);

  const handleSlideClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  const ArrowButton = ({
    direction,
    onClick,
  }: {
    direction: "left" | "right";
    onClick?: () => void;
  }) => (
    <button
      className={`${classes.arrowButton} ${
        direction === "left" ? classes.leftArrow : classes.rightArrow
      }`}
      onClick={onClick}
      aria-label={`${direction} arrow`}
    >
      {direction === "left" ? <LeftOutlined /> : <RightOutlined />}
    </button>
  );

  if (loading) {
    return (
      <div className={classes.carouselContainer}>
        <div className={classes.skeletonSlide} />
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className={classes.carouselContainer}>
        <div className={classes.emptyState}>
          <p>No upcoming movies available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.carouselContainer}>
      <Carousel
        ref={carouselRef}
        autoplay
        dots
        arrows={false}
        effect="fade"
        autoplaySpeed={5000}
      >
        {movies.map((movie) => (
          <div key={movie.id}>
            <div
              className={classes.slide}
              style={{
                backgroundImage: `url(${
                  movie.backdrop || "/fallback-backdrop.jpg"
                })`,
              }}
              onClick={() => handleSlideClick(movie.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSlideClick(movie.id);
                }
              }}
            >
              <div className={classes.gradientOverlay} />
              <div className={classes.content}>
                <h2 className={classes.title}>{movie.title}</h2>
                <p className={classes.overview}>
                  {movie.overview
                    ? movie.overview.length > 150
                      ? `${movie.overview.substring(0, 150)}...`
                      : movie.overview
                    : "No overview available."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {movies.length > 1 && (
        <>
          <ArrowButton
            direction="left"
            onClick={() => carouselRef.current?.prev()}
          />
          <ArrowButton
            direction="right"
            onClick={() => carouselRef.current?.next()}
          />
        </>
      )}
    </div>
  );
};

export default HeroCarousel;
