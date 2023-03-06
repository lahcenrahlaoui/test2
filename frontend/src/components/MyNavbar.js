import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const MyNavbar = () => {
      const { logout } = useLogout();
      const { user } = useAuthContext();

      const handleClick = () => {
          logout();
      };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">LANGUAGES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
          
            <Nav.Link><Link className="links" to="/">Home </Link></Nav.Link>
            <Nav.Link><Link className="links" to="/teachers">Teacher</Link></Nav.Link>
          </Nav>
          <Nav>

          {user && (<Nav.Link><Link className="links" to="/login">{user.email.split('@')[0]}</Link></Nav.Link>)}
          {user && (<Nav.Link><Button size="sm" className="sm-button"  variant="secondary" onClick={handleClick}>Log out</Button></Nav.Link>)}


          {!user && (<Nav.Link><Link className="links" to="/login">Login</Link></Nav.Link>)}
              
            {!user && (<Nav.Link><Link className="links" to="/signup">SignUp</Link></Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;



