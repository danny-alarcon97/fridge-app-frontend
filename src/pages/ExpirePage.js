import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ItemList from "../components/ItemList";

function ExpirePage({ setItem }) {
  // Use the Navigate for redirection
  const redirect = useNavigate();

  // Use state to bring in the data
  const [items, setItems] = useState([]);
  const [loadingError, setLoadingError] = useState(null);

  // RETRIEVE the entire list of items
  const loadItems = async () => {
    try {
      const response = await fetch("/items");
      const fetchedItems = await response.json();
      if (Array.isArray(fetchedItems)) {
        // Filter out items without a valid expireDate
        const validItems = fetchedItems.filter(
          (item) => item.expireDate && item.expireDate !== "N/A"
        );

        // Optionally, you can still sort the remaining items by expireDate
        const sortedItems = validItems.sort(
          (a, b) => new Date(a.expireDate) - new Date(b.expireDate)
        );

        setItems(sortedItems);
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
    redirect("/edit-item", { state: { from: "/expiration-items" } });
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
      <section className="section-meals" id="meals">
        <div className="container center-text">
          <span className="subheading">Expiration List</span>
          <h2 className="heading-secondary">Items Expiring Soon</h2>
        </div>

        {loadingError ? (
          <p>Error loading items: {loadingError}</p>
        ) : (
          <ItemList items={items} onEdit={onEditItem} onDelete={onDeleteItem} />
        )}
      </section>
    </>
  );
}

export default ExpirePage;
