import axios from "axios";

import { useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useMutationAuth = (options = {}) =>
  useMutation((authData) => axios.post(`${BASE_URL}/auth`, authData), options);



  export const useMutationCadastro = (options = {}) =>
  useMutation((cadastro) => axios.post(`${BASE_URL}/cadastro`, cadastro), options);


  
  export const useMutationDirecionarCadastro = (options = {}) =>
  useMutation((direction) => axios.post(`${BASE_URL}/cadastro`, direction), options);