window.onload = () => {
  const loadImagesButton = document.querySelector("#load-images-button")
  loadImagesButton.addEventListener("click", loadCoffee)

  const loadSecondaryButton = document.querySelector("#load-secondary-button")
  console.log(loadSecondaryButton)
  loadSecondaryButton.addEventListener("click", loadProgramming)
}

const loadCoffee = () => {
  fetch("https://api.pexels.com/v1/search?query=coffee", {
    headers: {
      Authorization: "563492ad6f917000010000016c4555e8c26d439eae2bb113c225e0e5",
    },
  })
    .then((data) => data.json())
    .then((body) => {
      console.log(body) // sorry continue :-D :D
      const cardImgs = document.querySelectorAll(".card img")
      cardImgs.forEach((img, i) => (img.src = body.photos[i].src.landscape))
    })
    .catch((error) => console.error(error))
}

const loadProgramming = () => {
  fetch("https://api.pexels.com/v1/search?query=programming", {
    headers: {
      Authorization: "563492ad6f917000010000016c4555e8c26d439eae2bb113c225e0e5",
    },
  })
    .then((data) => data.json())
    .then((body) => {
      console.log(body) // sorry continue :-D :D
      const cardImgs = document.querySelectorAll(".card img")
      cardImgs.forEach((img, i) => (img.src = body.photos[i].src.landscape))
    })
    .catch((error) => console.error(error))
}
