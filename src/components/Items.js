import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

function Item({ item, onEdit, onDelete }) {
  return (
    <div className="meal">
      <img src="./img/customers/ben.jpg" className="meal-img" alt="user" />
      <div className="meal-content">
        <div className="meal-tags">
          <span className="tag tag--vegan">
            {item.itemType ? item.itemType : "other"}
          </span>
        </div>
        <p className="meal-title">{item.name}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <span>
              <strong>Brand:</strong> {item.brand}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>Purchase Date:</strong>{" "}
              {item.purchaseDate ? item.purchaseDate.slice(0, 10) : "N/A"}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>Expiration Date:</strong>{" "}
              {item.expireDate ? item.expireDate.slice(0, 10) : "N/A"}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>Price: $</strong> {item.price}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>Compartment:</strong> {item.compartment}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>Amount Of:</strong> {item.amountOf}
            </span>
          </li>
          <li className="meal-attribute meal-attribute-icons">
            <FaRegEdit
              onClick={() => onEdit(item)}
              title="Edit Item"
              className="meal-icon"
            />
            <FaTrashCan
              onClick={() => onDelete(item._id)}
              title="Delete Item"
              className="meal-icon"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Item;
