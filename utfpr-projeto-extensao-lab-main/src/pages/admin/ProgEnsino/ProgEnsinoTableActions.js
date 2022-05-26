import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";
import ProgEnsinoTableActionsDelete from "./ProgEnsinoTableActionsDelete";
import ProgEnsinoTableActionsEdit from "./ProgEnsinoTableActionsEdit";

const ProgEnsinoTableActions = ({progEnsino }) => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<BiDotsVerticalRounded size={20} />}
      variant="ghost"
    />

    <MenuList>
      <ProgEnsinoTableActionsEdit progEnsino={progEnsino} />
      <ProgEnsinoTableActionsDelete progEnsino={progEnsino} />
    </MenuList>
  </Menu>
);

export default ProgEnsinoTableActions;