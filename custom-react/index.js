const createDOM=(element, parent)=>{
    const newElement = document.createElement(element.type)
    for(let key in element.props){
        newElement.setAttribute(`${key}`,`${element.props[key]}`)
    }
    newElement.innerText=element.text

    parent.appendChild(newElement)
}


const reactElement = {
    type:'a',
    props:{
        href:"www.google.com",
        target:"_blank",
        class:"hello"
    },
    text:"Click here to vist google"
}


const root = document.getElementById("root")

createDOM(reactElement, root)
