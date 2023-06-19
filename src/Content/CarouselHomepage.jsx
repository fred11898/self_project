import React from "react";

export const CarouselHomepage = () => {
    return (

    <div id="demo" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="img/cat.webp" alt="Stray Cats" class="d-block w-100" />
            </div>
            <div class="carousel-item">
            <img src="img/dog.webp" alt="Stray Dogs meet guard" class="d-block w-100" />
            </div>
            <div class="carousel-item">
            <img src="img/stray-dog.jpg" alt="Adopt Me" class="d-block w-100" />
            </div>
            <div class="carousel-item">
            <img src="img/cats.jpg" alt="Cat Eating" class="d-block w-100" />
            </div>
            <div class="carousel-item">
            <img src="img/Dog-volunteers.jpg" alt="PAW Dog-volunteers" class="d-block w-100" />
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </button>
    </div>

    );
};