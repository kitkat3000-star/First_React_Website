import React from "react";
import styled, {css} from "styled-components";
import tw from "twin.macro";
import {slide as Menu} from "react-burger-menu";
import {useMediaQuery} from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";
import { AboutMe } from "../../containers/AboutMe/aboutMe";



const ListContainer = styled.ul`
margin-right: 110px;
    ${tw`
    flex
    list-none
    `};
`;

const NavItem = styled.li<{ menu?: any }>`
    
    ${tw`
    text-sm
    md:text-base
    text-black
    font-light
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-red-400
    `};

    ${({menu}) => menu && css`
        ${tw `
        text-white
        text-xl
        mb-3
        focus: text-white
        `};
    `};
`;


export function NavItems() {
  
const isMobile = useMediaQuery({maxWidth: SCREENS.sm }); 

if(isMobile)
return (
    <Menu right styles={menuStyles}>
        <ListContainer>
            <NavItem menu>
                <a href="#">Home</a>
            </NavItem>
            <NavItem menu>
                <a href= "#">About</a>
            </NavItem>
            <NavItem menu>
                <a href="#">Projects</a>
            </NavItem>
            <NavItem menu>
                <a href="#">Interests</a>
            </NavItem>
        </ListContainer>
    </Menu>
);


return (
    <ListContainer>
        <NavItem>
            <a href="#">Home</a>
        </NavItem>
        <NavItem>
            <a href="#">About</a>
        </NavItem>
        <NavItem>
            <a href="#">Projects</a>
        </NavItem>
        <NavItem>
            <a href="#">Interests</a>
        </NavItem>     
    </ListContainer>
   
); 



}

