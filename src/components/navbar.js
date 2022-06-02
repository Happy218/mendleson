import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height : 85px;
`
const Wrapper = styled.div`
    margin-top : 10px;
    display : flex;
    justify-content : space-between;
    
`
const Left = styled.div`
    position: absolute;
    width: 119px;
    height: 111px;
    left: 0px;
    top: 0px;
    background: url(Asset1.png);
`
const Center = styled.div`
position: absolute;
width: 295px;
height: 85px;
left: 130px;
top: 10px;
background: url(logo.png);
`
const Right = styled.div`
    display : flex;
    margin-left : 998px;
    margin-top : 20px;
`
const MenuItem = styled.div`
    font-size : 18px;
    padding : 18px;
    font : roboto;
    cursor : pointer;
    width : 400;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
`
const Image = styled.img`
    position: absolute;
    width: 359px;
    height: 376px;
    left: 1310px;
    top: -14px;
    background: url(Asset2.png);
    background-repeat: no-repeat;
`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left></Left>
                <Center></Center>
                <Right>
                    <MenuItem>About Us</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Team</MenuItem>
                    <MenuItem>Clients</MenuItem>
                    <MenuItem>Contact Us</MenuItem>
                </Right>
                <Image></Image>
            </Wrapper>
        </Container>
    );
}

export default Navbar;