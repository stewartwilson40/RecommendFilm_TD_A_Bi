import { useRef, ReactNode } from "react";
import { Row, Col, Typography, Divider } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import MovieCard from "../movieCard/MovieCard";
import useStyles from "./MovieRow.style";
import type { MovieRowItem } from "../../utils/movie";

const { Title } = Typography;

interface MovieRowProps {
  title: string | ReactNode;
  movies: MovieRowItem[];
}

function MovieRow({ title, movies }: MovieRowProps) {
  const classes = useStyles();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.container}>
      <Title level={3} className={classes.title}>
        {title}
      </Title>

      <div className={classes.scrollContainer} ref={scrollRef}>
        <Row gutter={[16, 16]} wrap={false}>
          {movies.map(({ id, title, poster }) => (
            <Col key={id}>
              <MovieCard id={id} title={title} poster={poster} />
            </Col>
          ))}
        </Row>
      </div>

      <button
        type="button"
        className={`${classes.arrow} ${classes.left}`}
        onClick={() => scroll("left")}
      >
        <LeftOutlined />
      </button>
      <button
        type="button"
        className={`${classes.arrow} ${classes.right}`}
        onClick={() => scroll("right")}
      >
        <RightOutlined />
      </button>

      <Divider className={classes.divider} />
    </div>
  );
}

export default MovieRow;
