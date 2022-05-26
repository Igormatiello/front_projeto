import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListSolicitacaoCadastro = (options = {}) =>
  useQuery(
    ["queryListSolicitacaoCadastro"],
    () => axios.get(`${BASE_URL}/solicitacao-cadastro`).then((result) => result.data),
    options
  );

export const useMutationCreateSolicitacaoCadastro = (options = {}) =>
  useMutation(
    (solicitacaoCadastroData) =>
      axios
        .post(`${BASE_URL}/solicitacao-cadastro`, solicitacaoCadastroData)
        .then((result) => result.data),
    options
  );

export const useMutationEditSolicitacaoCadastro = (options = {}) =>
  useMutation(
    (solicitacaoCadastroData) =>
      axios
        .put(`${BASE_URL}/solicitacao-cadastro/${solicitacaoCadastroData.id}`, solicitacaoCadastroData)
        .then((result) => result.data),
    options
  );

export const useMutationDeleteSolicitacaoCadastro = (options = {}) =>
  useMutation(
    ({ solicitacaoCadastroId }) =>
      axios
        .delete(`${BASE_URL}/solicitacao-cadastro/${solicitacaoCadastroId}`)
        .then((result) => result.data),
    options
  );