export const updateCardsContainer = (cardsContainer, dataFiltered) => {
  cardsContainer.innerHTML = "";
  dataFiltered.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="img-container">
      <img src="${element.imageUrl}" alt="${element.name}" />
    </div>
    <div class="card-body">
    <h2>${element.name}</h2>
    <p class="short-description">${element.shortDescription}</p>
    <p class="main-field">${element.facts.mainField}</p>
    </div>
    `;
    cardsContainer.appendChild(card);
  });
}