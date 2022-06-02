import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`
const Image = styled.div`
position: absolute;
width: 179px;
height: 404px;
left: -26px;
top: 5176px;
background: url(Assets9.png);
background-repeat: no-repeat;
`
const Client = styled.div`
position: absolute;
width: 310px;
height: 57px;
left: 645px;
top: 5242px;
font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 57px;
color: #000000;
`
const Line = styled.div`
position: absolute;
width: 225px;
height: 0px;
left: 645px;
top: 5305px;
border: 1px solid #A9A9A9;
`
const Rectangle = styled.div`
position: absolute;
width: 104px;
height: 7px;
margin-top:-2px;
background: #A9A9A9;
border-radius: 4px;
`
const Logo1 = styled.div`
position: absolute;
width: 212px;
height: 161px;
left: 233px;
top: 5348px;
background: url(logo1.png);
`
const Logo2 = styled.div`
position: absolute;
width: 129px;
height: 131px;
left: 460px;
top: 5363px;
background: url(logo2.png);
`
const Logo3 = styled.div`
position: absolute;
width: 222px;
height: 62px;
left: 667px;
top: 5398px;
background: url(logo3.png);
`
const Logo4 = styled.div`
position: absolute;
width: 143px;
height: 107px;
left: 952px;
top: 5375px;
background: url(logo4.png);
`
const Logo5 = styled.div`
position: absolute;
width: 163px;
height: 63px;
left: 1182px;
top: 5397px;
background: url(logo5.png);
`
const Logo6 = styled.div`
position: absolute;
width: 185px;
height: 106px;
left: 233px;
top: 5581px;
background: url(logo6.png);
`
const Logo7 = styled.div`
position: absolute;
width: 268px;
height: 120px;
left: 475px;
top: 5574px;
background: url(logo7.png);
`
const Logo8 = styled.div`
position: absolute;
width: 246px;
height: 99px;
left: 799px;
top: 5584px;
background: url(logo8.png);
`
const Logo9 = styled.div`
position: absolute;
width: 243px;
height: 58px;
left: 1102px;
top: 5605px;
background: url(logo9.png);
`
const Info = styled.div`
position: absolute;
width: 1340px;
height: 208px;
left: 130px;
top: 5769px;
background: #BFDBFF;
`
const Social = styled.div`
position: absolute;
width: 49px;
height: 35px;
left: 114px;
top: 42px;
font-family: 'Rubik';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 221%;
color: #000000;
`
const Contact = styled.div`
position: absolute;
width: 65px;
height: 35px;
left: 601px;
top : 42px;
font-family: 'Rubik';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 221%;
color: #000000;
`
const Explore = styled.div`
position: absolute;
width: 61px;
height: 35px;
left: 361px;
top:42px;
font-family: 'Rubik';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 221%;
color: #000000;
`
const Email = styled.div`
position: absolute;
width: 44px;
height: 35px;
left: 977px;
top: 42px;
font-family: 'Rubik';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 221%;
color: #000000;
`
const SocialInfo = styled.div`
position: absolute;
width: 67px;
height: 93px;
left: 114px;
top: 74px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 31px;
color: #2C2C2C;
`
const ExploreInfo = styled.div`
position: absolute;
width: 60px;
height: 93px;
left: 361px;
top: 74px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 31px;
color: #2C2C2C;
`
const ContactInfo = styled.div`
position: absolute;
width: 196px;
height: 93px;
left: 601px;
top: 74px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 31px;
color: #2C2C2C;
`
const EmailInfo = styled.div`
position: absolute;
width: 252px;
height: 31px;
left: 977px;
top: 74px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 31px;
color: #2C2C2C;
`
const Facebook = styled.div`
position: absolute;
width: 16px;
height: 16px;
left: 84px;
top: 82px;
background: url(facebook.png);
`
const Linkedin = styled.div`
position: absolute;
width: 16px;
height: 16px;
left: 84px;
top: 114px;
background: url(link.png);
`
const Search = styled.div`
position: absolute;
width: 10px;
height: 10px;
left: 84px;
top: 148px;
background: url(search.png);
`
const OurClients = () => {
    return (
        <Container>
            <Image></Image>
            <Client>Our Clients</Client>
            <Line><Rectangle></Rectangle></Line>
            <Logo1></Logo1>
            <Logo2></Logo2>
            <Logo3></Logo3>
            <Logo4></Logo4>
            <Logo5></Logo5>
            <Logo6></Logo6>
            <Logo7></Logo7>
            <Logo8></Logo8>
            <Logo9></Logo9>
            <Info>
                <Social>Social</Social>
                <Explore>Explore</Explore>
                <Contact>Contact</Contact>
                <Email>Email</Email>
                <Facebook></Facebook>
                <Linkedin></Linkedin>
                <Search></Search>
                <SocialInfo>Facebook
                    Linkedin
                    Google +</SocialInfo>
                <ExploreInfo>Services Team Client</ExploreInfo>
                <ContactInfo>Lorem Ipsum dummy address
                    used for display
                    1234567890</ContactInfo>
                <EmailInfo>mendlesoncommunication@email.com</EmailInfo>
            </Info>
        </Container>
    );
}

export default OurClients;