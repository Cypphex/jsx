// 1. Import dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// 2. Create a React component
const App = () => {

    const buttonText = { text: 'Click me!' };

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                { buttonText.text }
            </button>
        </div>
    );
};

// 3. Display the React component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);