// styles.stylex.ts
import * as stylex from "@stylexjs/stylex";

export const styles = stylex.create({
  container: {
    position: "relative",
    width: 400,
    height: 100,
    margin: "auto",
  },
  rect: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 80,
    transitionProperty: "transform",
    transitionDuration: "0.2s",
    transitionTimingFunction: "ease-out",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 30,
    fontWeight: 600,
    fontSize: 24,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    cursor: "default",
  },
  primary: {
    color: "#C2F63E",
    backgroundColor: "#343B49",
  },
  secondary: {
    transitionProperty: "backgroundColor",
    transitionDuration: "0.25s",
    transitionTimingFunction: "ease-out",
    color: "#343B49",
    backgroundColor: "white",
  },
  posOne: {
    zIndex: 2,
  },
  posTwo: {
    zIndex: 1,
  },
  top: {
    boxShadow: "4px 4px 16px rgba(144, 144, 144, 0.62)",
    transform: "translate(0px, 0px)",
  },
  down: {
    transform: "translate(20px, 20px)",
    ":hover": {
      boxShadow: "4px 4px 16px rgba(144, 144, 144, 0.62)",
    },
  },
});
