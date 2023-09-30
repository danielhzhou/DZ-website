import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
        </section>
        <div className="footer-links">
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="social-icons">
                    <a className="social-icon-link instagram"
                    href = 'https://www.instagram.com/ddanielzhou/'
                    target="_blank"
                    aria-label="Instagram"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="social-icon-link github"
                    href="https://github.com/scrumptiousnake"
                    target="_blank"
                    aria-label="Github"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="social-icon-link envelope"
                    href="mailto:dspamzh@gmail.com"
                    target="_blank"
                    aria-label="Envelope"
                    >
                        <i className="fa fa-envelope"></i>
                    </a>
                    <a className="social-icon-link spotify"
                    href="https://open.spotify.com/user/z2axvd6ibjexvqp2wz2htjaoe"
                    target="_blank"
                    aria-label="Spotify"
                    >
                        <i className="fab fa-spotify"></i>
                    </a>
                    <a className="social-icon-link linkedin"
                    href="https://www.linkedin.com/in/daniel-zhou-69b0a5293/"
                    target="_blank"
                    aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer
