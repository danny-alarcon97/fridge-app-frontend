import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

function Item({ item, onEdit, onDelete }) {
  return (
    <tr>
      <td>
        <i>
          <FaRegEdit
            onClick={() => onEdit(item)}
            title="Editing will change the item"
          />
        </i>
      </td>
      <td>{item.name}</td>
      <td>{item.brand}</td>
      <td>
        {item.purchaseDate
          ? item.purchaseDate.slice(0, 10)
          : "No purchase date provided"}
      </td>
      <td>
        {item.expireDate
          ? item.expireDate.slice(0, 10)
          : "No expiration date provided"}
      </td>
      <td>{item.price}</td>
      <td>{item.compartment}</td>
      <td>{item.amountOf}</td>
      <td>
        <i>
          <FaTrashCan
            onClick={() => onDelete(item._id)}
            title="Clicking this will delete this item from your kitchen compartment"
          />
        </i>
      </td>
    </tr>
  );
}

export default Item;
