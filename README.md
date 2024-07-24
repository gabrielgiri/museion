# Columns Count Selector

Este proyecto es una simple demostración de cómo cambiar el número de columnas en un contenedor utilizando botones y CSS con transiciones suaves. Está construido utilizando HTML, CSS y JavaScript.

## Estructura del Proyecto

El proyecto consta de los siguientes archivos:

- `index.html`: El archivo HTML principal que contiene la estructura de la página.
- `styles.css`: El archivo CSS que contiene los estilos para la página.
- `scripts.js`: El archivo JavaScript que contiene la lógica para cambiar el número de columnas.

## Archivo `index.html`

Este archivo contiene la estructura principal de la página. Incluye un título, un conjunto de botones para seleccionar el número de columnas y un contenedor de texto que cambiará la cantidad de columnas según la selección del usuario.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Columns count selector</h1>

    <div class="button-container">
        <button type="button" class="mybutton" data-columns="1">1</button>
        <button type="button" class="mybutton" data-columns="2">2</button>
        <button type="button" class="mybutton" data-columns="3">3</button>
        <button type="button" class="mybutton" data-columns="4">4</button>
        <button type="button" class="mybutton" data-columns="5">5</button>
        <button type="button" class="mybutton" data-columns="6">6</button>
    </div>

    <div class="wrapper">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
    </div>

    <script src="scripts.js"></script>
</body>
</html>

