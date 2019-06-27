import React, { useState, useEffect } from "react";
import styled from "styled-components";
import YesNo from './YesNo';

const MilkMessage = styled.div`
    text-align: center;
    vertical-align: middle;
    font-family: Andale Mono, monospace;
    font-size: 60px;
    font-weight: bold;
`;

const yesNoProps = {
    yes: 'is',
    no: 'is not',
}

const templateTime = {
    'cow': 'Milk Time!',
    'cup': 'five o\'clock somewhere',
    'heart': 'tight as hell',
    'cross': 'time for bed',
}

function MilkTime(props) {
    const [date, setDate] = useState(new Date());
    const [chose, setChose] = useState('maybe');
    const { template } = props;

    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 100);

        return () => clearInterval(timerID);
    }, []);

    yesNoProps.chose = chose;
    yesNoProps.setChose = setChose;

    return (
        <MilkMessage {...props}>
            <p>
                {date.toLocaleTimeString()}
                <span> </span>
                <YesNo {...yesNoProps}/>
                <span> </span>
                {templateTime[template]}
            </p>
        </MilkMessage>
    );
}

export default MilkTime;