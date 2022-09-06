import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";

const Login = lazy(() => import("./Login"));
const Registro = lazy(() => import("./Registro"));
const CadastroAluno = lazy(()=> import ("./CadastroAluno"));
const CadastroProfessor = lazy(()=> import ("./CadastroProfessor"));
const CadastroEmpresa = lazy(()=> import ("./CadastroEmpresa"));

const Auth = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />


        <Route path= "/cadastro-aluno" element ={<CadastroAluno/>}/>
         <Route path= "/cadastro-empresa" element ={<CadastroEmpresa/>}/>
         <Route path= "/cadastro-professor" element ={<CadastroProfessor/>}/>
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default Auth;
