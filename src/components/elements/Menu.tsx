import { useState } from "react";
import {
  Menu as CMenu,
  MenuButton,
  MenuList,
  MenuItem,
  ChakraProps,
  Button,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

import { ReactElement } from "react";

import { styles } from "./styles";

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
