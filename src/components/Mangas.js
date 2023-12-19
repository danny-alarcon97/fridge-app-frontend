import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

function Manga({ manga, onEdit, onDelete }) {
  return (
    <tr>
      <td>
        <i>
          <FaRegEdit
            onClick={() => onEdit(manga)}
            title="Editing will change the manga"
          />
        </i>
      </td>
      <td>{manga.title}</td>
      <td>{manga.volume}</td>
      <td>{manga.author}</td>
      <td>{manga.released.slice(0, 10)}</td>
      <td>{manga.language}</td>
      <td>
        <i>
          <FaTrashCan
            onClick={() => onDelete(manga._id)}
            title="Clicking this will delete this manga from your list"
          />
        </i>
      </td>
    </tr>
  );
}

export default Manga;
