# Web de Miguel Ángel · EMERGO

Web de Miguel Ángel, entrenador personal amputado, y de su programa EMERGO.
**Todos los archivos están sueltos, sin carpetas**, para que se suban bien desde cualquier navegador (también Safari).

---

## ¿Ya la subiste y se ve sin colores ni diseño?

Pasa cuando GitHub recibe `index.html` pero no los archivos de estilo. Safari, al arrastrar, a veces no sube las carpetas.
Esta versión no tiene carpetas, así que se arregla así:

1. Entra en tu repositorio de GitHub.
2. Pulsa **Add file** → **Upload files**.
3. Abre esta carpeta en tu ordenador, pulsa `Cmd + A` (o `Ctrl + A`) para seleccionar **todos los archivos** y arrástralos.
4. Pulsa **Commit changes**. Los archivos con el mismo nombre se cambian solos.
5. Espera 1 minuto en Vercel y recarga la web con `Cmd + Shift + R`.

Comprueba en GitHub que en la lista principal ves `estilos.css` y `app.js`, junto a `index.html`.

---

> La web **no enseña precios** (decisión de Miguel): se cuentan en la llamada gratis o por WhatsApp.

## 0. Qué hay en la carpeta

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La página principal (todos los textos) |
| `estilos.css` | Colores, letras y animaciones (las letras van dentro de este archivo) |
| `app.js` | Textos que cambian al pulsar botones, WhatsApp y Calendly |
| `aviso-legal.html` y `privacidad.html` | Páginas legales (plantillas para rellenar) |
| `404.html` | La página que sale si alguien escribe mal una dirección |
| `logo-emergo.svg` | El logo de arriba |
| `compartir.jpg` | La imagen que sale al mandar el enlace por WhatsApp |
| `favicon.svg` y `apple-touch-icon.png` | Iconos de la pestaña y del móvil |
| `robots.txt` y `sitemap.xml` | Para que Google encuentre la web |
| `vercel.json` | Ajustes para Vercel (no hace falta tocarlo) |

