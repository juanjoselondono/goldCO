import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import styles from './NavBar.module.css'
import Offcanvas from 'react-bootstrap/Offcanvas';


function NavBar() {
  const expand = "xl"
  return (
<>
        <Navbar variant='dark' key={expand} bg="dark" expand="false" className="mb-3">
          <Container fluid>
          <Navbar.Toggle className={styles.navbar_toggle} aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Brand href="#">E-commerce</Navbar.Brand>
            <Nav className={styles.navbar_nav}>
              <Nav.Link className={styles.navbar_item} href="#home">Home</Nav.Link>
              <Nav.Link href="#home">Products</Nav.Link>
              <Nav.Link href="#home">Info</Nav.Link>
            </Nav>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h1>Hello there</h1>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <svg className={styles.cart} style ={{color:'white', fontSize:'20px'}}xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </Container>
        </Navbar>
    </>
  );
}

export default NavBar;