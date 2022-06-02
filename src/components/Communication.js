import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: absolute;
width: 1403px;
height: 789.19px;
left: -23px;
top: 105px;
background: url(Graphic12.png);
background-repeat: no-repeat;
`
const Image = styled.div`
position: absolute;
width: 266px;
height: 599px;
left: -10px;
top: 210px;
background: url(Assets3.png);
background-repeat: no-repeat;
`
const Graphic = styled.div`
position: absolute;
width: 643.63px;
height: 438.44px;
left: 125.19px;
top: 350px;
background: url(VectorObject.png);
background-repeat: no-repeat;
`
const Header = styled.h1`
position: absolute;
width: 459px;
height: 198px;
left: 926px;
top: 140px;
font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 56px;
line-height: 66px;
color: #000000;
`
const TITLE = styled.div`
position: absolute;
width: 544px;
height: 67px;
left: 926px;
top: 400px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;

color: #2C2C2C;
`
const Corner = styled.div`
position: absolute;
width: 207px;
height: 249px;
left: 1426px;
top: 540px;
background: url(Assets4.png);
background-repeat: no-repeat;
`
const Communication = () => {
    return (
        <Container>
         <Image></Image>
         <Graphic></Graphic>
         <Header>Mendleson Commumication and Engagement</Header>
         <TITLE>Lorem ipsum dolar sit amet, consectetur adipiscing elit.<br/> Malesuada sed ipsum, ut quam volutpat,tortor. </TITLE>
         <Corner></Corner>
        </Container>
    );
}

export default Communication;