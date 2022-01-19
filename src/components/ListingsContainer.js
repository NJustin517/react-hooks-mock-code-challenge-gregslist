import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchFilter, sorted }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((fetchedListings) => setListings(fetchedListings));
  }, []);

  function deleteListing(id) {
    const updatedListings = listings.filter((item) => item.id !== id);
    setListings(updatedListings);
  }

  function compare(a, b) {
    if (a.location.toLowerCase() < b.location.toLowerCase()) {
      return -1;
    }
    return 0;
  }

  let sortedList;

  if (sorted) {
    sortedList = [...listings].sort(compare);
  } else {
    sortedList = listings;
  }

  const filteredListings = sortedList.filter((item) =>
    item.description.includes(searchFilter)
  );

  const listingCards = filteredListings.map((item) => {
    return (
      <ListingCard
        key={item.id}
        id={item.id}
        image={item.image}
        description={item.description}
        location={item.location}
        deleteListing={deleteListing}
      />
    );
  });

  return (
    <main>
      <ul className="cards">{listingCards}</ul>
    </main>
  );
}

export default ListingsContainer;
