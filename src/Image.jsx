import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
    grid-area: ${props => props.gridArea};
`;

export default function renderImage(props) {
    return (
        <Image {...props}>
            <img src={props.src} />
        </Image>
    );
}