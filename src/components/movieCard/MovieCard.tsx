import { useNavigate } from "react-router-dom";
import useStyles from "./MovieCard.style";

interface MovieCardProps {
  id: number;
  title: string;
  poster?: string | null;
}

function MovieCard({ id, title, poster }: MovieCardProps) {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className={classes.card} onClick={handleClick}>
      <img
        src={poster || "/placeholder.jpg"}
        alt={title}
        className={classes.poster}
        onError={(e) => {
          e.currentTarget.src = "/placeholder.jpg";
        }}
      />
      <div className={classes.info}>
        <h4 className={classes.title}>{title}</h4>
      </div>
    </div>
  );
}

export default MovieCard;
