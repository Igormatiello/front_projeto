import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";

import LancamentoFinanceiroTableActionsDelete from "./LancamentoFinanceiroTableActionsDelete";

import LancamentoFinanceiroTableActionsEdit from "./LancamentoFinanceiroTableActionsEdit";


const LancamentoFinanceiroTableActions = ({ lancamento }) => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<BiDotsVerticalRounded size={20} />}
      variant="ghost"
    />

    <MenuList>
      <LancamentoFinanceiroTableActionsEdit lancamento={lancamento} />
      <LancamentoFinanceiroTableActionsDelete lancamento={lancamento} />
    </MenuList>
  </Menu>
);

export default LancamentoFinanceiroTableActions;