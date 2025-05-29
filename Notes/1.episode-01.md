# 
const heading = React.createElement('h1', {style: {color: 'red'}}, 'I am heading');
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(heading);

# React.createElement returns react element i.e, object not html element.
