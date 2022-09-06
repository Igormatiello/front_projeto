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
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,

} from "@chakra-ui/react";

import TextEditor from 'components/TextEditor'
import TextEditor2 from 'components/TextEditor2'
import TextEditor3 from 'components/TextEditor3'


import { useForm, Controller } from "react-hook-form";
import { useQueryClient } from "react-query";

import { useMutationCreateFormularios } from "service/formularios";

const FormulariosModalCreate = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const toast = useToast();

  const { mutate, isLoading } = useMutationCreateFormularios({
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
        title: "Formulário cadastrado com sucesso!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      await queryClient.refetchQueries(["queryListFormularios"]);

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

        <ModalHeader>Insira as informações do formulário</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" my="30px">

              <FormControl isInvalid={errors.servico} mt="30px">
                <FormLabel htmlFor="servico">
                  Serviço requerido
                </FormLabel>

                <Select
                  id="servico"
                  placeholder="Selecione"
                  {...register("servico", {

                  })}
                >
                  <option value="Amostra">Amostra</option>

                </Select>

                {errors.servico && (
                  <FormErrorMessage>
                    {errors.servico.message}
                  </FormErrorMessage>
                )}

              </FormControl>


              <FormControl isInvalid={errors.instituicao} mt="30px">
                <FormLabel htmlFor="instituicao">
                  Instituição
                </FormLabel>
                <Select
                  id="instituicao"
                  placeholder="Selecione"
                  {...register("instituicao", {

                  })}
                >
                  <option value="Amostra">Amostra</option>

                </Select>

                {errors.instituicao && (
                  <FormErrorMessage>
                    {errors.instituicao.message}
                  </FormErrorMessage>
                )}

              </FormControl>



              <FormControl isInvalid={errors.nomeProgramaEnsino} mt="30px">
                <FormLabel htmlFor="nomeProgramaEnsino">
                  Programa Ensino
                </FormLabel>
                <Select
                  id="nomeProgramaEnsino"
                  placeholder="Selecione"
                  {...register("nomeProgramaEnsino", {

                  })}
                >
                  <option value="Amostra">Amostra</option>

                </Select>

                {errors.nomeProgramaEnsino && (
                  <FormErrorMessage>
                    {errors.nomeProgramaEnsino.message}
                  </FormErrorMessage>
                )}

              </FormControl>

              <FormControl isInvalid={errors.naturezaProjeto} mt="30px">
                <FormLabel htmlFor="naturezaProjeto">
                  Natureza Projeto
                </FormLabel>
                <Select
                  id="naturezaProjeto"
                  placeholder="Selecione"
                  {...register("naturezaProjeto", {

                  })}
                >
                  <option value="Amostra">Amostra</option>

                </Select>

                {errors.naturezaProjeto && (
                  <FormErrorMessage>
                    {errors.naturezaProjeto.message}
                  </FormErrorMessage>
                )}

              </FormControl>




              <FormControl isInvalid={errors.numeroAmostras}>
                <FormLabel htmlFor="numeroAmostras">Quantidade Amostras</FormLabel>
                <NumberInput
                  defaultValue={1}
                  max={10}
                  keepWithinRange={false}
                  clampValueOnBlur={false}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>

                {errors.numeroAmostras && (
                  <FormErrorMessage>{errors.numeroAmostras.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl mt="30px">

                <FormLabel htmlFor="metodologia">
                  Metodologia:

                  <TextEditor3 />


                </FormLabel>

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
                  Enviar Formulário para a análise
                </Button>
              </Flex>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FormulariosModalCreate;