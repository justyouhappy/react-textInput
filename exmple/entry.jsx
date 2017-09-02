import TextInput from '../src/js/entry.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<TextInput style={{width: '80%', margin: '50px auto', padding: '40px 0', border: '1px solid #c6c8ce'}}/>, app);