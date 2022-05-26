import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast,
    Flex,
    Input,
    Select
} from "@chakra-ui/react";



import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

import { useMutationCreateCidade } from "service/cidade"


const CidadesModalCreate = ({ isOpen, onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const queryClient = useQueryClient();

    const toast = useToast();

    const { mutate, isLoading } = useMutationCreateCidade({
        onError: ({ response }) => {
            const message = response.data.message;

            toast({
                title: message,
                status: "error",
                duration: 9000,
                isClosable: true,
            });

            return;
        },
        onSuccess: async () => {
            toast({
                title: "Cidade cadastrada com sucesso!",
                status: "success",
                duration: 9000,
                isClosable: true,
            });

            await queryClient.refetchQueries(["queryListCidade"]);

            return;
        },
    });

    const onSubmit = async (data) => {
        mutate(data);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="3xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Cadastro de Cidade</ModalHeader>

                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Flex direction="column" my="30px">
                            <FormControl isInvalid={errors.nome}>
                                <FormLabel htmlFor="nome">Nome da Cidade</FormLabel>
                                <Input
                                    id="nome"
                                    type="text"
                                    placeholder="ex: Pato Branco"
                                    {...register("nome", {
                                        required: "O nome da cidade é obrigatório!",
                                    })}
                                />

                                {errors.nome && (
                                    <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                                )}
                            </FormControl>





                         <FormControl isInvalid={errors.uf} mt="30px">
                <FormLabel htmlFor="uf">
                  UF:
                </FormLabel>

                <Select
                  id="uf"
                  placeholder="Selecione Estado"
                  {...register("uf", {
                    
                  })}
                >
                  <option value="acre">Acre</option>
                  <option value="alagoas">Alagoas</option>
                  <option value="amapa">Amapá</option>
                  <option value="amazonas">Amazonas</option>
                  <option value="bahia">Bahia</option>
                  <option value="ceara">Ceará</option>
                  <option value="distritoFederal">Distrito Federal</option>
                  <option value="espiritoSanto">Espírito Santo</option>
                  <option value="goias">Góias</option>
                  <option value="maranhao">Maranhão</option>
                  <option value="matoGrosso">Mato Grosso</option>
                  <option value="matoGrossoDoSul">Mato Grosso do Sul</option>
                  <option value="minasGerais">Minas Gerais</option>
                  <option value="para">Pará</option>
                  <option value="paraiba">Paraíba</option>
                  <option value="pernambuco">Pernambuco</option>
                  <option value="piaui">Piauí</option>
                  <option value="rioDeJaneiro">Rio de Janeiro</option>
                  <option value="rioGrandeDoNorte">Rio Grande do Norte</option>
                  <option value="rioGrandeDoSul">Rio Grande do Sul</option>
                  <option value="rondonia">Rondônia</option>
                  <option value="roraima">Roraima</option>
                  <option value="santaCatarina">Santa Catarina</option>
                  <option value="saoPaulo">São Paulo</option>
                  <option value="sergipe">Sergipe</option>
                  <option value="tocantins">Tocantins</option>
                  

                </Select>

                {errors.uf && (
                  <FormErrorMessage>
                    {errors.uf.message}
                  </FormErrorMessage>
                )}

              </FormControl>

                            <Flex justify="space-between" mt="30px">
                                <Button
                                    variant="ghost"
                                    mt="50px"
                                    onClick={onClose}
                                    isDisabled={isLoading}
                                >
                                    Cancelar
                                </Button>

                                <Button
                                    mt="50px"
                                    type="submit"
                                    isLoading={isLoading}
                                    isDisabled={isLoading}
                                >
                                    Salvar Cidade
                                </Button>
                            </Flex>
                        </Flex>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CidadesModalCreate;