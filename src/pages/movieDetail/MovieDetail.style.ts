import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#111",
    minHeight: "100vh",
    padding: "48px 24px",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
  },
  backdropOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to top, #111 0%, rgba(17, 17, 17, 0.9) 30%, rgba(17, 17, 17, 0.5) 60%)",
    zIndex: 1,
  },
  spinContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "50vh",
    gap: "16px",
  },
  card: {
    background: "rgba(30, 30, 30, 0.85)",
    border: "1px solid #333",
    maxWidth: 1200,
    margin: "auto",
    position: "relative",
    zIndex: 2,
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    "& .ant-card-body": {
      padding: 32,
    },
    "@media (max-width: 768px)": {
      padding: 16,
    },
  },
  poster: {
    width: "100%",
    height: "auto",
    borderRadius: 8,
    boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
    maxWidth: 300,
    margin: "0 auto 20px auto",
    display: "block",
    "@media (min-width: 768px)": {
      margin: "0 0 0 auto",
      maxWidth: "none",
    },
  },
  detailContent: {
    paddingLeft: 30,
    "@media (max-width: 768px)": {
      paddingLeft: 0,
      marginTop: 20,
      textAlign: "center",
    },
  },
  title: {
    color: "#fff !important",
    fontSize: "3rem !important",
    marginBottom: "8px !important",
    "@media (max-width: 768px)": {
      fontSize: "2rem !important",
    },
  },
  releaseDate: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 16,
    display: "block",
  },
  genreWrapper: {
    marginBottom: 20,
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    "@media (max-width: 768px)": {
      justifyContent: "center",
    },
  },
  genreTag: {
    display: "inline-block",
    background: "#383838",
    color: "#fff",
    padding: "6px 14px",
    borderRadius: 16,
    fontSize: 12,
    border: "1px solid #555",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 20,
    color: "#f5c518",
  },
  ratingText: {
    marginLeft: 10,
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  overview: {
    color: "#ccc",
    lineHeight: 1.6,
    marginBottom: 20,
    fontSize: 15,
    textAlign: "justify",
    "@media (max-width: 768px)": {
      textAlign: "left",
    },
  },
  director: {
    color: "#aaa",
    marginBottom: 24,
    fontSize: 14,
    textAlign: "left !important",
    "& strong": {
      color: "#fff",
    },
    "@media (max-width: 768px)": {
      textAlign: "center !important",
    },
  },
  trailerButton: {
    backgroundColor: "#e50914 !important",
    borderColor: "#e50914 !important",
    color: "#fff !important",
    fontWeight: "bold !important",
    boxShadow: "0 4px 8px rgba(229, 9, 20, 0.4) !important",
    "&:hover": {
      backgroundColor: "#f40612 !important",
      borderColor: "#f40612 !important",
    },
  },
  dividerStyle: {
    borderColor: "#444",
    margin: "40px 0 20px 0",
  },
  castTitle: {
    color: "#fff !important",
    marginLeft: "0.5rem",
    marginBottom: "1rem !important",
    fontWeight: "600 !important",
  },
  castSection: {
    "& > div > div": {
      paddingLeft: 0,
      paddingRight: 0,
    },
    "& button": {
      top: "40% !important",
    },
  },
  spinText: {
    color: "#fff",
    fontSize: "16px",
  },
  notFound: {
    padding: 60,
    textAlign: "center",
    color: "#ccc",
    fontSize: 18,
  },
});

export default useStyles;
