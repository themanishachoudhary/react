function customRender(reactElement, container){
    const domElement = document.createElement
    (reactElement.type)
    docElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
}

import { Children } from "react"

const reactElement = {
    type: 'a',
    props: {
        href: "hhtps://google.com",
        target: "_blank"
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector("#root")

