import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#000",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  contentContainer: {
    marginTop: "20px",
    paddingBottom: "40px",
  },
  loading: {
    padding: "40px 24px",
    textAlign: "center",
    color: "#fff",
    fontSize: "16px",
  },
  emptySpacer: {
    height: 60,
  },
  titleWithGenres: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
  },
  genresInline: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  genreLabel: {
    color: "#666",
    fontSize: "16px",
  },
  genreTag: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500",
    textTransform: "capitalize",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },
});

export default useStyles;
