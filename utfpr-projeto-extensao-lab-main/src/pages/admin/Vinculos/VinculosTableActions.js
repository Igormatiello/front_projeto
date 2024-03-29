import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";

import VinculosTableActionsDelete from "./VinculosTableActionsDelete";


const VinculosTableActions = ({ vinculo }) => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<BiDotsVerticalRounded size={20} />}
      variant="ghost"
    />

    <MenuList>
      <VinculosTableActionsDelete vinculo={vinculo} />
    </MenuList>
  </Menu>
);

export default VinculosTableActions;