import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { AboutMe } from "../AboutMe/aboutMe";
import { TopSection } from "../topSection";
import { Footer } from "../../components/footer";



const PageContainer = styled.div`
${tw`
flex
flex-col
w-full
h-full
items-center
overflow-x-hidden
 `}
`;

export function HomePage() {
    
     return (<PageContainer>
        <TopSection />
        <AboutMe />
        <Footer />
    </PageContainer>

    );

    }

