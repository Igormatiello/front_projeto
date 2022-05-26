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
  

  import ProgEnsinoTableActions from "./ProgEnsinoTableActions";

  import ProgEnsinoModalCreate from "./ProgEnsinoModalCreate";
  const ProgEnsino = () => {
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
            Programas  de Ensino
          </Text>
  
          <Button mt="50px" width="350px" onClick={onOpen}>
            Adicionar Programa de Ensino
          </Button>
  
          <Container my="18px" direction="column" flex={1} p="32px">
            <Text fontSize="20px" fontWeight="semiBold">
              Relação dos Programas de Ensino do sistema
            </Text>
  
            <Table variant="simple" mt="50px">
              <Thead>
                <Tr>
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Programa de Ensino
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
                {data.map((progEnsino) => (
                  <Tr
                    key={progEnsino.id}
                    _hover={{ cursor: "pointer", background: "#eef" }}
                  >
                    <Td>{progEnsino.nome}</Td>
                    <Td>{progEnsino.sigla}</Td>
                    <Td isNumeric>
                      <ProgEnsinoTableActions progEnsino={progEnsino} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
        </Flex>
  
        <ProgEnsinoModalCreate isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
  
  export default ProgEnsino;