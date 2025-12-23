import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    padding: "0 24px",
    margin: "32px auto 0 auto",
    maxWidth: "1400px",
    position: "relative",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: "8px",
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
  },
});

export default useStyles;
