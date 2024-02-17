import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";

import ItemList from "../components/ItemList";

function FridgePage({ setItem }) {
  // Use the Navigate for redirection
  const redirect = useNavigate();

  // Use state to bring in the data
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(null);

  const navigateToAddItem = () => {
    redirect("/add-item", { state: { from: "/fridge-items" } });
  };

  // RETRIEVE the entire list of fridge items
  const loadItems = async () => {
    setLoading(true);
    try {
      const response = await fetch("/items");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedItems = await response.json();
      if (Array.isArray(fetchedItems)) {
        const fridgeItems = fetchedItems.filter(
          (item) => item.compartment.toLowerCase() === "fridge"
        );
        setItems(fridgeItems);
      } else {
        throw new Error("Data fetched is not an array");
      }
    } catch (error) {
      console.error("Failed to fetch items:", error);
      setLoadingError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE a single item
  const onEditItem = async (item) => {
    setItem(item);
    redirect("/edit-item", { state: { from: "/fridge-items" } });
  };

  // DELETE a single item
  const onDeleteItem = async (_id) => {
    try {
      const response = await fetch(`/items/${_id}`, { method: "DELETE" });
      if (response.status === 200) {
        loadItems(); // Refresh the list after deletion
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
      <section className="section-meals" id="meals">
        <div className="container center-text">
          <span className="subheading">Cold Essentials</span>
          <h2 className="heading-secondary">Fridge Compartment</h2>
        </div>

        <h2>Item's in your Fridge compartment</h2>
        <p>This page holds our collection of Fridge items</p>
        <button
          onClick={navigateToAddItem}
          title="Add an item to your compartment"
        >
          <IoMdAddCircle />
          <span>ADD ITEM</span>
        </button>
        {loading && <p>Loading...</p>}
        {loadingError && <p>Error loading items: {loadingError}</p>}
        {!loading && !loadingError && (
          <ItemList items={items} onEdit={onEditItem} onDelete={onDeleteItem} />
        )}
      </section>
    </>
  );
}

export default FridgePage;
