import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

// Capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  if (!string) return ""; // Return an empty string if input is falsy (e.g., undefined, '')
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Item({ item, onEdit, onDelete }) {
  const formattedPrice = item.price
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(item.price)
    : "N/A";

  return (
    <div className="meal">
      <img src="./img/customers/ben.jpg" className="meal-img" alt="user" />
      <div className="meal-content">
        <div className="meal-tags">
          <span className="tag tag--vegan">
            {item.itemType ? item.itemType : "other"}
          </span>
        </div>
        <p className="meal-title">{capitalizeFirstLetter(item.name)}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <span>
              <strong>Brand:</strong> {capitalizeFirstLetter(item.brand)}
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
              <strong>Price:</strong> {formattedPrice}
            </span>
          </li>
          <li className="meal-attribute">
            <span>
              <strong>Compartment:</strong>{" "}
              {capitalizeFirstLetter(item.compartment)}
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
