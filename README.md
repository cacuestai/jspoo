
## Programación Orientada a Objetos con JavaScript

Estos talleres están basados en [ECMAScript](https://lenguajejs.com/javascript/introduccion/ecmascript/) versión 6 (ES6 o ES2015) y siguientes. ES`n` se refiere a las especificaciones que sigue JavaScript a partir de junio de 2015 y que a la fecha (2021) llega hasta la [ES12](https://ecmascriptfeatures.online/).

Enseguida se muestran como versiones la evolución de los ejemplos. Éstos están dispuestos en `tags` y puede acceder a ellos en GitHub de tres formas: pulsando clic en el botón `main` o en el enlace [tags](https://github.com/cacuestai/jspoo/tags) o en el enlace [releases](https://github.com/cacuestai/jspoo/releases).

### Versión 0.1.0 – Configuración inicial
Se proporciona una plantilla de proyecto en la que el archivo `./index.html` [enlaza al módulo](https://desarrolloweb.com/articulos/es6-modules.html) `./resources/js/index.js` utilizando el atributo [defer](https://es.javascript.info/script-async-defer#:~:text=El%20atributo%20defer%20indica%20al,cuando%20el%20DOM%20esta%20completo.) para no interferir con la carga del DOM.

Según el script `index.js`, cuando la carga del DOM ha terminado, se debe mostrar por consola el mensaje "Hola mundo".

### Versión 0.2.0 – [Módulos](https://lenguajejs.com/javascript/caracteristicas/modulos-es6/) y [Clases](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
Se incluye el módulo `resources/js/Helpers.js` que contiene una clase de utilidades (`helpers`) cuyos métodos puedan servir no sólo para el ejemplo en curso sino para otros proyectos. Algo así como lo que hace la clase Math que define varios métodos y atributos con el modificador `static`, un modificador que se aplica en la definición de elementos de clase en lugar de elementos de instancia, que como su nombre lo indica, requieren la definición de una instancia para poderlos utilizar.

El módulo, además de la clase, incluye un ejemplo de cómo se pueden agregar elementos al objeto `prototype` que viene incluido en las clases que proporciona por defecto el lenguaje. Específicamente se amplia la funcionalidad de la clase `String`, agregando el método `translate`.

Vale la pena resaltar además lo siguiente:
- Se incluye la clase Helpers que consta de cuatro [funciones flecha](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions).
- Una de las funciones demuestra el uso de la [API Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) para cargar recursos de tipo [JSON](https://www.json.org/json-es.html).
- Es una práctica común en JavaScript crear módulos que exportan un único elemento, en este caso, la clase Helpers que va precedida de las palabras claves `export default`.
- Es importante notar que la asignación de la función anónima al atributo `translate`, no se exporta, ni forma parte del ámbito de la clase. Lo que se hace es simplemente agregar la propiedad `translate` al objeto `prototype` de `String` para asignar en éste una función anónima que contiene la lógica requerida.
- También vale la pena resaltar el `parámetro rest` que se define para la función anónima asignada a `translate`.

Descargue esta versión que cuenta con una página donde se puede probar el funcionamiento de lo tratado hasta aquí.

### Versión 0.3.n – Primera refactorización
- Se agrega a la clase `Helpers` el método `loadPage` que se usará para cargar las páginas de ejemplos definidas en `./resources/views/`.
- Los ejemplos del uso de la clase `Helpers`, pasan a la clase `Demo01` definida en el módulo `./resources/js/poo-js-01.js`. 
- Observe que la clase `Helpers` ya no se exporta por defecto en el módulo `poo-js-01.js`.
- En la clase `Demo01` se incluye el atributo estático privado `randomNumber`.
- En `resources/js/index.js` la función `chooseAction` se encarga de condicionar el acceso a las opciones de la aplicación.
- En la función `loadDemo01` incluida en `resources/js/index.js` se hace una demostración de [importación dinámica](https://lenguajejs.com/javascript/caracteristicas/dynamic-import/).
- Por último, observe el uso de `this` dentro de la clase `Demo01`, para hacer referencia a los miembros de dicha clase. Ejemplo: `this.`tryLuck().

### Versión 0.4.0 – Herencia
- Se agrega [Prism](https://prismjs.com/) para mostrar código fuente.
- Se implementa un ejemplo básico de herencia.
- Se incluyen varios ejemplos de instancias a partir de la herencia implementada
