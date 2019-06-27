import React, { useState } from 'react';
import Grid from './Grid';

function App() {
    const [template, setTemplate] = useState('cow');
    const props = {
        columns: 12,
        rows: 12,
        template: template,
        setTemplate: setTemplate
    }
    return <Grid {...props} />;
}

export default App;