import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`
const Team = styled.div`
position: absolute;
width: 241px;
height: 57px;
left: 685px;
top: 3840px;
font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 57px;
color: #000000;
`
const Line = styled.div`
position: absolute;
width: 190px;
height: 0px;
left: 685px;
top: 3903px;
border: 1px solid #A9A9A9;
`
const Rectangle = styled.div`
position: absolute;
width: 101px;
height: 7px;
top : -2px;
background: #A9A9A9;
border-radius: 4px;
`
const Person1 = styled.div`
position: absolute;
width: 278px;
height: 221px;
left: 244px;
top: 3936px;
background: url(person1.png);
`
const Person2 = styled.div`
position: absolute;
width: 278px;
height: 221px;
left: 661px;
top: 3937px;
background: url(person2.png);
`
const Person3 = styled.div`
position: absolute;
width: 276px;
height: 221px;
left: 1078px;
top: 3937px;
background: url(Person3.png);
`
const P1 =styled.div`
position: absolute;
width: 165px;
height: 28px;
left: 300px;
top: 4210px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: #000000;
`
const P2 =styled.div`
position: absolute;
width: 152px;
height: 26px;
left: 724px;
top: 4211px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
color: #000000;
`
const P3 =styled.div`
position: absolute;
width: 88px;
height: 26px;
left: 1172px;
top: 4211px;
font-family: 'Rubik';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
color: #000000;
`
const Asset = styled.div`
position: absolute;
width: 371.17px;
height: 476.12px;
left: 1363.23px;
top: 4047px;
background: url(Asset82.png);
background-repeat: no-repeat;
transform: rotate(4.76deg);
`

const OurTeam = () => {
    return (
        <Container>
       <Team>Our Team</Team>
       <Line><Rectangle></Rectangle></Line>
       <Person1></Person1>
       <P1>Jessica D’suza</P1>
       <Person2></Person2>
       <P2>Johny Williams</P2>
       <Person3></Person3>
       <P3>Sanya R,</P3>
       <Asset></Asset>
       </Container>
    );
}

export default OurTeam;