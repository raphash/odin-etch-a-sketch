const grid = document.querySelector(".grid");

function createGrid(scale) {
  const dimens = {
    width: grid.getBoundingClientRect().width / scale,
    height: grid.getBoundingClientRect().height / scale
  }
  
  for (let i = 0; i < scale; i++) {
    for (let j = 0; j < scale; j++) {
      const pixel = document.createElement("div");
            pixel.style.width = `${dimens.width}px`;
            pixel.style.height = `${dimens.height}px`;
            pixel.classList.add("pixel");
  
      grid.appendChild(pixel);
    }
  }
}

createGrid(32);