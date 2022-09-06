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
  Box
} from "@chakra-ui/react";

import FormFieldCities from "components/FormFieldCities";

import { useForm, Controller } from "react-hook-form";
import { useQueryClient } from "react-query";

import { useMutationCreateCadastro } from "service/usuario";

const CadastroUsuarioEmpresa = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const toast = useToast();

  const { mutate, isLoading } = useMutationCreateCadastro({
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
        title: "Cadastro com sucesso!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      await queryClient.refetchQueries(["queryListCadastros"]);

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
        <ModalHeader>Cadastro de Empresa</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" my="30px">


              <Box bg='tomato' w='100%' p={4} color='white'>
                Identificação- dados iniciais

              </Box>

              <FormControl isInvalid={errors.nome}>
                <FormLabel htmlFor="nome">Nome da Empresa</FormLabel>
                <Input
                  id="nome"
                  type="text"
                  placeholder="ex: João Gomes"
                  {...register("nome", {
                    required: "O nome do professor é obrigatório!",
                  })}
                />

                {errors.nome && (
                  <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={errors.telefone}>
                <FormLabel htmlFor="telefone">Telefone</FormLabel>
                <Input
                  id="telefone"
                  type="numeric"
                  placeholder="ex: 49 999983513"
                  {...register("telefone", {
                    required: "O telefone é obrigatório!",
                  })}
                />

                {errors.telefone && (
                  <FormErrorMessage>{errors.telefone.message}</FormErrorMessage>
                )}
              </FormControl>


              <FormControl isInvalid={errors.endereco}>
                <FormLabel htmlFor="nome">Endereço</FormLabel>
                <Input
                  id="endereco"
                  type="text"
                  placeholder="ex: "
                  {...register("endereco", {
                    required: "O endereço é obrigatório!",
                  })}
                />

                {errors.endereco && (
                  <FormErrorMessage>{errors.endereco.message}</FormErrorMessage>
                )}
              </FormControl>

              <Flex mt="30px">
                <Controller
                  rules={{ required: true }}
                  render={({ field: { ref, ...rest } }) => (
                    <FormFieldCities
                      id="cidade"
                      label="Cidade"

                    />
                  )}
                  name="cidade"
                  onChange={e => this.setState({ cidade: e.target.value })}
                />
              </Flex>


              <FormControl isInvalid={errors.cnpj}>
                <FormLabel htmlFor="cnpj">CNPJ</FormLabel>
                <Input
                  id="cnpj"
                  type="numeric"
                  placeholder="ex: "
                  {...register("cnpj", {
                    required: "O cnpj é obrigatório!",
                  })}
                />

                {errors.cnpj && (
                  <FormErrorMessage>{errors.cnpj.message}</FormErrorMessage>
                )}
              </FormControl>



              <FormControl isInvalid={errors.inscricaoEstadual}>
                <FormLabel htmlFor="inscricaoEstadual">Inscrição Estadual</FormLabel>
                <Input
                  id="cnpj"
                  type="numeric"
                  placeholder="ex: "
                  {...register("cnpj", {
                    required: "O cnpj é obrigatório!",
                  })}
                />

                {errors.cnpj && (
                  <FormErrorMessage>{errors.cnpj.message}</FormErrorMessage>
                )}
              </FormControl>


              <FormControl isInvalid={errors.celular}>
                <FormLabel htmlFor="celular">Celular</FormLabel>
                <Input
                  id="celular"
                  type="numeric"
                  placeholder="ex: 49 999983513"
                  {...register("celular", {
                    required: "O celular é obrigatório!",
                  })}
                />

                {errors.celular && (
                  <FormErrorMessage>{errors.celular.message}</FormErrorMessage>
                )}
              </FormControl>


              <FormControl isInvalid={errors.bairro}>
                <FormLabel htmlFor="bairro">Bairro</FormLabel>
                <Input
                  id="bairro"
                  type="text"
                  placeholder="ex: Centro"
                  {...register("bairro", {
                    required: "O bairro é obrigatório!",
                  })}
                />

                {errors.bairro && (
                  <FormErrorMessage>{errors.bairro.message}</FormErrorMessage>
                )}
              </FormControl>


              <FormControl isInvalid={errors.numero}>
                <FormLabel htmlFor="numero">Número</FormLabel>
                <Input
                  id="numero"
                  type="numeric"
                  placeholder="ex: 314"
                  {...register("numero", {
                    required: "O número é obrigatório!",
                  })}
                />

                {errors.numero && (
                  <FormErrorMessage>{errors.numero.message}</FormErrorMessage>
                )}
              </FormControl>




              <FormControl isInvalid={errors.cep}>
                <FormLabel htmlFor="cep">CEP</FormLabel>
                <Input
                  id="cep"
                  type="numeric"
                  placeholder="ex:"
                  {...register("cep", {
                    required: "O cep é obrigatório!",
                  })}
                />

                {errors.cep && (
                  <FormErrorMessage>{errors.cep.message}</FormErrorMessage>
                )}
              </FormControl>






              <Box bg='tomato' w='100%' p={4} color='white'>
                Finalização - dados de acesso
              </Box>
              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="ex: igormatiello@gmail.com"
                  {...register("email", {
                    required: "O email é obrigatório!",
                  })}
                />

                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>


              <FormControl isInvalid={errors.senha}>
                <FormLabel htmlFor="senha">Senha</FormLabel>
                <Input
                  id="senha"
                  type="text"
                  placeholder="ex: "
                  {...register("senha", {
                    required: "A senha é obrigatória!",
                  })}
                />

                {errors.senha && (
                  <FormErrorMessage>{errors.senha.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={errors.confirmacaoSenha}>
                <FormLabel htmlFor="confirmacaoSenha">Confirmação da Senha</FormLabel>
                <Input
                  id="confirmacaoSenha"
                  type="text"
                  placeholder="ex: "
                  {...register("confirmacaoSenha", {
                    required: "A confirmação da senha é obrigatória!",
                  })}
                />

                {errors.confirmacaoSenha && (
                  <FormErrorMessage>{errors.confirmacaoSenha.message}</FormErrorMessage>
                )}
              </FormControl>





              <Flex justify="space-between" mt="30px">
                <Button
                  variant="ghost"
                  mt="50px"
                  onClick={onClose}
                  isDisabled={isLoading}
                >
                  Voltar
                </Button>

                <Button
                  mt="50px"
                  type="submit"
                  isLoading={isLoading}
                  isDisabled={isLoading}
                >
                  Enviar Solicitação de Cadastro
                </Button>
              </Flex>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CadastroUsuarioEmpresa;