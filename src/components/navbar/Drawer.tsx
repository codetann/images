import React, { ReactElement } from "react";
import { Button, VStack, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaImage, FaFilm, FaHeart } from "react-icons/fa";
import { styles } from "./styles";
import { DrawerLinkProps } from "./types";

const links = [
  { link: "Home", href: "/", icon: <FaHome /> },
  { link: "Photos", href: "/photos", icon: <FaImage /> },
  { link: "Videos", href: "/videos", icon: <FaFilm /> },
  { link: "Favorites", href: "/favorites", icon: <FaHeart /> },
];

function DrawerLink({ link, href, icon, path }: DrawerLinkProps): ReactElement {
  return (
    <Link to={href}>
      <Button {...styles.button({ path, href })}>
        {icon}
        <Text {...styles.text}>{link}</Text>
      </Button>
    </Link>
  );
}

export function Drawer(): ReactElement {
  const location = useLocation();

  return (
    <VStack {...styles.vstack}>
      {links.map((link) => (
        <DrawerLink
          path={location.pathname}
          icon={link.icon}
          key={link.link}
          link={link.link}
          href={link.href}
        />
      ))}
    </VStack>
  );
}
