import React, { useState } from 'react';
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

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setOffcanvasShow(false);
    navigate(path);
  };

  //for search pages
  const searchRoutes = {
    'home': '/',
    'java': '/courses/java',
    'python': '/courses/python',
    'csharp': '/courses/Csharp',
    'c#': '/courses/Csharp',
    'review': '/review'
    // Add more mappings as needed
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const executeSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const route = searchRoutes[lowerCaseQuery];
    if (route) {
      navigate(route);
      setOffcanvasShow(false);
    } else {
      navigate('/notfound');
      setOffcanvasShow(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      executeSearch();
    }
  };


  return (
    <>
      <header>
        {['sm'].map((expand) => (
          <Navbar key={expand} expand={expand} className="nav mb-3" style={{ backgroundColor: "#121481" }} fixed="top">
            <Container>
              <Navbar.Brand className='brand'>
                <Link to={'/'}>
                  <img src={logo} alt="logo" className='logo' />
                </Link>
              </Navbar.Brand>
              <Nav.Link
                onClick={() => { setModalIsOpen(true); }}
                className='courseB'
                style={{ color: 'white', border: "2px solid white", padding: '7px', borderRadius: "5px" }}
              >
                <i className="fa-solid fa-table" style={{ marginRight: "2px" }}></i>Course
              </Nav.Link>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => setOffcanvasShow(true)} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                show={offcanvasShow}
                onHide={() => setOffcanvasShow(false)}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ background: "#121481" }}>
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
                      />
                      <Button onClick={executeSearch} variant="outline-danger">Search</Button>
                    </Form>
                  </Nav>
                  <Nav>
                    <Nav.Link style={{ color: "white" }} onClick={() => handleLinkClick('/')}>All Courses</Nav.Link>
                    <Nav.Link style={{ color: "white" }} onClick={() => handleLinkClick('/corporate-training')}>Corporate Training</Nav.Link>
                    <Nav.Link>
                      <Link to='/review' style={{ color: "white", textDecoration: 'none' }} onClick={() => handleLinkClick('/review')}>Review</Link>
                    </Nav.Link>
                    <Nav.Link style={{ color: "white" }} onClick={() => handleLinkClick('/blog')}>Blog</Nav.Link>
                    <Nav.Link style={{ color: "white" }} onClick={() => handleLinkClick('/contact')}>Contact</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>

      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={() => { setModalIsOpen(false); }} className={'pop'}>
          <Container>
            <div className="up">
              <p className='p'><i className="fa-solid fa-x" style={{ margin: '5px' }} onClick={() => setModalIsOpen(false)}></i></p>
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
