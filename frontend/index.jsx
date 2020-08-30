  import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app.jsx'

function Index() {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

ReactDOM.render(<Index />, document.getElementById('root'));