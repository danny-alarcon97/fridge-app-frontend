import React from "react";
import Item from "./Items";

function ItemList({ items, onDelete, onEdit }) {
  return (
    <>
      <div className="container grid grid--3-cols margin-bottom-md">
        {items.map((item, i) => (
          <Item item={item} key={i} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
