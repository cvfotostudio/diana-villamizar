# Catalina Villamizar — Portafolio fotográfico

Sitio académico de cuatro páginas para presentar un estudio fotográfico personal. Está creado con **HTML, CSS y JavaScript**, sin frameworks ni pasos de compilación.

## Estructura

```text
index.html             Inicio
acerca.html            Biografía y enfoque
portafolio.html        Galería por categorías
contacto.html          Información y formulario
css/styles.css         Diseño adaptable
js/main.js             Menú móvil y formulario
images/                Fotografías generadas para este proyecto
```

## Ejecutar localmente

Abre `index.html` en un navegador. Para simular un servidor web, también puedes ejecutar `python -m http.server 8000` desde esta carpeta y abrir `http://localhost:8000`.

## Funcionamiento del contacto

El formulario valida los campos y prepara un correo mediante `mailto:`. **No envía datos por sí solo**: la persona debe enviarlo desde su aplicación de correo. El correo `katalinavp05@gmail.com`, el teléfono `+57 301 698 4786` , el botón de WhatsApp y el perfil de Instagram corresponden a Catalina. El enlace de Pinterest sigue siendo de demostración.

## Publicación

El código está en [GitHub](https://github.com/cvfotostudio/diana-villamizar) y el sitio está publicado en [Cloudflare Pages](https://diana-villamizar.pages.dev) con el dominio principal [cvfotostudio.com](https://cvfotostudio.com). La publicación actual se hizo mediante carga directa a Pages. **Los cambios en GitHub todavía no se despliegan automáticamente:** la conexión nativa de Pages con GitHub devolvió el error `8000011` de instalación de Git. Cloudflare no permite convertir un proyecto de carga directa en uno conectado a Git. Para activar despliegues automáticos, hay que reparar la instalación de la aplicación Cloudflare Pages en GitHub, crear un proyecto nuevo desde este repositorio y trasladar los dominios personalizados a ese proyecto. El sitio no requiere compilación: rama `main`, sin framework, comando de compilación vacío y directorio de salida `/`.

La zona de `cvfotostudio.com` usa los nameservers `joyce.ns.cloudflare.com` y `shane.ns.cloudflare.com`. Ambos dominios, `cvfotostudio.com` y `www.cvfotostudio.com`, están asociados al proyecto. Los registros CNAME proxied apuntan a `diana-villamizar.pages.dev`; una regla 301 redirige `www` al dominio raíz y conserva ruta y parámetros.

## Imágenes

Las fotografías originales de las otras secciones fueron generadas para este proyecto mediante ImageGen. Las seis fotografías de la celebración de quince años fueron proporcionadas por Catalina Villamizar y aparecen en la categoría Eventos.



