import { getFields, filterByField, sortData, findElements } from '../../utils/functions.js';
import { updateCardsContainer } from '../../utils/dom.js';

export const Header = (data, cardsContainer) => {
  const fields = getFields(data);
  const headerEl = document.createElement('header');

  // Input del header
  headerEl.innerHTML = `
    <nav class='nav'>
    <div>
      <h1 class="title">Fundación</h1>
      <h2 class="subtitle">Isaac Asimov</h2>
    </div>
    <div class="search-container">
      <button class="clear-btn">Clear</button>
      <input id="search" type="text" placeholder="Buscar">
      <select name="sort" id="sort">
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <select name="main-field" id="main-field"></select>
    </div>
    </nav>
  `;

  // Dibujo la lista de campos
  headerEl.querySelector('#main-field').innerHTML = `
    <option value="">Todas las áreas</option>
    ${fields.map(field => `<option value="${field}">${field}</option>`)}
  `;

  let dataFiltered = [...data];
  let elementsSearched = [...data];

  // Evento para buscar
  headerEl.querySelector('#search').addEventListener('input', (event) => {
    const userInput = event.target.value;
    elementsSearched = findElements(dataFiltered, userInput);
    updateCardsContainer(cardsContainer, elementsSearched);
  });

  // Evento para ordenar
  headerEl.querySelector('#sort').addEventListener('change', (event) => {
    const sortValue = event.target.value;
    const dataSorted = sortData(dataFiltered, sortValue);
    updateCardsContainer(cardsContainer, dataSorted);
  });

  // Evento para filtrar por campo
  const selectField = headerEl.querySelector('#main-field')

  selectField.addEventListener('change', (event) => {
    const field = event.target.value;
    dataFiltered = filterByField(elementsSearched, field);
    updateCardsContainer(cardsContainer, dataFiltered);
  });
  
  return headerEl;
}