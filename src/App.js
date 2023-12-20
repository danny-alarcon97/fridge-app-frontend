// Import dependencies
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components, styles, media
import Navigation from "./components/Navigation";
import "./App.css";

import HomePage from "./pages/HomePage.js";

// Define the function that renders the content in Routes, using State.
function App() {
  const [item, setItemToEdit] = useState({});

  return (
    <>
      <BrowserRouter>
        <header>
          <img id="header-img" src="./favicons/favicon-32x32.png" alt="logo" />
          <h1>Daniel Alarcon Huesca</h1>
        </header>

        <Navigation />

        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&copy; 2023 Daniel Alarcon Huesca</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
