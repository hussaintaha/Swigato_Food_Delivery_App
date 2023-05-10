import React from 'react';
import '../styles/section.css';
import Typewriter from "typewriter-effect"
const Section = () => {


  return (
    <>
      {/* // <!-- Hero Section --> */}
      <div class="section flex" id="hero-section">
        <div class="text">
          <h1 class="primary">
            It's Not Just Food, <br />
            It's an <span>Experience</span>
          </h1>

          <p class="tertiary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
            provident dolorum. Voluptatum ducimus minima quasi unde, voluptatibus
            soluta eligendi. Enim, architecto autem.
          </p>
          
        <a href="#menu" class="btn">Explore Menu</a>
      </div>
      <div class="visual">
        <img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg" alt="" />
      </div>
    </div >
      {/* // <!-- End Hero Section --> */ }

    


    </>
  );
};

export default Section;
