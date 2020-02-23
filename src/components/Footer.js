import React from 'react';
import FooterStyles from './Footer.module.css';

const Footer = () => (
    <footer className={FooterStyles.footerClass}>
        <div className="container">
            <span className="text-muted">Gatsby Project 2019</span>
        </div>
    </footer>
);

export default Footer;