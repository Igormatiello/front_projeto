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
import { useQueryListCidade } from "service/cidade";


import CidadesTableActions from "./CidadesTableActions"
import CidadesModalCreate from "./CidadesModalCreate"


const Cidades = () => {
    const { data, isLoading } = useQueryListCidade();

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
                    Cidades
                </Text>

                <Button mt="50px" width="350px" onClick={onOpen}>
                    Adicionar Cidade
                </Button>

                <Container my="18px" direction="column" flex={1} p="32px">
                    <Text fontSize="20px" fontWeight="semiBold">
                        Relação das cidades do sistema
                    </Text>

                    <Table variant="simple" mt="50px">
                        <Thead>
                            <Tr>
                                <Th>
                                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                                        Cidade
                                    </Text>
                                </Th>

                                <Th>
                                    <Text color="greyText" fontSize="13px" fontWeight="semiBold">
                                        Estado da cidade
                                    </Text>
                                </Th>



                                <Th></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {data.map((cidade) => (
                                <Tr
                                    key={cidade.id}
                                    _hover={{ cursor: "pointer", background: "#eef" }}
                                >
                                    <Td>{cidade.nome}</Td>
                                    <Td>{cidade.uf}</Td>
                                    <Td isNumeric>
                                        <CidadesTableActions cidade={cidade} />
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Container>
            </Flex>

            <CidadesModalCreate isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Cidades;