// =========================================================
// Web de Miguel Ángel · EMERGO
// Los datos de contacto están en config.js.
// Aquí están los textos que cambian al pulsar botones en la página «Planes».
// =========================================================

const FRASES = {
  reciente: 'Empezamos muy suave, con la fase Respirar más larga si hace falta. Antes, tu médico tiene que darte el visto bueno.',
  protesis: 'Te enseño a entrenar todo el cuerpo con la prótesis, paso a paso y sin miedo al gimnasio.',
  sin: 'Si yo pude empezar de cero con una pierna, tú también. Adaptamos todo a tu punto de partida.'
};

const PLANES = {
  online: {
    nombre: 'EMERGO · 12 semanas online',
    extra: '',
    precio: '10 plazas',
    nota: 'De fundador. El precio te lo cuento en la llamada gratis.',
    incluye: [
      'Plan adaptado a tu cuerpo, con vídeo de cada ejercicio',
      'Revisión cada domingo y mi respuesta cada lunes',
      '3 videollamadas conmigo',
      'Corrección de técnica por vídeo',
      'Chat de lunes a viernes y comunidad Capo'
    ],
    boton: 'Reservar llamada para mi plaza',
    calendly: 'llamada'
  },
  presencial: {
    nombre: 'Sesión en persona · Barcelona',
    extra: ' En persona vemos juntos tu técnica y tu forma de moverte.',
    precio: 'Tú y yo',
    nota: 'Sesión en persona. Precio y horarios, en la llamada gratis.',
    incluye: [
      'Entreno conmigo en [gimnasio o zona]',
      'Revisión de técnica y de cómo caminas',
      'Consejos para entrenar solo en casa o en el gimnasio'
    ],
    boton: 'Reservar una sesión',
    calendly: 'presencial'
  }
};

const SEGUIR = {
  '6': { precio: '6 meses', nota: 'Seguimiento semanal y nuevos retos. Pregúntame el precio por WhatsApp.' },
  '12': { precio: '1 año', nota: 'Un año entero subiendo conmigo. Pregúntame el precio por WhatsApp.' }
};

// ---------------------------------------------------------
// A partir de aquí no hace falta tocar nada.
// ---------------------------------------------------------
const C = window.CONTACTO || {};

// ---------- Menú del móvil ----------
const menu = document.querySelector('.menu');
const botonMenu = document.querySelector('.menu__boton');
if (menu && botonMenu) {
  botonMenu.addEventListener('click', () => {
    const abierto = menu.classList.toggle('abierto');
    botonMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });
}

// ---------- WhatsApp y Calendly ----------
function enlaceWhatsapp(mensaje) {
  return 'https://wa.me/' + (C.whatsapp || '') + '?text=' + encodeURIComponent(mensaje || 'Hola Miguel, CAPO');
}
function enlaceCalendly(tipo) {
  return tipo === 'presencial' ? C.calendlyPresencial : C.calendlyLlamada;
}
let calendlyCargando = null;
function cargarCalendly() {
  if (window.Calendly) return Promise.resolve();
  if (calendlyCargando) return calendlyCargando;
  calendlyCargando = new Promise((ok, mal) => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(css);
    const js = document.createElement('script');
    js.src = 'https://assets.calendly.com/assets/external/widget.js';
    js.onload = ok;
    js.onerror = mal;
    document.head.appendChild(js);
  });
  return calendlyCargando;
}
document.querySelectorAll('[data-whatsapp]').forEach((a) => { a.href = enlaceWhatsapp(a.dataset.whatsapp); });
document.querySelectorAll('[data-calendly]').forEach((a) => { a.href = enlaceCalendly(a.dataset.calendly); });
document.querySelectorAll('[data-google]').forEach((a) => {
  if (C.google) a.href = C.google; else a.remove();
});
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-calendly]');
  if (!a) return;
  e.preventDefault();
  const url = enlaceCalendly(a.dataset.calendly);
  cargarCalendly()
    .then(() => window.Calendly.initPopupWidget({ url }))
    .catch(() => window.open(url, '_blank', 'noopener'));
});

// ---------- Selector de planes (solo en la página Planes) ----------
const estado = { nivel: 'protesis', modo: 'online', seguir: '6' };
const ICONO_CHECK =
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C23E12" stroke-width="2.5" ' +
  'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

function pintarPlan(animar) {
  const nombre = document.getElementById('plan-nombre');
  if (!nombre) return;
  const plan = PLANES[estado.modo];
  nombre.textContent = plan.nombre;
  document.getElementById('plan-frase').textContent = FRASES[estado.nivel] + plan.extra;
  document.getElementById('plan-precio').textContent = plan.precio;
  document.getElementById('plan-nota').textContent = plan.nota;
  const botonPlan = document.getElementById('plan-boton');
  botonPlan.textContent = plan.boton;
  botonPlan.dataset.calendly = plan.calendly;
  botonPlan.href = enlaceCalendly(plan.calendly);
  const lista = document.getElementById('plan-incluye');
  lista.innerHTML = '';
  plan.incluye.forEach((texto) => {
    const li = document.createElement('li');
    li.innerHTML = ICONO_CHECK;
    li.appendChild(document.createTextNode(texto));
    lista.appendChild(li);
  });
  if (animar) {
    const tarjeta = document.querySelector('.plan');
    tarjeta.classList.remove('cambia');
    void tarjeta.offsetWidth;
    tarjeta.classList.add('cambia');
  }
}
function pintarSeguir() {
  const p = document.getElementById('seguir-precio');
  if (!p) return;
  const s = SEGUIR[estado.seguir];
  p.textContent = s.precio;
  document.getElementById('seguir-nota').textContent = s.nota;
}
document.querySelectorAll('[data-grupo]').forEach((grupo) => {
  const clave = grupo.dataset.grupo;
  grupo.querySelectorAll('button[data-valor]').forEach((boton) => {
    boton.addEventListener('click', () => {
      estado[clave] = boton.dataset.valor;
      grupo.querySelectorAll('button[data-valor]').forEach((b) => {
        b.setAttribute('aria-pressed', b === boton ? 'true' : 'false');
      });
      if (clave === 'seguir') pintarSeguir(); else pintarPlan(true);
    });
  });
});
pintarPlan(false);
pintarSeguir();

// ---------- Aparecer al bajar ----------
const elementos = document.querySelectorAll('.revela');
if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  elementos.forEach((el) => observador.observe(el));
} else {
  elementos.forEach((el) => el.classList.add('visible'));
}
