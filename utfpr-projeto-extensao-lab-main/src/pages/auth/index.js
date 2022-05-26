import React, { Suspense, lazy } from "react";

import { Routes, Route } from "react-router-dom";

import LoadingBox from "components/LoadingBox";

const Login = lazy(() => import("./Login"));
const Cadastro = lazy(() => import("./Cadastro"));

const Auth = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Auth;
