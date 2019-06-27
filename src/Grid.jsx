import React, { useState } from 'react';
import styled from 'styled-components';
import Place from './Place'
import MilkTime from './MilkTime';
import Tweet from './Tweet'
import images from "./resource/images";


const gridTemplates = {
    'empty':
        ` " . . . . . . . . . . . . "
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
        `,

    'cow':
        ` " . . . . . . . . . . . . "
          " . . . . c c c c . . . . "
          " . . . . c c c c . . . . "
          " . . . . c c c c . . . . "
          " . . . . . . . . . . . . "
          " . . . u u h h p p . . . "
          " . . . u u h h p p . . . "
          " . . . . . . . . . . . . "
          " . m m m m m m m m m m . "
          " . . . . . . . . . . . . "
          " . . . . . t t . . . . . "
          " . . . . . . . . . . . . "
         `,

    'cup':
        ` " . . . . . . . . . . . . "
          " . . . . u u u u . . . . "
          " . . . . u u u u . . . . "
          " . . . . u u u u . . . . "
          " . . . . . . . . . . . . "
          " . . . c c h h p p . . . "
          " . . . c c h h p p . . . "
          " . . . . . . . . . . . . "
          " . m m m m m m m m m m . "
          " . . . . . . . . . . . . "
          " . . . . . t t . . . . . "
          " . . . . . . . . . . . . "
         `,

    'heart':
        ` " . . . . . . . . . . . . "
          " . . . . h h h h . . . . "
          " . . . . h h h h . . . . "
          " . . . . h h h h . . . . "
          " . . . . . . . . . . . . "
          " . . . u u c c p p . . . "
          " . . . u u c c p p . . . "
          " . . . . . . . . . . . . "
          " . m m m m m m m m m m . "
          " . . . . . . . . . . . . "
          " . . . . . t t . . . . . "
          " . . . . . . . . . . . . "
         `,

    'cross':
        ` " . . . . . . . . . . . . "
          " . . . . p p p p . . . . "
          " . . . . p p p p . . . . "
          " . . . . p p p p . . . . "
          " . . . . . . . . . . . . "
          " . . . u u h h c c . . . "
          " . . . u u h h c c . . . "
          " . . . . . . . . . . . . "
          " . m m m m m m m m m m . "
          " . . . . . . . . . . . . "
          " . . . . . t t . . . . . "
          " . . . . . . . . . . . . "
         `,
}

const Layout = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: ${props => ' 1fr '.repeat(props.columns)};
    grid-template-rows: ${props => ' 1fr '.repeat(props.rows)};
    grid-template-areas: ${props => gridTemplates[props.template]}
`;

const place = (component, gridArea, props) => <Place gridArea={gridArea} {...props}>{component}</Place>;

function Grid(props) {
    const [tweet, setTweet] = useState(null);
    const { columns, rows, template, setTemplate } = props;

    const layoutProps = {
        columns: columns,
        rows: rows,
        template: template,
    };

    return (
        <Layout {...layoutProps} >
            {place(<img src={images.cow} alt="cow" />, 'c', {onClick: () => setTemplate('cow')})}
            {place(<img src={images.cup} alt="cup" />, 'u', {onClick: () => setTemplate('cup')})}
            {place(<img src={images.heart} alt="heart" />, 'h', {onClick: () => setTemplate('heart')})}
            {place(<img src={images.cross} alt="cross" />, 'p', {onClick: () => setTemplate('cross')})}
            {place(<MilkTime template={template} setTweet={setTweet} />, 'm')}
            {place(<Tweet tweet={tweet}/>)}
        </Layout>
    );
}

export default Grid;