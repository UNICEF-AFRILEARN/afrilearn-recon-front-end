/* eslint-disable @next/next/no-img-element */
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import styles from "./mainNavigation.module.css";
import AppButton from "../../widgets/buttons/AppButton";

const Navigation = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      collapseOnSelect
      style={{ backgroundColor: "#FDFDFD !important" }}
    >
      <Container>
        <Navbar.Brand><Link passHref href="/"><img src="https://myafrilearn.com/static/media/logonew.4424f4df.png" alt='logo' className="brand-logo"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
          <div className="our-story-frag">
          Our Story 
          </div>
            {/* <span className="close-mobile-nav">x</span> */}
              
              <div className="inner-btn-nav-bar">
              <Link passHref href="/login" className="btn-log-in-mobile">
                  <AppButton title="LOG IN" className={styles.loginButton} />
                </Link>
                <Link passHref href="/register" className="btn-log-in-mobile">
                  <AppButton title="SIGN UP" secondary />
                </Link>

              </div>
               
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Action</NavDropdown.Item>
              <NavDropdown.Item href="/">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
