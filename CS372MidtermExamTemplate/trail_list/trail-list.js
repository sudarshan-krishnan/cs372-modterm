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
  const selectedDistance = document.getElementById("distanceSelect").value;
  const selectedSort = document.getElementById("sortSelect").value;

  let matchingTrails = [...trails];

  if (selectedDistance !== "All") {
    matchingTrails = matchingTrails.filter((trail) => {
      if (selectedDistance === "0-1") {
        return trail.distance >= 0 && trail.distance <= 1;
      }

      if (selectedDistance === "1-3") {
        return trail.distance > 1 && trail.distance <= 3;
      }

      return trail.distance > 3;
    });
  }

  matchingTrails.sort((a, b) => {
    if (selectedSort === "name") {
      const comparison = a.name.localeCompare(b.name);
      return ascending ? comparison : -comparison;
    }

    const comparison = a.distance - b.distance;
    return ascending ? comparison : -comparison;
  });

  const rowsHtml = matchingTrails
    .map(
      (trail) => `
        <tr>
          <td>${trail.name}</td>
          <td>${trail.distance.toFixed(1)} miles</td>
        </tr>
      `,
    )
    .join("");

  document.getElementById("trailRows").innerHTML =
    rowsHtml ||
    '<tr><td colspan="2" class="empty-message">No trails match your filters.</td></tr>';

  document.getElementById("status").textContent =
    `${matchingTrails.length} trail(s) found.`;
}

function addTrail(event) {
  event.preventDefault();

  const name = document.getElementById("trailName").value.trim();
  const distance = Number.parseFloat(document.getElementById("trailDistance").value);

  if (!name || Number.isNaN(distance) || distance <= 0) {
    return;
  }

  trails.push({ name, distance });
  displayTrails();

  document.getElementById("trailForm").reset();
}

/* END COPY SECTION ------------------------------------- */

displayTrails();
