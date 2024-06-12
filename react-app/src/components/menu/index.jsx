import React from 'react';
import styles from './index.css'
import close from '../img/close.png'
import open from '../img/open.png'

export const Menu = ({ isOpen }) => {
    return (
        <button className="menu">
            {isOpen ? (
                <img src={close} alt="" />
            ) : (
                <img src={open} alt="" />
            )}
        </button>
    );
};