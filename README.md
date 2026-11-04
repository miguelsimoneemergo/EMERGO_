# Web de Miguel Ángel · EMERGO

Web de una sola página para el programa EMERGO de Miguel Ángel, entrenador personal amputado.
Hecha con HTML, CSS y un poco de JavaScript: sin programas raros ni nada que instalar.

## Qué hay en cada carpeta

```
miguel-web/
├── index.html      → la página (todos los textos)
├── css/estilos.css → los colores, las letras y las animaciones
├── js/app.js       → los precios y frases que cambian al pulsar botones
├── img/            → aquí van las fotos (lee img/LEEME.txt)
├── favicon.svg     → el iconito de la pestaña del navegador
└── vercel.json     → ajustes para Vercel (no hace falta tocarlo)
```

## Cómo verla en tu ordenador

Haz doble clic en `index.html`. Se abre en el navegador.
(Las fotos y algún detalle solo se ven bien del todo cuando está subida a Vercel.)

---

## Paso 1 · Subirla a GitHub (sin usar la terminal)

GitHub es como una carpeta en internet que guarda tu web y cada cambio que haces.

1. Entra en [github.com](https://github.com) y crea una cuenta (o inicia sesión).
2. Arriba a la derecha pulsa **+** → **New repository**.
3. Ponle de nombre `miguel-web`. Puede ser **Public** o **Private**, las dos sirven.
4. Pulsa **Create repository**.
5. En la página que aparece, pulsa el enlace **uploading an existing file**.
6. Abre la carpeta `miguel-web` en tu ordenador, selecciona **todo lo que hay dentro**
   (no la carpeta, sino lo de dentro) y arrástralo a la página de GitHub.
7. Abajo, pulsa **Commit changes**. Listo: tu web ya está guardada en GitHub.

### Si prefieres la terminal

```bash
cd miguel-web
git init
git add .
git commit -m "Web de Miguel Ángel · EMERGO"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/miguel-web.git
git push -u origin main
```

---

## Paso 2 · Publicarla en Vercel

Vercel es quien pone la web en internet para que cualquiera la vea con un enlace.

1. Entra en [vercel.com](https://vercel.com) y pulsa **Sign Up** → **Continue with GitHub**.
2. Pulsa **Add New…** → **Project**.
3. Busca `miguel-web` en la lista y pulsa **Import**.
   Si no aparece, pulsa la opción para dar permiso a Vercel a ver tus repositorios de GitHub.
4. En **Framework Preset** elige **Other**. No cambies nada más.
5. Pulsa **Deploy** y espera unos segundos.
6. Te da un enlace del tipo `miguel-web.vercel.app`. ¡Esa es la web!

**Lo mejor:** a partir de ahora, cada vez que cambies algo en GitHub, Vercel actualiza la web solo.

## Paso 3 (opcional) · Ponerle un dominio propio

Si Miguel compra un dominio (por ejemplo `emergo.es` o `miguelangel.fit`):

1. En Vercel, entra en el proyecto → **Settings** → **Domains**.
2. Escribe el dominio y pulsa **Add**.
3. Vercel te dice qué datos copiar en la web donde compraste el dominio. Cópialos tal cual.
4. En unas horas el dominio ya enseña la web.

Antes de comprarlo, comprobad que el nombre EMERGO está libre (OEPM, EUIPO e Instagram).

---

## Cómo cambiar cosas (sin saber programar)

En GitHub, abre el archivo → pulsa el **lápiz** (Edit) → cambia el texto → **Commit changes**.
En un minuto se ve en la web.

| Quiero cambiar… | Archivo | Qué buscar |
| --- | --- | --- |
| Un título o un texto | `index.html` | Busca la frase y cámbiala |
| Un precio o lo que incluye un plan | `js/app.js` | Lo de arriba del todo, entre comillas |
| El número de WhatsApp | `index.html` | `34XXXXXXXXX` |
| El enlace de Google | `index.html` | `Ver todas en Google` (cambia el `#`) |
| Un color | `css/estilos.css` | Arriba del todo, en `:root` |
| Las fotos | carpeta `img/` | Lee `img/LEEME.txt` |

## Lo que falta rellenar antes de enseñarla

Todo lo que está entre [corchetes]:

- [ ] Fotos: `img/portada.jpg`, `img/miguel.jpg`, `img/compartir.jpg` (y borrar los textos `[Foto …]`)
- [ ] Número de WhatsApp
- [ ] Horario del chat
- [ ] Gimnasio o zona de Barcelona
- [ ] Precio y duración de la sesión en persona (en `js/app.js`)
- [ ] Formas de pago
- [ ] Enlace a la ficha de Google
- [ ] Testimonios reales de los Capos fundadores (cuando terminen las 12 semanas)
- [ ] Revisar el aviso legal con un gestor o abogado

## Animaciones

Portada que entra animada, flecha del logo que sale del agua, cinta naranja que se mueve,
secciones que aparecen al bajar y botones que reaccionan al tocarlos.
Si alguien tiene activado "reducir movimiento" en su móvil, la web se queda quieta.
