// 10-update_uniq_items.js
function updateUniqueItems(map) {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error("Cannot process");
  }

  // Iterate over the entries in the Map
  map.forEach((value, key) => {
    // If the quantity is 1, update it to 100
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map; // Return the updated Map
}

export default updateUniqueItems;

