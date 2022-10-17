import React from 'react';
import ReactDOM from 'react-dom/client';
import APIrequest from './APIrequest';
import App from './App';
import UserStore from './UserStore';
import './bootstrap/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <UserStore>
      <APIrequest>
         <App />
      </APIrequest>
   </UserStore>
);
