import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const app = document.getElementById('app');

const root = ReactDOM.createRoot(app)

const button1 = React.createElement('button', { "data-id": 1, "class": "btn" } , 'Button 1')
const button2 = React.createElement('button', { "data-id": 2, "class": "btn" } , 'Button 2')
const button3 = React.createElement('button', { "data-id": 3, "class": "btn" } , 'Button 3')

const container = React.createElement(React.Fragment, null, [button1, button2, button3])


root.render(container)