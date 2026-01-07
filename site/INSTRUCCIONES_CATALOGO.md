# Guía para Agregar Productos al Catálogo

Sigue estos pasos sencillos para agregar nuevos productos a tu página web sin necesidad de programar.

## Paso 1: Preparar la Imagen
1. Consigue la foto de tu producto (formato .jpg o .png recomendado).
2. Asegúrate de que el nombre del archivo sea simple, sin espacios ni caracteres especiales.
   - ✅ Correcto: `electrodo-kda.jpg`
   - ❌ Incorrecto: `foto electrodo (1).jpg`
3. Guarda la imagen en la carpeta: 
   `tg/site/assets/products/`
   *(Si la carpeta no existe, créala dentro de assets)*

## Paso 2: Editar el Archivo de Productos
1. Abre el archivo `productos.json` con tu editor de código.
2. Verás una lista de productos que empieza con `[` y termina con `]`.
3. Para agregar uno nuevo, ve al final de la lista, antes del último `]` y añade una coma `,` después de la llave de cierre `}` del producto anterior.
4. Pega el siguiente bloque y rellénalo con tus datos:

```json
    {
        "id": 100,
        "name": "Nombre de tu Producto Aquí",
        "category": "puesta-a-tierra",
        "price": "Contactar",
        "image": "assets/products/nombre-de-tu-foto.jpg",
        "icon": "⚡"
    }
```

## Paso 3: Detalles de los Campos
- **id**: Un número único (asegúrate de que no se repita con otros).
- **name**: El título del producto que verá el cliente.
- **category**: Debe ser EXACTAMENTE una de las siguientes opciones para que funcionen los filtros:
    - `puesta-a-tierra`
    - `pararrayos`
    - `supresores`
    - `regulador-respaldo`
    - `telemetria`
    - `bot-tgone`
    - `banco-capacitores`
    - `infraestructura`
- **price**: Puedes poner el precio (ej: `1500`) o texto como `"Contactar"`.
- **image**: La ruta a tu imagen. Si la guardaste en el paso 1, usa: `assets/products/tu-archivo.jpg`.
- **icon**: Un icono o emoji que se mostrará si la imagen falla (opcional).

## Ejemplo Completo
Si agregas un nuevo Supresor, tu archivo al final se vería así:

```json
    ...
    {
        "id": 26,
        "name": "Producto Anterior",
        ...
    },  <-- ¡No olvides esta coma si agregas otro abajo!
    {
        "id": 27,
        "name": "Supresor Nuevo Modelo 2026",
        "category": "supresores",
        "price": "Contactar",
        "image": "assets/products/supresor-2026.jpg",
        "icon": "🛡️"
    }
]
```

¡Guarda el archivo `productos.json` y refresca tu navegador para ver los cambios!
