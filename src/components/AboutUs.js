import React from 'react';
import styled from 'styled-components';
import Communication from './Communication';

const Container = styled.div`

`
const Image = styled.div`
position: absolute;
width: 612px;
height: 408px;
margin-left : 90px;
top: 1094px;
background: url(aboutus.png);
`

const About = styled.div`
position: absolute;
width: 238px;
height: 57px;
left: 812px;
top: 983px;

font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 57px;
color: #000000;
`
const Line = styled.u`
position: absolute;
width: 238px;
height: 0px;
left: 812px;
top: 1046px;
border: 1px solid #A9A9A9;
`
const Rectangle = styled.u`

position: absolute;
width: 156px;
height: 7px;
background: #A9A9A9;
border-radius: 4px;
top:-3px;
`
const Info = styled.p`
position: absolute;
width: 658px;
height: 127px;
left: 812px;
top: 1070px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #2C2C2C;
`
const Engagement = styled.div`
position: absolute;
width: 41px;
height: 40px;
left: 812px;
top: 1237px;
background: url(Enagagementicon1.png);
`
const Communicationicon = styled.div`
position: absolute;
width: 41px;
height: 40px;
left: 1150px;
top: 1237px;
background: url(Communicationicon.png);
`
const Icon = styled.div`
    display:flex;
`
const Details = styled.div`
display:flex;
`
const EngagementInfo = styled.div`
`
const CommunicationInfo = styled.div`
`
const ETitle = styled.p`

position: absolute;
width: 163px;
height: 28px;
left: 812px;
top: 1270px;
font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
text-transform: uppercase;
color: #000000;
`
const CTitle = styled.p`
position: absolute;
width: 216px;
height: 28px;
left: 1153px;
top: 1270px;
font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
text-transform: uppercase;
color: #000000;
`
const EInfo = styled.p`
position: absolute;
width: 273px;
height: 89px;
left: 812px;
top: 1320px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #2C2C2C;
`
const CInfo = styled.p`
position: absolute;
width: 273px;
height: 112px;
left: 1158px;
top: 1320px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #2C2C2C;
`
const AboutUs = () => {
    return (
        <Container>
        <Image></Image>
        <About>ABOUT US</About>
        <Line><Rectangle></Rectangle></Line>
        <Info>We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.        </Info>
        <Icon>
            <Engagement></Engagement>
            <Communicationicon></Communicationicon>
        </Icon>
        <Details>
            <EngagementInfo>
            <ETitle>Engagement</ETitle>
            <EInfo>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.READ MORE</EInfo>
            </EngagementInfo>
            <CommunicationInfo>
            <CTitle>Commumication</CTitle>
            <CInfo>We are engagement specialists, who have led projects at all levels of the IAP2 spectrum.READ MORE</CInfo>
            </CommunicationInfo>
        </Details>
        </Container>
        
    );
}

export default AboutUs;