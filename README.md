# Diana Villamizar — Portafolio fotográfico

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

El formulario valida los campos y prepara un correo mediante `mailto:`. **No envía datos por sí solo**: la persona debe enviarlo desde su aplicación de correo. El email, el teléfono y los enlaces sociales son datos de demostración; reemplázalos por los reales antes de usar el sitio para recibir clientes. El enlace de WhatsApp abre WhatsApp con un texto preparado, sin un número configurado.

## Publicación

El sitio está preparado para Cloudflare Pages con integración GitHub. Selecciona este repositorio, rama `main`, sin framework, deja vacío el comando de compilación y utiliza `/` como directorio de salida. Cada cambio subido a `main` se publicará automáticamente.

La zona de `cvfotostudio.com` ya fue creada en Cloudflare. En Namecheap, cambia **Domain → Manage → Nameservers** a **Custom DNS** y configura exactamente `joyce.ns.cloudflare.com` y `shane.ns.cloudflare.com`. Después de la activación de la zona, añade `cvfotostudio.com` y `www.cvfotostudio.com` en **Custom domains** del proyecto de Pages. Es preferible usar el dominio raíz como URL principal y redirigir `www` hacia él. No añadas registros A con direcciones IP inventadas: Pages creará los registros necesarios cuando la zona esté activa.

## Imágenes

Las siete fotografías de `images/` fueron generadas para este proyecto mediante ImageGen. No dependen de bancos de imágenes externos.

