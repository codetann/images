import { Styles } from "./types";

const image: Styles["image"] = {
  transition: "all 0.2s ease-in-out",
  _hover: { opacity: 0.8 },
  borderRadius: "xl",
  cursor: "pointer",
  d: "inline-block",
  w: "100%",
  mb: 2,
};

export const styles: Styles = {
  image,
};
