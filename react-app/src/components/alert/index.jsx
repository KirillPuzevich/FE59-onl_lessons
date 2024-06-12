import React from 'react';
import './index.css';
import stop from '../img/stop.jpg'
import done from '../img/done.jpg'
import info from '../img/info.jpg'
import notification from '../img/notification.jpg'
import warning from '../img/warning.jpg'

export const Alert = ({ status }) => {
  let imgSrc = '';
  let backgroundColor = '';
  let border = '';

  switch (status) {
    case 'done':
      imgSrc = done;
      backgroundColor = 'aquamarine';
      border = '3px green solid'
      break;
    case 'info':
      imgSrc = info;
      backgroundColor = 'gray';
      border = '3px black solid'
      break;
    case 'notification':
      imgSrc = notification;
      backgroundColor = 'white';
      border = '3px blue solid'
      break;
    case 'stop':
      imgSrc = stop;
      backgroundColor = 'pink';
      border = '3px red solid'
      break;
    case 'warning':
      imgSrc = warning;
      backgroundColor = 'yellow';
      border = '3px orange solid'
      break;
  }

  return (
    <div className="alert" style={{ backgroundColor, border }}>
      <img className="alert__img" src={imgSrc} alt="" />
      <p>Lorem ipsum</p>
      <button className='alert-btn'>x</button>
    </div>
  );
};