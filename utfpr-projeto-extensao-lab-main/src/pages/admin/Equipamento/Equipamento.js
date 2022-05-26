import {
    Flex,
    Text,
    Spinner,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    useDisclosure,
  } from "@chakra-ui/react";
  
  import Container from "components/Container";
  import { useQueryListEquipamento } from "service/equipamento";
  
  import InstitutionsTableActions from "./InstitutionsTableActions";
import EquipamentoModalCreate from "./EquipamentoModalCreate";
  
  const Equipamento = () => {
    const { data, isLoading } = useQueryListEquipamento();
  
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    if (isLoading) {
      return (
        <Flex flex={1} direction="column" align="center" justify="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="primary"
            size="xl"
          />
        </Flex>
      );
    }
  
    return (
      <>
        <Flex
          direction="column"
          px="10%"
          pt="50px"
          minHeight="calc(100vh - 80px)"
        >
          <Text fontSize="25px" fontWeight="bold">
            Equipamentos
          </Text>
  
          <Button mt="50px" width="350px" onClick={onOpen}>
            Adicionar Equipamento
          </Button>
  
          <Container my="18px" direction="column" flex={1} p="32px">
            <Text fontSize="20px" fontWeight="semiBold">
              Relação de equipamentos do sistema
            </Text>
  
            <Table variant="simple" mt="50px">
              <Thead>
                <Tr>
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Nome
                    </Text>
                  </Th>
  
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Sigla
                    </Text>
                  </Th>
  
                  <Th></Th>
                </Tr>
              </Thead>
  
              <Tbody>
                {data.map((equipamento) => (
                  <Tr
                    key={equipamento.id}
                    _hover={{ cursor: "pointer", background: "#eef" }}
                  >
                    <Td>{equipamento.nome}</Td>
                    <Td>{equipamento.sigla}</Td>
                    <Td isNumeric>
                      <InstitutionsTableActions equipamento={equipamento} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
        </Flex>
  
        <EquipamentoModalCreate isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
  
  export default Equipamento;