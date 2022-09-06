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
    Select,
  } from "@chakra-ui/react";
  

  
  import { useForm, Controller } from "react-hook-form";
  import { useQueryClient } from "react-query";
  
  import { useMutationCreateServico } from "service/servicos";
  
  const ServicoModalCreate = ({ isOpen, onClose }) => {
    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm();
  
    const queryClient = useQueryClient();
  
    const toast = useToast();
  
    const { mutate, isLoading } = useMutationCreateServico({
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
          title: "Serviço cadastrado com sucesso!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
  
        await queryClient.refetchQueries(["queryListServico"]);
  
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
          <ModalHeader>Cadastro de Serviço</ModalHeader>
  
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex direction="column" my="30px">
                <FormControl isInvalid={errors.nome}>
                  <FormLabel htmlFor="servico">Nome do Serviço</FormLabel>
                  <Input
                    id="servico"
                    type="text"
                    placeholder="ex: "
                    {...register("servico", {
                      required: "O nome da serviço é obrigatório!",
                    })}
                  />
  
                  {errors.servico && (
                    <FormErrorMessage>{errors.servico.message}</FormErrorMessage>
                  )}
                </FormControl>
  
                <FormControl isInvalid={errors.equipamento} mt="30px">
                  <FormLabel htmlFor="equipamento">
                    Selecione um Equipamento
                  </FormLabel>
  
                  <Select
                    id="equipamento"
                    placeholder="Selecione"
                    {...register("equipamento", {
                      required: "O equipamento é obrigatório!",
                    })}
                  >
                   
                  </Select>
  
                  {errors.equipamento && (
                    <FormErrorMessage>
                      {errors.equipamento.message}
                    </FormErrorMessage>
                  )}
                </FormControl>
  
                <FormControl isInvalid={errors.descricao}>
                  <FormLabel htmlFor="servico">Informe a Descrição do Equipamento</FormLabel>
                  <Input
                    id="descricao"
                    type="text"
                    placeholder="ex: "
                    {...register("descricao", {
                      required: "O descrição do equipamento é obrigatório!",
                    })}
                  />
  
                  {errors.descricao && (
                    <FormErrorMessage>{errors.descricao.message}</FormErrorMessage>
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
                    Salvar Serviço
                  </Button>
                </Flex>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ServicoModalCreate;