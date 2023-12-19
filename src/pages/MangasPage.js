import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

import MangaList from "../components/MangaList";
import { Link } from "react-router-dom";

function MangasPage({ setManga }) {
  // Use the Navigate for redirection
  const redirect = useNavigate();

  // Use state to bring in the data
  const [mangas, setMangas] = useState([]);
  const [loadingError, setLoadingError] = useState(null);

  // RETRIEVE the entire list of movies
  const loadMangas = async () => {
    try {
      const response = await fetch("/mangas");
      const mangas = await response.json();
      if (Array.isArray(mangas)) {
        setMangas(mangas);
      } else {
        throw new Error("Data fetched is not an array");
      }
    } catch (error) {
      console.error("Failed to fetch mangas:", error);
      setLoadingError(error.message);
    }
  };

  // const loadMangas = async () => {
  //   const response = await fetch("/mangas");
  //   const data = await response.json();
  //   setMangas(data);
  // };

  // UPDATE a single manga
  const onEditManga = async (manga) => {
    setManga(manga);
    redirect("/edit-manga");
  };

  // DELETE a single manga
  const onDeleteManga = async (_id) => {
    try {
      const response = await fetch(`/mangas/${_id}`, { method: "DELETE" });
      if (response.status === 200) {
        loadMangas();
      } else {
        throw new Error(`Failed to delete manga with ID ${_id}`);
      }
    } catch (error) {
      console.error("Deletion error:", error);
    }
  };

  // LOAD all the mangas
  useEffect(() => {
    loadMangas();
  }, []);

  // DISPLAY the mangas or an error message
  return (
    <>
      <h2>Manga Collection</h2>
      <p>This page holds our collection of manga volumes!</p>
      <Link to="/add-manga">
        <i>
          <IoMdAddCircle title="add a manga to your list." />
          ADD MANGA
        </i>
      </Link>
      {loadingError ? (
        <p>Error loading mangas: {loadingError}</p>
      ) : (
        <MangaList
          mangas={mangas}
          onEdit={onEditManga}
          onDelete={onDeleteManga}
        />
      )}
    </>
  );
}

export default MangasPage;
