import {
    MenuItem,
    useDisclosure,
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

import { useMutationEditMudaStatusFormulario } from "service/formularios";

const FormulariosFinalizarAnalise = ({ formulario }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            cidade: formulario.cidade,
        },
    });

    const queryClient = useQueryClient();

    const toast = useToast();

    const { mutate, isLoading } = useMutationEditMudaStatusFormulario({
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
                title: "Formulário finalizado com sucesso!",
                status: "success",
                duration: 9000,
                isClosable: true,
            });

            await queryClient.refetchQueries(["queryListFormularios"]);

            return;
        },
    });

    const onSubmit = async (data) => {
        mutate({ id: formulario.id, ...data });
    };

    return (
        <>
            <MenuItem onClick={onOpen}>Editar</MenuItem>

            <Modal isOpen={isOpen} onClose={onClose} size="3xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Análise de Formulário</ModalHeader>

                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Flex direction="column" my="30px">
                            <FormControl isInvalid={errors.statusFormulario} mt="30px">
                    <FormLabel htmlFor="statusFormulario">
                      Status Do Formulário
                    </FormLabel>
  
                    <Select
                      id="statusFormulario"
                      placeholder="Selecione"
                      {...register("statusFormulario", {
                        required: "O status do formulário é obrigatório!",
                      })}
                    >
                      <option value="AguardandoAmostra">Aguardando Amostra</option>
                      <option value="AmostraRecusada">Amostra Recusada</option>
                      <option value="AguardandoAnalise">Aguardando Análise</option>
                      <option value="EmAnalise">Em Análise</option>
                      <option value="Finalizada">Finalizada</option>
                      
                    </Select>
  
                    {errors.statusFormulario && (
                      <FormErrorMessage>
                        {errors.statusFormulario.message}
                      </FormErrorMessage>
                    )}
                  </FormControl>

              <FormControl isInvalid={errors.motivoRejeicao}>
                <FormLabel htmlFor="sigla">Motivo da Rejeição</FormLabel>
                <Input
                  id="motivoRejeicao"
                  type="text"
                  placeholder="ex: "
                  {...register("motivoRejeicao", {
                    required: "O motivo da rejeição é obrigatório!",
                  })}
                />

                {errors.motivoRejeicao && (
                  <FormErrorMessage>{errors.motivoRejeicao.message}</FormErrorMessage>
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
                                       Finalizar Análise
                                    </Button>
                                </Flex>
                            </Flex>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default FormulariosFinalizarAnalise;