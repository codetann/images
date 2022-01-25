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
  // transform: isOpen ? "translateX(0rem)" : "translateX(-20rem)",
  // transition: "all 0.2s ease-in-out",
  justifyContent: "center",
  alignItems: "center",
  bg: "bg.dark.default",
  spacing: "2rem",
  w: "20rem",
  h: "100%",
};

const text: Styles["text"] = {
  pl: "1rem",
};

export const drawer: Styles = {
  button,
  vstack,
  text,
};
