import React, { useState, useEffect, Suspense, lazy  } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomeHead from './components/home/HomeHead';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import StudentZone from './components/StudentZone/StudentZone';
import './App.css';
const Home = lazy(() => import('./components/home/Home'));
const Java = lazy(() => import('./components/Courses/java/Java'));
const Python = lazy(() => import('./components/Courses/python/python'));
const Csharp = lazy(() => import('./components/Courses/Csharp/Csharp'));
const StudentReview = lazy(() => import('./components/Review/StudentReview'));
const AllCoursesPage = lazy(() => import('./components/common/AllCoursesPage'));

const Contact = lazy(() => import('./components/contact/Contact'));
const Footer = lazy(() => import('./components/common/footer/Footer'));
const NotFound = lazy(() => import('./components/common/NotFound'));

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
  
    const debounceScroll = debounce(handleScroll, 100); // Debounce with 100ms delay
    window.addEventListener('scroll', debounceScroll);
  
    return () => {
      window.removeEventListener('scroll', debounceScroll);
    };
  }, []);
  
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  // Empty dependency array ensures this effect only runs once after initial render
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>

      {location.pathname !== '/allcourse'  &&  <HomeHead />} {/* Render Head only on the home route */}
      
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
      {/* <Footer /> */}
      </Suspense>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
