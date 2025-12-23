import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  carouselContainer: {
    position: "relative",
    "& .ant-carousel .slick-dots": {
      bottom: "20px",
    },
    "& .ant-carousel .slick-dots li button": {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    "& .ant-carousel .slick-dots li.slick-active button": {
      backgroundColor: "#fff",
    },
  },
  slide: {
    height: "550px",
    color: "#fff",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
  },
  gradientOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 30%, transparent 70%)",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    padding: "0 5% 5% 5%",
    maxWidth: "55%",
    "@media (max-width: 1024px)": {
      maxWidth: "65%",
    },
    "@media (max-width: 768px)": {
      maxWidth: "85%",
    },
  },
  title: {
    fontSize: "3.2vw",
    fontWeight: 700,
    margin: 0,
    lineHeight: 1.2,
    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    "@media (max-width: 768px)": {
      fontSize: "6vw",
    },
    "@media (max-width: 480px)": {
      fontSize: "8vw",
    },
  },
  overview: {
    fontSize: "1.1vw",
    marginTop: 12,
    lineHeight: 1.5,
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
    "@media (max-width: 768px)": {
      fontSize: "2.2vw",
    },
    "@media (max-width: 480px)": {
      fontSize: "3vw",
      WebkitLineClamp: 4,
    },
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 48,
    height: 48,
    borderRadius: "50%",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 5,
    transition: "background 0.3s, transform 0.3s",
    border: "none",
    outline: "none",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.8)",
      transform: "translateY(-50%) scale(1.1)",
    },
    "&:focus": {
      outline: "2px solid #fff",
      outlineOffset: "2px",
    },
  },
  leftArrow: {
    left: 20,
  },
  rightArrow: {
    right: 20,
  },
  // ⬇️ NEW: Loading skeleton styles
  skeletonSlide: {
    height: "550px",
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    animation: "$loading 1.5s infinite",
    borderRadius: "8px",
  },
  emptyState: {
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f5",
    borderRadius: "8px",
    color: "#666",
    fontSize: "16px",
    fontWeight: "500",
  },
  "@keyframes loading": {
    "0%": {
      backgroundPosition: "200% 0",
    },
    "100%": {
      backgroundPosition: "-200% 0",
    },
  },
});

export default useStyles;
