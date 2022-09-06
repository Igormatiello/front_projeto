import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListServicos = (options = {}) =>
  useQuery(
    ["queryListServicos"],
    () => axios.get(`${BASE_URL}/servico`).then((result) => result.data),
    options
  );

export const useMutationCreateServico = (options = {}) =>
  useMutation(
    (servicoData) =>
      axios
        .post(`${BASE_URL}/servico`, servicoData)
        .then((result) => result.data),
    options
  );

export const useMutationEditServico = (options = {}) =>
  useMutation(
    (servicoData) =>
      axios
        .put(`${BASE_URL}/servico/${servicoData.id}`, servicoData)
        .then((result) => result.data),
    options
  );

export const useMutationDeletenServico = (options = {}) =>
  useMutation(
    ({ servicoId }) =>
      axios
        .delete(`${BASE_URL}/servico/${servicoId}`)
        .then((result) => result.data),
    options
  );