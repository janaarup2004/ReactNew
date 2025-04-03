import React from "react"
import ReactDOM from 'react-dom/client'
import App from "./App.jsx"

function MyApp(){
    return(
        <div>
            <h1>
                Custom App!
            </h1>
            </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }


const anotherElement=(
    <a href="https://google.com" target='_blank'> visit Google</a>
)

const anotherUser="arni@145"

const reactElement=React.createElement(
    'a',
    {href:"https://facebook.com", taget:'_blank'},
    'Click here to visit facebook',
    <p>Hello</p>,
    <br></br>,
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

  reactElement
)

