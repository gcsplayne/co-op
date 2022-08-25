import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import styles from "../components/navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function BasicExample() {
  return (
    <Container>
      <Navbar className="" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Matt Playne</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className={styles.border} id="basic-navbar-nav">
            <Nav className={styles.center}>
              <Nav.Link className={styles.underline} href="#home">
                About
              </Nav.Link>
              <Nav.Link className={styles.underline} href="/booking">
                Booking
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default BasicExample;

// const Navbar = () => {
//   return (
//     <nav>
//       <Link href="/"><a className={'logolink'}><div className='logo'>
//           <Image src="/images/logo2.png" width={300} height={300} alt="logo"></Image>
//         </div></a>
//         </Link>

//         <Link href="/"><a>Music</a></Link>
//         <Link href="/booking"><a>Booking</a></Link>
//         <Link href="/lessons"><a>Lessons</a></Link>

//     </nav>
//   );
// };

// export default Navbar;

// import styled from 'styled-components'
// import Link from 'next/link';

// const Nav = styled.nav`
//   max-width: auto;
//   margin: 0 0 0 auto;
//   padding: 0.4em;
//   justify-content: flex-start;
//   border: solid red;
// `;

// const Ul = styled.ul`
//   display: flex;
//   padding: 0;
// `

// const Li = styled.li`
//   display: block;
//   padding: 0.4em;
// `

// // Note that styled-components lets you use SCSS syntax
// const A = styled.a`
//   &:hover {
//     color: blue;
//   }
// `

// const NavBar = () => (
//   <Nav>
//     <Ul>
//       <Li>
//         <Link href="/" passHref>
//           <A>Music</A>
//         </Link>
//       </Li>
//       <Li>
//         <Link href="/blog" passHref>
//           <A>About</A>
//         </Link>
//       </Li>
//       <Li>
//         <Link href="/blog" passHref>
//           <A>Booking</A>
//         </Link>
//       </Li>
//       <Li>
//         <Link href="/blog" passHref>
//           <A>Lessons</A>
//         </Link>
//       </Li>
//     </Ul>
//   </Nav>
// )

// export default NavBar;

// // const Nav = styled.nav`
// // background: #000;
// // height:180px;
// // width: auto;
// // opacity: 90%;
// // color: blue;
// // display: flex;
// // justify-content: space-between;
// // align-items: center;
// // `;

// // const StyledLink = styled.a`
// // padding: 0rem 2rem;
// // `;

// // const Navbar = () => {
// //     return (
// //         <Nav>
// //           <div>
// //              <Link href='/' passHref>
// //                  <StyledLink>Matt Playne</StyledLink>
// //                  </Link>
// //           </div>
// //           <div>
// //              <Link href='/' passHref>
// //                  <StyledLink>Music</StyledLink>
// //                  </Link>
// //           </div>
// //           <div>
// //              <Link href='/' passHref>
// //                  <StyledLink>About</StyledLink>
// //                  </Link>
// //           </div>
// //         </Nav>
// //     );
// // };

// // export default Navbar;
