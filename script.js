
function startJourney() {
  document.getElementById("intro").classList.remove("active");
  document.getElementById("mainContent").style.display = "block";
}

/* PUZZLE LOGIC */
const puzzle = document.getElementById("puzzle");
let order = [...Array(9).keys()].sort(() => Math.random() - 0.5);

order.forEach(i => {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.style.backgroundPosition = `${(i % 3) * -100}px ${(Math.floor(i / 3)) * -100}px`;
  tile.draggable = true;
  puzzle.appendChild(tile);
});

/* NO BUTTON ESCAPE */
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.transform = `translate(${Math.random()*200-100}px, ${Math.random()*100}px)`;
});

/* CELEBRATION */
function celebrate() {
  document.getElementById("celebration").classList.add("show");
}
