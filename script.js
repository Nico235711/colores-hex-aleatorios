// selecciono mis elementos del DOM
const button = document.querySelector(".change-colour")
const mainHex = document.querySelector(".mainColourHex")
const secondHex = document.querySelector(".secondaryColourHex")
const thirdHex = document.querySelector(".thirdColourHex")

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
  const mainColourHex = generateRandomHex()
  const secondaryColourHex = generateRandomHex()
  const thirdColourHex = generateRandomHex()
  mainHex.textContent = mainColourHex
  secondHex.textContent = secondaryColourHex
  thirdHex.textContent = thirdColourHex
  // cambio el background del body
  document.body.style.background = `linear-gradient(to right, ${mainColourHex}, ${secondaryColourHex}, ${thirdColourHex})`
})
