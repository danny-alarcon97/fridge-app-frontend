// Import dependencies
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components, styles, media
import Navigation from "./components/Navigation";
import "./App.css";

import HomePage from "./pages/HomePage.js";
import TopicsPage from "./pages/TopicsPage.js";
import GalleryPage from "./pages/GalleryPage.js";
// import OrderPage from "./pages/OrderPage.js";
// import ContactPage from "./pages/ContactPage.js";
// import StaffPage from "./pages/StaffPage.js"

import MangasPage from "./pages/MangasPage.js";

import EditMangaPageTable from "./pages/EditMangaPageTable.js";
import AddMangaPageTable from "./pages/AddMangaPageTable.js";

// Define the function that renders the content in Routes, using State.
function App() {
  const [manga, setMangaToEdit] = useState({});

  return (
    <>
      <BrowserRouter>
        <header>
          <img id="header-img" src="./favicons/favicon-32x32.png" alt="logo" />
          <h1>Daniel Alarcon Huesca</h1>
          <p>Web Development Portfolio</p>
        </header>

        <Navigation />

        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />

              {/* 
              <Route path="/order" element={<OrderPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/staff" element={<StaffPage />} /> */}

              <Route
                path="/mangas"
                element={<MangasPage setManga={setMangaToEdit} />}
              />

              <Route path="/add-manga" element={<AddMangaPageTable />} />
              <Route
                path="/edit-manga"
                element={<EditMangaPageTable mangaToEdit={manga} />}
              />
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
