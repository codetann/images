import { EventHandler, FormEventHandler, useState } from "react";
import {
  Menu as CMenu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  ChakraProps,
  Button,
  ChakraComponent,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

import React, { ReactElement } from "react";

interface Props {
  onChange: (value: any) => void;
  title: string;
  options: MenuOptions;
}

interface Styles {
  menuList: ChakraProps;
  menuButton: ChakraProps;
}

interface Option {
  name: string;
  value: string;
}

type MenuOptions = Option[];

const styles: Styles = {
  menuButton: {
    bg: "whiteAlpha.100",
    textAlign: "left",
    p: ".5rem 1rem",
    rounded: "md",
    w: "10rem",
    h: "3rem",
  },
  menuList: {
    bg: "whiteAlpha.100",
  },
};

export function Menu({ onChange, title, options }: Props): ReactElement {
  const [currentValue, setCurrentValue] = useState(null);

  const handleChange = (e: any) => {
    setCurrentValue(e.target.innerText);
    onChange(e.target.value);
  };

  return (
    <CMenu>
      <MenuButton
        as={Button}
        rightIcon={<FaChevronDown />}
        {...styles.menuButton}
      >
        {currentValue ? currentValue : title}
      </MenuButton>
      <MenuList {...styles.menuList} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem
            onClick={handleChange}
            value={option.value}
            key={option.name}
          >
            {option.name}
          </MenuItem>
        ))}
      </MenuList>
    </CMenu>
  );
}
