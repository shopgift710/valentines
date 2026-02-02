/* INTRO */
function startJourney() {
  document.getElementById("intro").classList.remove("active");
  document.getElementById("mainContent").style.display = "block";
}

/* PUZZLE LOGIC */
const puzzle = document.getElementById("puzzle");
const successMsg = document.getElementById("puzzleSuccess");

let pieces = [
  "piece_1.jpg",
  "piece_2.jpg",
  "piece_3.jpg",
  "piece_4.jpg",
  "piece_5.jpg",
  "piece_6.jpg",
  "piece_7.jpg",
  "piece_8.jpg",
  "piece_9.jpg"
];

// shuffle
pieces.sort(() => Math.random() - 0.5);

let dragged = null;

pieces.forEach((img, index) => {
  const div = document.createElement("div");
  div.className = "puzzle-piece";
  div.draggable = true;

  const image = document.createElement("img");
  image.src = `images/${img}`;
  image.dataset.correct = `piece_${index + 1}.jpg`;

  div.appendChild(image);
  puzzle.appendChild(div);

  div.addEventListener("dragstart", () => {
    dragged = div;
    div.classList.add("dragging");
  });

  div.addEventListener("dragend", () => {
    dragged = null;
    div.classList.remove("dragging");
    checkSolved();
  });

  div.addEventListener("dragover", e => e.preventDefault());

  div.addEventListener("drop", () => {
    if (dragged !== div) {
      const temp = div.innerHTML;
      div.innerHTML = dragged.innerHTML;
      dragged.innerHTML = temp;
    }
  });
});

function checkSolved() {
  const all = document.querySelectorAll(".puzzle-piece img");
  let solved = true;

  all.forEach((img, i) => {
    if (!img.src.includes(`piece_${i + 1}.jpg`)) {
      solved = false;
    }
  });

  if (solved) {
    successMsg.style.display = "block";
  }
}

/* NO BUTTON ESCAPE */
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.transform =
    `translate(${Math.random() * 200 - 100}px, ${Math.random() * 100}px)`;
});

/* CELEBRATION */
function celebrate() {
  document.getElementById("celebration").classList.add("show");
}

/* MEMORY MODAL */
const memories = {
  1: {
    title: "The night that felt ordinary",
    story: `Nothing special happened.
No plans, no photos.
Just time moving quietly.

But it didn’t feel empty anymore.`,
    images: ["images/memory1.jpg", "images/memory2.jpg"]
  },
  2: {
    title: "A moment we didn’t notice",
    story: `We were talking about nothing.
And somehow,
that meant everything.`,
    images: ["images/memory2.jpg"]
  },
  3: {
    title: "A day that changed something",
    story: `That day wasn’t dramatic.
But something shifted.
And I never went back.`,
    images: ["images/memory3.jpg"]
  }
};

function openModal(id) {
  const data = memories[id];
  document.getElementById("modalTitle").innerText = data.title;
  document.getElementById("modalStory").innerText = data.story;

  const gallery = document.getElementById("modalImages");
  gallery.innerHTML = "";
  data.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });

  document.getElementById("memoryModal").classList.add("show");
}

function closeModal() {
  document.getElementById("memoryModal").classList.remove("show");
}
