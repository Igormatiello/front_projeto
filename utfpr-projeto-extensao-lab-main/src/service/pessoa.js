import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListPessoa = (options = {}) =>
  useQuery(
    ["queryListPessoa"],
    () => axios.get(`${BASE_URL}/pessoa`).then((result) => result.data),
    options
  );

export const useMutationCreatePessoa = (options = {}) =>
  useMutation(
    (institutionData) =>
      axios
        .post(`${BASE_URL}/pessoa`, institutionData)
        .then((result) => result.data),
    options
  );

export const useMutationEditPessoa = (options = {}) =>
  useMutation(
    (pessoaData) =>
      axios
        .put(`${BASE_URL}/pessoa/${pessoaData.id}`, pessoaData)
        .then((result) => result.data),
    options
  );

export const useMutationDeletePessoa = (options = {}) =>
  useMutation(
    ({ pessoaId }) =>
      axios
        .delete(`${BASE_URL}/pessoa/${pessoaId}`)
        .then((result) => result.data),
    options
  );