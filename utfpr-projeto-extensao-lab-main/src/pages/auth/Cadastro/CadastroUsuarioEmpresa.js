import React from 'react'

import { withRouter } from 'react-router-dom'
import Card from 'components/Card'
import { FormGroup, Box, Flex, Controller } from '@chakra-ui/react'

import { salvar } from 'service/usuario'
import { validar } from 'service/usuario'
import FormFieldCities from 'components/FormFieldCities'

import { mensagemErro, mensagemSucesso } from 'components/Toastr'

class CadastroUsuarioEmpresa extends React.Component {

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

        const { nome, telefone, endereço, cidade, cnpj, inscricaoestadual, celular, bairro, n,
            cep, email, senha, senhaRepeticao } = this.state

        const usuario = {
            nome, telefone, endereço, cidade, cnpj, inscricaoestadual, celular, bairro, n,
            cep, email, senha, senhaRepeticao
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
                mensagemSucesso('Empresa cadastrada com sucesso! Faça o login para acessar o sistema.')
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
            <Card title="Cadastro de Usuário - Empresa">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">


                            <Box bg='tomato' w='100%' p={4} color='white'>
                                Identificação - dados iniciais
                            </Box>

                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text"
                                    id="inputNome"
                                    className="form-control"
                                    name="nome"
                                    onChange={e => this.setState({ nome: e.target.value })} />
                            </FormGroup>

                            <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                                <input type="numeric"
                                    id="inputTelefone"
                                    className="form-control"
                                    name="telefone"
                                    onChange={e => this.setState({ telefone: e.target.value })} />
                            </FormGroup>

                            <FormGroup label="Endereço: *" htmlFor="inputEndereco">
                                <input type="text"
                                    id="inputEndereco"
                                    className="form-control"
                                    name="endereco"
                                    onChange={e => this.setState({ endereço: e.target.value })} />
                            </FormGroup>
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


                            <FormGroup label="CNPJ: *" htmlFor="inputCnpj">
                                <input type="numeric"
                                    id="inputCnpj"
                                    className="form-control"
                                    name="cnpj"
                                    onChange={e => this.setState({ cnpj: e.target.value })} />
                            </FormGroup>

                            <FormGroup label="Celular: *" htmlFor="inputCelular">
                                <input type="numeric"
                                    id="inputCelular"
                                    className="form-control"
                                    name="celular"
                                    onChange={e => this.setState({ celular: e.target.value })} />
                            </FormGroup>

                            <FormGroup label="Bairro: *" htmlFor="inputBairro">
                                <input type="text"
                                    id="inputBairro"
                                    className="form-control"
                                    name="bairro"
                                    onChange={e => this.setState({ bairro: e.target.value })} />
                            </FormGroup>

                            <FormGroup label="N: *" htmlFor="inputN">
                                <input type="numeric"
                                    id="inputN"
                                    className="form-control"
                                    name="N"
                                    onChange={e => this.setState({ n: e.target.value })} />
                            </FormGroup>

                            <FormGroup label="CEP: *" htmlFor="inputCep">
                                <input type="numeric"
                                    id="inputCep"
                                    className="form-control"
                                    name="cep"
                                    onChange={e => this.setState({ cep: e.target.value })} />
                            </FormGroup>


                            <Box bg='tomato' w='100%' p={4} color='white'>
                                Finalização - dados de acesso
                            </Box>
                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="email"
                                    id="inputEmail"
                                    className="form-control"
                                    name="email"
                                    onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password"
                                    id="inputSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({ senha: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password"
                                    id="inputRepitaSenha"
                                    className="form-control"
                                    name="senha"
                                    onChange={e => this.setState({ senhaRepeticao: e.target.value })} />
                            </FormGroup>
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

export default withRouter(CadastroUsuarioEmpresa)