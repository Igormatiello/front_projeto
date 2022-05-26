import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";
import Navbar from "components/Navbar";

import { Flex } from "@chakra-ui/react";

import "service/axiosConfig";


const Dashboard = lazy(() => import("./Dashboard"));
const Institutions = lazy(() => import("./Institutions"));
const Cidade= lazy( ()=>import ("./Cidades") );
const Equipamento=lazy(()=>import  ("./Equipamento"));
const Pessoas=lazy (( ) =>import ("./Pessoa")  );
const ProgEnsino= lazy(()=>import ("./ProgEnsino"));
const Perfil=lazy(()=> import("./Perfil") );
const SolicitaCadastro= lazy(()=>import ("./SolicitacaoCadastro") );

const Admin = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <Flex minHeight="100vh" direction="column">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
          <Route path="/instituicoes" element={<Institutions />} />
          <Route path="/cidade" element={<Cidade/>} /> 
          <Route path="/equipamento" element={<Equipamento/>} />
          <Route path="/pesssoas" element={<Pessoas/>}/>
          <Route path= "/prgEnsino" element={<ProgEnsino/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/solicitacao-cadastro" element={<SolicitaCadastro/>}/>
          
          
        </Routes>
      </Flex>
    </Suspense>
  );
};

export default Admin;
