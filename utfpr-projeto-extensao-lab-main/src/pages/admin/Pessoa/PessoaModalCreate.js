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

import FormFieldCities from "components/FormFieldCities";

import { useForm, Controller } from "react-hook-form";
import { useQueryClient } from "react-query";

import { useMutationCreatePessoa } from "service/pessoa";

const PesssoaModalCreate = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const toast = useToast();

  const { mutate, isLoading } = useMutationCreatePessoa({
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
        title: "Pessoa cadastrada com sucesso!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      await queryClient.refetchQueries(["queryListPessoa"]);

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
        <ModalHeader>Cadastro de Pessoa</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" my="30px">
              <FormControl isInvalid={errors.nome}>
                <FormLabel htmlFor="nome">Nome:</FormLabel>
                <Input
                  id="nome"
                  type="text"
                  placeholder="ex: João Azevedo"
                  {...register("nome", {
                    required: "O nome é obrigatório!",
                  })}
                />

                {errors.nome && (
                  <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={errors.email}>
                <FormLabel htmlFor="email">Email:</FormLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="ex:joaoazevedo.gmail.com"
                  {...register("email", {
                    required: "O email é obrigatório",
                  })}
                />

                {errors.nome && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={errors.ehAtivo} mt="30px">
                <FormLabel htmlFor="ehAtivo">
                  Ativo:
                </FormLabel>

                <Select
                  id="ehTipo"
                  placeholder="Selecione"
                  {...register("ehAtivo", {
                    required: "O é ativo é obrigatório!",
                  })}
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </Select>

                {errors.ahAtivo && (
                  <FormErrorMessage>
                    {errors.ehAtivo.message}
                  </FormErrorMessage>
                )}

              </FormControl>
              <ModalBody>

                <FormControl isInvalid={errors.tipoPessoa} mt="30px">
                  <FormLabel htmlFor="tipoPessoa">
                    Tipo de Pessoa
                  </FormLabel>

                  <Select
                    id="tipoPessoa"
                    placeholder="Selecione"
                    {...register("tipoPessoa", {
                      required: "O tipo de pessoa é obrigatório!",
                    })}
                  >
                    <option value="Fisica">Física</option>
                    <option value="Juridica">Jurídica</option>
                  </Select>

                  {errors.tipoPessoa && (
                    <FormErrorMessage>
                      {errors.tipoPessoa.message}
                    </FormErrorMessage>
                  )}

                </FormControl>

                <Flex mt="30px">
                  <Controller
                    rules={{ required: true }}
                    render={({ field: { ref, ...rest } }) => (
                      <FormFieldCities
                        errors={errors}
                        id="cidade"
                        label="Cidade da Pessoa"
                        errorMessage="A cidade é obrigatória!"
                        {...rest}
                      />
                    )}
                    control={control}
                    name="cidade"
                  />
                </Flex>

                <FormControl isInvalid={errors.cpf}>
                  <FormLabel htmlFor="cpf">CPF:</FormLabel>
                  <Input
                    id="cpf"
                    type="numeric"
                    placeholder="ex:100.100.100-10"
                    {...register("cpf", {
                      required: "O cpf é obrigatório",
                    })}
                  />

                  {errors.cpf && (
                    <FormErrorMessage>{errors.cpf.message}</FormErrorMessage>
                  )}
                </FormControl>

              </ModalBody>






              <ModalBody>


                <FormControl isInvalid={errors.cep}>
                  <FormLabel htmlFor="cep">CEP:</FormLabel>
                  <Input
                    id="cep"
                    type="numeric"
                    placeholder="ex: 58700-200"
                    {...register("cep", {
                      required: "O CEP é obrigatório",
                    })}
                  />

                  {errors.cep && (
                    <FormErrorMessage>{errors.cep.message}</FormErrorMessage>
                  )}
                </FormControl>


                <FormControl isInvalid={errors.endereco}>
                  <FormLabel htmlFor="endereco">Endereço:</FormLabel>
                  <Input
                    id="endereco"
                    type="text"
                    placeholder="ex: Rua Duque de Caxias"
                    {...register("endereco", {
                      required: "O Endereço é obrigatório",
                    })}
                  />

                  {errors.endereco && (
                    <FormErrorMessage>{errors.endereco.message}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl isInvalid={errors.bairro}>
                  <FormLabel htmlFor="bairro">Bairro:</FormLabel>
                  <Input
                    id="bairro"
                    type="text"
                    placeholder="ex: Bairro da Baixada"
                    {...register("bairro", {
                      required: "O Bairro é obrigatório",
                    })}
                  />

                  {errors.bairro && (
                    <FormErrorMessage>{errors.bairro.message}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl isInvalid={errors.numero}>
                  <FormLabel htmlFor="numero">Número:</FormLabel>
                  <Input
                    id="numero"
                    type="numeric"
                    placeholder="ex: 244"
                    {...register("numero", {
                      required: "O Número é obrigatório",
                    })}
                  />

                  {errors.numero && (
                    <FormErrorMessage>{errors.numero.message}</FormErrorMessage>
                  )}
                </FormControl>



              </ModalBody>

              <ModalBody>

                <FormControl isInvalid={errors.complemento}>
                  <FormLabel htmlFor="complemento">Complemento:</FormLabel>
                  <Input
                    id="complemento"
                    type="text"
                    placeholder="ex: em frente ao Banco do Brasil"
                    {...register("complemento", {
                      required: "O Complemento é obrigatório",
                    })}
                  />

                  {errors.complemento && (
                    <FormErrorMessage>{errors.complemento.message}</FormErrorMessage>
                  )}
                </FormControl>


                <FormControl isInvalid={errors.telefone}>
                  <FormLabel htmlFor="telefone">Telefone:</FormLabel>
                  <Input
                    id="telefone"
                    type="numeric"
                    placeholder="ex: 46 999912137"
                    {...register("telefone", {
                      required: "O Telefone é obrigatório",
                    })}
                  />

                  {errors.telefone && (
                    <FormErrorMessage>{errors.telefone.message}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl isInvalid={errors.celular}>
                  <FormLabel htmlFor="celular">Celular:</FormLabel>
                  <Input
                    id="celular"
                    type="numeric"
                    placeholder="ex: 46 999912137"
                    {...register("celular", {
                      required: "O Celular é obrigatório",
                    })}
                  />

                  {errors.celular && (
                    <FormErrorMessage>{errors.celular.message}</FormErrorMessage>
                  )}
                </FormControl>

              </ModalBody>



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
                  Salvar Pessoa
                </Button>
              </Flex>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PesssoaModalCreate;