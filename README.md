# Juego del Amigo Secreto

## Descripción

Implementación del juego "Amigo Secreto", el cual consiste en ingresar varios nombres de amigos, que se van listando en pantalla, para finalmente seleccionar un ganador a través de un sorteo.

### Archivos del repositorio

- Los archivos style.css, index.html y la carpeta assets fueron facilitados por la plataforma, incluyen la estructura y estilo de la página web.

- El archivo app.js contiene código JS de la página y consta de las siguientes áreas en su estructura:

  1. Definición de Variables
  2. Condiciones Iniciales
     - Se establecen las condiciones por default.
  3. Agregar amigo
     - Se hacen las siguientes validaciones para el nombre ingresado:
       - El nombre no puede ser un valor "" (vacio).
       - No puede ingresarse el mismo nombre 2 veces.
       - Los nombres no pueden contener numeros.
  4. Sortear amigo
     - No se realizará el sorteo con 1 persona.
     - Luego de realizar el sorteo, ya no se podrá añadir mas personas a la lista, ni hacer otro sorteo hasta limpiar todo. (por esa razón se ha creado el botón "Nuevo Juego")

Las descripciones puntuales de cada paso se incluyen en el código como comentario para su fácil visualización.

Gracias por revisar mi proyecto!
