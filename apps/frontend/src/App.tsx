import React from 'react';
import {  Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import TeacherNavbar from './components/TeacherNavbar';
import Footer from './components/Footer';
import Aitagging from "./pages/Aitaggingpage"
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import CourseDetails from './pages/SingleCourse';
import TeacherHome from './pages/TeacherHome';
import MyCourses from './pages/MyCourses.tsx';
import AddCourse from './pages/AddCourse.tsx';
import CourseDetailsPage from './pages/courseDetailsPage.tsx';
import StudentProfile from './pages/StudentProfile'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/Context.tsx';  // Make sure this path is correct
import ProfileTeacher from './pages/ProfileTeacher.tsx';
import { Lobby } from './pages/VCLobby.tsx';
import CourseProgress from './pages/CourseProgress.tsx';
import CloudinaryVideoGallery from './pages/AllVideos.tsx';
import Uploader from './pages/UploadVideo.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

const App: React.FC = () => {
  const location = useLocation();
  const { role } = useAuth(); // Get role from context
  const hideNavbarOnRoutes = ['/login'];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);

  return (
    <>
      <Toaster position="top-right" />

      {/* Conditionally render Navbar */}
      {!shouldHideNavbar && (
        role === 'teacher' ? <TeacherNavbar /> : <Navbar />
      )}

      <div className={shouldHideNavbar ? '' : 'pt-16'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<ProtectedRoute>
        <Courses />
      </ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/course/:courseId" element={<ProtectedRoute><CourseDetails /></ProtectedRoute>} />
          <Route path="/addCourse" element={<ProtectedRoute><AddCourse /></ProtectedRoute>} />
          <Route path="/myCourses" element={<ProtectedRoute><MyCourses/></ProtectedRoute>} />
          <Route path="/myCourses/:courseId" element={<ProtectedRoute><CourseDetailsPage /></ProtectedRoute>} />
          <Route path="/profile-teacher" element={<ProtectedRoute><ProfileTeacher/></ProtectedRoute>} />
          <Route path="/profile-student" element={<ProtectedRoute><StudentProfile/></ProtectedRoute>} />
          <Route path="/teacherhome" element={<ProtectedRoute><TeacherHome/></ProtectedRoute>} />
          <Route path="/uploads" element={<ProtectedRoute><Uploader/></ProtectedRoute>} />
          <Route path="/getvideos" element={<ProtectedRoute><CloudinaryVideoGallery/></ProtectedRoute>} />
          <Route path="/lobby" element={<ProtectedRoute><Lobby/></ProtectedRoute>} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/myCourses" element={<MyCourses/>} />
          <Route path="/myCourses/:courseId" element={<CourseDetailsPage />} />
          <Route path="/profile-teacher" element={<ProfileTeacher/>} />
           <Route path="/profile" element={<StudentProfile/>} />
          <Route path="/teacherhome" element={<TeacherHome/>} />
          <Route path="/profile/:courseId" element={<CourseProgress />} />
            <Route path="/aitagging" element={<Aitagging />} />
          <Route path="/profile-student" element={<StudentProfile/>} />
          <Route path="/teacherhome" element={<TeacherHome/>} />
          <Route path="/uploads" element={<Uploader/>} />
          <Route path="/getvideos" element={<CloudinaryVideoGallery/>} />
          <Route path="/lobby" element={<Lobby/>} />
        </Routes>
      </div>
      {!shouldHideNavbar && <Footer />}
    </>
  );
};

export default App;
