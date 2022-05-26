import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";

import PessoaTableActionsDelete from "./PessoaTableActionsDelete";
import PessoaTableActionsEdit from "./PessoaTableActionsEdit";

const PessoaTableActions = ({ pessoa }) => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<BiDotsVerticalRounded size={20} />}
      variant="ghost"
    />

    <MenuList>
      <PessoaTableActionsEdit pessoa={pessoa} />
      <PessoaTableActionsDelete pessoa={pessoa} />
    </MenuList>
  </Menu>
);

export default PessoaTableActions;