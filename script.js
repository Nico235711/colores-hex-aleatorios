// selecciono mis elementos del DOM
const button = document.querySelector(".cambiar-color")
const colorHex = document.querySelector(".color-hex")

function generateRandomHex() {
  // 16 posibilidades para el color hexadecimal
  const digits = "abcdef0123456789"
  let colourHex = "#"
  for (let index = 0; index < 6; index++) {
    const randomIndex = Math.floor(Math.random() * 16)
    colourHex += digits[randomIndex]
  }

  return colourHex
}

button.addEventListener("click", () => {
  const colourHex = generateRandomHex()
  colorHex.textContent = colourHex
  // cambio el background del body
  document.body.style.backgroundColor = colourHex
})
