import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../styles/Home.module.css";
import Image from "next/image";

function CollapsibleExample() {
  return (
    <Navbar
      className={styles.navcolor}
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image width="80" height="80" src="/images/logo-white.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className={styles.larger} href="/booking">
              Book Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
