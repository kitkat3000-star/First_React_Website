import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { AboutMe } from "./aboutMe";


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

export function AboutMePage() {
     return (<PageContainer>
         <AboutMe />
     </PageContainer>
     );
}

