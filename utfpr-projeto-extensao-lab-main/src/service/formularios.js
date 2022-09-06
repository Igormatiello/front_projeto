import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListFormularios = (options = {}) =>
  useQuery(
    ["queryListFormularios"],
    () => axios.get(`${BASE_URL}/formulario`).then((result) => result.data),
    options
  );
  
  export const useQueryListFormulariosById = (options = {}) =>
  useQuery(
    ["queryListFormulariosById"],
    ({id}) => axios.get(`${BASE_URL}/formulario/busca?id=${id}`).then((result) => result.data),
    options
  );

export const useMutationCreateFormularios = (options = {}) =>
  useMutation(
    (formularioData) =>
      axios
        .post(`${BASE_URL}/formulario`, formularioData)
        .then((result) => result.data),
    options
  );

export const useMutationEditFormularios = (options = {}) =>
  useMutation(
    (formularioData) =>
      axios
        .put(`${BASE_URL}/formulario/${formularioData.id}`, formularioData)
        .then((result) => result.data),
    options
  );

export const useMutationDeleteFormulario = (options = {}) =>
  useMutation(
    ({ formularioId }) =>
      axios
        .delete(`${BASE_URL}/formulario/${formularioId}`)
        .then((result) => result.data),
    options
  );

  export const useMutationEditMudaStatusFormulario = (options = {}) =>
  useMutation(
    (formularioData) =>
      axios
        .post(`${BASE_URL}/formulario${formularioData.id}/muda-status`, formularioData)
        .then((result) => result.data),
    options
  );

  export const useQueryFindFormularioByStatus = (options = {}) =>
  useQuery(
    ["queryFindFormularioByStatus"],
    ({status}) => axios.get(`${BASE_URL}/formulario/busca-status?status=${status}`).then((result) => result.data),
    options
  );