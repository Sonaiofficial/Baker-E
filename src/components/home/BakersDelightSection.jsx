import React from "react";

const BakersDelightSection = () => {
    return (
        <>
            <section class="delight">
                <div class="container">
                    <div class="row">
                        <div class="description padding-right animate-left">
                            <div class="global-headline">
                                <h2 class="sub-headline">
                                    Baker's
                                </h2>
                                <h3 class="headline headline-dark">Delight</h3>
                                <div class="asterisk"><i class="fas fa-asterisk"></i></div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptatum dolor earum
                                accusamus suscipit. Officia atque vitae excepturi deserunt nihil?</p>
                            <a href="index.html" class="btn btn-secondary">Make A Reservation</a>
                        </div>
                        <div class="image-group animate-right">
                            <img class="animate-top" src="images/bakers-delight-1.jpg" alt="bread" />
                            <img class="animate-bottom" src="images/bakers-delight-2.jpg" alt="bread" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BakersDelightSection;