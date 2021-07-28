import styled from 'styled-components'

const AboutSection = styled.div`
background: rgb(221,230,213,0.5);
color: #667b68;
opacity: 90%;
font-weight: 500;
height: 10px;
width: 100%;
padding: 5rem;
font-size: 24px;
display: flex;
justify-content:center;
align-items: center;

`;
const SignBlurb = styled.div`
display: flex;
justify-content:center;
align-items: center;
width: 100%;
`;
const About = () => {
    return (
       <AboutSection>
           <p>Book your wedding singer or private event entertainment today<br /><br /><SignBlurb> (Sign-up for free music and updates)</SignBlurb></p>
       </AboutSection>
    )
}

export default About
