import React from "react";
// import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            Your recipe for kitchen perfection, where every ingredient has its
            place
          </h1>
          <p className="hero-description">
            Culinary Cache is a dynamic app designed to transform your kitchen
            into a haven of organization and culinary inspiration. This
            versatile digital assistant helps you manage your kitchen inventory
            with ease, ensuring you always know what's in your pantry and
            fridge. Whether you're a cooking enthusiast or just looking to
            simplify your meal prep, this app is the ideal solution for
            efficient kitchen management.
          </p>
          <a href="#" className="btn btn--full margin-right-sm">
            Peek into my kitchen
          </a>
          <a href="#how" className="btn btn--outline">
            Learn More &darr;
          </a>
          <div className="user-population">
            <div className="user-imgs">
              <img
                src="./img/customers/ben.jpg"
                alt="Customer profile picture 1"
              />
              <img
                src="./img/customers/customer-1.jpg"
                alt="Customer profile picture 2"
              />
              <img
                src="./img/customers/customer-2.jpg"
                alt="Customer profile picture 3"
              />
              <img
                src="./img/customers/customer-3.jpg"
                alt="Customer profile picture 4"
              />
              <img
                src="./img/customers/customer-4.jpg"
                alt="Customer profile picture 5"
              />
              <img
                src="./img/customers/customer-5.jpg"
                alt="Customer profile picture 6"
              />
            </div>
            <p className="user-text">
              <span>Empowering</span> you to make the most of every ingredient
              and bring out the best in your culinary creations.
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img
            src="./img/organized-fridge.png"
            className="hero-img"
            alt="Organized fridge with food stored in neat containers"
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Hero;
