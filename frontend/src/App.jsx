import React from 'react';
import './App.css';
import './index.css'

import { Route, Routes } from 'react-router-dom';
import Course from './components/CourseDetail';
import MainPage from './components/mainPage';
import Registration from './components/registrationPage';
import WorkshopFeedback from './components/feedbackform';
import MainLayout from './MainLayout';
import Aifirst from './components/AiSection';

function App() {

  return (
    <>
    <Routes>
      
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<MainPage></MainPage>} />
        <Route path="/courses" element={<Course></Course>} />
        <Route path="/registration" element = {<Registration />} />
        <Route path="/feedback" element = {<WorkshopFeedback />} />
        <Route path="/Ai" element = {<Aifirst/>} />
        </Route>
     
      </Routes>
    </>
  );
}

export default App;
