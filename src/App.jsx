import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ReduxProvider from './store/ReduxProvider.jsx';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import ProtectedRoute from './components/auth/ProtectedRoute.jsx';
import CheckEmailPage from './pages/CheckEmailPage.jsx';
import ActivateAccountPage from './pages/ActivateAccountPage.jsx';
import ForgotPassword from './components/auth/ForgotPassword.jsx';
import ResetPasswordConfirm from './components/auth/ResetPasswordConfirm.jsx';
import HomePage from './pages/HomePage.jsx';
import './index.css';

function App() {
  return (
    <ReduxProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/check-email" element={<CheckEmailPage />} />
        <Route path="/activate/:uid/:token" element={<ActivateAccountPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />} />

        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          
        </Route>
        
        <Route path="/" element={<HomePage />} />
        {/* Redirect to login if no route matches */}
        
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </ReduxProvider>
  );
}

export default App;
