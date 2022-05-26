//import ApiService from '../apiservice'
import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;


function ErroValidacao(mensagens){
    this.mensagens = mensagens;
}

export const useQueryListUsuario = (options = {}) =>
  useQuery(
    ["queryListUsuario"],
    () => axios.get(`${BASE_URL}/cadastro`).then((result) => result.data),
    options
  );

  export const useMutationCreateCadastro = (options = {}) =>
  useMutation(
    (cadastroData) =>
      axios
        .post(`${BASE_URL}/cadastro`, cadastroData)
        .then((result) => result.data),
    options
  );

export const salvar = (usuario = {}) =>
    {
        return this.post('', usuario);
    }


    export const validar = (usuario = {}) =>
{
        const erros = []

        if(!usuario.nome){
            erros.push('O campo Nome é obrigatório.')
        }

        if(!usuario.email){
            erros.push('O campo Email é obrigatório.')
        }else if( !usuario.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/) ){
            erros.push('Informe um Email válido.')
        }

        if(!usuario.senha || !usuario.senhaRepeticao){
            erros.push('Digite a senha 2x.')
        }else if( usuario.senha !== usuario.senhaRepeticao ){
            erros.push('As senhas não batem.')
        }        

        if(erros && erros.length > 0){
            throw new ErroValidacao(erros);
        }
   
    }


    export const useMutationCreatePessoa = (options = {}) =>
    useMutation(
      (institutionData) =>
        axios
          .post(`${BASE_URL}/pessoa`, institutionData)
          .then((result) => result.data),
      options
    );