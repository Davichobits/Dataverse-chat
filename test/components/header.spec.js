import { Header } from "../../src/components/header/Header.js";
import { dataset } from "../../src/data/dataset.js";
import { updateCardsContainer } from "../../src/utils/dom.js";


jest.mock('../../src/utils/dom.js', () => ({
  updateCardsContainer: jest.fn(),
}));

describe('Tests for Header', ()=>{
  let data;
  let cardsContainer;
  let header;

  beforeEach(() => {
    data = dataset;
    cardsContainer = document.createElement('div');
    header = Header(data, cardsContainer);
    document.body.appendChild(header);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('Debe retornar un elemento HTML', ()=>{
    const element = Header(data, cardsContainer);
    expect(element instanceof HTMLElement).toBe(true);
  });

  it('must return an elemento with the tag Header', ()=>{
    const element = Header(data, cardsContainer);
    expect(element.tagName).toBe('HEADER');
  });

  it('must return an elemento with the class Nav', ()=>{
    const element = Header(data, cardsContainer);
    expect(element.querySelector('.nav')).not.toBeNull();
  });


  it('renders header with input elements', () => {
    expect(header.querySelector('#search')).toBeDefined();
    expect(header.querySelector('#sort')).toBeDefined();
    expect(header.querySelector('#main-field')).toBeDefined();
  });

  it('updates cards container on search input', () => {
    const searchInput = header.querySelector('#search');
    searchInput.value = 'test value';
    searchInput.dispatchEvent(new Event('input'));
    expect(updateCardsContainer).toHaveBeenCalledWith(cardsContainer, expect.any(Array));
  });

  it('updates cards container on sort input', () => {
    const sortInput = header.querySelector('#sort');
    sortInput.value = 'asc';
    sortInput.dispatchEvent(new Event('change'));
    expect(updateCardsContainer).toHaveBeenCalledWith(cardsContainer, expect.any(Array));
  });

  it('updates cards container on main field input', () => {
    const mainFieldInput = header.querySelector('#main-field');
    mainFieldInput.value = 'test value';
    mainFieldInput.dispatchEvent(new Event('change'));
    expect(updateCardsContainer).toHaveBeenCalledWith(cardsContainer, expect.any(Array));
  });

  it('updates cards container on clear button click', () => {
    const clearButton = header.querySelector('.clear-btn');
    clearButton.dispatchEvent(new Event('click'));
    expect(updateCardsContainer).toHaveBeenCalledWith(cardsContainer, expect.any(Array));
  });

});
