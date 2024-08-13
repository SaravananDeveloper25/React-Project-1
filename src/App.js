import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Head from './components/common/header/Head';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css';
import Home from './components/home/Home';
import Java from './components/Courses/java/Java';
import Python from './components/Courses/python/python';
import Csharp from './components/Courses/Csharp/Csharp';
import StudentReview from './components/Review/StudentReview';
import Footer from './components/common/footer/Footer';
import NotFound from './components/common/NotFound';
import StudentZone from './components/StudentZone/StudentZone';
import AllCoursesPage from './components/common/AllCoursesPage';
import Contact from './components/contact/Contact';

const AppContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect only runs once after initial render
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  return (
    <>
      {location.pathname !== '/'  && <Head />} {/* Render Head only on the home route */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses'>
          <Route path='/courses/java' element={<Java />} />
          <Route path='/courses/python' element={<Python />} />
          <Route path='/courses/Csharp' element={<Csharp />} />
        </Route>
        <Route path='/allcourses' element={<AllCoursesPage />} />
        <Route path='/studentzone' element={<StudentZone />} />
        <Route path='/review' element={<StudentReview />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <button
        id="mybutton"
        onClick={scrollToTop}
        style={{ display: isVisible ? 'block' : 'none' }}>
        <i className="fa-solid fa-angle-up"></i>
      </button>
      <Footer />
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
