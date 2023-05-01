import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const HeroSection = () => {
    const sr = ScrollReveal();

    const animateLeft = {
        origin: 'left',
        duration: 1000,
        distance: '25rem',
        delay: 300
    };

    const animateRight = {
        origin: 'right',
        duration: 1000,
        distance: '25rem',
        delay: 600
    };

    const animateTop = {
        origin: 'top',
        duration: 1000,
        distance: '25rem',
        delay: 600
    };

    const animateBottom = {
        origin: 'bottom',
        duration: 1000,
        distance: '25rem',
        delay: 600
    };

    useEffect(() => {
        sr.reveal('.animate-left', animateLeft);
        sr.reveal('.animate-right', animateRight);
        sr.reveal('.animate-top', animateTop);
        sr.reveal('.animate-bottom', animateBottom);
    }, []);

    return (
    <>
        <section class="hero" id="hero">
            <div class="container">
                <h1 class="headline">Let's Taste Perfection</h1>
                <a href="index.html" class="btn btn-primary">Order Now</a>
            </div>
        </section>
    </>
    );
}

export default HeroSection;