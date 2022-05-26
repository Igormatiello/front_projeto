import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";

import CidadesTableActionsDelete from "./CidadesTableActionsDelete";

import CidadesTableActionsEdit from "./CidadesTableActionsEdit";

const CidadesTableActions = ({ cidade }) => (
    <Menu>
        <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<BiDotsVerticalRounded size={20} />}
            variant="ghost"
        />

        <MenuList>
            <CidadesTableActionsEdit cidade={cidade} />
            <CidadesTableActionsDelete cidade={cidade} />
        </MenuList>
    </Menu>
);

export default CidadesTableActions;