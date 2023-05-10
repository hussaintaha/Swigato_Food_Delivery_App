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
            Nothing Brings People Together <br />
            Like Good <span style={{fontWeight:"bold"}}>Food</span>
          </h1>
           <Typewriter
                    options={{
                        strings: `Use coupon FIRST500 and get upto 500 Rs. off on your first order.`,
                        autoStart: true,
                        loop: true,
                    }}
                />

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
