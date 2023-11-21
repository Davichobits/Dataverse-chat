# Dataverse Chat

## Historias de usuario

### Historia de usuario 1

Yo como usuaria quiero poder ver todos los personajes de la saga 
de Libros de la Fundación de Isaac Asimov para poder conocer más sobre ellos.

#### Criterios de aceptación

-   La usuaria puede ver todos los personajes en tarjetas.
-   La usuaria puede ver la información relevante de cada personaje en
    la tarjeta (imagen, nombre, especie, estado y planeta de origen).
-   La usuaria puede filtrar personajes por nombre.
-   La usuaria puede ordenar los personajes alfabéticamente de la A a la
    Z y de la Z a la A.
-   La usuaria puede filtrar personajes por especie.

#### Definición de terminado

-   La funcionalidad cumple satisface los criterios de aceptación.
-   La funcionalidad tiene _test_ unitarios.
-   El diseño visual corresponde al prototipo de alta fidelidad.
-   El código de esta funcionalidad recibió code review.

### Historia de usuario 2

Yo como usuaria quiero poder ver el detalle de cada personaje de la
serie Rick and Morty para poder conocer más sobre ellos.

#### Criterios de aceptación

-   La usuaria puede ver toda la información del personaje en una ruta
    específica.
-   La usuaria puede ver la información relevante de cada personaje en
    la tarjeta (imagen, nombre, especie, estado, género, origen y
    episodios en los que aparece).
-   La usuaria puede navegar al detalle de un personaje haciendo click
    sobre la tarjeta del personaje.

#### Definición de terminado

-   La funcionalidad cumple satisface los criterios de aceptación.
-   La funcionalidad tiene _test_ unitarios.
-   El diseño visual corresponde al prototipo de alta fidelidad.
-   El código de esta funcionalidad recibió code review.

### Historia de usuario 3


Prompt para generar la data:

```text
Hola, basado en el siguiente ejemplo:
{
    "id": "harry-seldon",
    "name": "Harry Seldon",
    "shortDescription": "Psicohistoriador y fundador de la Fundación.",
    "description": "Harry Seldon, el legendario psicohistoriador, predijo la caída del Imperio Galáctico y fundó la Fundación para preservar el conocimiento humano.",
    "imageUrl": "URL_DE_LA_IMAGEN_GENERADA",
    "facts": {
      "yearOfBirth": "Año 47 de la Era Galáctica",
      "placeOfBirth": "Helicon",
      "mainField": "Psicohistoria",
      "curiousFact1": "Hobby secreto: colecciona artefactos antiguos",
      "curiousFact2": "Habilidad musical: toca el piano"
    }
 }
Genera un json con 24 personajes de la saga de libros de Fundación de Isaac Asimov
La Serie de la Fundación es una serie de novelas de ciencia ficción escritas por el autor estadounidense Isaac Asimov. Primero publicada como serie de cuentos en los años 1942–1950, y posteriormente como tres novelas en los años 1951–1953, durante treinta años la serie fue una trilogía: Fundación, Fundación e Imperio y Segunda Fundación. 

Debes entregarme un arreglo con 24 objetos, cada uno con la información de un personaje distinto.
Dentro del objeto "facts" puedes generar uno o dos datos curiosos sobre el personaje, no necesariamente tienen que ser los mismos del ejemplo
```