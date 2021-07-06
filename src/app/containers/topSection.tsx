import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../components/responsive";
import PersonalImg from "./../../assets/IMG_0318.jpg";
import { Button } from "../components/button";
import  bgImg from "./../../assets/background.jpg"
import  StarImg1 from "./../../assets/star2jpg.jpg"


const TopSectionContainer = styled.div`
    min-height: 550px; 
    margin-top: 7em;
       
    ${tw`
        w-full
        sm:h-60
        max-w-screen-2xl
        flex
        justify-between
        lg:pl-12
        lg:pr-12
        pl-3
        pr-3
        xl:pl-36
        xl:pr-2
    `};
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `};
`;

const RightContainer = styled.div` 
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;

const Slogan = styled.h1`    
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed

    `};
`;

const Description = styled.p`
    ${tw`
        text-xs
        font-thin
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden 
    `};
`;

const ImgContainer = styled.div`
width: auto;
height: 10em;
left: -90em;
margin-top: 30;

img{
    width: auto;
    height: 77%;
    max-width: fit-content;
}

@media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: 3em;
    top: 9em;
}
@media (min-width: ${SCREENS.xl}) {
    height: 20em;
    margin-left: 25em;
    top: 0em;
}
`;

const Standalone = styled.div`
    width: auto;
    height: 10em;
    right: 2em;
    top: -5em;
    position: absolute;

    img{
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        height: 16em;
        right: 3em;
        top: -6em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 21m;
        right: 5em;
        top: -5em;
    }

    @media (min-width: ${SCREENS.xl}) {
        height: 30em;
        right: 10em;
        top: -9em;
    }
`;

const ButtonContainer = styled.div`
    ${tw`
        flex
        mt-4
        flex-wrap
    `};
`;

export function TopSection() {
    return ( 
    
    <div style={{  
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'100%',
        width:'100%'
      }}>
    <TopSectionContainer>

        <LeftContainer>
            <Slogan>Hi! This is Himaja</Slogan>
            <Description>
                I am an enthusiast for Binging and share passion for Programming. <br/>Check out my MERN website which I created to learn more!<br /><br />
            </Description>
    
            <ButtonContainer>
                <Button text="Contact details" />
                <Button theme="filled" text="Learn more"/>
            </ButtonContainer>
          
        </LeftContainer>

        <RightContainer>
            <Standalone>
                <img src={PersonalImg} />
            </Standalone>
        </RightContainer>

    </TopSectionContainer>
    </div>
    );
}
