import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const StartPage = lazy(() => import('pages/StartPage/StartPage'));
const TaskProPage = lazy(() => import('pages/TaskProPage/TaskProPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
        <Route element={<PublicRoute />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="taskpro" element={<TaskProPage />} />
        </Route>
      <Route path="*" element={<NotFoundPage/> } />
    </Routes>
  )
}


export default AppRoutes
