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
    .then((body) => getPhotos (body))
    .then( hideCard )
    .catch((error) => console.error(error))
}

const loadProgramming = () => {
  fetch("https://api.pexels.com/v1/search?query=programming", {
    headers: {
      Authorization: "563492ad6f917000010000016c4555e8c26d439eae2bb113c225e0e5",
    },
  })
    .then((data) => data.json())
    .then((body) => getPhotos (body))
    .then( hideCard )
    .catch((error) => console.error(error))
}

function getPhotos (body) {
  console.log(body) // sorry continue :-D :D
  const cardImgs = document.querySelector(".main-cards")
  // cardImgs.forEach((img, i) => (img.src = body.photos[i].src.landscape))
  const { photos} = body // deconstructing, I am extragcting phots property from body object 
  
  console.log(photos); // I am ckecking here 
  cards = ""
  photos.forEach( photo => {
    cards += `
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src=${photo.src.landscape} alt="">

          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary btn-hide"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    `
  })
  cardImgs.innerHTML = cards
}

function hideCard() {
  
  const btnList = document.querySelectorAll(".btn-hide")
  const card = document.querySelectorAll(".col-md-4")
  
  console.log(btnList);
  console.log(card);
  
  btnList.forEach( (btn, i) =>
    btn.addEventListener( "click", () => {
      // console.log(card[i]);
        card[i].classList.add("d-none")
    })
  )
}
