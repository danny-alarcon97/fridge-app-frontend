import React from "react";
import { Link } from "react-router-dom";

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
            simplify your meal prep, Culinary Cache is the ideal solution for
            efficient kitchen management. It aims to make cooking more
            accessible, enjoyable, and waste-free, empowering you to make the
            most of every ingredient and bring out the best in your culinary
            creations.
          </p>
          <a href="#" className="btn btn--full margin-right-sm">
            Peek into my kitchen
          </a>
          <a href="#" className="btn btn--outline">
            Learn More &darr;
          </a>
        </div>
        <div className="hero-img-box">
          <img
            id="organized-fridge"
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
