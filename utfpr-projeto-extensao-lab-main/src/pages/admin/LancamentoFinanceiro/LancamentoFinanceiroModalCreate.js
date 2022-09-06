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
  
  
  import { useForm } from "react-hook-form";
  import { useQueryClient } from "react-query";
  
  import { useMutationCreateLancamento } from "service/lancamentoFinanceiro";

  
  const LancamentoFinanceiroModalCreate = ({ isOpen, onClose }) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const queryClient = useQueryClient();
  
    const toast = useToast();
  
    const { mutate, isLoading } = useMutationCreateLancamento({
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
          title: "Instituição cadastrada com sucesso!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
  
        await queryClient.refetchQueries(["queryListLancamento"]);
  
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
          <ModalHeader>Cadastro de Lançamento Financeiro</ModalHeader>
  
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex direction="column" my="30px">
                
                
                <FormControl isInvalid={errors.quantidade}>
                <FormLabel htmlFor="quantidade">Quantidade</FormLabel>
                <Input
                  id="quantidade"
                  type="numeric"
                  placeholder="ex: 2"
                  {...register("quantidade", {
                    required: "A quantidade é obrigatória!",
                  })}
                />

                {errors.quantidade && (
                  <FormErrorMessage>{errors.quantidade.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={errors.valor}>
                <FormLabel htmlFor="valor">Valor</FormLabel>
                <Input
                  id="valor"
                  type="numeric"
                  placeholder="ex: 24,50"
                  {...register("valor", {
                    required: "O valor é obrigatório!",
                  })}
                />

                {errors.valor && (
                  <FormErrorMessage>{errors.valor.message}</FormErrorMessage>
                )}
              </FormControl>


              <FormControl isInvalid={errors.unidadeMedida} mt="30px">
                  <FormLabel htmlFor="unidadeMedida">
                    Selecione a unidade de medida de cobrança
                  </FormLabel>
  
                  <Select
                    id="unidadeMedida"
                    placeholder="Selecione"
                    {...register("unidade", {
                      
                    })}
                  >
                    <option value="Hora">Hora</option>
                    <option value="Amostra">Amostra</option>
                  </Select>
  
                  {errors.unidadeMedida && (
                    <FormErrorMessage>
                      {errors.unidadeMedida.message}
                    </FormErrorMessage>
                  )}
                </FormControl>


                <FormControl isInvalid={errors.descricao}>
                <FormLabel htmlFor="descricao">Descrição</FormLabel>
                <Input
                  id="descricao"
                  type="text"
                  placeholder="ex: aaaaa"
                  {...register("descricao", {
                    required: "A descrição é obrigatório!",
                  })}
                />

                {errors.descricao && (
                  <FormErrorMessage>{errors.descricao.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={errors.observacao}>
                <FormLabel htmlFor="observacao">Observação</FormLabel>
                <Input
                  id="observacao"
                  type="text"
                  placeholder="ex: aaaaa"
                  {...register("observacao", {
                    required: "A observação é obrigatório!",
                  })}
                />

                {errors.observacao && (
                  <FormErrorMessage>{errors.observacao.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={errors.numeroNotaFiscal}>
                <FormLabel htmlFor="numeroNotaFiscal">Número da nota fiscal</FormLabel>
                <Input
                  id="numeroNotaFiscal"
                  type="numeric"
                  placeholder="ex: 242222"
                  {...register("numeroNotaFiscal", {
                    required: "O número da nota fiscal é obrigatório!",
                  })}
                />

                {errors.numeroNotaFiscal && (
                  <FormErrorMessage>{errors.numeroNotaFiscal.message}</FormErrorMessage>
                )}
              </FormControl>


              <FormControl isInvalid={errors.ehCancelada} mt="30px">
                  <FormLabel htmlFor="ehCancelada">
                    Informe se está ou não cancelada
                  </FormLabel>
  
                  <Select
                    id="unidadeMedida"
                    placeholder="Selecione"
                    {...register("unidade", {
                      
                    })}
                  >
                    <option value="Hora">Hora</option>
                    <option value="Amostra">Amostra</option>
                  </Select>
  
                  {errors.unidadeMedida && (
                    <FormErrorMessage>
                      {errors.unidadeMedida.message}
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
                    Salvar Instituição
                  </Button>
                </Flex>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default LancamentoFinanceiroModalCreate;