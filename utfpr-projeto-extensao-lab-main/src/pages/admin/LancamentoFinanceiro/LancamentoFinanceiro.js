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

  import { useQueryListLancamentos } from "service/lancamentoFinanceiro";
  
  
  import InstitutionsTableActions from "./InstitutionsTableActions";
  import InsitutionsModalCreate from "./InsitutionsModalCreate";
  
  const LancamentoFinanceiro= () => {
    const { data, isLoading } = useQueryListLancamentos();
  
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
            Lançamentos Financeiro
          </Text>
  
          <Button mt="50px" width="350px" onClick={onOpen}>
            Adicionar Lançamento
          </Button>
  
          <Container my="18px" direction="column" flex={1} p="32px">
            <Text fontSize="20px" fontWeight="semiBold">
              Relação dos lançamentos do sistema
            </Text>
  
            <Table variant="simple" mt="50px">
              <Thead>
                <Tr>
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Data de criação
                    </Text>
                  </Th>
  
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                     Quantidade
                    </Text>
                  </Th>
  
                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Valor
                    </Text>
                  </Th>

                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Unidade de medida
                    </Text>
                  </Th>

                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Descrição
                    </Text>
                  </Th>

                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Observação
                    </Text>
                  </Th>

                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Número da nota fiscal
                    </Text>
                  </Th>

                  <Th>
                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                      Cancelado
                    </Text>
                  </Th>

                  <Th></Th>
                </Tr>
              </Thead>
  
              <Tbody>
                {data.map((lancamento) => (
                  <Tr
                    key={lancamento.id}
                    _hover={{ cursor: "pointer", background: "#eef" }}
                  >
                    <Td>{lancamento.dataLancamento}</Td>
                    <Td>{lancamento.quantidade}</Td>
                    <Td>{lancamento.valor}</Td>
                    <Td>{lancamento.unidade}</Td>
                    <Td>{lancamento.descricao}</Td>
                    <Td>{lancamento.observacao}</Td>
                    <Td>{lancamento.numeroNotaFiscal}</Td>
                    <Td>{lancamento.ehCancelada}</Td>
                    
                    <Td isNumeric>
                      <InstitutionsTableActions lancamento={lancamento} />
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
  
  export default LancamentoFinanceiro;