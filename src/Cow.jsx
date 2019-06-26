import React from 'react';
import styled from 'styled-components';
import cowPicture from './images/cow.png'
import strings from './strings';

const Cow = styled.div`
    grid-area: ${props => props.gridArea};
`;

export default function renderCow(props) {
    return (
        <Cow {...props} >
            <img src={cowPicture} alt={strings.cow} />
        </Cow>
    );
}