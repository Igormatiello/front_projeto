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
  import { useQueryListInstitutions } from "service/institutions";
  
  import InstitutionsTableActions from "./InstitutionsTableActions";
  import InsitutionsModalCreate from "./InsitutionsModalCreate";
  
  const Vinculos= () => {
    const { data, isLoading } = useQueryListInstitutions();
  
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
          Vínculo - Instituição / Programa de Ensino
          </Text>
  
          <Button mt="50px" width="350px" onClick={onOpen}>
            Adicionar Vínculo
          </Button>
  
          <Container my="18px" direction="column" flex={1} p="32px">
            <Text fontSize="20px" fontWeight="semiBold">
              Relação dos vículos do sistema
            </Text>
  
            <Table variant="simple" mt="50px">
              <Thead>
                <Tr>
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                     Orientador
                    </Text>
                  </Th>
  
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Crédito
                    </Text>
                  </Th>
  
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                     Participante
                    </Text>
                  </Th>
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                    Programa Ensino
                    </Text>
                  </Th>
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                    Data término
                    </Text>
                  </Th>
  
  
                  <Th></Th>
                </Tr>
              </Thead>
  
              <Tbody>
                {data.map((vinculo) => (
                  <Tr
                    key={vinculo.id}
                    _hover={{ cursor: "pointer", background: "#eef" }}
                  >
                    <Td>{vinculo.orientador}</Td>
                    <Td>{vinculo.credito}</Td>
                    <Td>{vinculo.participante}</Td>
                    <Td>{vinculo.programaEnsino}</Td>
                    <Td>{vinculo.dataTermino}</Td>  
                    <Td isNumeric>
                      <InstitutionsTableActions vinculo={vinculo} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
        </Flex>
  
        <InsitutionsModalCreate isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
  
  export default Vinculos;