import React from "react";
import Manga from "./Mangas";
import MangaHead from "./MangaHead";

function MangaList({ mangas, onDelete, onEdit }) {
  return (
    <table className="manga-table">
      <caption>Add and Edit Manga Volumes</caption>
      <MangaHead />
      <tbody>
        {mangas.map((manga, i) => (
          <Manga manga={manga} key={i} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  );
}

export default MangaList;
