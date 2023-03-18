const canvas = document.getElementById("drawing-board");
const ctx = canvas.getContext("2d");
const toolbar = document.getElementById("toolbar");
const u = import.meta.glob("/assets/icons/*");

const x = Object.keys(u);

x.forEach((i) => {
  let xx = document.createElement("img");
  xx.src = i;
  xx.setAttribute("data-icon", i);
  xx.id = "icon";
  toolbar.appendChild(xx);
});

let selectedIcon = null;

canvas.width = 800;
canvas.height = 800;

// keep it for a while
canvas.style.border = "1px solid black";
canvas.style.margin = "0 auto";

var y = new Image();
y.src = "../assets/mapa.png";
y.onload = () => {
  ctx.drawImage(y, 0, 0, 800, 800);
};

canvas.addEventListener("mousedown", (e) => {
  let c = new Image();
  c.src = selectedIcon;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.drawImage(c, x, y, 24, 24);
});

toolbar.addEventListener("click", (e) => {
  if (e.target.id === "clear") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  if (e.target.id == "icon") {
    selectedIcon = e.target.dataset.icon;
  }
});
