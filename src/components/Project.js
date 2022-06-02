import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`
const Pro = styled.div`
position: absolute;
width: 362px;
height: 57px;
left: 674px;
top: 4356px;
font-family: 'Rubik';
font-style: normal;
font-weight: 500;
font-size: 48px;
line-height: 57px;
color: #000000;
`
const Line = styled.div`
position: absolute;
width: 222px;
height: 0px;
left: 674px;
top: 4417px;
border: 1px solid #A9A9A9;
`
const Rectangle = styled.div`
position: absolute;
width: 103px;
height: 7px;
margin-top:-2px;
background: #A9A9A9;
border-radius: 4px;
`
const Image1 = styled.div`
position: absolute;
width: 554px;
height: 667px;
left: 235px;
top: 4447px;
background: url(OurProject1.png);
`
const Image2 = styled.div`
position: absolute;
width: 554px;
height: 322px;
left: 811px;
top: 4447px;
background: url(OurProject2.png);
`
const Image3 = styled.div`
position: absolute;
width: 554px;
height: 323px;
left: 811px;
top: 4791px;
background: url(OurProject3.png);
`
const Project = () => {
    return (
        <Container>
       <Pro>Our Project</Pro>
       <Line><Rectangle></Rectangle></Line>
       <Image1></Image1>
       <Image2></Image2>
       <Image3></Image3>
       </Container>
    );
}

export default Project;