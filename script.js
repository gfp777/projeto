function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // Pegar a tag img
  const img = document.querySelector("#profile img");

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assest/img.png");
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assest/IMG_20230202_121355_274-modified.png");
  }
}
