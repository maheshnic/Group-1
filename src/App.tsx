
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobs from './Pages/FindJobs';
import PostJobPage from './Pages/PostJobPage';
import PostedJobPage from './Pages/PostedJobPage';
import HomePage from './Pages/HomePage';
import DefaultLayout from './Layout/DefaultLayout';
import FindTalentPage from './Pages/FindTalentPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import JobHistoryPage from './Pages/JobHistoryPage';
import CandidateLayout from './Layout/CandidateLayout';
import CandidateLandingPage from './Pages/CandidateLandingPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import CompanyPage from './Pages/CompanyPage';
import Register from './SignUpLogin/Register';
import Login from './SignUpLogin/Login';
import ProfilePage from './Pages/ProfilePage';
import FAQsPage from './Pages/FAQPage';
import SettingPage from './Pages/SettingPage';
import DepartmentLayout from './Layout/DepartmentLayout';
import DepartmentLandingPage from './Pages/DepartmentLandingPage';
import TermsPage from './Pages/TermsPage';
import ContactPage from './Pages/ContactPage';
import About from './About/About';


function App() {
  const theme = createTheme({
    colors: {
      deepBlue: ['#eef3ff', '#dce4f5', '#b9c7e2', '#94a8d0', '#748dc1', '#5f7cb8', '#5474b4', '#44639f', '#39588f', '#2d4b81'],
      blue: ['#eef3ff', '#dee2f2', '#bdc2de', '#98a0ca', '#7a84ba', '#6672b0', '#5c68ac', '#4c5897', '#424e88', '#364379'],
    },
    fontFamily: 'poppins, sans-serif',
  });

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Pages with default layout */}
          <Route
            path="/"
            element={<DefaultLayout><HomePage/></DefaultLayout>}
          />
         <Route path="/find-jobs" element={<DefaultLayout><FindJobs /></DefaultLayout>} />
           <Route path="/post-job" element={<DefaultLayout><PostJobPage /></DefaultLayout>} />
           <Route path="/posted-job" element={<DefaultLayout><PostedJobPage /></DefaultLayout>} />
           <Route path="/find-talent" element={<DefaultLayout><FindTalentPage /></DefaultLayout>} />
           <Route path="/jobs" element={<DefaultLayout><JobDescPage /></DefaultLayout>} />
           <Route path="/apply-job" element={<DefaultLayout><ApplyJobPage /></DefaultLayout>} />
           <Route path="/job-history" element={<DefaultLayout><JobHistoryPage /></DefaultLayout>} />
           <Route path="/talent-profile" element={<DefaultLayout><TalentProfilePage /></DefaultLayout>} />
           <Route path="/company" element={<DefaultLayout><CompanyPage /></DefaultLayout>} />
           <Route path="/register" element={<DefaultLayout><Register /></DefaultLayout>} />
           <Route path="/login" element={<DefaultLayout><Login /></DefaultLayout>} />
         <Route path="/profile" element={<DefaultLayout><ProfilePage /></DefaultLayout>} />
         <Route path="/aboutus" element={<DefaultLayout><About/></DefaultLayout>} />
         <Route path="/faqs" element={<DefaultLayout><FAQsPage /></DefaultLayout>} />
         <Route path="/terms" element={<DefaultLayout><TermsPage /></DefaultLayout>} />
         <Route path="/contactus" element={<DefaultLayout><ContactPage /></DefaultLayout>} />
           <Route path="/setting" element={<DefaultLayout><SettingPage /></DefaultLayout>} />

          {/* Candidate dashboard with custom layout */}
          <Route
  path="/Candidate-landing"
  element={
    <CandidateLayout>
      <CandidateLandingPage />
    </CandidateLayout>
  }
/>

 <Route
  path="/Department-landing"
  element={
    <DepartmentLayout>
      <DepartmentLandingPage />
    </DepartmentLayout>
  }
/>

        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
