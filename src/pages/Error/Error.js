
export const Error = () =>{
  const div = document.createElement("div");
  div.classList.add("error-container");
  div.innerHTML = "Ups! la página que estas buscando no existe";
  return div;
};