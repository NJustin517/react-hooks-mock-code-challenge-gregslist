import React, { useState } from "react";

function ListingCard({
  id,
  image = "https://via.placeholder.com/300x300",
  description,
  location,
  deleteListing,
}) {
  const [isFavorited, setIsFavorited] = useState(false);

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => deleteListing(id));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
