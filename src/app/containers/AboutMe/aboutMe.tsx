import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Downloadbutton } from "../../components/button";
import { SCREENS } from "../../components/responsive";
import PersonalImg from "./../../../assets/1601488631967.jpg";


const AboutMeContainer = styled.div`
    min-height: 650px; 
    
    ${tw`
        w-full
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


const RightContainer = styled.div` 
    ${tw`
        w-1/2
        flex
        flex-col
    `};
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;

const Heading = styled.h1`   
margin-top: 2em; 
    ${tw`
        font-bold
        text-2xl
        text-center
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

const Aboutmessage = styled.p`
    margin-top: 1em;
    ${tw`
    text-xs
    font-light
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden 
    `};
`;

const BlobContainer = styled.p`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -l;
    transform: rotate(-30deg);

    img{
        width: 100%;
        height: auto;
        max-height: max-content;
        }

    @media (min-width: ${SCREENS.sm}) {
        width:40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }

    @media (min-width: ${SCREENS.lg}) {
        width:50em;
        max-height: 30em;
        right: -7em;
        top: -15em;
        transform: rotate(-30deg);
    }

    @media (min-width: ${SCREENS.xl}) {
        width:70em;
        max-height: 10 em;
        right: -15em;
        top: -25em;
        transform: rotate(-20deg);
    }
`;

const Standalone = styled.div`
    width: auto;
    height: 10em;
    right: 2em;
    position: absolute;

    img{
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    @media (min-width: ${SCREENS.sm}) {
        height: 28em;
        right: 3em;
        top: 8em;
    }

    @media (min-width: ${SCREENS.lg}) {
        height: 25em;
        right: 8em;
        top: 5em;
    }

    @media (min-width: ${SCREENS.xl}) {
        height: 30em;
        right: 10em;
        top: 1em;
    }
`;

const Image = styled.div`
    ${tw`
    mt-10
    sm:mx-48
    xl:mx-40
    `};
`;



export function AboutMe() {
    return(
        <AboutMeContainer>
            <LeftContainer>
                <Standalone>
                    <img src={PersonalImg} />
                </Standalone>
            </LeftContainer>
            <RightContainer>
            <Heading>About Me</Heading>
            <Aboutmessage>
            I am an Information Technology Graduate from the University of Wollongong in Dubai. I love to explore and learn new topics in the CS & Designing field. 
            </Aboutmessage>
            <br/><br />
            <Downloadbutton />
            <Image>
            <img src="https://images.squarespace-cdn.com/content/v1/5d23a9bdfbcafa0001f44276/1562937540986-4BXKLFD4EBOF5GIA7XMT/ARL_LittleDoodles.png?format=300w" width="450"/>
            </Image>
            </RightContainer>
        </AboutMeContainer>
    );
}