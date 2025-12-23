import { useEffect, useState } from "react";
import HeroCarousel from "../../components/carousel/Carousel";
import PopularMovies from "../movieSection/popularMovies/PopularMovies";
import MovieRow from "../../components/movieRow/MovieRow";
import useStyles from "./Home.style";
import { getRecommendations } from "../../utils/movieService";
import type { PopularMovie } from "../../utils/movie";
import type { RecommendationResponse } from "../../utils/movie";

export default function Home() {
  const classes = useStyles();
  const [recommended, setRecommended] = useState<PopularMovie[]>([]);
  const [recommendedGenres, setRecommendedGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const USER_ID = "user123";

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const response: RecommendationResponse = await getRecommendations(
        USER_ID
      );

      if (
        response.recommended_movies &&
        response.recommended_movies.length > 0
      ) {
        setRecommended(response.recommended_movies);
        setRecommendedGenres(response.top_genres);
      } else {
        setRecommended([]);
        setRecommendedGenres([]);
      }
    } catch (err) {
      setRecommended([]);
      setRecommendedGenres([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const hasPersonalizedRecommendations = recommended.length > 0;

  return (
    <div className={classes.root}>
      <HeroCarousel />

      <div className={classes.contentContainer}>
        {loading ? (
          <div className={classes.loading}>Loading recommendations...</div>
        ) : (
          <>
            {hasPersonalizedRecommendations ? (
              <MovieRow
                title={
                  <div className={classes.titleWithGenres}>
                    <span>Recommended For You ✨</span>
                    {recommendedGenres.length > 0 && (
                      <div className={classes.genresInline}>
                        <span className={classes.genreLabel}>
                          • Berdasarkan
                        </span>
                        {recommendedGenres.map((genre, index) => (
                          <span key={index} className={classes.genreTag}>
                            {genre}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                }
                movies={recommended}
              />
            ) : (
              <div className={classes.emptySpacer} />
            )}

            <PopularMovies />
          </>
        )}
      </div>
    </div>
  );
}
