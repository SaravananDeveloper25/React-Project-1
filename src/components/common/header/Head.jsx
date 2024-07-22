import React, { useState, useEffect } from 'react';
import logo from '../../../images/logo.png'; // Adjust the path accordingly
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-modal';
import Courses from '../Courses';
import { Link, useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const Head = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
            className="nav mb-3"
            style={{
              backgroundColor: nav ? '#121481' : 'transparent',
              position: 'fixed',
              top: 0,
              width: '100%',
              zIndex: 3,
              height: '100px',
            }}
          >
            <Container>
              <Navbar.Brand className="brand">
                <Link to={'/'}>
                  <img src={logo} alt="logo" className="logo" />
                </Link>
              </Navbar.Brand>
              <Nav.Link
                onClick={() => {
                  setModalIsOpen(true);
                }}
                className="courseB"
                style={{ color: 'white', border: '2px solid white', padding: '7px', borderRadius: '5px' }}
              >
                <i className="fa-solid fa-table" style={{ marginRight: '2px' }}></i>Course
              </Nav.Link>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => setOffcanvasShow(true)} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                show={offcanvasShow}
                onHide={() => setOffcanvasShow(false)}
                className="offcanvas-custom" // Apply custom class
              >
                <Offcanvas.Header closeButton className="offcanvas-header-custom">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offcanvas-body-custom">
                  <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Form className="d-flex mb-2">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                        onKeyPress={handleKeyPress}
                        id="search"
                      />
                      <Button onClick={executeSearch} variant="outline-danger" style={{ marginTop: '5px' }}>
                        Search
                      </Button>
                    </Form>
                  </Nav>
                  <Nav>
                    <Nav.Link onClick={() => handleLinkClick('/allcourses')}>All Courses</Nav.Link>
                    <Nav.Link onClick={() => handleLinkClick('/studentzone')}>Student Zone</Nav.Link>
                    <Nav.Link>
                      <Link to="/review" style={{ color: 'black', textDecoration: 'none' }} onClick={() => handleLinkClick('/review')}>
                        Review
                      </Link>
                    </Nav.Link>
                    <a href="https://www.getintech.in/blog/" style={{ color: 'black', textDecoration: 'none', margin: '8px' }} target="_blank" rel="noopener noreferrer">
                      Blog
                    </a>
                    <Nav.Link style={{ color: 'black' }} onClick={() => handleLinkClick('/contact')}>
                      Contact
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>

      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className={'pop'}>
          <Container>
            <div className="up">
              <p className="p">
                <i className="fa-solid fa-x" style={{ margin: '5px' }} onClick={() => setModalIsOpen(false)}></i>
              </p>
              <h2>Courses</h2>
              <Courses setModalIsOpen={setModalIsOpen} />
            </div>
          </Container>
        </Modal>
      </div>
    </>
  );
};

export default Head;
