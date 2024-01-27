import React from "react";
import Item from "./Items";

function ItemList({ items, onDelete, onEdit }) {
  return (
    <table className="item-table">
      <caption>Add and Edit Kitchen Items</caption>
      <tbody>
        {items.map((item, i) => (
          <Item item={item} key={i} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;
