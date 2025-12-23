import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  card: {
    width: 150,
    cursor: "pointer",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#222",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  poster: {
    width: "100%",
    height: 225,
    objectFit: "cover",
    display: "block",
  },
  info: {
    padding: "0.5rem",
    textAlign: "center",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48, 
  },
  title: {
    color: "#fff",
    fontSize: "0.9rem",
    margin: 0,
    lineHeight: 1.2,
    wordBreak: "break-word",
  },
});

export default useStyles;
