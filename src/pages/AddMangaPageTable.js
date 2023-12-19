import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

export const AddMangaPageTable = () => {
  const [title, setTitle] = useState("");
  const [volume, setVolume] = useState("");
  const [author, setAuthor] = useState("");
  const [released, setReleased] = useState("");
  const [language, setLanguage] = useState("");

  const redirect = useNavigate();

  const addManga = async () => {
    const newManga = { title, volume, author, released, language };
    try {
      const response = await fetch("/mangas", {
        method: "POST",
        body: JSON.stringify(newManga),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert("Manga added successfully!");
        redirect("/mangas");
      } else {
        const errMsg = await response.text();
        alert(`Error adding manga: ${errMsg} (Status: ${response.status})`);
      }
    } catch (error) {
      alert(`An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <>
      <article>
        <h2>Add a Manga</h2>
        <p>
          This page represents our current collection of Manga volumes. The
          volumes can be added, edited, and deleted!
        </p>

        <table id="mangas" className="manga-table">
          <caption>Which Manga are you adding?</caption>
          <thead>
            <tr>
              <th>Title</th>
              <th>Volume</th>
              <th>Author</th>
              <th>Released</th>
              <th>Language</th>
              <th>Commit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label for="title">Manga Title</label>
                <input
                  type="text"
                  placeholder="Title of the manga"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                />
              </td>

              <td>
                <label for="volume">Manga Volume</label>
                <input
                  type="number"
                  placeholder="Manga volume number"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  id="volume"
                />
              </td>
              <td>
                <label for="author">Manga Author</label>
                <input
                  type="text"
                  placeholder="Author of the manga"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  id="author"
                />
              </td>

              <td>
                <label for="released">Date released</label>
                <input
                  type="date"
                  value={released}
                  placeholder="Date this volume was released"
                  onChange={(e) => setReleased(e.target.value)}
                  id="released"
                />
              </td>

              <td>
                <label for="language">Language</label>
                <input
                  type="text"
                  placeholder="Primary language of the manga"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  id="language"
                />
              </td>

              <td>
                <label for="submit">Add to Collection</label>
                <button type="submit" onClick={addManga} id="submit">
                  <IoMdAdd />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
};

export default AddMangaPageTable;
