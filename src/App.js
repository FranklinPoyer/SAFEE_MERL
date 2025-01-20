import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import LoginPage2 from './Login2';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import TrainingYouths from './TrainingYouths';
import FinancialAccess from './FinancialAccess';
import EmploymentOutcomes from './EmploymentOutcomes';
import ResourcesImpact from './ResourcesImpact';
import NotFoundPage from './404';
import AdminDashboard from './AdminDashboard';
import CreateUser from './admin/CreateUser';
import ManageUsers from './admin/ManageUsers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="login2" element={<LoginPage2/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/training" element={<TrainingYouths />} />
        <Route path="/financial" element={<FinancialAccess />} />
        <Route path="/employment" element={<EmploymentOutcomes />} />
        <Route path="/resources" element={<ResourcesImpact />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/createuser" element={<CreateUser />} />
        <Route path="/admin/manageusers" element={<ManageUsers />} />    
      </Routes>
    </Router>
  );
}

export default App;
