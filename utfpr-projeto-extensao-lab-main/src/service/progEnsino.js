import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListProgEnsino = (options = {}) =>
  useQuery(
    ["queryListProgEnsino"],
    () => axios.get(`${BASE_URL}/programa-ensino`).then((result) => result.data),
    options
  );

export const useMutationCreateProgEnsino = (options = {}) =>
  useMutation(
    (progEnsinoData) =>
      axios
        .post(`${BASE_URL}/programa-ensino`, progEnsinoData)
        .then((result) => result.data),
    options
  );

export const useMutationEditProgEnsino = (options = {}) =>
  useMutation(
    (progEnsinoData) =>
      axios
        .put(`${BASE_URL}/programa-ensino/${progEnsinoData.id}`, progEnsinoData)
        .then((result) => result.data),
    options
  );

export const useMutationDeleteProgEnsino = (options = {}) =>
  useMutation(
    ({ progEnsinoId }) =>
      axios
        .delete(`${BASE_URL}/programa-ensino/${progEnsinoId}`)
        .then((result) => result.data),
    options
  );