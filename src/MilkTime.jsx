import React, { useState, useEffect } from 'react';
import YesNo from './YesNo';

const yesNoProps = {
    yes: 'is',
    no: 'is not',
}

const templateTime = {
    'cow': 'Milk Time!',
    'cup': 'just a number',
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
    });

    yesNoProps.chose = chose;
    yesNoProps.chooseYes = () => setChose('yes');
    yesNoProps.chooseNo = () => setChose('no');

    const MilkMessage =
        <p>
            {date.toLocaleTimeString()}
            <span> </span>
            <YesNo {...yesNoProps}/>
            <span> </span>
            {templateTime[template]}
        </p>;

    return (
        <div>{MilkMessage}</div>
    );
}

export default MilkTime;