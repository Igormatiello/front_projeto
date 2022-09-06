import { Menu, MenuButton, MenuList, IconButton } from "@chakra-ui/react";

import { BiDotsVerticalRounded } from "react-icons/bi";

import FormulariosTableActionsDelete from "./FormulariosTableActionsDelete";

import FormulariosFinalizarAnalise from "./FormulariosFinalizarAnalise";

const FormulariosTableActions = ({ formulario }) => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<BiDotsVerticalRounded size={20} />}
      variant="ghost"
    />

    <MenuList>
      <FormulariosFinalizarAnalise formulario={formulario} />
      <FormulariosTableActionsDelete formulario={formulario} />
    </MenuList>
  </Menu>
);

export default FormulariosTableActions;