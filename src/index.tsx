import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';

/*
let postData = [
    {like: '12', message: 'Hello world'},
    {like: '16', message: 'Learning React....'},
    {like: '19', message: 'Fucked up...'}
]
let messagesData = [
    {id: 1, messages: 'Holla'},
    {id: 2, messages: 'Im Lolaaaaaa!!'},
    {id: 3, messages: 'Im a pirate QUEEN!!'},
    {id: 4, messages: 'Joking...)!!'},

]
let dialogsData = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Kate'},
    {id: 3, name: 'Mario'},
    {id: 4, name: 'Jovanni'},
    {id: 5, name: 'Franchesco'},
    {id: 6, name: 'Karin'},
]
*/

ReactDOM.render(
  <React.StrictMode>
    <App state={state}

    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
