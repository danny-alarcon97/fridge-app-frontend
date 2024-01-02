import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

import ItemList from "../components/ItemList";
import { Link } from "react-router-dom";

function FreezerPage({ setItem }) {
  // Use the Navigate for redirection
  const redirect = useNavigate();

  // Use state to bring in the data
  const [items, setItems] = useState([]);
  const [loadingError, setLoadingError] = useState(null);

  // RETRIEVE the entire list of freezer items
  const loadItems = async () => {
    try {
      const response = await fetch("/items");
      const allItems = await response.json();
      if (Array.isArray(allItems)) {
        const freezerItems = allItems.filter(
          (item) => item.compartment === "freezer"
        );
        setItems(freezerItems);
      } else {
        throw new Error("Data fetched is not an array");
      }
    } catch (error) {
      console.error("Failed to fetch items:", error);
      setLoadingError(error.message);
    }
  };

  // UPDATE a single item
  const onEditItem = async (item) => {
    setItem(item);
    redirect("/edit-item");
  };

  // DELETE a single item
  const onDeleteItem = async (_id) => {
    try {
      const response = await fetch(`/items/${_id}`, { method: "DELETE" });
      if (response.status === 200) {
        loadItems();
      } else {
        throw new Error(`Failed to delete item with ID ${_id}`);
      }
    } catch (error) {
      console.error("Deletion error:", error);
    }
  };

  // LOAD all the items
  useEffect(() => {
    loadItems();
  }, []);

  // DISPLAY the items or an error message
  return (
    <>
      <h2>Item's in your Fridge compartment</h2>
      <p>This page holds our collection of Fridge items</p>
      <Link to="/add-item">
        <i>
          <IoMdAddCircle title="add an item to your compartment." />
          ADD ITEM
        </i>
      </Link>
      {loadingError ? (
        <p>Error loading items: {loadingError}</p>
      ) : (
        <ItemList items={items} onEdit={onEditItem} onDelete={onDeleteItem} />
      )}
    </>
  );
}

export default FreezerPage;