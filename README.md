# Sistema de Gestión Académica: Integración Moodle - IGNUG

## Descripción del Proyecto

Este proyecto tiene como objetivo principal implementar la integración entre Moodle e IGNUG, una plataforma de gestión académica utilizada en el Instituto Superior Tecnológico Yavirac y hecha por un ingeniero del mismo, mi trabajo en este proyecto fue integrar Moodle con la plataforma que ya estaba realizada. La integración permite a los administradores gestionar cursos y categorías en IGNUG, reflejando automáticamente estos cambios en Moodle mediante el uso de APIs.

El desarrollo se realizó utilizando tecnologías modernas como **Angular** y bajo la metodología ágil **Scrum**, garantizando un proceso iterativo e incremental que permitió adaptarse a los cambios y entregar un producto de alta calidad.

**Aunque la base de datos original se perdió, se conservan imágenes que muestran cómo funcionaba el sistema en su totalidad.**

---

## Características Principales

- **Gestión de Cursos y Categorías**: Los administradores pueden crear, listar y eliminar cursos y categorías directamente desde IGNUG.
- **Integración con Moodle**: Cambios realizados en IGNUG se sincronizan automáticamente con Moodle mediante APIs.
- **Interfaz Intuitiva**: Desarrollada con Angular, permite una experiencia de usuario moderna y amigable.
- **Automatización**: Reducción de tareas manuales y minimización de errores humanos.
- **Eficiencia Operativa**: Centralización de información y optimización del tiempo del personal administrativo.

---

## Tecnologías Utilizadas

### Frontend
- **Angular**
  - Framework basado en TypeScript para el desarrollo de aplicaciones web modernas.
  - [Sitio oficial](https://angular.io/)
- **HTML**
- **CSS**
- **TypeScript**
- **Moodle**

    ![HTML](https://img.icons8.com/color/48/000000/html-5.png)
    ![CSS](https://img.icons8.com/color/48/000000/css3.png)
    ![TypeScript](https://img.icons8.com/color/48/000000/typescript.png)
    ![Angular](https://img.icons8.com/color/48/000000/angularjs.png)
    <a target="blank"><img src="https://moodle.org/theme/moodleorg/pix/moodle_logo_TM.svg" width="200" alt="Moodle Logo" /></a>

### Backend
- **APIs REST**
  - Implementación para la comunicación entre IGNUG y Moodle.

### Herramientas Adicionales
- **PrimeNG**: Biblioteca de componentes de interfaz para Angular.
- **Visual Studio Code**: Editor de código.
- **Postman**: Herramienta para probar APIs.
- **Moodle**: Sistema de gestión de aprendizaje.

---

## Capturas de Pantalla

### Pantallas Principales

#### Crear Categoría
![Crear Categoría](img\crear.PNG)

#### Listar Categorías
![Listar Categorías](img\listar.PNG)

#### Eliminar Categoría
![Eliminar Categoría](img\eliminar.PNG)

#### Crear Cursos
![Crear Cursos](img\crear-curso.PNG)

#### Listar Cursos
![Listar Cursos](img\listar-curso.PNG)

#### Eliminar Cursos
![Eliminar Cursos](img\eliminar-curso.PNG)

---

## Conclusiones

El proyecto alcanzó su objetivo principal de integrar Moodle con IGNUG, mejorando la gestión de cursos y categorías en el Instituto Yavirac. La automatización y sincronización de datos entre las plataformas ha reducido significativamente la carga operativa del personal administrativo, mejorando la eficiencia y la experiencia del usuario final.

Por último la documentación de dicho proyecto: [Implementación de Moodle a Ignug](https://docs.google.com/document/d/1h-IbLwv1cPMnOAjm154gHeQyl9e9uL2V/edit?usp=sharing&ouid=113010525411546750670&rtpof=true&sd=true)

---

## Créditos

El proyecto fue desarrollado por un equipo comprometido de estudiantes del Instituto Yavirac:

- **Bermeo Velasco Jhoel David**
- **Caiza Codena Patrick Oswaldo**
- **Guzñay Caisaguno Jennifer Thalia**
- **Ortega Cajamarca Jean Anderson** *(autor del portafolio)*

Bajo la supervisión del tutor **Mauricio Tamayo**.

---

## Instalación y Uso

### Requisitos Previos
- Node.js y npm instalados.
- Angular CLI instalado.

### Instalación
1. Clonar el repositorio.
   ```bash
   git clone https://github.com/tu-usuario/sistema-gestion-academica.git


# IgnugFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
