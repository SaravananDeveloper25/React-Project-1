import React, { useState, useEffect } from 'react';
import logo from '../../../images/logo.png'; // Adjust the path accordingly
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Modal} from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import Modal from 'react-modal';
import Courses from '../Courses';
import { Link, useNavigate } from 'react-router-dom';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

// Modal.setAppElement('#root');

const Head = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClose = () => setModalIsOpen(false);
  const handleShow = () => setModalIsOpen(true);
  const [offcanvasShow, setOffcanvasShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setOffcanvasShow(false);
    navigate(path);
  };

  const searchRoutes = {
    home: '/',
    java: '/courses/java',
    python: '/courses/python',
    csharp: '/courses/Csharp',
    'c#': '/courses/Csharp',
    review: '/review',
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const cleanSearchQuery = (query) => {
    return query.trim().toLowerCase();
  };

  const executeSearch = () => {
    const lowerCaseQuery = cleanSearchQuery(searchQuery);

    const queryWords = lowerCaseQuery.split(' ');

    let matchedRoute = null;
    for (let i = queryWords.length; i > 0; i--) {
      for (let j = 0; j <= queryWords.length - i; j++) {
        const subQuery = queryWords.slice(j, j + i).join(' ');
        if (searchRoutes[subQuery]) {
          matchedRoute = searchRoutes[subQuery];
          break;
        }
      }
      if (matchedRoute) break;
    }

    if (matchedRoute) {
      navigate(matchedRoute);
    } else {
      navigate('/notfound');
    }

    setOffcanvasShow(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      executeSearch();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        {['sm'].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="nav mb-3 header"
            style={{
              backgroundColor: nav ? '#fff' : 'transparent',
            }}
          >
            <Container>
              <Navbar.Brand className="brand">
                <Link to={'/'}>
                  <img src={logo} alt="logo" className="logo" />
                </Link>
              </Navbar.Brand>
              <Nav.Link
                onClick={handleShow}
                className={nav?"courseC":"courseB"}
              >
                <p><SchoolOutlinedIcon></SchoolOutlinedIcon></p><p>Course</p>
              </Nav.Link>
              <button aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => setOffcanvasShow(true)} className='menu-btn' >
                <div className='menu-button'></div>
                <div className='menu-button'></div>
                <div className='menu-button'></div>
                </button> 
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                show={offcanvasShow}
                onHide={() => setOffcanvasShow(false)}
                className="offcanvas-custom" // Apply custom class
              >
                <Offcanvas.Header closeButton className="offcanvas-header-custom">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}><h1 style={{font:'36px',margin:0}}>Menu</h1></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-body-custom">
                  <Nav className="search-nav">
                    <Form className="search-form mb-2">
                      <div className={nav?'gray-border':'search'}>
                        <input type="search" name="" id="" placeholder='search' />
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>

                      </div>
                        
                    </Form>
                  </Nav>
                  <Nav>
                  <Nav.Link className='offcanva-link home' onClick={() => handleLinkClick('/')}>Home<div className='line1'></div></Nav.Link>
                    <Nav.Link className='offcanva-link' onClick={() => handleLinkClick('/allcourses')}>All Courses<div className='line1'></div></Nav.Link>
                    <Nav.Link className='offcanva-link' onClick={() => handleLinkClick('/studentzone')}>Student Zone<div className='line1'></div></Nav.Link>
                    <Nav.Link className='offcanva-link' onClick={() => handleLinkClick('/review')}>
                        Review<div className='line1'></div>
                    </Nav.Link>
                    <a href="https://www.getintech.in/blog/" id='offcanva-link' target="_blank" rel="noopener noreferrer">
                      Blog<div className='line1'></div>
                    </a>
                    <Nav.Link className='offcanva-link'onClick={() => handleLinkClick('/contact')}>
                      Contact<div className='line1'></div>
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>

      <div>
        <Modal show={modalIsOpen} onHide={handleClose}>
            <div className='courses-menu-head'>
              <div style={{"flex":1}}></div>
              <div className='course-menu-heading'>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h1>Courses</h1>
                <div style={{height:'5px',width:'104px',background:"#FF71CD",borderRadius:'10px'}}></div>
              </div>
              <i className="fa-solid fa-x"  onClick={handleClose} style={{"fontSize":"30px"}}></i>
              </div>

            </div>
            <div className='course-menu-bodu'>
                <Courses setModalIsOpen={setModalIsOpen}/>
              </div>
        </Modal>
        
      </div>
    </>
  );
};

export default Head;
