import React from 'react';
import styled from 'styled-components';

const Tweet = styled.div`
    border: 3px solid black;
    border-radius: 5px;
    width: 70%;
    margin: auto;
    &:hover {
        background-color: lightgrey;
    }
    
    &:active {
        background-color: grey;
    }
`;

export default props =>
    <div>
        <Tweet
            onClick={() => console.log(props.tweet)}
        >
            <p>> Tweet</p>
        </Tweet>
    </div>;
