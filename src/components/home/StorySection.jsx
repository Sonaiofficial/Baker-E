import React from "react";

const StorySection = () => {
    return (
        <>
            <section class="our-story">
                <div class="container">
                    <div class="row">
                        <div class="description padding-right animate-left">
                            <div class="global-headline">
                                <h2 class="sub-headline">
                                    Discover
                                </h2>
                                <h3 class="headline headline-dark">Our Story</h3>
                                <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum dolor earum
                                accusamus suscipit. Officia atque vitae excepturi deserunt nihil?</p>
                            <a href="index.html" class="btn btn-secondary">Learn More</a>
                        </div>
                        <div class="image animate-right">
                            <img class="story-img" src="images/story-img.jpg" alt="bread" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default StorySection;