import React from "react";
import styled from "styled-components";

const HoverButton = styled.span`
    &:hover {
        color: ${props => props.color};
    }
`;

const Highlight = styled.span`
    color: ${props => props.color};
`;

function renderChoseMaybe(props) {
    const yesButton = <HoverButton color="green" onClick={props.chooseYes}>{props.yes}</HoverButton>;
    const noButton = <HoverButton color="red" onClick={props.chooseNo}>{props.no}</HoverButton>;

    return <span>({yesButton}/{noButton})</span>
}

const renderChoseYes = props => <Highlight color="green">{props.yes}</Highlight>;
const renderChoseNo = props => <Highlight color="red">{props.no}</Highlight>;

const renderChoice = {
    'maybe' : props => renderChoseMaybe(props),
    'yes' : props => renderChoseYes(props),
    'no' : props => renderChoseNo(props)
};

export default props => renderChoice[props.chose](props);