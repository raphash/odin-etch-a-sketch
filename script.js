const MAX_GRID_SIZE = 32;
const MIN_GRID_SIZE = 1;

const grid = document.querySelector(".grid");
const customGridBtn = document.querySelector(".custom");

function setGrid(scale) {
  const dimens = {
    width: grid.getBoundingClientRect().width / scale,
    height: grid.getBoundingClientRect().height / scale
  }
  
  for (let i = 0; i < scale; i++) {
    for (let j = 0; j < scale; j++) {
      const pixel = document.createElement("div");
            pixel.setAttribute("draggable", "false");
            pixel.classList.add("pixel");
            pixel.style.width = `${dimens.width}px`;
            pixel.style.height = `${dimens.height}px`;
  
      grid.appendChild(pixel);
    }
  }
}

function setDraw() {
  function randomHsl() {
    return `hsla(${(Math.random() * 360)}, 25%, 50%, 1)`;
  }

  // fills the rect when mouse moves and left button is pressed.
  grid.addEventListener("mousemove", (e)=>{
    if (e.buttons == 1) {
      e.target.style.outline = "none";
      e.target.style.background = randomHsl();
    }
  })
}

function setCustomSize(size) {
  let scale;

  do {
    scale = prompt(`Custom Scale: ${MIN_GRID_SIZE} ~ ${MAX_GRID_SIZE}`);
    
    // Clear all "pixels" in grid.
    grid.textContent = "";

    if (!scale) {
      setGrid(32);
      break;
    }
  } while (scale > MAX_GRID_SIZE || scale < MIN_GRID_SIZE);

  return scale;
}

customGridBtn.addEventListener("click", ()=>{
  const customSize = setCustomSize();
  setGrid(customSize);
});

setGrid(10);
setDraw();