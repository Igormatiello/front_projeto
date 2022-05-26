import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListVinculos = (options = {}) =>
  useQuery(
    ["queryListVinculos"],
    () => axios.get(`${BASE_URL}/vinculo`).then((result) => result.data),
    options
  );

export const useMutationCreateVinculo = (options = {}) =>
  useMutation(
    (vinculoData) =>
      axios
        .post(`${BASE_URL}/vinculo`, vinculoData)
        .then((result) => result.data),
    options
  );

export const useMutationEditVinculo = (options = {}) =>
  useMutation(
    (vinculoData) =>
      axios
        .put(`${BASE_URL}/vinculo/${vinculoData.id}`, vinculoData)
        .then((result) => result.data),
    options
  );

export const useMutationDeleteVinculo = (options = {}) =>
  useMutation(
    ({ vinculoId }) =>
      axios
        .delete(`${BASE_URL}/vinculo/${vinculoId}`)
        .then((result) => result.data),
    options
  );