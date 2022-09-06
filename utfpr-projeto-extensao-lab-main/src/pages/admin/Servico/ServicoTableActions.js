import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";
import ServicoTableActionsEdit from "./ServicoTableActionsEdit";

import ServicoTableActionsDelete from "./ServicoTableActionsEdit";

const ServicoTableActions = ({ servico }) => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<BiDotsVerticalRounded size={20} />}
      variant="ghost"
    />

    <MenuList>
      <ServicoTableActionsEdit servico={servico} />
      <ServicoTableActionsDelete servico={servico} />
    </MenuList>
  </Menu>
);

export default ServicoTableActions;