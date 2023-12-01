# Dataverse Chat

## Índice

* [Historias de usuario](#historias-de-usuario)
* [Prototipos](#prototipos)
* [Prompt](#prompt)

## Historias de usuario

### Historia de usuario 1

Yo como usuaria quiero poder ver los personajes principales de la saga 
de Libros "Fundación" de Isaac Asimov para poder conocer más sobre ellos.

#### Criterios de aceptación

-   La usuaria puede ver todos los personajes en tarjetas.
-   La usuaria puede ver la información relevante de cada personaje en
    la tarjeta (imagen, nombre, descripcion, campo principal).

#### Definición de terminado

-   La funcionalidad cumple satisface los criterios de aceptación.
-   La funcionalidad tiene _test_ unitarios.
-   El diseño visual corresponde al prototipo de alta fidelidad.
-   El código de esta funcionalidad recibió code review.

### Historia de usuario 2

Yo como usuaria quiero poder regorganizar todos los personajes principales de la saga  de Libros "Fundación" de Isaac Asimov para poder encontrarlos más facilmente.

#### Criterios de aceptación

-   La usuaria puede filtrar personajes por nombre.
-   La usuaria puede ordenar los personajes alfabéticamente de la A a la
    Z y de la Z a la A.
-   La usuaria puede filtrar personajes por "campo principal" al que se dedica.

#### Definición de terminado

-   La funcionalidad cumple satisface los criterios de aceptación.
-   La funcionalidad tiene _test_ unitarios.
-   El diseño visual corresponde al prototipo de alta fidelidad.
-   El código de esta funcionalidad recibió code review.

### Historia de usuario 3

Yo como usuaria quiero poder ver el detalle de cada personaje principal de la saga 
de Libros "Fundación" de Isaac Asimov para poder conocer más sobre ellos.

#### Criterios de aceptación

-   La usuaria puede ver toda la información del personaje en una ruta
    específica.
-   La usuaria puede ver la información relevante de cada personaje en
    la tarjeta (imagen, nombre, especie, dato curioso, origen).
-   La usuaria puede navegar al detalle de un personaje haciendo click
    sobre la tarjeta del personaje.

#### Definición de terminado

-   La funcionalidad cumple satisface los criterios de aceptación.
-   La funcionalidad tiene _test_ unitarios.
-   El diseño visual corresponde al prototipo de alta fidelidad.
-   El código de esta funcionalidad recibió code review.

### Historia de usuario 4

Yo como usuaria quiero poder chatear con cada personaje principal de la saga 
de Libros "Fundación" de Isaac Asimov, para poder hacerles preguntas específicas sobre su vida.

#### Criterios de aceptación

-   La usuaria puede ver el chat de cada personaje en una ruta
    específica.
-   La usuaria puede ver la información relevante de cada personaje en
    la tarjeta (imagen, nombre, especie, dato curioso, origen).
-   La usuaria puede navegar al chat de un personaje haciendo click
    sobre la tarjeta del personaje.

#### Definición de terminado

-   La funcionalidad cumple satisface los criterios de aceptación.
-   La funcionalidad tiene _test_ unitarios.
-   El diseño visual corresponde al prototipo de alta fidelidad.
-   El código de esta funcionalidad recibió code review

### Historia de usuario 5

Yo como usuaria quiero poder chatear con todos los personajes principales de la saga  de Libros "Fundación" de Isaac Asimov, para poder ver sus diferentes respuestas a una misma pregunta.

#### Criterios de aceptación

-   La usuaria puede ver el chat de todos los personajes en una ruta
    específica.
-   La usuaria puede ver la información relevante de cada personaje en
    la tarjeta (imagen, nombre, especie, dato curioso, origen).
-   La usuaria puede navegar al chat de un personaje haciendo click
    sobre la tarjeta del personaje.

#### Definición de terminado

-   La funcionalidad cumple satisface los criterios de aceptación.
-   La funcionalidad tiene _test_ unitarios.
-   El diseño visual corresponde al prototipo de alta fidelidad.
-   El código de esta funcionalidad recibió code review


## Prototipos
### Prototipos de baja fidelidad



| Mobile | Desktop |
|----------|----------|
| ![Prototipo_baja_mobile](https://github-production-user-asset-6210df.s3.amazonaws.com/123121338/266726383-54711bb7-cb05-448e-b677-3cbd9bf13c14.png)    | ![Prototipo_alta_desktop](https://github-production-user-asset-6210df.s3.amazonaws.com/92090/261137087-6cef16bc-643a-4d6d-bc1c-e0daaeb21c88.png)  |

### Prototipos de alta fidelidad

| Mobile | Desktop |
|----------|----------|
| ![Mobile](https://github.com/Laboratoria/curriculum/assets/123121338/4c483b4b-0566-47e5-bc39-85df38382da4) | En construcción |

## Prompt

Prompt utilizado para generar la data:

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

## Convencion de commits

Para el proyecto se utilizo la convencion de commits de [Angular] (Angular Commit Message Convention), 
el mismo que tiene la siguiente estructura:

`Tipo`: Indica el propósito del commit. Algunos tipos comunes son:

* `feat`: Nueva característica.
* `fix`: Corrección de un error.
* `docs`: Cambios en la documentación.
* `style`: Cambios en el formato o estilo del código.
* `refactor`: Cambios en el código que no afectan su comportamiento.
* `test`: Agregar o modificar pruebas.
* `chore`: Tareas de mantenimiento, actualizaciones, etc.

`Ámbito (opcional)`: Indica la parte del proyecto afectada por el cambio.
`Descripción`: Breve descripción del cambio.