**Fotos:** cuando las tengas, súbelas con estos nombres exactos, en minúsculas y junto a los demás archivos:
`portada.jpg` (la grande de arriba, mínimo 1600 px de ancho) y `miguel.jpg` (la de «Hola, soy Miguel»).
Hazlas más ligeras antes en [squoosh.app](https://squoosh.app) (menos de 400 KB cada una).
Luego borra en `index.html` los dos textos que empiezan por `[Foto`.

Para verla en tu ordenador: doble clic en `index.html`.

---

## 1. Crear la cuenta de GitHub (5 minutos)

GitHub es una carpeta en internet que guarda la web y cada cambio que se le hace.

1. Ve a [github.com](https://github.com) y pulsa **Sign up**.
2. Pon un correo, una contraseña y un nombre de usuario (por ejemplo `miguelangel-emergo`).
3. Confirma el correo con el código que te llega.

Consejo: créala con el correo de Miguel. Así la web es suya desde el principio.

## 2. Subir la web a GitHub (sin terminal)

1. Arriba a la derecha pulsa **+** → **New repository**.
2. En **Repository name** escribe `miguel-web`.
3. Elige **Private** (nadie verá el código, la web se verá igual) y pulsa **Create repository**.
4. En la página nueva, pulsa el enlace **uploading an existing file**.
5. Descomprime el zip. Abre la carpeta `miguel-web`, pulsa `Cmd + A` (o `Ctrl + A`)
   para seleccionar **todos los archivos** y arrástralos a GitHub.
6. Espera a que suban todos y pulsa **Commit changes**.

Comprueba que en GitHub ves `index.html`, `estilos.css` y `app.js` en la lista principal.

**Con terminal (si sabes usarla):**

```bash
cd miguel-web
git init
git add .
git commit -m "Web de Miguel Ángel · EMERGO"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/miguel-web.git
git push -u origin main
```

## 3. Publicar la web en Vercel (3 minutos)

Vercel pone la web en internet.

> **Ojo con el plan gratis.** El plan gratuito de Vercel (**Hobby**) es solo para uso personal y no comercial.
> La web de Miguel vende un servicio, así que cuenta como uso comercial: para tenerla publicada de verdad
> necesita el plan **Pro** (de pago, mensual; mira el precio actual en vercel.com/pricing).
> Puedes usar Hobby para montarla y enseñársela a Miguel, y pasar a Pro antes de anunciarla.

1. Ve a [vercel.com](https://vercel.com), pulsa **Sign Up** y elige **Continue with GitHub**.
2. Elige el plan (mira el aviso de arriba).
3. Pulsa **Add New…** → **Project**.
4. Busca `miguel-web` y pulsa **Import**.
   Si no sale, pulsa la opción para dar permiso a Vercel sobre tus repositorios y elige `miguel-web`.
5. En **Framework Preset** elige **Other**. No toques nada más.
6. Pulsa **Deploy** y espera unos segundos a que termine.
7. Pulsa en la imagen de la web o en **Visit**: tienes un enlace tipo `miguel-web.vercel.app`.

Desde ahora, **cada cambio que guardes en GitHub se publica solo** en un minuto.

## 4. Ponerle un dominio propio (opcional, unos 10–15 € al año)

1. Compra el dominio en una web de dominios (por ejemplo, directamente en Vercel en **Domains**,
   o en otra como Namecheap, DonDominio o IONOS).
2. En Vercel: tu proyecto → **Settings** → **Domains** → escribe el dominio → **Add**.
3. Si lo compraste fuera de Vercel, Vercel te enseña unos datos (registros DNS).
   Cópialos tal cual en la web donde lo compraste. Puede tardar unas horas.
4. Cambia `TU-DOMINIO` por tu dominio real en estos archivos:
   `index.html` (3 veces), `robots.txt` y `sitemap.xml`.

Antes de comprar el dominio, comprobad que el nombre EMERGO está libre (OEPM, EUIPO e Instagram).

## 5. Rellenar lo que falta (antes de enseñarla)

- [ ] Fotos `portada.jpg` y `miguel.jpg`, y borrar los textos `[Foto …]` de `index.html`
- [ ] WhatsApp y enlaces de Calendly: arriba del todo de `app.js` (mira «Conectar Calendly y WhatsApp»)
- [ ] Horario del chat y gimnasio o zona de Barcelona (en `index.html`)
- [ ] Duración y horarios de la sesión en persona, si se quieren poner (en `app.js`)
- [ ] Enlace a la ficha de Google: cambia el `#` de «Ver todas en Google» (en `index.html`)
- [ ] Datos del titular en `aviso-legal.html` y `privacidad.html`, y que los revise un gestor o abogado
- [ ] Testimonios reales de los Capos (cuando terminen las 12 semanas)
- [ ] Poner el enlace de la web en la bio de Instagram

## Conectar Calendly y WhatsApp

Todo se cambia en **un solo sitio**: arriba del todo de `app.js`, en el bloque `CONTACTO`.

```js
const CONTACTO = {
  whatsapp: '34XXXXXXXXX',
  calendlyLlamada: 'https://calendly.com/TU-USUARIO/llamada-15-min',
  calendlyPresencial: 'https://calendly.com/TU-USUARIO/sesion-barcelona'
};
```

**WhatsApp**
- Cambia `34XXXXXXXXX` por `34` + el móvil de Miguel, todo junto (ejemplo: `34612345678`).
- Lo usan el botón redondo naranja que flota abajo a la derecha, «Escríbeme por WhatsApp», «Quiero seguir» y el de contacto.
  Cada botón abre WhatsApp con un mensaje ya escrito.
- Consejo: usad **WhatsApp Business** (gratis) para tener mensaje de bienvenida y horario de respuesta automático.

**Calendly** (para que la gente reserve sola la llamada o la sesión)
1. Crea una cuenta en [calendly.com](https://calendly.com) con el correo de Miguel y conecta su calendario (Google o iCloud).
2. Crea un tipo de evento: **Llamada EMERGO · 15 min**, por videollamada (Google Meet o Zoom) o por teléfono.
   - Añade una pregunta: «¿En qué situación estás ahora?» y otra con su WhatsApp.
   - En disponibilidad, pon solo las horas en que Miguel puede atender.
3. Si quieres, crea otro: **Sesión en Barcelona**, con la dirección del gimnasio y la duración.
   Si el plan gratis de Calendly no te deja crear dos, usa el mismo enlace en los dos huecos.
4. En cada evento pulsa **Copy link** y pégalo en `calendlyLlamada` y `calendlyPresencial`.
5. Guarda con **Commit changes**. En 1 minuto está en la web.

Qué pasa en la web: al pulsar «Reservar llamada», el calendario de Calendly se abre **encima de la página**,
sin salir de la web. Si por lo que sea no carga, se abre Calendly en otra pestaña.
Calendly solo se carga al pulsar el botón, así la web sigue rápida.

Botones que abren Calendly: «Reservar llamada para mi plaza» (plan online), «Reservar una sesión» (plan en persona),
«Reservar mi llamada gratis» y «Reservar llamada de 15 min».

---

## 6. Cómo cambiar cosas sin saber programar

En GitHub: abre el archivo → pulsa el **lápiz** → cambia el texto → **Commit changes**.
Para cambiar una foto: **Add file** → **Upload files** → sube la foto con el mismo nombre.

| Quiero cambiar… | Archivo | Qué buscar |
| --- | --- | --- |
| Un título o un texto | `index.html` | La frase tal cual |
| Lo que incluye un plan o sus frases | `app.js` | Arriba del todo, entre comillas |
| El WhatsApp o Calendly | `app.js` | `CONTACTO`, arriba del todo |
| Un color | `estilos.css` | `:root`, arriba del todo |
| La imagen al compartir | `compartir.jpg` | Sube otra con el mismo nombre (1200 × 630 px) |

Truco: con el archivo abierto en GitHub, pulsa `Ctrl + F` (o `Cmd + F` en Mac) para buscar la frase.

## 7. Si algo falla

| Pasa esto… | Solución |
| --- | --- |
| La web sale sin colores ni diseño | Faltan `estilos.css` o `app.js` en GitHub. Súbelos (mira el primer apartado) |
| Vercel dice «404» en la web | `index.html` está dentro de otra carpeta. En Vercel, entra en **Settings** del proyecto, busca **Root Directory**, escribe `miguel-web`, guarda y vuelve a publicar |
| No se ven las fotos | Revisa que se llamen exactamente `portada.jpg` y `miguel.jpg`, en minúsculas |
| Cambié algo y no se ve | Espera 1 minuto y recarga con `Ctrl + Shift + R` (o `Cmd + Shift + R`) |
| WhatsApp no abre el chat | En `app.js`, el número debe ir así: `34612345678`, sin `+`, sin espacios |
| Calendly sale en blanco o da error | Revisa que el enlace de `app.js` sea el de **Copy link** del evento y empiece por `https://calendly.com/` |

## 8. Qué tiene la web

- Pensada primero para el móvil.
- Animaciones: portada que entra, flecha que sale del agua, cinta en movimiento,
  secciones que aparecen al bajar y botones que reaccionan.
  Quien tiene activado «reducir movimiento» en su móvil la ve quieta.
- Selector de planes: el precio y lo que incluye cambian según lo que elige la persona.
- Letras alojadas en la propia web y sin cookies: no hace falta banner de cookies.
- Lista para Google y para compartir por WhatsApp (título, descripción e imagen).
