import { Home } from "../../src/pages/Home/Home.js";

describe('Tests para la funcion Home', ()=>{

  it('Debe retornar un elemento HTML', ()=>{
    const element = Home();
    expect(element instanceof HTMLElement).toBe(true);
  });

  it('Debe retornar un elemento con la etiqueta section', ()=>{
    const element = Home();
    expect(element.tagName).toBe('SECTION');
  });

  it('Debe retornar un elemento con la clase cards-container', ()=>{
    const element = Home();
    expect(element.querySelector('.cards-container')).not.toBeNull();
  });

  it('Debe retornar un elemento con la clase title', ()=>{
    const element = Home();
    expect(element.querySelector('.title')).not.toBeNull();
  });

  it('Debe retornar un elemento con la clase subtitle', ()=>{
    const element = Home();
    expect(element.querySelector('.subtitle')).not.toBeNull();
  });

  it('Debe retornar un elemento con la clase card', ()=>{
    const element = Home();
    expect(element.querySelector('.card')).not.toBeNull();
  });

  it('Debe retornar una etiqueta section con 24 elementos con la clase card', ()=>{
    const element = Home();
    expect(element.querySelectorAll('.card').length).toBe(24);
  });
});