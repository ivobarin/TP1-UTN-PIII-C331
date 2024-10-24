# TP: Proyecto de Reserva de Hoteles - Ivo Barinstein
[Consigna del TP aqui!](/Consigna.md)

[Preview del sitio aqui!](https://ivobarin.github.io/TP1-UTN-PIII-C331/)

### Trabajo Práctico Parte 1b — HTML CSS
[2DA PARTE DEL TP AQUI!](./TP1b-UTN-PIII-C331/README.md)

## Estructura de la pagina Home (`index.html`)

### **1. Header**
El encabezado de la página utiliza un **Navbar responsive** de _Bootstrap_, diseñado para ajustarse a diferentes tamaños de pantalla, asegurando una experiencia óptima en dispositivos móviles y de escritorio. El _navbar_ incluye las siguientes características:
- **Log-in / Sign-up**: Colocados en la parte izquierda del menú para facilitar el acceso de los usuarios a sus cuentas.
- **Opciones de navegación adicionales**: En el lado derecho se encuentran los enlaces a secciones clave como **Contact** y **Features**.

### **2. Sección Bienvenida**
La primera sección incluye un título de bienvenida acompañado de un párrafo introductorio que explica la temática del sitio y lo que el usuario puede esperar, como se pedia en el enunciado.

### **3. Hero Section**
La **hero section** utiliza imágenes llamativas y texto que destaca la promoción principal: una visita turística a Tatooine con un enfoque en la **Cantina de Mos Eisley**. Esta sección está diseñada para capturar la atención del usuario y motivar la acción de reserva con un CTA (_Call to Action_) claro y directo.

### **4. Tarjetas de Planetas**
Esta sección emplea un contenedor con tarjetas (cards) que promocionan diferentes planetas del universo de Star Wars, como Tatooine, Endor, Hoth, y Coruscant. Cada tarjeta incluye una imagen representativa del planeta, un breve texto descriptivo, y un botón para explorar más detalles.
En el cuerpo de la cartas se emplea un **Div Container** que utiliza la técnica de **flexbox** para organizar de manera eficiente el contenido.

### **5. Footer**
El pie de página del sitio incluye la marca registrada del proyecto, enlaces adicionales y contactos relevantes, todo diseñado para mantener la coherencia visual con el resto del sitio.

## Estructura de la pagina Sign In (`signIn.html`) y Sign Up (`signUp.html`)
### Formulario de Ingreso:
- Email y Contraseña: Se utiliza un formulario sencillo con campos para ingresar Email y Contraseña, cada uno con etiquetas estilizadas.
- Botón de Envío: Un botón ubicado debajo de los campos, alineado con el estilo del sitio.
- Diseño y Estilos: El formulario está centrado dentro de un container de Bootstrap.

### Formulario de Registro
- Nombre y Apellido: Los usuarios deben ingresar su nombre (con un máximo de 16 caracteres) y su apellido.
- Correo Electrónico: El formulario permite la entrada de una dirección de correo electrónico válida.
- Contraseña: El campo de contraseña tiene un mínimo de 6 caracteres para garantizar la seguridad. También se incluye un campo para confirmar la contraseña.
- Términos y Condiciones: Se incluye una casilla de verificación para que los usuarios acepten los Términos y la Política de Privacidad antes de completar el registro.

## Aspectos Técnicos y Herramientas Utilizadas

- **Bootstrap 5**: El proyecto emplea ampliamente las utilidades y componentes de _Bootstrap 5_ para garantizar un diseño **responsive** y limpio. El **Navbar**, las **cards** y la disposición de las secciones se han desarrollado utilizando los estándares de _Bootstrap_ para facilitar la escalabilidad y la adaptabilidad en diferentes dispositivos.
  
- **Flexbox**: Para la organización interna de las tarjetas y la disposición del contenido. Esto permite un diseño flexible y ajustable, proporcionando una alineación perfecta de los elementos en la sección de lugares turísticos.

- El sitio utiliza la fuente personalizada **Soloist-Z6M8.otf** para los menús, reforzando la estética temática de **Star Wars**. Complementando la experiencia inmersiva del usuario en la página.

## Prototipo del Diseño del Home 

Se ha creado un prototipo visual en **Figma** para delinear el diseño y flujo del sitio web antes de la implementación. Este prototipo ayuda a prever el comportamiento del sitio en diferentes resoluciones y a validar las decisiones de diseño antes de escribir código.

[Accede al prototipo en Figma](https://www.figma.com/design/fgmMxqwZDXsBfbRregmNyW/Star-Wars-Hotel?node-id=1-2&t=zyiUyEeoxH1hteXz-1)


