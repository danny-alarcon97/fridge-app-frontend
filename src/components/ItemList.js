import React from "react";
import Item from "./Items";

function ItemList({ items, onDelete, onEdit }) {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Items</span>
        <h2 className="heading-secondary">Current Compartment Items</h2>
      </div>

      <div className="container grid grid--3-cols margin-bottom-md">
        {items.map((item, i) => (
          <Item item={item} key={i} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </section>
  );
}

export default ItemList;
