# **React JS Practice**

## 1. How react made?
- #### For Web:
    - react
    - react-dom
- #### For Mobile
    - react
    - react-native

---

## 2. Virtual DOM
#### A virtual DOM is a concept comes from the package *'react-dom'*. It  creates an **Virtual DOM** and compares it with the **Original DOM** and then decides to make the changes in the **Origianl DOM**.

##### Code snippet:
```javascript
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>) //JSX Component
```
---

## 3. Implementing our custom React renderer
##### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom React</title>
</head>
<body>
    <div id="root"></div>
</body>
<script src="./index.js"></script>
</html>
```

##### index.js
```javascript
// Creating function for rendering the element on DOM

function renderer(elementObj, root){
    // Creating new element
    const element = document.createElement(elementObj.type);
    // Adding text to the element
    element.innerText = elementObj.textContent;
    // Looping on props and setting every attributes to the element
    for(let key in elementObj.props){
        element.setAttribute(key, elementObj.props[key]);
    }
}

// Grabbing root div from the index.html
const root = document.getElementById("root")

// Creating element object
const elementObj = {
    type:"div",
    textContent:"This is custom React Component",
    props:{
        style:"background-color:orange;",
        id:"custom-div"
    }
}

// Calling the renderer function
renderer(elementObj, root);
```

### React original way of creating components

###### To create a react component manually by right way, use *'React.createElement'* method:

```javascript
// React.createElement(Tag Name, Object of Attributes, Text, variable (if any))
const element = React.createElement('div', {
    style:"background-color:orange",
    id:"custom-react-div"
}, "This is a custom React component");

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element)

// OR

const Element = function(){
    return React.createElement('div', {
    style:"background-color:orange",
    id:"custom-react-div"
}, "This is a custom React component");
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Element/>)
```
---

## 4. Key points to remember while using JS in HTML

- #### use *{ }* to write or insert JS variable or expression inside HTML.
- #### you can only add expressions or variables which are already evaluated
    - Example:
        ```javascript
        {if(true) username} // wrong
        {username?username:null} // right
        ```
- #### Evaluated expression means final outcome.
- #### Because every component gets converted into the object under the hood, thats why we can use if else, for loop etc in an object.      

---

## 5. States
#### To propagate the changes in UI we use states. When an state changes then the virtual DOM get reloaded and changes the state which reflected in UI.