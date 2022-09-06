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
  import { useQueryListFormularios } from "service/formularios";

  import FormulariosTableActions from "./FormulariosTableActions";
import FormulariosModalCreate from "./FormulariosModalCreate";

  
  const Formularios = () => {
    const { data, isLoading } = useQueryListFormularios();
    
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
           Histórico de Formulários 
          </Text>
  
          <Button mt="50px" width="350px" onClick={onOpen}>
            Adicionar Formulário
          </Button>
  
          <Container my="18px" direction="column" flex={1} p="32px">
            <Text fontSize="20px" fontWeight="semiBold">
              Relação dos formulários do sistema
            </Text>
  
            <Table variant="simple" mt="50px">
              <Thead>
                <Tr>
                <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Requerente
                    </Text>
                  </Th>

                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Serviço
                    </Text>
                  </Th>
  
                  

            
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Programa de Ensino
                    </Text>
                  </Th>

                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                     Equipamento
                    </Text>
                  </Th>
                  
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                    Data de solicitação
                    </Text>
                  </Th>

                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                    Status
                    </Text>
                  </Th>

  
                  <Th></Th>
                </Tr>
              </Thead>
  
              <Tbody>
                {data.map((formularios) => (
                  <Tr
                    key={formularios.id}
                    _hover={{ cursor: "pointer", background: "#eef" }}
                  >
                    <Td>{formularios.requerente}</Td>
                    <Td>{formularios.servico}</Td> 
                    <Td>{formularios.programaEnsino}</Td>
                    <Td>{formularios.equipamento}</Td>
                    <Td>{formularios.dataLancamento}</Td>
                    <Td>{formularios.situacao}</Td>

                    <Td isNumeric>
                      <FormulariosTableActions formularios={formularios} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
        </Flex>
  
        <FormulariosModalCreate isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
  
    export default Formularios;