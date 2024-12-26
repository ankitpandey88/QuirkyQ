
// import React from 'react'
// import Login from './components/login/Login'
// import LandingPage from './components/landingPage/LandingPage'
// import OnboardingForm from './components/onboarding/Onboarding'


// const App = () => {
//   return (
//   <div>
   
//     <LandingPage/>
//     <OnboardingForm/>
   
//   </div>
  
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import OnboardingForm from './components/onboarding/Onboarding';
import Login from './components/login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for LandingPage */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        
        
        <Route path="/onboarding" element={<OnboardingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
