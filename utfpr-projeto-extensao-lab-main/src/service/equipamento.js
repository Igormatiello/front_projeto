import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListEquipamento = (options = {}) =>
  useQuery(
    ["queryListEquipamento"],
    () => axios.get(`${BASE_URL}/equipamento`).then((result) => result.data),
    options
  );

export const useMutationCreateEquipamento = (options = {}) =>
  useMutation(
    (equipamentoData) =>
      axios
        .post(`${BASE_URL}/equipamento`, equipamentoData)
        .then((result) => result.data),
    options
  );

export const useMutationEditEquipamento = (options = {}) =>
  useMutation(
    (equipamentoData) =>
      axios
        .put(`${BASE_URL}/equipamento/${equipamentoData.id}`, equipamentoData)
        .then((result) => result.data),
    options
  );

export const useMutationDeleteEquipamento = (options = {}) =>
  useMutation(
    ({ equipamentoId }) =>
      axios
        .delete(`${BASE_URL}/equipamento/${equipamentoId}`)
        .then((result) => result.data),
    options
  );