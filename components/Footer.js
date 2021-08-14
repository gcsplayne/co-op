import styled from 'styled-components'

const FooterSection = styled.div`
background: rgb(221,230,213,0.9);
color: #667b68;
height: 60px;
display: flex;
justify-content:center;
align-items: center;
margin: 10px;
`;

const Footer = () => {
    return (
        <FooterSection>
            <p>Website Created By Matt Playne</p>
        </FooterSection>
    )
}

export default Footer
