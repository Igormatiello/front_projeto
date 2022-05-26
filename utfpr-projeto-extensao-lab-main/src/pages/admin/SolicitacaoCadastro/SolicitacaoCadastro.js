import {
    Flex,
    Text,
    Spinner,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
  } from "@chakra-ui/react";
  
  import Container from "components/Container";
  import {useQueryListSolicitacaoCadastro} from "service/solicitacaoCadastro"




  
  const SolicitacaoCadastro = () => {
    const { data, isLoading } = useQueryListSolicitacaoCadastro();
  
  
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
            Solicitação Cadastro
          </Text>
  
          
          <Container my="18px" direction="column" flex={1} p="32px">
            <Text fontSize="20px" fontWeight="semiBold">
              Relação das solicitações cadastro do sistema
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
                     Tipo de Pessoa
                    </Text>
                  </Th>
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                    Instituição do Orientador
                    </Text>
                  </Th>
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                    CPF do Orientador
                    </Text>
                  </Th>
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                    Programa de Ensino
                    </Text>
                  </Th>
                  

  
                  <Th></Th>
                </Tr>
              </Thead>
  
              <Tbody>
                {data.map((solicitacaoCadastro) => (
                  <Tr
                    key={solicitacaoCadastro.id}
                    _hover={{ cursor: "pointer", background: "#eef" }}
                  >
                    <Td>{solicitacaoCadastro.nome}</Td>
                    <Td>{solicitacaoCadastro.documento}</Td>
                    <Td>{solicitacaoCadastro.tipoPessoa}</Td>
                    <Td>{solicitacaoCadastro.instituicaoOrientador}</Td>
                    <Td>{solicitacaoCadastro.cpfOrientador}</Td>
                    <Td>{solicitacaoCadastro.programaDeEnsino}</Td>
                    <Td isNumeric>
                    
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Container>
        </Flex>
  
      </>
    );
  };
  
  export default SolicitacaoCadastro;