import React from "react";

const MenuSection = () => {
    return (
        <>
            <section class="menu">
                <div class="container">
                    <div class="row">
                        <div class="image-group padding-right animate-left">
                            <img src="images/square-1.jpg" alt="image" />
                            <img src="images/square-2.jpg" alt="image" />
                            <img src="images/square-3.jpg" alt="image" />
                            <img src="images/square-4.jpg" alt="image" />
                        </div>
                        <div class="description animate-right">
                            <div class="global-headline">
                                <h2 class="sub-headline">
                                    Explore
                                </h2>
                                <h3 class="headline headline-dark">Menu</h3>
                                <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum dolor earum
                                accusamus suscipit. Officia atque vitae excepturi deserunt nihil?</p>
                            <a href="index.html" class="btn btn-secondary">See Full Menu</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MenuSection;