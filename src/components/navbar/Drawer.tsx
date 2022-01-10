import React, { ReactElement } from "react";
import { HStack, Button, VStack, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaImage, FaFilm, FaHeart } from "react-icons/fa";

interface Props {}

interface DrawerLinkProps {
  link: string;
  href: string;
  icon: ReactElement;
  path: string;
}

const links = [
  { link: "Home", href: "/", icon: <FaHome /> },
  { link: "Photos", href: "/photos", icon: <FaImage /> },
  { link: "Videos", href: "/videos", icon: <FaFilm /> },
  { link: "Favorites", href: "/favorites", icon: <FaHeart /> },
];

function DrawerLink({ link, href, icon, path }: DrawerLinkProps): ReactElement {
  return (
    <Link to={href}>
      <Button
        w="10rem"
        variant={path === href ? "solid" : "ghost"}
        display="flex"
        justifyContent="left"
        opacity={path === href ? "1" : ".3"}
        colorScheme={path === href ? "blue" : "gray"}
        _hover={{ opacity: "1" }}
      >
        {icon}
        <Text pl="1rem">{link}</Text>
      </Button>
    </Link>
  );
}

export function Drawer({}: Props): ReactElement {
  const location = useLocation();

  return (
    <VStack
      pos="fixed"
      left={0}
      top={0}
      w="20rem"
      h="100%"
      justify="center"
      spacing="2rem"
    >
      {links.map((link) => (
        <DrawerLink
          key={link.link}
          link={link.link}
          href={link.href}
          icon={link.icon}
          path={location.pathname}
        />
      ))}
    </VStack>
  );
}
