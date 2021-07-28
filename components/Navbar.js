import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 120px;
  background: rgb(221,230,213,0.9);
  color: #667b68;
  font-size: 24px;
  border-bottom: solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  
   /* position: sticky; 
  top: 0; */}
`;


const StyledLink = styled.a`
  padding: 0rem 2rem;
  
  
  a:hover {
    text-decoration: underline;
    opacity: .3;
    
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLink><a>Matt Playne</a></StyledLink>
        </Link>
      </div>
     
      <div>
        <Link href='/' passHref>
          <StyledLink><a>Music</a></StyledLink>
        </Link>
        <Link href='/' passHref>
          <StyledLink><a>Booking</a></StyledLink>
        </Link>
        <Link href='/' passHref>
          <StyledLink><a>Lessons</a></StyledLink>
        </Link>

        
        
        
      </div>
    </Nav>
  );
};

export default Navbar;

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
