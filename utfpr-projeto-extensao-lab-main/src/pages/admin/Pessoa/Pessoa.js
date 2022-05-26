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

  import { useQueryListPessoa } from "service/pessoa";
import PesssoaModalCreate from "./PessoaModalCreate";
import PessoaTableActions from "./PessoaTableActions";
  
  
  
  const Pessoa = () => {
    const { data, isLoading } = useQueryListPessoa();
  
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
            Pessoas
          </Text>
  
          <Button mt="50px" width="350px" onClick={onOpen}>
            Adicionar Pessoa
          </Button>
  
          <Container my="18px" direction="column" flex={1} p="32px">
            <Text fontSize="20px" fontWeight="semiBold">
              Relação das pessoas do sistema
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
                      Documento
                    </Text>
                  </Th>
  
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Telefone
                    </Text>
                  </Th>
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Celular
                    </Text>
                  </Th>
  
                  <Th></Th>
                </Tr>
              </Thead>
  
              <Tbody>
                {data.map((pessoa) => (
                  <Tr
                    key={pessoa.documento}
                    _hover={{ cursor: "pointer", background: "#eef" }}
                  >
                    <Td>{pessoa.nome}</Td>
                    <Td>{pessoa.telefone}</Td>
                    <Td>{pessoa.celular}</Td>
                    <Td isNumeric>
                      <PessoaTableActions pessoa={pessoa} />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
        </Flex>
  
        <PesssoaModalCreate isOpen={isOpen} onClose={onClose} />
      </>
    );
  };
  
  export default Pessoa;