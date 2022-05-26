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
    Input
} from "@chakra-ui/react";

import FormFieldCities from "components/FormFieldCities";

import { useForm, Controller } from "react-hook-form";
import { useQueryClient } from "react-query";


import { useMutationEditCidade } from "service/cidade"

const CidadesTableActionsEdit = ({ cidade }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            cidade: cidade.uf,
        },
    });

    const queryClient = useQueryClient();

    const toast = useToast();

    const { mutate, isLoading } = useMutationEditCidade({
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
        mutate({ id: cidade.id, ...data });
    };

    return (
        <>
            <MenuItem onClick={onOpen}>Editar</MenuItem>

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
                                        defaultValue={cidade.nome}
                                        {...register("nome", {
                                            required: "O nome da cidade é obrigatório!",
                                        })}
                                    />

                                    {errors.nome && (
                                        <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                                    )}
                                </FormControl>


                                <Flex mt="30px">
                                    <Controller
                                        rules={{ required: true }}
                                        render={({ field: { ref, ...rest } }) => (
                                            <FormFieldCities //criar para estados
                                                errors={errors}
                                                id="ciduf"
                                                label="Estado da cidade"
                                                errorMessage="O estado é obrigatório!"
                                                {...rest}
                                            />
                                        )}
                                        control={control}
                                        name="uf"
                                    />
                                </Flex>

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
        </>
    );
};

export default CidadesTableActionsEdit;