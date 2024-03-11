import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

export const EditItemPageTable = ({ itemToEdit }) => {
  const [name, setName] = useState(itemToEdit.name);
  const [itemType, setItemType] = useState(itemToEdit.itemType);
  const [brand, setBrand] = useState(itemToEdit.brand);
  const [purchaseDate, setPurchaseDate] = useState(itemToEdit.purchaseDate);
  const [expireDate, setExpireDate] = useState(itemToEdit.expireDate);
  const [price, setPrice] = useState(itemToEdit.price);
  const [compartment, setCompartment] = useState(itemToEdit.compartment);
  const [amountOf, setAmountOf] = useState(itemToEdit.amountOf);

  const redirect = useNavigate();
  const location = useLocation();
  const originPath = location.state?.from || "/";

  const editItem = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/items/${itemToEdit._id}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          itemType,
          brand,
          purchaseDate,
          expireDate,
          price,
          compartment,
          amountOf,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        alert("Item updated successfully!");
        redirect(originPath);
      } else {
        const errMessage = await response.text();
        alert(
          `Error updating item: ${errMessage} (Status: ${response.status})`
        );
      }
    } catch (error) {
      alert(`An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <>
      <article>
        <h2>Edit an Item</h2>
        <p>Edit the Item here!</p>

        <form onSubmit={editItem}>
          <table id="items" className="item-table">
            <caption>Which item are you editing?</caption>
            <thead>
              <tr>
                <th>Name</th>
                <th>Item Type</th>
                <th>Brand</th>
                <th>Purchase Date</th>
                <th>Expiration Date</th>
                <th>Price</th>
                <th>Compartment</th>
                <th>Amount of Items</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <label for="name">Item Name</label>
                  <input
                    type="text"
                    placeholder="Name of the Product"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                  />
                </td>

                <td>
                  <label htmlFor="itemType">Item Type</label>
                  <select
                    value={itemType}
                    onChange={(e) => setItemType(e.target.value)}
                    id="itemType"
                  >
                    <option value="">Select Type</option>{" "}
                    {/* Optional: Adds a prompt to select an option */}
                    <option value="meat">Meat</option>
                    <option value="dairy">Dairy</option>
                    <option value="fruit">Fruit</option>
                    <option value="veges">Veges</option>
                    <option value="seafood">Seafood</option>
                    <option value="other">Other</option>
                  </select>
                </td>

                <td>
                  <label for="brand">Product Brand</label>
                  <input
                    type="text"
                    placeholder="Brand of Product"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    id="brand"
                  />
                </td>

                <td>
                  <label for="purchaseDate">Date of Purchase</label>
                  <input
                    type="date"
                    placeholder="Date of Purchase"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                    id="purchaseDate"
                  />
                </td>

                <td>
                  <label for="expireDate">Expiration Date</label>
                  <input
                    type="date"
                    value={expireDate}
                    placeholder="Expiration Date"
                    onChange={(e) => setExpireDate(e.target.value)}
                    id="expireDate"
                  />
                </td>

                <td>
                  <label for="price">Item Price</label>
                  <input
                    type="number"
                    placeholder="Price of Product"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    id="price"
                  />
                </td>

                <td>
                  <label for="compartment">Kitchen Compartment</label>
                  <input
                    type="text"
                    placeholder="Kitchen Compartment"
                    value={compartment}
                    onChange={(e) => setCompartment(e.target.value)}
                    id="compartment"
                  />
                </td>

                <td>
                  <label for="amountOf">Amount of Items</label>
                  <input
                    type="number"
                    placeholder="Amount of this item"
                    value={amountOf}
                    onChange={(e) => setAmountOf(e.target.value)}
                    id="amountOf"
                  />
                </td>

                <td>
                  <label for="submit">Edit Item</label>
                  <button type="submit" id="submit">
                    <FaEdit />
                    Edit Item
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </article>
    </>
  );
};
export default EditItemPageTable;
