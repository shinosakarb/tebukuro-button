import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

var rootElement = document.getElementById('tebukuro-leash');
var eventId = rootElement.getAttribute("data-event-id")

ReactDOM.render(<App eventId={eventId}/>, rootElement);
