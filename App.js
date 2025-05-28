import React from 'react';
import ReactDOM from 'react-dom/client';

const rootEle = document.getElementById('root');
const heading = React.createElement('h1', {}, 'I am h2 tag');
const root = ReactDOM.createRoot(rootEle);
root.render(heading);