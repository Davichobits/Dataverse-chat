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
      <input id="search" type="text" placeholder="Buscar">
      <select name="sort" id="sort">
        <option value="all">Cualquier orden</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
      <select name="main-field" id="main-field"></select>
      <button class="clear-btn">Clear</button>
    </div>
    </nav>
  `;

  // Dibujo la lista de campos
  headerEl.querySelector('#main-field').innerHTML = `
    <option value="all">Todas las áreas</option>
    ${fields.map(field => `<option value="${field}">${field}</option>`)}
  `;

  let currentData = [];
  let sortValue = 'all';
  let field = 'all';
  let userInput = '';

  const readUserInputs = () => {
    currentData = findElements(data, userInput);
    const dataFiltered = filterByField(currentData, field);
    const dataSorted = sortData(dataFiltered, sortValue);
    return dataSorted;
  }

  // Evento para buscar
  headerEl.querySelector('#search').addEventListener('input', (event) => {
    userInput = event.target.value;
    const dataUpdated = readUserInputs();
    updateCardsContainer(cardsContainer, dataUpdated);
  });

  // Evento para ordenar
  headerEl.querySelector('#sort').addEventListener('change', (event) => {
    sortValue = event.target.value;
    const dataUpdated = readUserInputs();
    updateCardsContainer(cardsContainer, dataUpdated);
  });

  // Evento para filtrar por campo
  const selectField = headerEl.querySelector('#main-field')

  selectField.addEventListener('change', (event) => {
    field = event.target.value;
    const dataUpdated = readUserInputs();
    updateCardsContainer(cardsContainer, dataUpdated);
  });

  // boton Clear
  const clearBtn = headerEl.querySelector('.clear-btn');
  clearBtn.addEventListener('click', () => {
    userInput = '';
    sortValue = 'all';
    field = 'all';
    selectField.value = field;
    headerEl.querySelector('#sort').value = sortValue;
    headerEl.querySelector('#search').value = userInput;
    const dataUpdated = readUserInputs();
    updateCardsContainer(cardsContainer, dataUpdated);
  });
  
  return headerEl;
}