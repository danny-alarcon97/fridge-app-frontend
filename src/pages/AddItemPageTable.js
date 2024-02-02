import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

export const AddItemPageTable = () => {
  const [name, setName] = useState("");
  const [itemType, setItemType] = useState("");
  const [brand, setBrand] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [price, setPrice] = useState("");
  const [compartment, setCompartment] = useState("");
  const [amountOf, setAmountOf] = useState("");

  const redirect = useNavigate();
  const location = useLocation();
  const originPath = location.state?.from || "/";

  const addItem = async (e) => {
    e.preventDefault();
    const newItem = {
      name,
      itemType,
      brand,
      purchaseDate,
      expireDate,
      price,
      compartment,
      amountOf,
    };
    try {
      const response = await fetch("/items", {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert("Item added successfully!");
        redirect(originPath);
      } else {
        const errMsg = await response.text();
        alert(`Error adding item: ${errMsg} (Status: ${response.status})`);
      }
    } catch (error) {
      alert(`An unexpected error occurred: ${error.message}`);
    }
  };

  return (
    <>
      <article>
        <h2>Add an Item</h2>
        <p>
          This page represents our current collection of kitchen items. The
          items can be added, edited, and deleted!
        </p>

        <form onSubmit={addItem}>
          <table id="items" className="item-table">
            <caption>Which Item are you adding?</caption>
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
                  <label for="itemType">Item Type</label>
                  <input
                    type="text"
                    placeholder="Type of Product"
                    value={itemType}
                    onChange={(e) => setItemType(e.target.value)}
                    id="itemType"
                  />
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
                  <label for="submit">Add to Compartment</label>
                  <button type="submit" id="submit">
                    <IoMdAdd />
                    Add to Compartment
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

export default AddItemPageTable;
