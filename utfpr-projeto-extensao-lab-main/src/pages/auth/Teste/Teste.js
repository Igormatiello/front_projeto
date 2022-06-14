import {
  Flex,
  Button,
  Text,
  FormLabel,
  useToast,
  FormControl,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import Card from 'components/Card'
import FormFieldCities from 'components/FormFieldCities'
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useMutationCreatePessoa, validar } from 'service/usuario'
import { salvar } from 'service/usuario'
import { useMutationDirecionarCadastro } from "service/auth";
import { Link } from "react-router-dom";
import { mensagemErro, mensagemSucesso } from 'components/Toastr'
import { useQueryClient } from "react-query";
import { useMutationCreateCadastro, cadastrar } from "service/usuario";


const Teste = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    control
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

        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex>


              <Card title="Cadastro de Usuário - Aluno">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bs-component">


                      <Box bg='tomato' w='100%' p={4} color='white'>
                        Identificação - dados iniciais
                      </Box>

                      <FormControl label="Nome: *" htmlFor="inputNome">
                        <FormLabel htmlFor="nome">Nome:</FormLabel>
                        <input type="text"
                          id="inputNome"
                          className="form-control"
                          name="nome"
                          onChange={e => this.setState({ nome: e.target.value })} />
                      </FormControl>


                      <FormControl label="Telefone: *" htmlFor="inputTelefone">
                        <input type="numeric"
                          id="inputTelefone"
                          className="form-control"
                          name="telefone"
                          onChange={e => this.setState({ telefone: e.target.value })} />
                      </FormControl>

                      <FormControl label="Endereço: *" htmlFor="inputEndereco">
                        <input type="text"
                          id="inputEndereco"
                          className="form-control"
                          name="endereco"
                          onChange={e => this.setState({ endereço: e.target.value })} />
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


                      <FormControl label="CPF: *" htmlFor="inputCPF">
                        <input type="numeric"
                          id="inputCPF"
                          className="form-control"
                          name="cpf"
                          onChange={e => this.setState({ cpf: e.target.value })} />
                      </FormControl>

                      <FormControl label="Celular: *" htmlFor="inputCelular">
                        <input type="numeric"
                          id="inputCelular"
                          className="form-control"
                          name="celular"
                          onChange={e => this.setState({ celular: e.target.value })} />
                      </FormControl>

                      <FormControl label="Bairro: *" htmlFor="inputBairro">
                        <input type="text"
                          id="inputBairro"
                          className="form-control"
                          name="bairro"
                          onChange={e => this.setState({ bairro: e.target.value })} />
                      </FormControl>

                      <FormControl label="N: *" htmlFor="inputN">
                        <input type="numeric"
                          id="inputN"
                          className="form-control"
                          name="N"
                          onChange={e => this.setState({ n: e.target.value })} />
                      </FormControl>

                      <FormControl label="CEP: *" htmlFor="inputCep">
                        <input type="numeric"
                          id="inputCep"
                          className="form-control"
                          name="cep"
                          onChange={e => this.setState({ cep: e.target.value })} />
                      </FormControl>

                      <Box bg='tomato' w='100%' p={4} color='white'>
                        Vínculo
                      </Box>

                      <FormControl label="Instituição de Ensino: *" htmlFor="inputInstituicaoEnsino">
                        <input type="text"
                          id="inputInstituicaoEnsino"
                          className="form-control"
                          name="instituicaoEnsino"
                          onChange={e => this.setState({ instituicaoDeEnsino: e.target.value })} />
                      </FormControl>

                      <FormControl label="Nome do Programa de Ensino: *" htmlFor="inputNomeProgrmaEnsino">
                        <input type="text"
                          id="inputNomeProgramaEnsino"
                          className="form-control"
                          name="nomeProgramaEnsino"
                          onChange={e => this.setState({ nomeDoProgramaDeEnsino: e.target.value })} />
                      </FormControl>

                      <FormControl label="CPF do Orientador: *" htmlFor="inputCPFOrientador">
                        <input type="numeric"
                          id="inputCPFOrientador"
                          className="form-control"
                          name="cpfOrientador"
                          onChange={e => this.setState({ cpfOrientador: e.target.value })} />
                      </FormControl>

                      <Box bg='tomato' w='100%' p={4} color='white'>
                        Finalização - dados de acesso
                      </Box>
                      <FormControl label="Email: *" htmlFor="inputEmail">
                        <input type="email"
                          id="inputEmail"
                          className="form-control"
                          name="email"
                          onChange={e => this.setState({ email: e.target.value })} />
                      </FormControl>
                      <FormControl label="Senha: *" htmlFor="inputSenha">
                        <input type="password"
                          id="inputSenha"
                          className="form-control"
                          name="senha"
                          onChange={e => this.setState({ senha: e.target.value })} />
                      </FormControl>
                      <FormControl label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                        <input type="password"
                          id="inputRepitaSenha"
                          className="form-control"
                          name="senha"
                          onChange={e => this.setState({ senhaRepeticao: e.target.value })} />
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
                          Salvar Cadastro
                        </Button>
                      </Flex>


                    </div>
                  </div>
                </div>
              </Card>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>

  )
}

export default Teste;
