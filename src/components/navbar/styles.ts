import { Styles } from "./types";

const button: Styles["button"] = (props) => ({
  colorScheme: props.path === props.href ? "blue" : "gray",
  variant: props.path === props.href ? "solid" : "ghost",
  opacity: props.path === props.href ? 1 : 0.3,
  justifyContent: "left",
  _hover: { opacity: 1 },
  display: "flex",
  w: "10rem",
});

const vstack: Styles["vstack"] = {
  justifyContent: "center",
  spacing: "2rem",
  pos: "fixed",
  w: "20rem",
  h: "100%",
  left: 0,
  top: 0,
};

const text: Styles["text"] = {
  pl: "1rem",
};

export const styles: Styles = {
  button,
  vstack,
  text,
};
