import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const app = document.getElementById('app');

const root = ReactDOM.createRoot(app)

const Div = React.createElement('button', null, 'Test')

root.render(Div)