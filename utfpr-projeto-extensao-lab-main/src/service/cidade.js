import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListCidade = (options = {}) =>
  useQuery(
    ["queryListCidade"],
    () => axios.get(`${BASE_URL}/cidade`).then((result) => result.data),
    options
  );

export const useMutationCreateCidade = (options = {}) =>
  useMutation(
    (cidadeData) =>
      axios
        .post(`${BASE_URL}/cidade`, cidadeData)
        .then((result) => result.data),
    options
  );

export const useMutationEditCidade = (options = {}) =>
  useMutation(
    (cidadeData) =>
      axios
        .put(`${BASE_URL}/cidade/${cidadeData.id}`, cidadeData)
        .then((result) => result.data),
    options
  );

export const useMutationDeleteCidade = (options = {}) =>
  useMutation(
    ({ cidadeId }) =>
      axios
        .delete(`${BASE_URL}/cidade/${cidadeId}`)
        .then((result) => result.data),
    options
  );