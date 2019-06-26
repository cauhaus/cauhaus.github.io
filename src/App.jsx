import React from 'react';
import styled from 'styled-components';
import strings from './strings'
import Cow from './Cow'

// (Integer, Integer) -> Integer
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const gradients = [
    "linear-gradient(to bottom right, darkmagenta, goldenrod)"
];

// () -> String
function randomGradient() {
    return gradients[randomIntFromRange(0, gradients.length)]
}

const Main = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    background-image: ${randomGradient()};
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 2fr 0.3fr 1fr 2fr;
    grid-template-areas: " . . . "
                         " . g . "
                         " . . . "
                         " . m . "
                         " . . . "
`;

const MilkTime = styled.div`
    grid-area: m;
    text-align: center;
    padding-top: 10px;
    border: 3px solid black;
    font-family: Andale Mono, monospace;
    font-size: 60px;
    font-weight: bold;
`;


// () -> Integer
function getDaysLeft() {
    const countDownDate = new Date("Sep 6, 2019 12:00:00").getTime();
    const currentDate = new Date().getTime();
    return Math.floor((countDownDate - currentDate) / (1000 * 60 * 60 * 24));
}

function App() {
  return (
      <Main>
          <Cow gridArea="g" />
          <MilkTime>
              {`${getDaysLeft()} days until > \"Milk\"`}
              {strings.milkTime}
          </MilkTime>
      </Main>
  );
}

export default App;