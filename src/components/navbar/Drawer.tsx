import React, { ReactElement, useEffect } from "react";
import {
  Button,
  VStack,
  Text,
  Drawer as CDrawer,
  DrawerOverlay,
  Box,
  DrawerContent,
  useMediaQuery,
  DrawerHeader,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaImage, FaFilm, FaHeart } from "react-icons/fa";
import { drawer } from "./styles";
import { DrawerLinkProps } from "./types";
import { Search } from "./Search";

interface DrawerProps {
  children?: ReactElement | ReactElement[];
  isOpen: boolean;
  onClose: () => void;
}

const links = [
  { link: "Home", href: "/", icon: <FaHome /> },
  { link: "Photos", href: "/photos", icon: <FaImage /> },
  { link: "Videos", href: "/videos", icon: <FaFilm /> },
  { link: "Favorites", href: "/favorites", icon: <FaHeart /> },
];

function DrawerLink({
  link,
  href,
  icon,
  path,
  onClose,
}: DrawerLinkProps): ReactElement {
  return (
    <Link to={href} onClick={onClose}>
      <Button {...drawer.button({ path, href })}>
        {icon}
        <Text {...drawer.text}>{link}</Text>
      </Button>
    </Link>
  );
}

export function Drawer({ isOpen, onClose }: DrawerProps): ReactElement {
  const location = useLocation();
  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)");

  return (
    <>
      {isLargerThan1200 && (
        <Box w="25rem">
          <VStack {...drawer.vstack} pos="fixed" top={0}>
            {links.map((link) => (
              <DrawerLink
                onClose={() => null}
                path={location.pathname}
                icon={link.icon}
                key={link.link}
                link={link.link}
                href={link.href}
              />
            ))}
          </VStack>
        </Box>
      )}

      {!isLargerThan1200 && (
        <CDrawer isOpen={isOpen} onClose={onClose} placement="left">
          <DrawerOverlay />

          <DrawerContent {...drawer.vstack}>
            <VStack spacing={6}>
              {links.map((link) => (
                <DrawerLink
                  path={location.pathname}
                  icon={link.icon}
                  key={link.link}
                  link={link.link}
                  href={link.href}
                  onClose={onClose}
                />
              ))}
            </VStack>
          </DrawerContent>
        </CDrawer>
      )}
    </>
  );
}
