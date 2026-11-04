const trails = [
  { name: "Canyon Loop", distance: 4.2 },
  { name: "Creekside Path", distance: 0.8 },
  { name: "Eagle Ridge", distance: 0.5 },
  { name: "Fern Gully", distance: 2.6 },
  { name: "Lakeview Trail", distance: 3.4 },
  { name: "Pine Summit", distance: 6.1 },
  { name: "River Walk", distance: 2.1 },
  { name: "Wildflower Way", distance: 3.8 },
];

let ascending = true;

function toggleSortDirection() {
  ascending = !ascending;
  const button = document.getElementById("sortDirection");
  button.textContent = ascending ? "↑ Ascending" : "↓ Descending";
  displayTrails();
}

/* BEGIN COPY SECTION ------------------------------------- */

function displayTrails() {
  //TODO: Get the selected distance and sort preference, filter and sort the trails array, and update the table with the matching trails.
  
  let matchingTrails; // An array of trails that match the selected distance and sort preference
    


    /* HTML Chunk for use in table:
        <tr>
          <td>${trail.name}</td>
          <td>${trail.distance.toFixed(1)} miles</td>
        </tr>
    */

  

  document.getElementById("status").textContent =
    `${matchingTrails.length} trail(s) found.`;
}

function addTrail(event) {
  event.preventDefault();

  // TODO: Add code to get the trail name and distance and add a new trail to the trails array. Then call displayTrails() to update the table.
  
  
  

  //Resets the form fields to empty
  document.getElementById("trailForm").reset();
}

/* END COPY SECTION ------------------------------------- */

displayTrails();
