import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#000",
    minHeight: "100vh",
    padding: "24px 5%",
    color: "#fff",
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
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 16,
    maxWidth: 1000,
    margin: "auto",
    overflow: "hidden",
  },
  videoContainer: {
    position: "relative",
    width: "100%",
    height: 0,
    paddingBottom: "56.25%",
    backgroundColor: "#222",
    borderRadius: 12,
    overflow: "hidden",
  },
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: 0,
  },
  videoPlaceholder: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    zIndex: 10,
  },
  placeholder: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#aaa",
    fontSize: 18,
  },
  movieInfo: {
    marginTop: 24,
    padding: "0 8px",
  },
  title: {
    color: "#fff",
    marginBottom: 16,
    fontSize: "28px !important",
    fontWeight: "600",
  },
  rating: {
    marginBottom: 16,
    "& .ant-rate-star": {
      marginRight: 4,
    },
  },
  overview: {
    color: "#ccc",
    lineHeight: 1.6,
    fontSize: 16,
    marginBottom: 0,
  },
  popularSection: {
    marginTop: 40,
    position: "relative",
    maxWidth: 1200,
    margin: "0 auto",
  },
  sectionTitle: {
    color: "#fff",
    marginBottom: 24,
    fontSize: "20px !important",
  },
  scrollContainer: {
    display: "flex",
    overflowX: "auto",
    gap: 16,
    padding: "8px 0 16px 0",
    scrollBehavior: "smooth",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  movieCol: {
    flex: "0 0 auto",
    cursor: "pointer",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  divider: {
    borderColor: "#333",
    margin: "40px 0",
  },
  navButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    border: "1px solid #444",
    color: "#fff",
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      borderColor: "#666",
      color: "#fff",
    },
  },
  leftButton: {
    left: -20,
  },
  rightButton: {
    right: -20,
  },
  notFound: {
    padding: 60,
    textAlign: "center",
    color: "#ccc",
    fontSize: 18,
  },
  backButton: {
    marginTop: 16,
    color: "#ccc",
    padding: 0,
    height: "auto",
    textAlign: "left",
    fontSize: 14,
    "&:hover": {
      color: "#fff",
      backgroundColor: "transparent",
      textDecoration: "underline",
    },
  },
});

export default useStyles;
