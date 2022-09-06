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
  import { useQueryListServicos } from "service/servicos";
  
import ServicoTableActions from "./ServicoTableActions";
import ServicoModalCreate from "./ServicoModalCreate";


  
  const Servico= () => {
    const { data, isLoading } = useQueryListServicos();
  
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
            Serviços
          </Text>
  
          <Button mt="50px" width="350px" onClick={onOpen}>
            Adicionar Serviço
          </Button>
  
          <Container my="18px" direction="column" flex={1} p="32px">
            <Text fontSize="20px" fontWeight="semiBold">
              Relação dos serviços do sistema
            </Text>
  
            <Table variant="simple" mt="50px">
              <Thead>
                <Tr>
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Serviço
                    </Text>
                  </Th>
  
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Equipamento
                    </Text>
                  </Th>
  
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Descrição
                    </Text>
                  </Th>
  
                  <Th></Th>
                </Tr>
              </Thead>
  
              <Tbody>
                {data.map((servico) => (
                  <Tr
                    key={servico.id}
                    _hover={{ cursor: "pointer", background: "#eef" }}
                  >
                    <Td>{servico.equipamento}</Td>
                    <Td>{servico.descricao}</Td>
                    <Td isNumeric>
                      <ServicoTableActions servico={servico} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
        </Flex>
  
        <ServicoModalCreate isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
  
  export default Servico;