# adding script for running app

 "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },

  npm run start or npm start (for dev build)
  npm run build (for prod build)

# JSX is not a part of react. They are very different. JSX makes developer life easier for creating react elements

# JSX is not html in javascript

# JSX is html/XML like syntax

# 
create element by core react
const heading = React.createElement('h1', {}, 'I am heading tag');

create element by jsx
const jsxHeading = <h1 id="id1">I am jsx heading</h1>
root.render(jsxHeading);

Both heading and jsxHeading are react element i.e, object
console.log(heading);
console.log(jsxHeading);

#
const jsxHeading = <h1 id="id1">I am jsx heading</h1>

Above jsx syntax is infact not valid js syntax. But parcel transpiles jsx to plain javascript. Parcel delegates this work to babel.
Bable transpiles jsx code to plain javascript.

# jsx code is converted into React.createElement behind the scene.

# React.createElement -> returns react element (js object) -> root.render -> converts into html element

# JSX code -> converts into react.createElement (by babel) -> returns react element (js object) -> root.render -> converts into html element

# attributes inside jsx is in camelCase
const jsxHeading = <h1 id="id1" className='cls1'>I am jsx heading</h1>
const jsxHeading = <h1 id="id1" className='cls1' tabIndex={1}>I am jsx heading</h1>

# multiline with jsx (wrap in parenthesis)

const jsxHeading = (
  <h1 id="id1" className="cls1" tabIndex={1}>
    I am jsx heading
  </h1>
);

# React component
Two types of component :-
-> Class based component (old way)
-> Functional component (new way)

Functional component are simple javascript function which returns some piece of jsx code or react element. JSX element is react element at the end of the day

const HeadingComponent = () => {
    return <h1>I am jsx element</h1>
};

or

const HeadingComponent = () => <h1>I am jsx element</h1>;

# Functional component
Functional component name should be in capital letter
we can pass nested jsx elements

const HeadingComponent = () => (
  <div>
    <h1>I am heading</h1>
  </div>
);

# render functional component
const HeadingComponent = () => (
  <div id="container">
    <h1 id="heading">I am heading</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent></HeadingComponent>); or root.render(<HeadingComponent/>);

# component composition (putting one comnponent in another component)
const Title = () => {
    return <h1 id='title'>I am title</h1>
};

const Body = () => {
    return (
        <div>
             <Title></Title>
             <h1>I am heading</h1>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Body></Body>);

# we can put any javascript code inside curly braces{} in jsx

const Body = () => {
    return (
        <div>
             <Title/>
             <h5>{100+200}</h5>
             <h1>I am heading</h1>
        </div>
    )
};

# we can put react element inside functional component. React element is simple javascript object at the end of the day

const title = <h1>I am title</h1>;

const Body = () => {
  return (
    <div>
      {title}
      <h1>I am heading</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body />);

# we can also put react element inside react element

const ele = <h3>I am element</h3>
const title = (
    <div>
        {ele}
        <h1>I am title</h1>
    </div>
);

# we can even put component inside react element
const Body = () => {
    return (
      <div>
        <h1>I am heading</h1>
      </div>
    );
  };
const title = (
    <div>
       <Body/>
        <h1>I am title</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);

# JSX sanitize the data inside curly braces. It dont directly exexute it blindly. It prevents us from cross-site scripting.

const Body = () => {
    return (
      <div>
        {title} // here
        <h1>I am heading</h1>
      </div>
    );
};

# Another way to write component inside another component. A functional component is javascript function which returns a jsx or react element i.e nothing but a js object.


const title = () => (
    <div>
        <h1>calling the function</h1>
    </div>
);

const Body = () => {
    return (
      <div>
        {title()}
        <h1>I am heading</h1>
      </div>
    );
};






