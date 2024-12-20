// Import dependencies
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components, styles, media
import Navigation from "./components/Navigation";
import "./App.css";
import "./Style.css";
import "./Queries.css";

import HomePage from "./pages/HomePage";

import ExpirePage from "./pages/ExpirePage";
import FridgePage from "./pages/FridgePage";
import FreezerPage from "./pages/FreezerPage";
import PantryPage from "./pages/PantryPage";
import EditItemPageTable from "./pages/EditItemPageTable";
import AddItemPageTable from "./pages/AddItemPageTable";

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
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route
                path="/expiration-items"
                element={<ExpirePage setItem={setItemToEdit} />}
              />

              <Route
                path="/fridge-items"
                element={<FridgePage setItem={setItemToEdit} />}
              />

              <Route
                path="/freezer-items"
                element={<FreezerPage setItem={setItemToEdit} />}
              />

              <Route
                path="/pantry-items"
                element={<PantryPage setItem={setItemToEdit} />}
              />

              <Route path="/add-item" element={<AddItemPageTable />} />
              <Route
                path="/edit-item"
                element={<EditItemPageTable itemToEdit={item} />}
              />
            </Routes>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 Daniel Alarcon Huesca</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
