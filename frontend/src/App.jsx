import React from 'react';
import './App.css';
import './index.css'

import { Route, Routes } from 'react-router-dom';
import Course from './components/courses/courseList';
import MainPage from './components/mainPage';
import Registration from './components/registrationPage';
import WorkshopFeedback from './components/feedbackform';
import Navbar from './components/Navbar';
import MainLayout from './MainLayout';

function App() {

  return (
    <>
    <Routes>
      
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<MainPage></MainPage>} />
        <Route path="/courses" element={<Course></Course>} />
        <Route path="/registration" element = {<Registration />} />
        <Route path="/feedback" element = {<WorkshopFeedback />} />
        </Route>
     
      </Routes>
    </>
  );
}

export default App;
