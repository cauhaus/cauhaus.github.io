import styled from "styled-components";
import React from "react";

const YesButton = styled.span`
    &:hover {
        color: green;
    }
`;

const NoButton = styled.span`
    &:hover {
        color: red;
    }
`;

const ChoseYes = styled.span`
    color: green;
`;

const ChoseNo = styled.span`
    color: red;
`;

// TODO: fix this weird formatting wth the '(yes/no)'
function renderPickedMaybe(yes, no, setChose) {
    return (
        <span>
            (<YesButton onClick={() => setChose('yes')}>{yes}</YesButton>
            /<NoButton onClick={() => setChose('no')}>{no}</NoButton>)
        </span>
    );
}


function YesNo(props) {
    const {yes, no, chose, setChose} = props;
    return (
        <span>
            {chose === 'maybe' && renderPickedMaybe(yes,no,setChose)}
            {chose === 'yes' && <ChoseYes>{yes}</ChoseYes>}
            {chose === 'no' && <ChoseNo>{no}</ChoseNo>}
        </span>
    );
}

export default YesNo;