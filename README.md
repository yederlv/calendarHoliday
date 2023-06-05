# Documentación de la API de Días Feriados en Perú
La API de Días Feriados en Perú proporciona información sobre los días feriados en Perú para el año 2023. Permite a los usuarios consultar la lista de días feriados y obtener detalles sobre cada uno de ellos.

## Uso
La API está basada en HTTP y sigue el estilo de arquitectura REST. Admite los siguientes puntos finales:

- `GET /api/v1/feriados`: Obtiene la lista de días feriados en Perú para el año 2023.
- `GET /api/v1/feriados/{id}`: Obtiene los detalles de un día feriado específico por su ID.

## Instalación
1. Clona el repositorio desde GitHub:
    ```
    git clone https://github.com/tu-usuario/proyecto-api.git
    ```

2. Instala las dependencias utilizando npm:
    ```
    cd proyecto-api
    npm install
    ```

3. Inicia la API:
    ```
    node index.js
    ```

La API estará disponible en `http://localhost:3000/api/v1/feriados`.

## Ejemplos de Uso

### Obtener todos los días feriados
```
GET /api/v1/feriados
```
Respuesta exitosa:
```
[
  {
    "id": 1,
    "fecha": "2023-01-01",
    "nombre": "Año Nuevo"
  },
  {
    "id": 2,
    "fecha": "2023-04-09",
    "nombre": "Jueves Santo"
  },
  {
    "id": 3,
    "fecha": "2023-04-10",
    "nombre": "Viernes Santo"
  },
  ...
]
```

### Obtener detalles de un día feriado específico
```
GET /api/v1/feriados/1
```
Respuesta exitosa:
```
{
  "id": 1,
  "fecha": "2023-01-01",
  "nombre": "Año Nuevo"
}
```

## Consideraciones
La API utiliza los siguientes códigos de estado HTTP en sus respuestas:

- 200 OK: La solicitud se completó con éxito.
- 400 Bad Request: La solicitud no es válida o faltan parámetros requeridos.
- 401 Unauthorized: No se proporcionó o no es válido un token de acceso válido.
- 404 Not Found: El recurso solicitado no existe.
- 500 Internal Server Error: Se produjo un error interno en el servidor.

## Conclusión
La API de Días Feriados en Perú es una herramienta útil para obtener información actualizada sobre los días feriados en Perú para el año 2023. Puedes utilizarla para obtener la lista de días feriados o consultar detalles específicos de cada uno de ellos. Asegúrate de autenticarte correctamente y utilizar los endpoints adecuados para acceder a la información requerida.

¡Disfruta utilizando la API de Días Feriados en Perú y que tengas éxito en tu proyecto!