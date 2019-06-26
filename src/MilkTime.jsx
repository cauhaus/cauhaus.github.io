import styled from "styled-components";
import React, { useState, useEffect } from "react";
import YesNo from './YesNo';

const MilkMessage = styled.div`
    grid-area: ${props => props.gridArea};
    text-align: center;
    vertical-align: middle;
    font-family: Andale Mono, monospace;
    font-size: 60px;
    font-weight: bold;
`;

function MilkTime(props) {
    const [date, setDate] = useState(new Date());
    const [chose, setChose] = useState('maybe');

    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 100);

        return () => clearInterval(timerID);
    }, []);

    const yesNoProps = {
        yes: 'is',
        no: 'is not',
        chose: chose,
        setChose: setChose,
    }

    return (
        <MilkMessage {...props}>
            <p>{date.toLocaleTimeString()} <YesNo {...yesNoProps}/> Milk Time!</p>
        </MilkMessage>
    );
}

export default MilkTime;