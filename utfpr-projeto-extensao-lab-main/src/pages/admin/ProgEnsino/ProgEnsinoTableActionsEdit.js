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
  } from "@chakra-ui/react";
  
  //import FormFieldCities from "components/FormFieldCities";
  
  import { useForm } from "react-hook-form";
  import { useQueryClient } from "react-query";
  
  import { useMutationEditProgEnsino} from "service/progEnsino"
  
  const ProgEnsinoTableActionsEdit = ({ progEnsino }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        cidade: progEnsino.cidade,
      },
    });
  
    const queryClient = useQueryClient();
  
    const toast = useToast();
  
    const { mutate, isLoading } = useMutationEditProgEnsino({
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
          title: "Programa de Ensino cadastrada com sucesso!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
  
        await queryClient.refetchQueries(["queryListProgEnsino"]);
  
        return;
      },
    });
  
    const onSubmit = async (data) => {
      mutate({ id: progEnsino.id, ...data });
    };
  
    return (
      <>
        <MenuItem onClick={onOpen}>Editar</MenuItem>
  
        <Modal isOpen={isOpen} onClose={onClose} size="3xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastro de Programa de Ensino</ModalHeader>
  
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex direction="column" my="30px">
                  <FormControl isInvalid={errors.nome}>
                    <FormLabel htmlFor="nome">Nome do Programa de Ensino</FormLabel>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="ex: Trabalho de Conclussão de Curso"
                      defaultValue={progEnsino.nome}
                      {...register("nome", {
                        required: "O nome do programa de ensino é obrigatório!",
                      })}
                    />
  
                    {errors.nome && (
                      <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                    )}
                  </FormControl>
  
                  <FormControl isInvalid={errors.sigla}>
                    <FormLabel htmlFor="sigla">Sigla</FormLabel>
                    <Input
                      id="sigla"
                      type="text"
                      placeholder="ex: TCC"
                      defaultValue={progEnsino.sigla}
                      {...register("sigla", {
                        required: "A sigla do programa de ensino é obrigatório!",
                      })}
                    />
  
                    {errors.sigla && (
                      <FormErrorMessage>{errors.sigla.message}</FormErrorMessage>
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
                      Salvar Programa de Ensino
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
  
  export default ProgEnsinoTableActionsEdit;