// Import dependencies
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components, styles, media
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import "./App.css";
import "./Queries.css";
import "./Style.css";

// Define the function that renders the content in Routes, using State.
function App() {
  const [item, setItemToEdit] = useState({});

  return (
    <>
      <BrowserRouter>
        <header className="header">
          <img
            className="logo"
            src="./favicons/culinary-cache-600x285.png"
            alt="logo"
          />
          <Navigation />
        </header>

        <main>
          <Hero />
        </main>

        {/* <footer>
          <p>&copy; 2023 Daniel Alarcon Huesca</p>
        </footer> */}
      </BrowserRouter>
    </>
  );
}

export default App;
