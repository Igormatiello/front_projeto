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

import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';

import { useForm } from "react-hook-form";
import { useQueryClient } from "react-query";

import { useMutationCreateEquipamento } from "service/equipamento";

const EquipamentoModalCreate = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { editorState } = this.state;
  this.state = {
    editorState: EditorState.createEmpty(),
  };

  const { mutate, isLoading } = useMutationCreateEquipamento({
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
            title: "Equipamento cadastrada com sucesso!",
            status: "success",
            duration: 9000,
            isClosable: true,
        });

        await queryClient.refetchQueries(["queryListEquipamento"]);

        return;
    },
});

  this.setState({
    editorState,
  });


  const queryClient = useQueryClient();

  const toast = useToast();



  const onSubmit = async (data) => {
    mutate(data);
};

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastro de Equipamento</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" my="30px">
              <FormControl isInvalid={errors.nome}>
                <FormLabel htmlFor="nome">Nome do Equipamento</FormLabel>
                <Input
                  id="nome"
                  type="text"
                  placeholder="ex: Impressora 3D"
                  {...register("nome", {
                    required: "O nome da equipamento é obrigatório!",
                  })}
                />

                {errors.nome && (
                  <FormErrorMessage>{errors.nome.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={errors.sigla}>
                <FormLabel htmlFor="sigla">Sigla do Equipamento</FormLabel>
                <Input
                  id="sigla"
                  type="text"
                  placeholder="ex: I3D"
                  {...register("sigla", {
                    required: "A sigla do equipamento é obrigatória!",
                  })}
                />

                {errors.sigla && (
                  <FormErrorMessage>{errors.sigla.message}</FormErrorMessage>
                )}
              </FormControl>


              <FormControl isInvalid={errors.unidadeMedidaInterno} mt="30px">
                <FormLabel htmlFor="unidadeMedidaInterno">
                  Unidade Medida Interno:
                </FormLabel>

                <Select
                  id="unidadeMedidaInterno"
                  placeholder="Selecione"
                  {...register("unidadeMedidaInterno", {

                  })}
                >
                  <option value="Amostra">Amostra</option>
                  <option value="Hora">Hora</option>
                </Select>

                {errors.unidadeMedidaInterno && (
                  <FormErrorMessage>
                    {errors.unidadeMedidaInterno.message}
                  </FormErrorMessage>
                )}

              </FormControl>


              <FormControl isInvalid={errors.valorInterno}>
                <FormLabel htmlFor="valorInterno">Valor Interno</FormLabel>
                <Input
                  id="valorInterno"
                  type="decimal"
                  placeholder=" "
                  {...register("valorInterno", {
                  })}
                />

                {errors.valorInterno && (
                  <FormErrorMessage>{errors.valorInterno.message}</FormErrorMessage>
                )}
              </FormControl>


              <FormControl isInvalid={errors.unidadeMedidaExterno} mt="30px">
                <FormLabel htmlFor="unidadeMedidaExterno">
                  Unidade Medida Externo:
                </FormLabel>

                <Select
                  id="unidadeMedidaExterno"
                  placeholder="Selecione"
                  {...register("unidadeMedidaExterno", {

                  })}
                >
                  <option value="Amostra">Amostra</option>
                  <option value="Hora">Hora</option>
                </Select>

                {errors.unidadeMedidaExterno && (
                  <FormErrorMessage>
                    {errors.unidadeMedidaExterno.message}
                  </FormErrorMessage>
                )}

              </FormControl>


              <FormControl isInvalid={errors.valorExterno}>
                <FormLabel htmlFor="valorExterno">Valor Externo</FormLabel>
                <Input
                  id="valorExterno"
                  type="decimal"
                  placeholder=" "
                  {...register("valorExterno", {
                  })}
                />

                {errors.valorExterno && (
                  <FormErrorMessage>{errors.valorExterno.message}</FormErrorMessage>
                )}
              </FormControl>




              <FormControl isInvalid={errors.unidadeMedidaPadrao} mt="30px">
                <FormLabel htmlFor="unidadeMedidaPadrao">
                  Unidade Medida Padrão:
                </FormLabel>

                <Select
                  id="unidadeMedidaPadrao"
                  placeholder="Selecione"
                  {...register("unidadeMedidaPadrao", {

                  })}
                >
                  <option value="Amostra">Amostra</option>
                  <option value="Hora">Hora</option>
                </Select>

                {errors.unidadeMedidaPadrao && (
                  <FormErrorMessage>
                    {errors.unidadeMedidaPadrao.message}
                  </FormErrorMessage>
                )}

              </FormControl>


              <FormControl isInvalid={errors.valorPadrao}>
                <FormLabel htmlFor="valorPadrao">Valor Padrão</FormLabel>
                <Input
                  id="valorPadrao"
                  type="decimal"
                  placeholder=" "
                  {...register("valorPadrao", {
                  })}
                />

                {errors.valorPadrao && (
                  <FormErrorMessage>{errors.valorPadrao.message}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl mt="30px">

                <FormLabel htmlFor="metodologia">
                  Metodologia:

                  <Editor
                    initialEditorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                  />

                </FormLabel>

              </FormControl>
              
              <FormControl mt="30px">

                <FormLabel htmlFor="laudoPadrao">
                 Laudo Padrão:

                  <Editor
                    initialEditorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                  />

                </FormLabel>

              </FormControl>

              <FormControl mt="30px">

                <FormLabel htmlFor="obsFixas">
                 Observações fixas:

                  <Editor
                    initialEditorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                  />

                </FormLabel>

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
                  Salvar Equipamento
                </Button>
              </Flex>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EquipamentoModalCreate;