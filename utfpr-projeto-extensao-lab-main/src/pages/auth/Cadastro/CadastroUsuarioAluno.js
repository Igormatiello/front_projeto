import React from 'react'



import Card from 'components/Card'
import { Box, Flex,  FormControl } from '@chakra-ui/react'
import {  Controller } from "react-hook-form";
import { salvar } from 'service/usuario'
import { validar } from 'service/usuario'
import FormFieldCities from 'components/FormFieldCities'

import { withRouter } from 'react-router-dom'
import { mensagemErro, mensagemSucesso } from 'components/Toastr'

class CadastroUsuarioAluno extends React.Component {

     
    state = {
        telefone: '',
        endereço: '',
        nome: '',
        cidade: '',
        cpf: '',
        celular: '',
        bairro: '',
        n: '',
        cep: '',
        instituicaoDeEnsino: '',
        nomeDoProgramaDeEnsino: '',
        cpfOrientador: '',
        dataTermino: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

   
    cadastrar = () => {

        const { telefone, endereço, nome, cidade, cpf, celular, bairro, n,
            cep, instituicaoDeEnsino, nomeDoProgramaDeEnsino,
            cpfOrientador, dataTermino, email, senha, senhaRepeticao } = this.state

        const usuario = {
            telefone, endereço, nome, cidade, cpf, celular, bairro, n,
            cep, instituicaoDeEnsino, nomeDoProgramaDeEnsino,
            cpfOrientador, dataTermino, email, senha, senhaRepeticao
        }

        try {
            validar(usuario);
        } catch (erro) {
            const msgs = erro.mensagens;
            msgs.forEach(msg => mensagemErro(msg));
            return false;
        }

        salvar(usuario)
            .then(response => {
                mensagemSucesso('Usuário cadastrado com sucesso! Faça o login para acessar o sistema.')
                this.props.history.push('/login')
            }).catch(error => {
                mensagemErro(error.response.data)
            })
    }
    

    cancelar = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <Card title="Cadastro de Usuário - Aluno">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">


                            <Box bg='tomato' w='100%' p={4} color='white'>
                                Identificação - dados iniciais
                            </Box>

                            <FormControl label="Nome: *" htmlFor="inputNome">
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



                            <button onClick={this.cadastrar} type="button" className="btn btn-success">
                                <i className="pi pi-save"></i> Enviar Solicitação de Cadastro
                            </button>


                            <button onClick={this.cancelar} type="button" className="btn btn-danger">
                                <i className="pi pi-times"></i> Cancelar
                            </button>


                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(CadastroUsuarioAluno)