import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListLancamentos = (options = {}) =>
  useQuery(
    ["queryListLancamentos"],
    () => axios.get(`${BASE_URL}/lancamento-financeiro`).then((result) => result.data),
    options
  );

export const useMutationCreateLancamento = (options = {}) =>
  useMutation(
    (lancamentoData) =>
      axios
        .post(`${BASE_URL}/lancamento-financeiro`, lancamentoData)
        .then((result) => result.data),
    options
  );

export const useMutationEditLancamento = (options = {}) =>
  useMutation(
    (lancamentoData) =>
      axios
        .put(`${BASE_URL}/lancamento-financeiro/${lancamentoData.id}`, lancamentoData)
        .then((result) => result.data),
    options
  );

export const useMutationDeleteLancamento = (options = {}) =>
  useMutation(
    ({ lancamentoId }) =>
      axios
        .delete(`${BASE_URL}/lancamento-financeiro/${lancamentoId}`)
        .then((result) => result.data),
    options
  );