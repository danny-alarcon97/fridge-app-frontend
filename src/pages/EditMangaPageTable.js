import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

export const EditMangaPageTable = ({ mangaToEdit }) => {
  const [title, setTitle] = useState(mangaToEdit.title);
  const [volume, setVolume] = useState(mangaToEdit.volume);
  const [author, setAuthor] = useState(mangaToEdit.author);
  const [released, setReleased] = useState(mangaToEdit.released);
  const [language, setLanguage] = useState(mangaToEdit.language);

  const redirect = useNavigate();

  const editManga = async () => {
    try {
      const response = await fetch(`/mangas/${mangaToEdit._id}`, {
        method: "PUT",
        body: JSON.stringify({ title, volume, author, released, language }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Manga updated successfully!");
        redirect("/mangas");
      } else {
        const errMessage = await response.text();
        alert(
          `Error updating manga: ${errMessage} (Status: ${response.status})`
        );
      }
    } catch (error) {
      alert(`An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <>
      <article>
        <h2>Edit a Manga</h2>
        <p>Edit the Manga Volumes here!</p>
        <table id="mangas" className="manga-table">
          <caption>Which manga are you editing?</caption>
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
                <label for="title">Movie title</label>
                <input
                  type="text"
                  placeholder="Title of the movie"
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
                  placeholder="Primary language of the movie"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  id="language"
                />
              </td>

              <td>
                <label for="submit">Edit Manga</label>
                <button type="submit" onClick={editManga} id="submit">
                  <FaEdit />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
};
export default EditMangaPageTable;
