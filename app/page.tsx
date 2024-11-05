"use client"

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import { useState } from "react";
import Link from "next/link";


const GlobalStyle = createGlobalStyle`
  html, body {
          height: 100%; 
          margin: 0; 
          padding: 0;
      }
  body {
      background: linear-gradient(180deg, #a1c4fd, #c2e9fb);
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif; 
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  const [city, setCity] = useState("");

  return (
    <>
    <GlobalStyle />
    <StyledDiv>
      <h1>Find the Weather in any city!</h1>
      <p>Enter a city name below to the current weather</p>
      <input
        type="text"
        value={city}
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
      />
      <Link href={`/${city}`}>Get Weather</Link>
    </StyledDiv>
    </>
    
  );
}