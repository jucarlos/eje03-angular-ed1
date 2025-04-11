

## Aplicación para reforzar conocimientos de angular.

### Pasos que estamos dando para crear esta aplicación.

Opciones de la aplicación:

- Tiene bootstrap.
- Módulos de la aplicación:
    - home
        - módulo público bienvenida
    - auth
        - servicios
        - guads ( controlar accesos a rutas )
        - paginas de login y de registro ( formularios reactivos y no templates )

        - Usaremos autenticación con JWT , que tiene una duración de 2 horas.
        cada vez que iniciemos la aplicacion el servidor nos dirá si el token es correcto.

        - Siguientes pasos.
            - Crear un guard.
            
            - Está el registro

            Hoy.

            - Hablamos del formulario de  registro que ya está.


            - Haremos un interceptor.

            - generar variables el fichero environment desde las variables de entorno del si.o.

            - Novedades angular.

            - cuestionario.


    - products
        - servicios,
        - páginas ( lista de productos, detalle de un producto )
    - shared
        - menu.
        - componente compartido.

    Url del backend: https://nest-curso-angular-2025.onrender.com/api#/

    Hay que generar un fichero llamado .env con las va. entorno que están en template.

    Para generar ficheros environment desde las variables de entorno .env o del contenedor.

    node ./scripts/set.envs.js

    