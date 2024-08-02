import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imageProp = ["pizza", "burger", "shake"];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      
        
          <div
          
            style={{ maxHeight: "36rem" }}
            className="object-center brightness-50"
          >
            <img
              src=".\top-view-fast-food-table.jpg"
              alt="pizza"
            />
          </div>
          <div
          
            style={{ maxHeight: "36rem" }}
            className="object-center brightness-50"
          >
            <img
              src=".\top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table.jpg"
              alt="pizza"
            />
          </div>
          <div
          
            style={{ maxHeight: "36rem" }}
            className="object-center brightness-50"
          >
            <img
              src=".\fast-food-tray-white-table.jpg"
              alt="pizza"
            />
          </div>
          
    
   
    </Carousel>
  );
}

export default CarouselComponent;