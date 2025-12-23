import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    padding: "0 1.5rem",
    margin: "2rem auto 0 auto",
    maxWidth: 1400,
    position: "relative",
    overflow: "hidden",
  },
  title: {
    color: "#fff !important",
    marginBottom: "1rem",
    marginLeft: "0.5rem",
    fontWeight: 600,
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  },
  scrollContainer: {
    overflowX: "auto",
    paddingBottom: "0.5rem",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  divider: {
    backgroundColor: "#444",
    marginTop: "1.5rem",
  },

  arrow: {
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: 40,
    height: 40,
    zIndex: 20, 
    cursor: "pointer",
    opacity: 0.8,
    position: "absolute",
    top: "50%", 
    transform: "translateY(-50%)", 
    pointerEvents: "auto",
    boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
    transition: "opacity 0.3s, transform 0.2s",
    "&:hover": {
      opacity: 1,
      transform: "translateY(-50%) scale(1.1)",
    },
  },
  left: {
    left: 10, 
  },
  right: {
    right: 10, 
  },
});

export default useStyles;
