import React from 'react';
import tw from 'twin.macro';
import styled from "styled-components";
import './App.css';
import { HomePage } from './app/containers/HomePage';
import { Navbar } from './app/components/navbar';
import { Switch } from 'react-router';


const Appcontainer = styled.div`
  ${tw`
    w-full
    h-full
    flex-col
    flex
  `}
`;
 
function App() {
  return (
  <Appcontainer>
    <Navbar />
    <HomePage />
  </Appcontainer>
  );
}

export default App;
