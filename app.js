// =========================================================
// Web de Miguel Ángel · EMERGO
// Aquí están los textos y precios que cambian al pulsar los botones.
// Para cambiar un precio o una frase, edita solo lo que va entre comillas.
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
    precio: '300 €',
    nota: 'Plaza de fundador (10 plazas). Después, 450 €',
    incluye: [
      'Plan adaptado a tu cuerpo, con vídeo de cada ejercicio',
      'Revisión cada domingo y mi respuesta cada lunes',
      '3 videollamadas conmigo',
      'Corrección de técnica por vídeo',
      'Chat de lunes a viernes y comunidad Capo'
    ],
    boton: 'Quiero mi plaza'
  },
  presencial: {
    nombre: 'Sesión en persona · Barcelona',
    extra: ' En persona vemos juntos tu técnica y tu forma de moverte.',
    precio: '[50–70 €]',
    nota: 'Por sesión de [duración]',
    incluye: [
      'Entreno conmigo en [gimnasio o zona]',
      'Revisión de técnica y de cómo caminas',
      'Consejos para entrenar solo en casa o en el gimnasio'
    ],
    boton: 'Reservar una sesión'
  }
};

const SEGUIR = {
  '6': { precio: '550 €', nota: '6 meses de seguimiento · después, 750 €' },
  '12': { precio: '1.000 €', nota: '1 año de seguimiento · después, 1.400 €' }
};

// ---------------------------------------------------------
// A partir de aquí no hace falta tocar nada.
// ---------------------------------------------------------

const estado = { nivel: 'protesis', modo: 'online', seguir: '6' };

const ICONO_CHECK =
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C23E12" stroke-width="2.5" ' +
  'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

function pintarPlan(animar) {
  const plan = PLANES[estado.modo];
  document.getElementById('plan-nombre').textContent = plan.nombre;
  document.getElementById('plan-frase').textContent = FRASES[estado.nivel] + plan.extra;
  document.getElementById('plan-precio').textContent = plan.precio;
  document.getElementById('plan-nota').textContent = plan.nota;
  document.getElementById('plan-boton').textContent = plan.boton;

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
    void tarjeta.offsetWidth; // reinicia la animación
    tarjeta.classList.add('cambia');
  }
}

function pintarSeguir() {
  const s = SEGUIR[estado.seguir];
  document.getElementById('seguir-precio').textContent = s.precio;
  document.getElementById('seguir-nota').textContent = s.nota;
}

// Botones de elegir (nivel, modo y seguir)
document.querySelectorAll('[data-grupo]').forEach((grupo) => {
  const clave = grupo.dataset.grupo;
  grupo.querySelectorAll('button[data-valor]').forEach((boton) => {
    boton.addEventListener('click', () => {
      estado[clave] = boton.dataset.valor;
      grupo.querySelectorAll('button[data-valor]').forEach((b) => {
        b.setAttribute('aria-pressed', b === boton ? 'true' : 'false');
      });
      if (clave === 'seguir') pintarSeguir();
      else pintarPlan(true);
    });
  });
});

pintarPlan(false);
pintarSeguir();

// Hacer aparecer las secciones al bajar
const elementos = document.querySelectorAll('.revela');
if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  elementos.forEach((el) => observador.observe(el));
} else {
  elementos.forEach((el) => el.classList.add('visible'));
}
