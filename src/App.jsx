import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from './Image';
import MilkTime from './MilkTime';
import images from "./resource/images";

/*
 " . . . . . . . . . . . . "
 " . . . . . . . . . . . . "
 " . . . . . . . . . . . . "
 " . . . . . . . . . . . . "
 " . . . . . . . . . . . . "
 " . . . . . . . . . . . . "
 " . . . . . . . . . . . . "
 " . . . . . . . . . . . . "
 " . . . . . . . . . . . . "
 " . . . . . . . . . . . . "
 " . . . . . . . . . . . . "
 " . . . . . . . . . . . . "
 */

// background-image: linear-gradient(to bottom right, darkmagenta, goldenrod);
const Main = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: " . . . . . . . . . . . . "
                         " . . . . c c c c . . . . "
                         " . . . . c c c c . . . . "
                         " . . . . c c c c . . . . "
                         " . . . . . . . . . . . . "
                         " . . . u u h h p p . . . "
                         " . . . u u h h p p . . . "
                         " . . . . . . . . . . . . "
                         " . m m m m m m m m m m . "
                         " . . . . . . . . . . . . "
                         " . . . . . . . . . . . . "
                         " . . . . . . . . . . . . "
                         ;
`;

function App() {
  const [order, setOrder] = useState(0);

  return (
      <Main>
          <Image src={images.cow} gridArea="c" />
          <Image src={images.cup} gridArea="u" />
          <Image src={images.heart} gridArea="h" />
          <Image src={images.cross} gridArea="p" />
          <MilkTime gridArea="m" />
      </Main>
  );
}

export default App;