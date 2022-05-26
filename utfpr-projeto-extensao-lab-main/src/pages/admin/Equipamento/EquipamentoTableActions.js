import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";
import EquipamentoTableActionsDelete from "./EquipamentoTableActionsDelete";

import EquipamentoTableActionsEdit from "./EquipamentoTableActionsEdit";

const EquipamentoTableActions = ({ equipamento }) => (
    <Menu>
        <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<BiDotsVerticalRounded size={20} />}
            variant="ghost"
        />

        <MenuList>
            <EquipamentoTableActionsEdit equipamento={equipamento} />
            <EquipamentoTableActionsDelete equipamento={equipamento} />
        </MenuList>
    </Menu>
);

export default EquipamentoTableActions;