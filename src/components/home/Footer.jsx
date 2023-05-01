import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div class="container">
                    <div class="back-to-top">
                        <a href="#hero"><i class="fas fa-chevron-up"></i></a>
                    </div>
                    <div class="footer__content">
                        <div class="footer__content-about animate-top">
                            <h4>About Bakery</h4>
                            <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde accusantium sit repudiandae
                                incidunt quod eius recusandae blanditiis voluptates consectetur?</p>
                        </div>
                        <div class="footer__content-divider animate-bottom">
                            <div class="social-media">
                                <h4>Follow Us</h4>
                                <ul class="social-icons">
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fab fa-pinterest"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="newsletter-container">
                                <h4>Newsletter</h4>
                                <form action="" class="newsletter-form">
                                    <div class="newsletter-form-box">
                                        <input type="text" class="newsletter-input" placeholder="Your email address..." />
                                        <button class="newsletter-btn" type="submit">
                                            <i class="fas fa-envelope"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;