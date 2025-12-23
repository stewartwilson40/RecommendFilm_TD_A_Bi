import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilmDetail } from "../../utils/movieService";
import { Typography, Button, Row, Col, Card, Divider, Spin } from "antd";
import { StarFilled, PlayCircleOutlined } from "@ant-design/icons";
import useStyles from "./MovieDetail.style";
import { FilmDetail, PopularMovie } from "../../utils/movie";
import MovieRow from "../../components/movieRow/MovieRow";

const { Title, Paragraph, Text } = Typography;
const getHashCode = (s: string): number => {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charCodeAt(i);
    hash = (hash << 5) - hash - char;
    hash |= 0;
  }
  return Math.abs(hash);
};

interface CastMovieCard {
  id: number;
  title: string;
  poster: string | null;
}

function MovieDetail() {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const [film, setFilm] = useState<FilmDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchDetail = async () => {
      try {
        setLoading(true);
        const filmId = Number(id);
        const detail = await getFilmDetail(filmId);
        setFilm(detail);
      } catch (err) {
        setFilm(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  const renderRating = () => {
    const vote = film?.vote_average || 0;
    const fullStars = Math.round(vote / 2);
    return (
      <div className={classes.rating}>
        {Array.from({ length: fullStars }, (_, i) => (
          <StarFilled key={i} />
        ))}
        <span className={classes.ratingText}>{vote.toFixed(1)}/10</span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className={classes.spinContainer}>
        <Spin size="large" />
        <p>Loading movie details...</p>
      </div>
    );
  }

  if (!film) {
    return <div className={classes.notFound}>Film not found</div>;
  }

  const castMoviesData: CastMovieCard[] = film.cast
    ? film.cast.map((actor) => ({
        id: getHashCode(actor.name),
        title: actor.name,
        poster: actor.profile,
      }))
    : [];

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: film.backdrop ? `url(${film.backdrop})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <div className={classes.backdropOverlay} />

      <Card className={classes.card}>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={8}>
            <img
              src={film.poster || "/placeholder.jpg"}
              alt={film.title}
              className={classes.poster}
              onError={(e) => {
                e.currentTarget.src = "/placeholder.jpg";
              }}
            />
          </Col>
          <Col xs={24} sm={16}>
            <Title level={2} className={classes.title}>
              {film.title}
            </Title>

            {film.release_date && (
              <Text type="secondary" className={classes.releaseDate}>
                {new Date(film.release_date).getFullYear()}
              </Text>
            )}

            <div className={classes.genreWrapper}>
              {film.genres.map((genre) => (
                <span key={genre} className={classes.genreTag}>
                  {genre}
                </span>
              ))}
            </div>

            {renderRating()}

            <Paragraph className={classes.overview}>{film.overview}</Paragraph>

            {film.director && (
              <Paragraph className={classes.director}>
                <Text strong>Director:</Text> {film.director}
              </Paragraph>
            )}

            <Button
              type="primary"
              size="large"
              className={classes.trailerButton}
              onClick={() => navigate(`/watch/${film.id}`)}
              icon={<PlayCircleOutlined />}
            >
              Watch Now
            </Button>

            {film.video_key && (
              <Button
                type="default"
                size="large"
                style={{ marginLeft: 10 }}
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${film.video_key}`,
                    "_blank"
                  )
                }
              >
                View Trailer
              </Button>
            )}
          </Col>
        </Row>

        {film.cast && film.cast.length > 0 && (
          <>
            <Divider className={classes.dividerStyle} />
            <Title level={4} className={classes.castTitle}>
              Cast
            </Title>
            <div className={classes.castSection}>
              <MovieRow
                title="Cast"
                movies={castMoviesData as PopularMovie[]}
              />
            </div>
          </>
        )}
      </Card>
    </div>
  );
}

export default MovieDetail;
