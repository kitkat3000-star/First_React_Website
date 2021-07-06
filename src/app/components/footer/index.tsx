import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
  //min-height: 24em;
  background-color: #aabab2;;
  ${tw`
    flex
    flex-col
    min-w-full
    pt-10
    md:pt-16
    items-center
    justify-center
  `};
`;

const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
  `};
`;

const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    max-w-screen-2xl
    justify-center
    md:justify-start
    mt-7
    md:mt-1
  `};
`;

const CopyrightText = styled.small`
  font-size: 12px;
  ${tw`
    text-gray-700
    text-center
    mx-auto
  `}
`;

const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
  `};
`;

const AboutText = styled.h1`
  ${tw`
    text-black
    font-bold
    text-2xl
    max-w-xs
    leading-5
    mt-2
  `};
`;

const SectionContainer = styled.div`
  ${tw`
    w-full
    md:w-auto
    flex
    flex-col
    mr-2
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-7
    md:mt-0
  `};
`;

const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `};
`;

const ListItem = styled.li`
  ${tw`
    mb-3
  `};
  & > a {
    ${tw`
      text-sm
    text-white
      transition-all
      hover:text-gray-200
    `};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`
    text-2xl
    font-bold
    text-white
    mb-3
  `};
`;

const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const RedIcon = styled.span`
  ${tw`
    w-9
    h-9
    rounded-full
    bg-red-100
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `};
`;

const SmallText = styled.h6`
  ${tw`
    text-sm
    text-white
  `};
`;



export function Footer() {
  return (
      
    <FooterContainer>
     <AboutText>Keep in touch!</AboutText>
       <br/><br/>
      <InnerContainer>
        <SectionContainer>
          <HeaderTitle>Phone Number</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
            <img src="http://simpleicon.com/wp-content/uploads/phone-1.png" width="25"/>
            </RedIcon>
            <SmallText>+971 50 84390976</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Email Me @</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <img src="http://simpleicon.com/wp-content/uploads/mail_envalope.png" width="25"/>
            </RedIcon>
            <SmallText>himaja.kakade@gmail.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer></SectionContainer>
        <SectionContainer></SectionContainer>
        <SectionContainer></SectionContainer>
        <SectionContainer></SectionContainer>
        <SectionContainer></SectionContainer>
        <SectionContainer></SectionContainer>
        
        <SectionContainer>
          <HeaderTitle>Find me at:</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <img src="http://simpleicon.com/wp-content/uploads/instagram_1.png" width="23"/>
            </RedIcon>
            <RedIcon>
              <img src="http://simpleicon.com/wp-content/uploads/linkedin_1-150x150.png" width="23"/>
            </RedIcon>
            <RedIcon>
              <img src="http://simpleicon.com/wp-content/uploads/facebook_1-150x150.png" width="23"/>
            </RedIcon>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <br/>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Himaja Kakade. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}