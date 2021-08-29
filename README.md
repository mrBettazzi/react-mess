# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React concepts[^](#my-exercise-tracker)

Taken from [React JS Crash Course 2021](https://www.youtube.com/watch?v=w7ejDZ8SWv8)

React is a library for building user interfaces. Not a framework, but comparable to full-fledged frameworks like Angular and Vue ...
When using React, think of your UI as a bunch of separate components.
## Component Basics
A component is what I want to see on the screen.
Components can be defined as Functions or Classes :
```
export const Header = () => {
  return (
    <div>
      <h1>My Header</h1>
    </div>
  )
}
// equivalent to
export default class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>My Header</h1>
      </div>
    )
  }
}
```
The pseudo-HTML is JSX, a Javascript dialect that is unbeknownst by the browser.
JSX parts must be transpiled and end up as Javascript code.
JSX allows to embed simple Javascript between curly braces {} - only values not functions.
JSK needs only ONE high-level <element>, otherwise you will get an compile error
Components may have parameters :
```
class ShoppingList extends React.Component {
  render () {
    return(
      <div classname="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Cereal</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}
```
This component can be used in an HTML page :
```
<ShoppingList name="Paolo" />
```
Components can have "state", an object that determines how a component renders and behaves. Before react 16.8 "state" could be used only in class based components; now we can use functional components with hooks.
"App" or "global" state refert to the state that is available to the entire UI. Tho share state between compnents you can also use the Context API or some addon like Redux.
## preliminary steps
[Node home page](nodejs.org)
*React Developer Tools* extension for Chrome and Firefox ...
ES7 React/Redux&GraphQL extension for VSCode
```
npx create-react-app test
cd test
npm start
```
## looking inside **package.json** ...
### `npm start`
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## going on
### App.js
`App.js` is where everything starts. Initially created as a class :
```
mport React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;
```
Currently created as function :
```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
some modifications to show usage of parameters :
```
const name = 'Brad'
const flag = true

function App() {
  return (
    <div className='container'>
      <h1>Hello from React</h1>
      <h2>Hello { flag ? name : 'unknown' }</h2>
    </div>
  )
}
export default App
```
### Components : index.js
Component filenames have capital initial letter and stay in the `components` folder.
So if I create a `src/components/Header.js` file and using `rafce` macro I will get very quickly something like this :
```
const Header = () => {
    return (
        <header>
          <h1>Task Tracker</h1>  
        </header>
    )
}

export default Header
```
with parameters :
```
const Header = ( {title} ) => {
    return (
        <header>
          <h1>Task Tracker : {title}</h1>  
        </header>
    )
}

export default Header
```
or having `props` as an object with type checking (macro `impt`) and exception handling :
```
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header>
          <h1>Task Tracker : {props.title}</h1>  
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
    title: 'Missing Parameter',
}

export default Header
```
then I will alter `App.js` file in this way :
```
import Header from './components/Header'

function App() {
  return (
    <div className='container'>
      <Header title='Hello Pal !'></Header>
    </div>
  )
}

export default App
```
### Styling : index.css
Styling can be embedded (using double curly braces)
```
        <header>
          <h1 style={{ color: 'red', backgroundColor:'black'}}>Task Tracker : {props.title}</h1>  
        </header>
```
or also :
```
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header>
          <h1 style={myHeadingStyle}>Task Tracker : {props.title}</h1>  
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
    title: 'Missing Parameter',
}
const myHeadingStyle = {
    color: 'red', 
    backgroundColor:'blue',
}

export default Header
```
this is the original `index.css`:
```
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
} 
```
and this is the modified version :
```
@import url('https://fonts.googleapis.com/ccs2?family=Poppins:wght@300;400&isplay=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.event {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.event.reminder {
  border-left: 5px solid green;
}

.event.h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

.footer {
  margin-top: 30px;
  text-align: center;
}
```
So now `index.js`can be modified like that :
```
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header className='header'>
          <h1>Task Tracker : {props.title}</h1> 
          <button className='btn'>Add</button> 
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
    title: 'Missing Parameter',
}

// CSS in JS
// const myHeadingStyle = {
//     color: 'yellow', 
//     backgroundColor:'green',
// }

export default Header
```
### Reusable components : button.js
If I create a `src/components/Button.js` file using `rafce` macro and some editing I get this :
```
onst Button = ({ color, text }) => {
    return (
        <button style={{ backgroundColor: color}} className='btn'>
            { text }
        </button>
    )
}

export default Button
```
(note that props are passed as a list not as a `props` object)
The component can be used in `Header.js` in this way :
```
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header className='header'>
          <h1>Task Tracker : {props.title}</h1> 
          <Button color='green' text='Add' />
          <Button color='orange' text='Sub' />
          <Button color='red' text='Mul' />
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
    title: 'Missing Parameter',
}

// CSS in JS
// const myHeadingStyle = {
//     color: 'yellow', 
//     backgroundColor:'green',
// }

export default Header
```
Adding an `onClick` event :
```
const Button = ({ color, text }) => {
    const onClick = (e) => {
        console.log(e)
    }
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color}} 
            className='btn'
        >
            {text}
        </button>
    )
}

export default Button
```
but much better : `Button.js`
```
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color}} 
            className='btn'
        >
            {text}
        </button>
    )
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
export default Button
```
and `Header.js`
```
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
          <h1>Task Tracker : {props.title}</h1> 
          <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string
}
Header.defaultProps = {
    title: 'Missing Parameter',
}

export default Header
```






## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
