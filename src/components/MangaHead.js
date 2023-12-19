import React from "react";
// import { Link } from "react-router-dom";

function TableHead() {
  return (
    <thead>
      <tr>
        <th title="This will edit the clicked manga.">Edit</th>
        <th title="What is the title of the manga?">Title</th>
        <th title="What volume number is it?">Volume</th>
        <th title="Who is the author of this manga?">Author</th>
        <th title="When was this manga published?">Released</th>
        <th title="What language are your reading this in?">Language</th>
        <th title="clicking delete will erase this manga from your list.">
          Delete
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
